// ==================================================================
// === LANGUAGE SELECTOR - ONLY EDIT THE VALUE IN THIS LINE ===
// ==================================================================
const CURRENT_LANGUAGE = "en";
// ==================================================================

const ALL_TEXTS = {
  en: {
    appTexts: {
      html_title: "LCM with Prime Factorization",
      main_title_text: "Finding the LCM",
      subtitle_text:
        "Using prime factorization to find the Least Common Multiple.",
      factorisation_text:"Prime factorisation of",
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
      },
      instructions: {
        step_0: {
          title: "Hello!",
          text: "Today, let’s explore finding the LCM of 12 and 15 using prime factorisation.",
        },
        step_1: {
          title: "Magical Hammer",
          text: "Time to use my magical hammer to find the prime factorisation of 12 and 15!",
        },

        // Factorization of 12
        step_2_start: {
          title: "Factorize 12",
          text: "Use the hammers provided and break the number 12 until every part is a prime number.",
        },
        step_2_success: {
          title: "Great!",
          text: (p) =>
            `Yay! The <div class="inline-hammer-wrapper"><img src="${ALL_TEXTS.en.appTexts.item_images.hammer_active}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> worked. Go ahead and break <b>${p.newNum}</b> now.`,
        },
        step_2_fail: {
          title: "Not Quite!",
          text: (p) =>
            `Oops! The <div class="inline-hammer-wrapper"><img src="${ALL_TEXTS.en.appTexts.item_images.hammer_active}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> didn’t work. <b>${p.num}</b> is not evenly divisible by ${p.hammerNum}. Try a different hammer!`,
        },
        step_2_done: {
          title: "Well Done!",
          text: (p) =>
            `Yay! The <div class="inline-hammer-wrapper"><img src="${ALL_TEXTS.en.appTexts.item_images.hammer_active}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> worked. And, we are done! Because every part is now a prime number.`,
        },

        step_3: {
          title: "Visualizing Factors",
          text: "So, 12 is made of two 2s and one 3. We’ve placed them in the prime rods box of 12!",
        },

        // Factorization of 15
        step_4_start: {
          title: "Factorize 15",
          text: "Now, let’s break 15 into smaller parts using the hammers until every part is a prime number!",
        },
        step_4_success: {
          title: "Great!",
          text: (p) =>
            `Yay! The <div class="inline-hammer-wrapper"><img src="${ALL_TEXTS.en.appTexts.item_images.hammer_active}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> worked.`,
        },
        step_4_fail: {
          title: "Not Quite!",
          text: (p) =>
            `Oops! The <div class="inline-hammer-wrapper"><img src="${ALL_TEXTS.en.appTexts.item_images.hammer_active}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> didn’t work. <b>${p.num}</b> is not evenly divisible by ${p.hammerNum}.`,
        },
        step_4_done: {
          title: "Well Done!",
          text: (p) =>
            `Yay! The <div class="inline-hammer-wrapper"><img src="${ALL_TEXTS.en.appTexts.item_images.hammer_active}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> worked. And, we are done! Because every part is now a prime number.`,
        },

        step_5: {
          title: "Visualizing Factors",
          text: "Great! 15 is made of one 3 and one 5. Let's see its prime rods box.",
        },

        // Combining for LCM
        step_6: {
          title: "Comparing Factors",
          text: "We have completed the prime factorisation of both numbers.",
        },
        step_7: {
          title: "Ready for LCM",
          text: "We have brought the prime rods boxs of 12 and 15 together to find LCM.",
        },
        step_8: {
          title: "The LCM Box",
          text: "Here is the LCM box. We will use this to find the LCM of 12 and 15.",
        },

        // Finding LCM steps
        step_9_start: {
          title: "Let’s Find LCM!",
          text: " Start with the prime-2 rod. Tap 12 or 15—the one with more 2’s.",
        },
        step_9_correct: {
          title: "Correct!",
          text: "That’s Correct! We have placed two 2s in the LCM box. Click next to check the prime-3 rod.",
        },
        step_9_incorrect: {
          title: "Try Again!",
          text: "Oops! 2 appears twice in 12 but not in 15.",
        },

        step_10_start: {
          title: "Let’s Find LCM!",
          text: "Now, look at the prime-3 rod. Both 12 and 15 have one 3. Tap either 12 or 15 to bring 3 to the LCM box.",
        },
        step_10_correct: {
          title: "Yay!",
          text: "Yay! We have placed one 3 in the LCM box.",
        },

        step_11_start: {
          title: "Let’s Find LCM!",
          text: "Lastly, the prime-5 rod. Tap 12 or 15—the one with more 5’s.",
        },
        step_11_correct: {
          title: "Correct!",
          text: "That’s Correct! We have placed one 5 in the LCM box.",
        },
        step_11_incorrect: {
          title: "Try Again!",
          text: "Oops! 15 has a 5, but 12 does not.",
        },

        step_12: {
          title: "The Result!",
          text: "Let’s Find LCM!<br>LCM of 12 and 15<br>= <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='5'>5</span><br>= 60",
        },

        final_screen: {
          title: "Great Job!",
          text: "Yay! We did it! We learned how to find the LCM using prime factorisation!",
        },
      },
      gameConfig: {
        primes: [2, 3, 5, 7],
        hammers: [2, 3, 5, 7],
      },
    },
  },
  id: {
    appTexts: {
      html_title: "KPK dengan Faktorisasi Prima",
      main_title_text: "Mencari KPK",
      factorisation_text:"Faktorisasi prima dari",
      subtitle_text:
        "Menggunakan faktorisasi prima untuk mencari Kelipatan Persekutuan Terkecil.",
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
      },
      instructions: {
        step_0: {
          title: "Halo!",
          text: "Hari ini, mari kita jelajahi cara mencari KPK dari 12 dan 15 menggunakan faktorisasi prima.",
        },
        step_1: {
          title: "Palu Ajaib",
          text: "Saatnya menggunakan palu ajaibku untuk menemukan faktorisasi prima dari 12 dan 15!",
        },

        // Factorization of 12
        step_2_start: {
          title: "Faktorkan 12",
          text: "Gunakan palu yang disediakan dan pecahkan angka 12 sampai setiap bagiannya menjadi bilangan prima.",
        },
        step_2_success: {
          title: "Bagus!",
          text: (p) =>
            `Hore! <div class="inline-hammer-wrapper"><img src="${ALL_TEXTS.en.appTexts.item_images.hammer_active}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> berhasil. Silakan pecahkan <b>${p.newNum}</b> sekarang.`,
        },
        step_2_fail: {
          title: "Belum Tepat!",
          text: (p) =>
            `Ups! <div class="inline-hammer-wrapper"><img src="${ALL_TEXTS.en.appTexts.item_images.hammer_active}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> tidak berhasil. <b>${p.num}</b> tidak habis dibagi oleh ${p.hammerNum}. Coba palu yang lain!`,
        },
        step_2_done: {
          title: "Kerja Bagus!",
          text: (p) =>
            `Hore! <div class="inline-hammer-wrapper"><img src="${ALL_TEXTS.en.appTexts.item_images.hammer_active}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> berhasil. Dan, kita selesai! Karena setiap bagian sekarang adalah bilangan prima.`,
        },

        step_3: {
          title: "Memvisualisasikan Faktor",
          text: "Jadi, 12 terdiri dari dua angka 2 dan satu angka 3. Kami telah menempatkannya di kotak batang prima 12!",
        },

        // Factorization of 15
        step_4_start: {
          title: "Faktorkan 15",
          text: "Sekarang, mari kita pecah 15 menjadi bagian-bagian yang lebih kecil menggunakan palu sampai setiap bagiannya menjadi bilangan prima!",
        },
        step_4_success: {
          title: "Bagus!",
          text: (p) =>
            `Hore! <div class="inline-hammer-wrapper"><img src="${ALL_TEXTS.en.appTexts.item_images.hammer_active}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> berhasil.`,
        },
        step_4_fail: {
          title: "Belum Tepat!",
          text: (p) =>
            `Ups! <div class="inline-hammer-wrapper"><img src="${ALL_TEXTS.en.appTexts.item_images.hammer_active}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> tidak berhasil. <b>${p.num}</b> tidak habis dibagi oleh ${p.hammerNum}.`,
        },
        step_4_done: {
          title: "Kerja Bagus!",
          text: (p) =>
            `Hore! <div class="inline-hammer-wrapper"><img src="${ALL_TEXTS.en.appTexts.item_images.hammer_active}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> berhasil. Dan, kita selesai! Karena setiap bagian sekarang adalah bilangan prima.`,
        },

        step_5: {
          title: "Memvisualisasikan Faktor",
          text: "Bagus! 15 terdiri dari satu angka 3 dan satu angka 5. Mari kita lihat kotak batang primanya.",
        },

        // Combining for LCM
        step_6: {
          title: "Membandingkan Faktor",
          text: "Kita telah menyelesaikan faktorisasi prima dari kedua bilangan.",
        },
        step_7: {
          title: "Siap untuk KPK",
          text: "Kami telah menyatukan kotak batang prima dari 12 dan 15 untuk mencari KPK.",
        },
        step_8: {
          title: "Kotak KPK",
          text: "Ini adalah kotak KPK. Kita akan menggunakan ini untuk mencari KPK dari 12 dan 15.",
        },

        // Finding LCM steps
        step_9_start: {
          title: "Mari Menemukan KPK",
          text: "Mulai dengan batang prima-2. Ketuk 12 atau 15—yang memiliki lebih banyak angka 2.",
        },
        step_9_correct: {
          title: "Benar!",
          text: "Itu Benar! Kami telah menempatkan dua angka 2 di kotak KPK. Klik berikutnya untuk memeriksa batang prima-3.",
        },
        step_9_incorrect: {
          title: "Coba Lagi!",
          text: "Ups! Angka 2 muncul dua kali di 12 tetapi tidak di 15.",
        },

        step_10_start: {
          title: "Mari Menemukan KPK",
          text: "Sekarang, lihatlah batang prima-3. Baik 12 maupun 15 memiliki satu angka 3. Ketuk 12 atau 15 untuk membawa angka 3 ke kotak KPK.",
        },
        step_10_correct: {
          title: "Hore!",
          text: "Hore! Kami telah menempatkan satu angka 3 di kotak KPK.",
        },

        step_11_start: {
          title: "Mari Menemukan KPK",
          text: "Terakhir, batang prima-5. Ketuk 12 atau 15—yang memiliki lebih banyak angka 5.",
        },
        step_11_correct: {
          title: "Benar!",
          text: "Itu Benar! Kami telah menempatkan satu angka 5 di kotak KPK.",
        },
        step_11_incorrect: {
          title: "Coba Lagi!",
          text: "Ups! 15 memiliki angka 5, tetapi 12 tidak.",
        },

        step_12: {
          title: "Hasilnya!",
          text: "Ayo Cari KPK!<br>KPK dari 12 dan 15<br>= <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='5'>5</span><br>= 60",
        },

        final_screen: {
          title: "Kerja Bagus!",
          text: "Hore! Kita berhasil! Kita belajar cara mencari KPK menggunakan faktorisasi prima!",
        },
      },
      gameConfig: {
        primes: [2, 3, 5, 7],
        hammers: [2, 3, 5, 7],
      },
    },
  },
};

// --- DO NOT EDIT BELOW THIS LINE ---
try {
  const selectedLang = ALL_TEXTS[CURRENT_LANGUAGE] || ALL_TEXTS["en"];
  window.APP_TEXTS = selectedLang.appTexts;
} catch (error) {
  console.error("Error setting up language texts.", error);
  window.APP_TEXTS = ALL_TEXTS.en.appTexts;
}