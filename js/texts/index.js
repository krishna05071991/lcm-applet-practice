// ==================================================================
// === LANGUAGE SELECTOR - ONLY EDIT THE VALUE IN THIS LINE ===
// ==================================================================
const CURRENT_LANGUAGE = "en";
// ==================================================================

// Import question-specific texts
// Note: These will be loaded by the HTML script tags

// Common texts that are not question-specific
const COMMON_TEXTS = {
  en: {
    html_title: (num1, num2) => `LCM with Prime Factorization - ${num1} and ${num2}`,
    main_title_text: (num1, num2) => `Finding the LCM of ${num1} and ${num2}`,
    subtitle_text: "Using prime factorization to find the Least Common Multiple.",
    factorisation_text: "Prime factorisation of",
    
    character_images: {
      normal: "./assets/Nexus.png",
      thinking: "./assets/NexusThink.png",
      wrong: "./assets/NexusSad.png",
      correct: "./assets/NexusHappy.png",
    },
    
    item_images: {
      hammer_passive: "./assets/hammer_passive.png",
      hammer_active: "./assets/hammer_active.png",
      ftue_cursor: "./assets/Tap.png",
      strike_gif: "./assets/strike.gif",
    },
    
    audio: {
      correct: "assets/sfx/correct.mp3",
      wrong: "assets/sfx/wrong.mp3",
      click: "assets/sfx/click.mp3",
      strike_success: "assets/sfx/strike_success.mp3",
      strike_fail: "assets/sfx/strike_fail.mp3",
    },
    
    button_texts: {
      prev: "Previous",
      next: "Next",
      start_over: "Start Over",
      start: "Start",
      next_question: "Next Question",
    },
    
    gameConfig: {
      primes: [2, 3, 5, 7],
      hammers: [2, 3, 5, 7],
    },
  },
  
  id: {
    html_title: (num1, num2) => `KPK dengan Faktorisasi Prima - ${num1} dan ${num2}`,
    main_title_text: (num1, num2) => `Mencari KPK dari ${num1} dan ${num2}`,
    subtitle_text: "Menggunakan faktorisasi prima untuk mencari Kelipatan Persekutuan Terkecil.",
    factorisation_text: "Faktorisasi prima dari",
    
    character_images: {
      normal: "./assets/Nexus.png",
      thinking: "./assets/NexusThink.png",
      wrong: "./assets/NexusSad.png",
      correct: "./assets/NexusHappy.png",
    },
    
    item_images: {
      hammer_passive: "./assets/hammer_passive.png",
      hammer_active: "./assets/hammer_active.png",
      ftue_cursor: "./assets/Tap.png",
      strike_gif: "./assets/strike.gif",
    },
    
    audio: {
      correct: "assets/sfx/correct.mp3",
      wrong: "assets/sfx/wrong.mp3",
      click: "assets/sfx/click.mp3",
      strike_success: "assets/sfx/strike_success.mp3",
      strike_fail: "assets/sfx/strike_fail.mp3",
    },
    
    button_texts: {
      prev: "Sebelumnya",
      next: "Berikutnya",
      start_over: "Mulai Lagi",
      start: "Mulai",
      next_question: "Pertanyaan Berikutnya",
    },
    
    gameConfig: {
      primes: [2, 3, 5, 7],
      hammers: [2, 3, 5, 7],
    },
  },
};

// Function to consolidate all texts
function consolidateTexts() {
  const selectedLang = CURRENT_LANGUAGE;
  const commonTexts = COMMON_TEXTS[selectedLang] || COMMON_TEXTS["en"];
  
  // Get question-specific texts from window objects (loaded by script tags)
  const q1Texts = window.Q1_TEXTS?.[selectedLang] || window.Q1_TEXTS?.["en"] || {};
  const q2Texts = window.Q2_TEXTS?.[selectedLang] || window.Q2_TEXTS?.["en"] || {};
  const q3Texts = window.Q3_TEXTS?.[selectedLang] || window.Q3_TEXTS?.["en"] || {};
  
  // Combine all texts
  const consolidatedTexts = {
    ...commonTexts,
    instructions: {
      Q1: q1Texts,
      Q2: q2Texts,
      Q3: q3Texts,
    },
  };
  
  return consolidatedTexts;
}

// Set up the global APP_TEXTS object
try {
  // Wait for all question texts to be loaded
  if (typeof window !== 'undefined') {
    // Check if all question texts are loaded
    const checkAndSetTexts = () => {
      if (window.Q1_TEXTS && window.Q2_TEXTS && window.Q3_TEXTS) {
        window.APP_TEXTS = consolidateTexts();
        // Dispatch a custom event to notify that texts are ready
        window.dispatchEvent(new CustomEvent('textsReady'));
      } else {
        // Retry after a short delay
        setTimeout(checkAndSetTexts, 10);
      }
    };
    
    checkAndSetTexts();
  }
} catch (error) {
  console.error("Error setting up language texts.", error);
  // Fallback to English common texts only
  if (typeof window !== 'undefined') {
    window.APP_TEXTS = {
      ...COMMON_TEXTS.en,
      instructions: { Q1: {}, Q2: {}, Q3: {} },
    };
  }
}