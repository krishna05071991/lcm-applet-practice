// =================
// App Setup
// =================
const T = window.APP_TEXTS;
if (!T) {
  console.error("Error: Text data not found. Ensure texts.js is loaded.");
}

// =================
// Question Configuration
// =================
const QUESTIONS = [
  {
    id: "Q1",
    numbers: { num1: 42, num2: 60 },
    correctLcm: 420,
    lcmOptions: [19, 420, 210],
    globalStepStart: 0,
    globalStepEnd: 14,
    globalFinalScreenStep: 15
  },
  {
    id: "Q2", 
    numbers: { num1: 90, num2: 100 },
    correctLcm: 900,
    lcmOptions: [900, 450, 1800],
    globalStepStart: 16,
    globalStepEnd: 30,
    globalFinalScreenStep: 31
  },
  {
    id: "Q3",
    numbers: { num1: 150, num2: 252 },
    correctLcm: 6300,
    lcmOptions: [6300, 3150, 12600],
    globalStepStart: 32,
    globalStepEnd: 46,
    globalFinalScreenStep: 47
  }
];

// Global DOM Elements
let appletContainer,
  mainLayout,
  leftPanel,
  rightPanel,
  contextBox,
  characterImageEl;
let activityArea, prevButton, nextButton;
let handFtue, handFtueImg;

// App State
let currentStep = 0;
let currentQuestionIndex = 0;
let currentQuestion = QUESTIONS[0];
let treeData = {};
let nextNodeId = 0;
let activeNodeId = null;
let currentFactorizationTarget = 0;
let factorizations = {}; // Store results { 12: [2, 2, 3], 15: [3, 5] }
let lcmBoxFactors = []; // Store factors selected for the LCM box

// =================
// Helper Functions
// =================
function getCurrentQuestionFromStep(globalStep) {
  for (let i = 0; i < QUESTIONS.length; i++) {
    const question = QUESTIONS[i];
    if (globalStep >= question.globalStepStart && globalStep <= question.globalFinalScreenStep) {
      return { question, index: i };
    }
  }
  return { question: QUESTIONS[0], index: 0 };
}

function getRelativeStep(globalStep, question) {
  return globalStep - question.globalStepStart;
}

function resetQuestionState() {
  treeData = {};
  nextNodeId = 0;
  activeNodeId = null;
  currentFactorizationTarget = 0;
  factorizations = {};
  lcmBoxFactors = [];
}

function getInstructionKey(relativeStep, suffix = "", questionId = null) {
  const qId = questionId || currentQuestion.id;
  if (suffix) {
    return `step_${qId}_${relativeStep}_${suffix}`;
  }
  return `step_${qId}_${relativeStep}`;
}

// =================
// Initialization
// =================
function initApp() {
  // Wait for texts to be ready before initializing
  if (!window.APP_TEXTS || !window.APP_TEXTS.instructions) {
    window.addEventListener('textsReady', initApp);
    return;
  }
  
  appletContainer = document.querySelector(".applet-container");
  mainLayout = document.querySelector(".main-layout");
  leftPanel = document.querySelector(".left-panel-anchor");
  rightPanel = document.querySelector(".right-panel-content");
  contextBox = document.getElementById("contextBox");
  characterImageEl = document.getElementById("characterImageElement");
  activityArea = document.getElementById("activity-area");
  prevButton = document.getElementById("prevButton");
  nextButton = document.getElementById("nextButton");
  handFtue = document.getElementById("hand-ftue");
  handFtueImg = document.getElementById("hand-ftue-img");

  // Initialize current question
  currentQuestionIndex = 0;
  currentQuestion = QUESTIONS[0];
  
  // Set initial title and text based on current question
  document.getElementById("html_title").textContent = T.html_title(currentQuestion.numbers.num1, currentQuestion.numbers.num2);
  document.getElementById("main_title_text").textContent = T.main_title_text(currentQuestion.numbers.num1, currentQuestion.numbers.num2);
  document.getElementById("subtitle_text").textContent = T.subtitle_text;
  
  prevButton.textContent = T.button_texts.prev;
  nextButton.textContent = T.button_texts.next;
  handFtueImg.src = T.item_images.ftue_cursor;

  nextButton.addEventListener("click", handleNextClick);

  renderStep(0);
}

// =================
// Game Flow Control
// =================
function handleNextClick() {
  audioPlay("click");
  renderStep(currentStep + 1);
}

function renderStep(globalStep) {
  currentStep = globalStep;
  
  // Determine current question from global step
  const { question, index } = getCurrentQuestionFromStep(globalStep);
  
  // Update current question if it changed
  if (index !== currentQuestionIndex) {
    currentQuestionIndex = index;
    currentQuestion = question;
    
    // Update title and text for new question
    document.getElementById("html_title").textContent = T.html_title(currentQuestion.numbers.num1, currentQuestion.numbers.num2);
    document.getElementById("main_title_text").textContent = T.main_title_text(currentQuestion.numbers.num1, currentQuestion.numbers.num2);
    
    // Reset state for new question
    resetQuestionState();
  }
  
  const relativeStep = getRelativeStep(globalStep, currentQuestion);
  
  nextButton.disabled = true;
  hideFtue();
  setJaxPose("normal");
  setContextBoxState("normal");
  appletContainer.classList.remove("initial-state");

  // Clear layout at the start of specific relative steps
  const stepsThatClearLayout = [0, 1, 4, 6, 13];
  if (stepsThatClearLayout.includes(relativeStep)) {
    activityArea.innerHTML = "";
  }
  // Default to row layout for most single-item displays
  activityArea.style.flexDirection = "row";

  switch (relativeStep) {
    case 0:
      cleanUpIntro();
      lcmBoxFactors = [];
      factorizations = {};
      appletContainer.classList.add("initial-state");
      rightPanel.style.display = "none";
      updateInstructions(0);
      const startButtonContainer = document.createElement("div");
      startButtonContainer.id = "start-button-container";
      const startButton = createButton(T.button_texts.start, () =>
        renderStep(globalStep + 1)
      );
      startButtonContainer.appendChild(startButton);
      leftPanel.appendChild(startButtonContainer);
      showFtue(startButton);
      break;

    case 1:
      cleanUpIntro();
      rightPanel.style.display = "flex";
      updateInstructions(1);
      activityArea.innerHTML = `<div class="hammer-intro-container"><img src="${T.item_images.hammer_passive}"></div>`;
      nextButton.disabled = false;
      showFtue(nextButton);
      break;

    case 2: // Factorize first number
      currentFactorizationTarget = currentQuestion.numbers.num1;
      startFactorization(currentFactorizationTarget, getInstructionKey(2, "start"));
      break;

    case 3: // Show graph for first number factorization
      transitionToLcmGraph(currentQuestion.numbers.num1, getInstructionKey(3));
      break;

    case 4: // Factorize second number
      currentFactorizationTarget = currentQuestion.numbers.num2;
      startFactorization(currentFactorizationTarget, getInstructionKey(4, "start"));
      break;

    case 5: // Show graph for second number factorization
      transitionToLcmGraph(currentQuestion.numbers.num2, getInstructionKey(5));
      break;

    case 6: // Merge graphs visually
      mergeGraphsVisually();
      break;

    case 7: // Introduce LCM Box
      introduceLcmBox();
      break;

    case 8: // Find LCM - Prime 2
      renderLcmSelectionStep(2, getInstructionKey(8, "start"), getInstructionKey(8, "correct"), getInstructionKey(8, "incorrect"));
      break;

    case 9: // Find LCM - Prime 3
      renderLcmSelectionStep(3, getInstructionKey(9, "start"), getInstructionKey(9, "correct"), getInstructionKey(9, "incorrect"));
      break;

    case 10: // Find LCM - Prime 5
      renderLcmSelectionStep(5, getInstructionKey(10, "start"), getInstructionKey(10, "correct"), getInstructionKey(10, "incorrect"));
      break;

    case 11: // Find LCM - Prime 7
      renderLcmSelectionStep(7, getInstructionKey(11, "start"), getInstructionKey(11, "correct"), getInstructionKey(11, "incorrect"));
      break;

    case 12: // Final LCM Result
      showFinalLcmResult();
      break;

    case 13: // LCM Question Screen
      showLcmQuestion();
      break;

    case 14: // Show Final Result
      showFinalLcmResult();
      break;

    case 15: // Final Screen
      activityArea.innerHTML = "";
      cleanUpIntro();
      appletContainer.classList.add("initial-state");
      rightPanel.style.display = "none";
      setJaxPose("correct");
      updateInstructions(15);
      
      const buttonContainer = document.createElement("div");
      buttonContainer.id = "start-button-container";
      
      // Check if there are more questions
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        // "Next Question" button
        const nextQuestionButton = createButton(T.button_texts.next_question, () =>
          renderStep(QUESTIONS[currentQuestionIndex + 1].globalStepStart)
        );
        buttonContainer.appendChild(nextQuestionButton);
      } else {
        // "Start Over" button for the last question
        const startOverButton = createButton(T.button_texts.start_over, () =>
          renderStep(0)
        );
        buttonContainer.appendChild(startOverButton);
      }
      
      leftPanel.appendChild(buttonContainer);
      break;
  }
}

function cleanUpIntro() {
  const btnContainer = document.getElementById("start-button-container");
  if (btnContainer) btnContainer.remove();
}

// =========================
// Factorization Functions
// =========================
function startFactorization(number, instructionKey) {
  setupGameLayout();
  updateInstructions(instructionKey, { num: number });
  activeNodeId = createNode(number, { top: "10%", left: "50%" }).id;

  T.gameConfig.hammers.forEach((hammerNum, index) => {
    const topPos = 15 + index * 18;
    const hammerEl = createHammer(hammerNum, "20%", `${topPos}%`);
    hammerEl.addEventListener("click", () => {
      if (activeNodeId !== null) {
        const nodeToStrike = treeData[activeNodeId];
        handleStrike(hammerEl, nodeToStrike.value, nodeToStrike.id);
      }
    });
  });
}

async function handleStrike(hammerEl, numberToStrike, nodeId) {
  const hammerNum = parseInt(hammerEl.dataset.number);
  const node = treeData[nodeId];
  if (!node || hammerEl.classList.contains("disabled")) return;

  document
    .querySelectorAll(".hammer")
    .forEach((h) => h.classList.add("disabled"));
  const targetNodeEl = node.element.querySelector(".tree-node");
  const targetRect = targetNodeEl.getBoundingClientRect();
  const hammerRect = hammerEl.getBoundingClientRect();
  const activityRect = activityArea.getBoundingClientRect();

  const targetX = targetRect.left - activityRect.left - hammerRect.width * 0.8;
  const targetY = targetRect.top - activityRect.top;
  hammerEl.style.left = `calc(${targetX}px + 10vw)`;
  hammerEl.style.top = `calc(${targetY}px - 6vw)`;

  setTimeout(() => {
    hammerEl.classList.add("hammer-swing");
    setTimeout(async () => {
      const isSuccess = numberToStrike % hammerNum === 0;

      if (isSuccess) {
        audioPlay("strike_success");
        setContextBoxState("correct");
        setJaxPose("correct");

        const factorTreeArea = activityArea.querySelector(".factor-tree-area");
        const treeAreaRect = factorTreeArea.getBoundingClientRect();
        const strikeEffect = document.createElement("img");
        strikeEffect.src = T.item_images.strike_gif;
        strikeEffect.className = "strike-effect";
        strikeEffect.style.left = `${
          targetRect.left - treeAreaRect.left + targetRect.width / 2
        }px`;
        strikeEffect.style.top = `${
          targetRect.top - treeAreaRect.top + targetRect.height / 2
        }px`;
        factorTreeArea.appendChild(strikeEffect);
        setTimeout(() => strikeEffect.remove(), 700);

        const factor1 = hammerNum;
        const factor2 = numberToStrike / hammerNum;

        createNode(factor1, { parentId: node.id, side: "left" });
        const child2Node = createNode(factor2, {
          parentId: node.id,
          side: "right",
        });
        node.childrenIds = [nodeId + 1, nodeId + 2];
        document.querySelector(
          ".breakdown-text"
        ).textContent = `${factor1} × ${factor2} = ${numberToStrike}`;

        activeNodeId = !treeData[child2Node.id].isPrime ? child2Node.id : null;
        const allPrime = checkAllNodesPrime();

        // Determine instruction key based on current target and success state
        const stepNum = currentFactorizationTarget === currentQuestion.numbers.num1 ? 2 : 4;
        const successTextKey = allPrime
          ? getInstructionKey(stepNum, "done")
          : getInstructionKey(stepNum, "success");
        
        updateInstructions(successTextKey, {
          hammerNum,
          oldNum: numberToStrike,
          newNum: factor2,
        });

        if (allPrime) {
          activeNodeId = null;
          const breakdownText = document.querySelector(".breakdown-text");
          const finalFactors = Object.values(treeData)
            .filter((n) => n.childrenIds.length === 0)
            .map((n) => n.value)
            .sort((a, b) => a - b);
          factorizations[currentFactorizationTarget] = finalFactors;

          const factorsHtml = finalFactors
            .map((f) => `<span class="num-prime" data-value="${f}">${f}</span>`)
            .join(" × ");
          breakdownText.innerHTML = `${T.factorisation_text} <span class="num-root" data-value="${currentFactorizationTarget}">${currentFactorizationTarget}</span> = ${factorsHtml}`;

          const elementsToHighlight = [];
          const rootNodeEl = Object.values(treeData)
            .find((n) => n.value === currentFactorizationTarget)
            ?.element.querySelector(".tree-node");
          const rootTextEl = breakdownText.querySelector(".num-root");
          if (rootNodeEl && rootTextEl) {
            elementsToHighlight.push({ text: rootTextEl, node: rootNodeEl });
          }

          const primeTextEls = Array.from(
            breakdownText.querySelectorAll(".num-prime")
          );
          const primeNodeEls = Object.values(treeData)
            .filter((n) => n.childrenIds.length === 0)
            .sort((a, b) => a.value - b.value)
            .map((n) => n.element.querySelector(".tree-node.prime"));

          primeTextEls.forEach((textEl, index) => {
            if (primeNodeEls[index]) {
              elementsToHighlight.push({
                text: textEl,
                node: primeNodeEls[index],
              });
            }
          });

          sequentialHighlight(elementsToHighlight, 800, false);

          nextButton.disabled = false;
          showFtue(nextButton);
        }
      } else {
        // FAIL
        audioPlay("wrong");
        setJaxPose("wrong");
        setContextBoxState("incorrect");
        targetNodeEl.classList.add("incorrect");
        
        const stepNum = currentFactorizationTarget === currentQuestion.numbers.num1 ? 2 : 4;
        updateInstructions(getInstructionKey(stepNum, "fail"), { hammerNum, num: numberToStrike });
        
        setTimeout(() => {
          targetNodeEl.classList.remove("incorrect");
          setJaxPose("normal");
          setContextBoxState("normal");
        }, 2000);
      }

      hammerEl.classList.remove("hammer-swing");
      setTimeout(() => {
        hammerEl.style.left = hammerEl.dataset.initialLeft;
        hammerEl.style.top = hammerEl.dataset.initialTop;
        if (!checkAllNodesPrime()) {
          const delay = isSuccess ? 0 : 1500;
          setTimeout(
            () =>
              document
                .querySelectorAll(".hammer")
                .forEach((h) => h.classList.remove("disabled")),
            delay
          );
        }
      }, 500);
    }, 500);
  }, 500);
}

function checkAllNodesPrime() {
  const leafNodes = Object.values(treeData).filter(
    (node) => node.childrenIds.length === 0
  );
  return leafNodes.length > 0 && leafNodes.every((node) => node.isPrime);
}

// =========================
// LCM Graph Functions
// =========================
async function transitionToLcmGraph(number, instructionKey) {
  updateInstructions(instructionKey);
  // 1. Remove hammer area and breakdown text, keep the factor tree
  const hammerArea = activityArea.querySelector(".hammer-area");
  if (hammerArea) hammerArea.remove();

  // Remove the "Prime factorisation of..." text.
  const breakdownText = activityArea.querySelector(".breakdown-text");
  if (breakdownText) breakdownText.innerHTML = "";

  activityArea.style.flexDirection = "column";

  // 2. Create and append the new graph area below the tree
  const lcmArea = document.createElement("div");
  lcmArea.className = "lcm-area visible";
  // Create graph with nodes having text
  const graphWrapper = createLcmGraphDOM(number, [], 15, true, false, {
    showNodeValues: true,
  });
  lcmArea.appendChild(graphWrapper);
  activityArea.appendChild(lcmArea);

  // 3. Animate nodes from the tree to the new graph
  const animationPromises = [];
  const rootNodeEl = activityArea.querySelector(".tree-node:not(.prime)");
  const targetRootLabel = graphWrapper.querySelector(".lcm-graph-root-label");
  animationPromises.push(animateNode(rootNodeEl, targetRootLabel, true));

  const primeNodesInTree = Array.from(
    activityArea.querySelectorAll(".factor-tree-area .tree-node.prime")
  );
  for (const primeNode of primeNodesInTree) {
    const primeVal = parseInt(primeNode.textContent);
    const stack = graphWrapper.querySelector(
      `.lcm-node-stack[data-prime="${primeVal}"]`
    );
    const targetPlaceholder = document.createElement("div");
    targetPlaceholder.className = "tree-node prime";
    targetPlaceholder.textContent = primeVal; // Add text content
    targetPlaceholder.style.opacity = "0";
    stack.appendChild(targetPlaceholder);
    animationPromises.push(animateNode(primeNode, targetPlaceholder, true));
  }

  await Promise.all(animationPromises);

  // 4. Fade out the factor tree area after animation completes
  const factorTreeArea = activityArea.querySelector(".factor-tree-area");
  if (factorTreeArea) factorTreeArea.classList.add("faded");

  // Set the final state of the graph nodes to be visible
  graphWrapper
    .querySelectorAll(".lcm-node-stack .tree-node")
    .forEach((node) => {
      node.style.opacity = "1";
    });

  nextButton.disabled = false;
  showFtue(nextButton);
}

function drawLcmBoard(currentPrimeToSelect = null) {
  activityArea.innerHTML = "";
  // All multi-graph views are vertical
  activityArea.style.flexDirection = "column";
  activityArea.style.gap = "2vh";

  const lcmArea = activityArea; // Use activityArea as the container
  lcmArea.className = "lcm-area visible";

  const factorsInBox = lcmBoxFactors.map((f) => f.prime);

  // Use consistent rod height (10vh) for number graphs and a larger height (20vh) for the LCM box.
  const graph1 = createLcmGraphDOM(currentQuestion.numbers.num1, factorizations[currentQuestion.numbers.num1], 15, true, false);
  const graph2 = createLcmGraphDOM(currentQuestion.numbers.num2, factorizations[currentQuestion.numbers.num2], 10, true, false);
  const lcmGraph = createLcmGraphDOM("LCM", factorsInBox, 15, true, false, {
    isLcmBox: true,
  });

  lcmGraph.classList.add("highlight-box");
  lcmArea.appendChild(graph1);
  lcmArea.appendChild(graph2);
  lcmArea.appendChild(lcmGraph);

  if (currentPrimeToSelect) {
    lcmArea.querySelectorAll(".lcm-graph-wrapper").forEach((wrapper) => {
      wrapper.querySelectorAll(".lcm-rod-container").forEach((rc) => {
        if (rc.dataset.prime != currentPrimeToSelect) rc.classList.add("faded");
      });
    });
  }
}

async function renderLcmSelectionStep(
  prime,
  startKey,
  correctKey,
  incorrectKey
) {
  drawLcmBoard(prime);
  updateInstructions(startKey);

  const label1 = activityArea.querySelector(
    `.lcm-graph-wrapper[data-number="${currentQuestion.numbers.num1}"] .lcm-graph-root-label`
  );
  const label2 = activityArea.querySelector(
    `.lcm-graph-wrapper[data-number="${currentQuestion.numbers.num2}"] .lcm-graph-root-label`
  );
  [label1, label2].forEach((l) => l.classList.add("clickable"));

  const factors1Count = factorizations[currentQuestion.numbers.num1].filter((f) => f === prime).length;
  const factors2Count = factorizations[currentQuestion.numbers.num2].filter((f) => f === prime).length;

  const clickHandler = async (e) => {
    const clickedLabel = e.currentTarget;
    const clickedNum = parseInt(
      clickedLabel.closest(".lcm-graph-wrapper").dataset.number
    );

    // Correctly handle the case where prime factor counts are equal.
    let isCorrect;
    if (factors1Count > factors2Count) {
      isCorrect = clickedNum === currentQuestion.numbers.num1;
    } else if (factors2Count > factors1Count) {
      isCorrect = clickedNum === currentQuestion.numbers.num2;
    } else {
      // They are equal
      isCorrect = clickedNum === currentQuestion.numbers.num1 || clickedNum === currentQuestion.numbers.num2;
    }

    [label1, label2].forEach((l) => {
      l.removeEventListener("click", clickHandler);
      l.classList.remove("clickable");
    });

    if (isCorrect) {
      audioPlay("correct");
      setContextBoxState("correct");
      setJaxPose("correct");
      updateInstructions(correctKey);

      const sourceGraph = activityArea.querySelector(
        `.lcm-graph-wrapper[data-number="${clickedNum}"]`
      );
      const sourceNodes = Array.from(
        sourceGraph.querySelectorAll(
          `.lcm-node-stack[data-prime="${prime}"] .tree-node`
        )
      );
      const lcmGraph = activityArea.querySelector(
        ".lcm-graph-wrapper.highlight-box"
      );
      const targetStack = lcmGraph.querySelector(
        `.lcm-node-stack[data-prime="${prime}"]`
      );

      const animationPromises = [];
      for (const sNode of sourceNodes) {
        const targetPlaceholder = document.createElement("div");
        targetPlaceholder.className = "tree-node prime";
        targetPlaceholder.textContent = prime;
        targetPlaceholder.style.opacity = '0';
        targetStack.appendChild(targetPlaceholder);
        animationPromises.push(animateNode(sNode, targetPlaceholder, true));
      }

      await Promise.all(animationPromises);

      const count = Math.max(factors1Count, factors2Count);
      for (let i = 0; i < count; i++) {
        lcmBoxFactors.push({ prime: prime, source: clickedNum });
      }
      drawLcmBoard(); // Redraw board in normal state
      nextButton.disabled = false;
      showFtue(nextButton);
    } else {
      audioPlay("wrong");
      setContextBoxState("incorrect");
      setJaxPose("wrong");
      updateInstructions(incorrectKey);
      clickedLabel.classList.add("shake");
      setTimeout(() => {
        clickedLabel.classList.remove("shake");
        setContextBoxState("normal");
        [label1, label2].forEach((l) => {
          l.addEventListener("click", clickHandler);
          l.classList.add("clickable");
        });
      }, 2000);
    }
  };
  [label1, label2].forEach((l) => l.addEventListener("click", clickHandler));
}

function showCombinedGraphs() {
  updateInstructions(getInstructionKey(6));
  activityArea.innerHTML = "";
  // Set layout to vertical for this view
  activityArea.style.flexDirection = "column";
  activityArea.style.gap = "10vh";

  // Pass a new option to place the equation under the graph.
  const graph1 = createLcmGraphDOM(currentQuestion.numbers.num1, factorizations[currentQuestion.numbers.num1], 15, true, true, {
    equationUnderGraph: true,
  });
  const graph2 = createLcmGraphDOM(currentQuestion.numbers.num2, factorizations[currentQuestion.numbers.num2], 10, true, true, {
    equationUnderGraph: true,
  });

  activityArea.appendChild(graph1);
  activityArea.appendChild(graph2);

  nextButton.disabled = false;
  showFtue(nextButton);
}

function mergeGraphsVisually() {
  updateInstructions(getInstructionKey(6));
  activityArea.innerHTML = "";
  activityArea.style.flexDirection = "column";
  activityArea.style.gap = "1vh"; // Reduce gap

  const graph1 = createLcmGraphDOM(currentQuestion.numbers.num1, factorizations[currentQuestion.numbers.num1], 15, false, false); // No axis, no equation
  const graph2 = createLcmGraphDOM(currentQuestion.numbers.num2, factorizations[currentQuestion.numbers.num2], 10, true, false); // With axis, no equation

  // Custom height increase logic for rods in graph 2
  graph2
    .querySelectorAll(".lcm-rod")
    .forEach((rod) => (rod.style.height = "16vh"));

  activityArea.appendChild(graph1);
  activityArea.appendChild(graph2);

  nextButton.disabled = false;
  showFtue(nextButton);
}

function introduceLcmBox() {
  updateInstructions(getInstructionKey(7));
  drawLcmBoard();
  nextButton.disabled = false;
  showFtue(nextButton);
}

function showLcmQuestion() {
  updateInstructions(getInstructionKey(13));
  
  // Clear activity area and set up layout
  activityArea.innerHTML = "";
  activityArea.style.flexDirection = "column";
  activityArea.style.gap = "3vh";
  activityArea.style.alignItems = "center";
  activityArea.style.justifyContent = "center";
  
  // Show only the LCM box at the top
  const lcmContainer = document.createElement("div");
  lcmContainer.className = "lcm-question-container";
  
  const factorsInBox = lcmBoxFactors.map((f) => f.prime);
  const lcmGraph = createLcmGraphDOM("LCM", factorsInBox, 15, true, false, {
    isLcmBox: true,
  });
  lcmGraph.classList.add("highlight-box");
  lcmContainer.appendChild(lcmGraph);
  
  activityArea.appendChild(lcmContainer);
  
  // Hide navigation buttons
  prevButton.style.display = "none";
  nextButton.style.display = "none";
  
  // Create answer options
  const optionsContainer = document.createElement("div");
  optionsContainer.className = "lcm-options-container";
  
  currentQuestion.lcmOptions.forEach((option) => {
    const button = document.createElement("button");
    button.className = "lcm-option-button";
    button.textContent = option;
    
    button.addEventListener("click", () => {
      if (option === currentQuestion.correctLcm) {
        // Correct answer
        audioPlay("correct");
        setJaxPose("correct");
        setContextBoxState("correct");
        updateInstructions(getInstructionKey(13, "correct"));
        
        // Disable all buttons
        optionsContainer.querySelectorAll("button").forEach(btn => {
          btn.disabled = true;
        });
        button.classList.add("correct");
        
        // Show next button after delay
        setTimeout(() => {
          nextButton.style.display = "inline-block";
          nextButton.disabled = false;
          showFtue(nextButton);
        }, 2000);
      } else {
        // Wrong answer
        audioPlay("wrong");
        setJaxPose("wrong");
        setContextBoxState("incorrect");
        updateInstructions(getInstructionKey(13, "incorrect"));
        button.classList.add("incorrect");
        
        setTimeout(() => {
          button.classList.remove("incorrect");
          setJaxPose("normal");
          setContextBoxState("normal");
          updateInstructions(getInstructionKey(13));
        }, 2000);
      }
    });
    
    optionsContainer.appendChild(button);
  });
  
  activityArea.appendChild(optionsContainer);
}

async function showFinalLcmResult() {
  updateInstructions(getInstructionKey(14));
  drawLcmBoard();
  activityArea
    .querySelector(`.lcm-graph-wrapper[data-number="${currentQuestion.numbers.num1}"]`)
    .classList.add("faded");
  activityArea
    .querySelector(`.lcm-graph-wrapper[data-number="${currentQuestion.numbers.num2}"]`)
    .classList.add("faded");

  const lcmGraph = activityArea.querySelector(
    '.lcm-graph-wrapper.highlight-box'
  );
  const contextSection = document.querySelector(".context-section");
  const primeTextEls = Array.from(
    contextSection.querySelectorAll(".num-prime")
  );
  const nodesInOrder = [];
  const consumedNodeIndices = {};

  const primeNodeStacks = {};
  lcmGraph.querySelectorAll(".lcm-node-stack").forEach((stack) => {
    primeNodeStacks[stack.dataset.prime] = Array.from(
      stack.querySelectorAll(".tree-node")
    );
  });

  primeTextEls.forEach((textEl) => {
    const prime = textEl.dataset.value;
    if (!consumedNodeIndices[prime]) {
      consumedNodeIndices[prime] = 0;
    }
    const nodeToHighlight = primeNodeStacks[prime][consumedNodeIndices[prime]];
    if (nodeToHighlight) {
      nodesInOrder.push(nodeToHighlight);
      consumedNodeIndices[prime]++;
    }
  });

  const elementsToHighlight = primeTextEls.map((textEl, index) => ({
    text: textEl,
    node: nodesInOrder[index],
  }));

  sequentialHighlight(elementsToHighlight, 1000, false);

  nextButton.disabled = false;
  showFtue(nextButton);
}

// =========================
// UI & Helper Functions
// =========================
function setupGameLayout() {
  activityArea.innerHTML = "";
  const gameLayout = document.createElement("div");
  gameLayout.className = "game-layout visible";
  gameLayout.innerHTML = `
      <div class="hammer-area"></div>
      <div class="factor-tree-area">
          <div class="tree-nodes-container" style="position:relative; width:100%; height:80%;"></div>
          <div class="breakdown-text"></div>
      </div>`;
  activityArea.appendChild(gameLayout);
  treeData = {};
  nextNodeId = 0;
  activeNodeId = null;
}

function createLcmGraphDOM(
  number,
  factors,
  rodHeightVh,
  showAxis,
  showEquation,
  options = {}
) {
  const { isLcmBox = false, equationUnderGraph = false } = options;

  const wrapper = document.createElement("div");
  wrapper.className = "lcm-graph-wrapper";
  wrapper.dataset.number = String(number).includes("LCM") ? "lcm" : number;

  const rootLabel = document.createElement("div");
  rootLabel.className = "lcm-graph-root-label";
  rootLabel.innerHTML = number;
  if (isLcmBox) {
    rootLabel.classList.add("lcm-label");
    rootLabel.innerHTML = `LCM of <br> ${currentQuestion.numbers.num1} & ${currentQuestion.numbers.num2}`;
  }
  wrapper.appendChild(rootLabel);

  const graphContainer = document.createElement("div");
  graphContainer.className = "lcm-graph-container";
  wrapper.appendChild(graphContainer);

  const graph = document.createElement("div");
  graph.className = "lcm-graph";
  graphContainer.appendChild(graph);

  T.gameConfig.primes.forEach((prime) => {
    const rodContainer = createLcmRodDOM(prime, rodHeightVh);
    const stack = rodContainer.querySelector(".lcm-node-stack");
    factors
      .filter((f) => f === prime)
      .forEach((val) => {
        const node = document.createElement("div");
        node.className = "tree-node prime";
        node.textContent = val;
        stack.appendChild(node);
      });
    graph.appendChild(rodContainer);
  });

  if (showAxis) {
    const axisBar = document.createElement("div");
    axisBar.className = "lcm-axis-bar";
    T.gameConfig.primes.forEach((prime) => {
      const label = document.createElement("div");
      label.className = "lcm-axis-label";
      label.textContent = prime;
      axisBar.appendChild(label);
    });
    graphContainer.appendChild(axisBar);
  }

  // Add logic to place the equation under the graph if the option is passed.
  if (showEquation && factors.length > 0) {
    const equation = document.createElement("div");
    equation.className = "lcm-graph-equation";
    equation.innerHTML = `${number} = ${factors.join(" × ")}`;

    if (equationUnderGraph) {
      // Center the equation below the graph/axis area
      equation.style.width = "100%";
      equation.style.textAlign = "center";
      equation.style.paddingLeft = "0";
      equation.style.marginTop = "2vh";
      graphContainer.appendChild(equation);
    } else {
      wrapper.appendChild(equation);
    }
  }

  return wrapper;
}

function createLcmRodDOM(prime, heightVh) {
  const rodContainer = document.createElement("div");
  rodContainer.className = "lcm-rod-container";
  rodContainer.dataset.prime = prime;

  const rod = document.createElement("div");
  rod.className = "lcm-rod";
  rod.style.height = `${heightVh}vh`;
  rodContainer.appendChild(rod);

  const stack = document.createElement("div");
  stack.className = "lcm-node-stack";
  stack.dataset.prime = prime;
  rod.appendChild(stack);

  return rodContainer;
}

function animateNode(sourceNode, targetNode, hideTargetTemporarily = false) {
  return new Promise((resolve) => {
    const clone = sourceNode.cloneNode(true);
    const sourceRect = sourceNode.getBoundingClientRect();

    if (hideTargetTemporarily) targetNode.style.opacity = "0";
    const targetRect = targetNode.getBoundingClientRect();

    clone.style.position = "fixed";
    clone.style.left = `${sourceRect.left}px`;
    clone.style.top = `${sourceRect.top}px`;
    clone.style.transition = "all 0.8s ease-in-out";
    clone.style.zIndex = "1000";
    clone.style.margin = "0";
    document.body.appendChild(clone);

    setTimeout(() => {
      clone.style.left = `${targetRect.left}px`;
      clone.style.top = `${targetRect.top}px`;
    }, 50);

    // Increase timeout to 900ms to give the 800ms CSS transition time to fully complete
    // before the target node appears and the clone is removed.
    setTimeout(() => {
      if (hideTargetTemporarily) targetNode.style.opacity = "1";
      setTimeout(() => {
        clone.remove();
        resolve();
      }, 500);
    }, 1000);
  });
}

function createHammer(number, left, top) {
  const hammerArea = activityArea.querySelector(".hammer-area");
  const hammer = document.createElement("div");
  hammer.className = "hammer";
  hammer.dataset.number = number;
  hammer.style.left = left;
  hammer.style.top = top;
  hammer.dataset.initialLeft = left;
  hammer.dataset.initialTop = top;
  hammer.innerHTML = `<img src="${T.item_images.hammer_active}">`;
  hammerArea.appendChild(hammer);
  return hammer;
}

function createNode(value, options) {
  const treeArea = activityArea.querySelector(".tree-nodes-container");
  const id = nextNodeId++;
  const nodeWrapper = document.createElement("div");
  nodeWrapper.className = "tree-node-wrapper node-entering";
  const nodeEl = document.createElement("div");
  nodeEl.className = "tree-node";
  nodeEl.textContent = value;
  nodeWrapper.appendChild(nodeEl);

  let parentNode = null;
  if (options.parentId !== undefined && treeData[options.parentId]) {
    parentNode = treeData[options.parentId];
  }

  if (parentNode) {
    const parentWrapper = parentNode.element;
    const childDistance = 12;
    const angle = options.side === "left" ? 120 : 60;
    const rad = angle * (Math.PI / 180);
    nodeWrapper.style.left = `calc(50% + ${childDistance * Math.cos(rad)}vw)`;
    nodeWrapper.style.top = `calc(50% + ${
      childDistance * Math.sin(rad) * 0.7
    }vw)`;
    nodeWrapper.style.transform = "translate(-50%, -50%)";
    parentWrapper.appendChild(nodeWrapper);
    const line = document.createElement("div");
    line.className = "line";
    line.style.height = `${childDistance * 0.8}vw`;
    line.style.transform = `rotate(${angle - 90}deg)`;
    nodeWrapper.prepend(line);
  } else {
    nodeWrapper.style.top = options.top;
    nodeWrapper.style.left = options.left;
    nodeWrapper.style.transform = "translateX(-50%)";
    treeArea.appendChild(nodeWrapper);
  }

  setTimeout(() => nodeWrapper.classList.remove("node-entering"), 50);

  treeData[id] = {
    id,
    value,
    parentId: parentNode ? parentNode.id : null,
    childrenIds: [],
    element: nodeWrapper,
    isPrime: isPrime(value),
  };
  if (treeData[id].isPrime) nodeEl.classList.add("prime");
  return treeData[id];
}

function createButton(text, onClick, className = "btn-primary") {
  const button = document.createElement("button");
  button.className = `btn ${className}`;
  button.innerHTML = text;
  button.addEventListener("click", () => {
    audioPlay("click");
    onClick();
  });
  return button;
}

async function sequentialHighlight(elements, delay = 800, keepHighlights = false) {
  nextButton.disabled = true;
  let highlightedSoFar = [];

  for (const el of elements) {
    if (!keepHighlights) {
      highlightedSoFar.forEach(({ text, node }) => {
        if (text) text.classList.remove("highlight");
        if (node) node.classList.remove("highlight");
      });
      highlightedSoFar = [];
    }

    if (el.text) el.text.classList.add("highlight");
    if (el.node) el.node.classList.add("highlight");
    highlightedSoFar.push(el);
    audioPlay("correct");
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  if (!keepHighlights) {
    await new Promise((resolve) => setTimeout(resolve, delay / 2));
    highlightedSoFar.forEach(({ text, node }) => {
      if (text) text.classList.remove("highlight");
      if (node) node.classList.remove("highlight");
    });
  }
}

function showFtue(element) {
  if (!element) return;
  const rect = element.getBoundingClientRect();
  handFtue.style.left = `${rect.left + rect.width / 2}px`;
  handFtue.style.top = `${rect.top + rect.height / 2}px`;
  handFtue.classList.add("hand-animating");
}

function hideFtue() {
  handFtue.classList.remove("hand-animating");
}

function updateInstructions(key, params = {}) {
  const contextSection = document.querySelector(".context-section");
  let instructionKey;
  
  if (typeof key === "string") {
    instructionKey = key;
  } else {
    // key is a relative step number
    if (key === 15) {
      instructionKey = `final_screen_${currentQuestion.id}`;
    } else {
      instructionKey = getInstructionKey(key);
    }
  }
  
  // Use the new nested structure: T.instructions[questionId][instructionKey]
  let instruction = T.instructions[currentQuestion.id]?.[instructionKey];
  if (instruction) {
    let title = instruction.title;
    let text =
      typeof instruction.text === "function"
        ? instruction.text(params)
        : instruction.text;
    contextSection.innerHTML = `<h2>${title}</h2><div><p>${text}</p></div>`;

    contextSection
      .querySelectorAll(".inline-hammer-wrapper")
      .forEach((wrapper) => {
        const img = wrapper.querySelector("img");
        if (!img) return;

        const hammerNum = img.dataset.number;
        const numberEl = document.createElement("span");
        numberEl.textContent = hammerNum;

        Object.assign(numberEl.style, {
          position: "absolute",
          top: "45%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          fontSize: "1.5vw",
          fontWeight: "bold",
          color: "#d4a668",
          textShadow: "-0.05vw -0.05vw 0.02vw #f8d5ab",
          filter: "drop-shadow(0.05vw 0.05vw 0.02vw #3f2603)",
          pointerEvents: "none",
        });

        wrapper.appendChild(numberEl);
      });
  } else {
    // Fallback for missing instruction
    console.warn(`Instruction not found: ${currentQuestion.id}.${instructionKey}`);
    contextSection.innerHTML = `<h2>Step ${currentStep}</h2><div><p>Continue to the next step.</p></div>`;
  }
}

function setContextBoxState(state = "normal") {
  contextBox.classList.remove("correct", "incorrect");
  if (state === "correct" || state === "incorrect") {
    contextBox.classList.add(state);
  }
}

function setJaxPose(pose) {
  if (T.character_images && T.character_images[pose]) {
    characterImageEl.src = T.character_images[pose];
  }
}

function audioPlay(type) {
  if (T.audio && T.audio[type]) {
    new Audio(T.audio[type])
      .play()
      .catch((e) => console.warn("Audio play failed:", e));
  }
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

document.addEventListener("DOMContentLoaded", initApp);