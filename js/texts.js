// ==================================================================
// === LANGUAGE SELECTOR - ONLY EDIT THE VALUE IN THIS LINE ===
// ==================================================================
const CURRENT_LANGUAGE = "en";
// ==================================================================

const ALL_TEXTS = {
  en: {
    appTexts: {
      html_title: "LCM with Prime Factorization - 42 and 60",
      main_title_text: "Finding the LCM of 42 and 60",
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
          text: "Today, let's explore finding the LCM of 42 and 60 using prime factorisation.",
        },
        step_1: {
          title: "Magical Hammer",
          text: "Time to use my magical hammer to find the prime factorisation of 42 and 60!",
        },

        // Factorization of 42
        step_2_start: {
          title: "Factorize 42",
          text: "Use the hammers provided and break the number 42 until every part is a prime number.",
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
          text: "So, 42 is made of one 2, one 3, and one 7. We've placed them in the prime rods box of 42!",
        },

        // Factorization of 60
        step_4_start: {
          title: "Factorize 60",
          text: "Now, let's break 60 into smaller parts using the hammers until every part is a prime number!",
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
          text: "Great! 60 is made of two 2s, one 3, and one 5. Let's see its prime rods box.",
        },

        // Combining for LCM
        step_6: {
          title: "Comparing Factors",
          text: "We have completed the prime factorisation of both numbers.",
        },
        step_7: {
          title: "Ready for LCM",
          text: "We have brought the prime rods boxs of 42 and 60 together to find LCM.",
        },
        step_8: {
          title: "The LCM Box",
          text: "Here is the LCM box. We will use this to find the LCM of 42 and 60.",
        },

        // Finding LCM steps
        step_9_start: {
          title: "Let’s Find LCM!",
          text: " Start with the prime-2 rod. Tap 42 or 60—the one with more 2's.",
        },
        step_9_correct: {
          title: "Correct!",
          text: "That’s Correct! We have placed two 2s in the LCM box. Click next to check the prime-3 rod.",
        },
        step_9_incorrect: {
          title: "Try Again!",
          text: "Oops! 60 has two 2s, but 42 has only one 2.",
        },

        step_10_start: {
          title: "Let’s Find LCM!",
          text: "Now, look at the prime-3 rod. Both 42 and 60 have one 3. Tap either 42 or 60 to bring 3 to the LCM box.",
        },
        step_10_correct: {
          title: "Yay!",
          text: "Yay! We have placed one 3 in the LCM box.",
        },

        step_11_start: {
          title: "Let’s Find LCM!",
          text: "Now, the prime-5 rod. Tap 42 or 60—the one with more 5's.",
        },
        step_11_correct: {
          title: "Correct!",
          text: "That’s Correct! We have placed one 5 in the LCM box.",
        },
        step_11_incorrect: {
          title: "Try Again!",
          text: "Oops! 60 has a 5, but 42 does not.",
        },

        step_12_start: {
          title: "Let's Find LCM!",
          text: "Finally, the prime-7 rod. Tap 42 or 60—the one with more 7's.",
        },
        step_12_correct: {
          title: "Correct!",
          text: "That's Correct! We have placed one 7 in the LCM box.",
        },
        step_12_incorrect: {
          title: "Try Again!",
          text: "Oops! 42 has a 7, but 60 does not.",
        },

        step_13: {
          title: "The Result!",
          text: "Let's Find LCM!<br>LCM of 42 and 60<br>= <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='7'>7</span><br>= 420",
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
      html_title: "KPK dengan Faktorisasi Prima - 42 dan 60",
      main_title_text: "Mencari KPK dari 42 dan 60",
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
          text: "Hari ini, mari kita jelajahi cara mencari KPK dari 42 dan 60 menggunakan faktorisasi prima.",
        },
        step_1: {
          title: "Palu Ajaib",
          text: "Saatnya menggunakan palu ajaibku untuk menemukan faktorisasi prima dari 42 dan 60!",
        },

        // Factorization of 42
        step_2_start: {
          title: "Faktorkan 42",
          text: "Gunakan palu yang disediakan dan pecahkan angka 42 sampai setiap bagiannya menjadi bilangan prima.",
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
          text: "Jadi, 42 terdiri dari satu angka 2, satu angka 3, dan satu angka 7. Kami telah menempatkannya di kotak batang prima 42!",
        },

        // Factorization of 60
        step_4_start: {
          title: "Faktorkan 60",
          text: "Sekarang, mari kita pecah 60 menjadi bagian-bagian yang lebih kecil menggunakan palu sampai setiap bagiannya menjadi bilangan prima!",
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
          text: "Bagus! 60 terdiri dari dua angka 2, satu angka 3, dan satu angka 5. Mari kita lihat kotak batang primanya.",
        },

        // Combining for LCM
        step_6: {
          title: "Membandingkan Faktor",
          text: "Kita telah menyelesaikan faktorisasi prima dari kedua bilangan.",
        },
        step_7: {
          title: "Siap untuk KPK",
          text: "Kami telah menyatukan kotak batang prima dari 42 dan 60 untuk mencari KPK.",
        },
        step_8: {
          title: "Kotak KPK",
          text: "Ini adalah kotak KPK. Kita akan menggunakan ini untuk mencari KPK dari 42 dan 60.",
        },

        // Finding LCM steps
        step_9_start: {
          title: "Mari Menemukan KPK",
          text: "Mulai dengan batang prima-2. Ketuk 42 atau 60—yang memiliki lebih banyak angka 2.",
        },
        step_9_correct: {
          title: "Benar!",
          text: "Itu Benar! Kami telah menempatkan dua angka 2 di kotak KPK. Klik berikutnya untuk memeriksa batang prima-3.",
        },
        step_9_incorrect: {
          title: "Coba Lagi!",
          text: "Ups! 60 memiliki dua angka 2, tetapi 42 hanya memiliki satu angka 2.",
        },

        step_10_start: {
          title: "Mari Menemukan KPK",
          text: "Sekarang, lihatlah batang prima-3. Baik 42 maupun 60 memiliki satu angka 3. Ketuk 42 atau 60 untuk membawa angka 3 ke kotak KPK.",
        },
        step_10_correct: {
          title: "Hore!",
          text: "Hore! Kami telah menempatkan satu angka 3 di kotak KPK.",
        },

        step_11_start: {
          title: "Mari Menemukan KPK",
          text: "Sekarang, batang prima-5. Ketuk 42 atau 60—yang memiliki lebih banyak angka 5.",
        },
        step_11_correct: {
          title: "Benar!",
          text: "Itu Benar! Kami telah menempatkan satu angka 5 di kotak KPK.",
        },
        step_11_incorrect: {
          title: "Coba Lagi!",
          text: "Ups! 60 memiliki angka 5, tetapi 42 tidak.",
        },

        step_12_start: {
          title: "Mari Menemukan KPK",
          text: "Terakhir, batang prima-7. Ketuk 42 atau 60—yang memiliki lebih banyak angka 7.",
        },
        step_12_correct: {
          title: "Benar!",
          text: "Itu Benar! Kami telah menempatkan satu angka 7 di kotak KPK.",
        },
        step_12_incorrect: {
          title: "Coba Lagi!",
          text: "Ups! 42 memiliki angka 7, tetapi 60 tidak.",
        },

        step_13: {
          title: "Hasilnya!",
          text: "Ayo Cari KPK!<br>KPK dari 42 dan 60<br>= <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='7'>7</span><br>= 420",
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