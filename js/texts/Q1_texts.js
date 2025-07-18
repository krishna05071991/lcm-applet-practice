// Question 1 (42 & 60) Text Content
const Q1_TEXTS = {
  en: {
    step_Q1_0: {
      title: "Hello!",
      text: "Let's solve a few challenges to find the LCM of two numbers using prime factorisation.",
    },
    step_Q1_1: {
      title: "Magical Hammer",
      text: "Time to use my magical hammer to find the prime factorisation of 42 and 60!",
    },

    // Factorization of 42
    step_Q1_2_start: {
      title: "Factorize 42",
      text: "Use the hammers provided and break the number 42 until every part is a prime number.",
    },
    step_Q1_2_success: {
      title: "Great!",
      text: (p) =>
        `Yay! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> worked. Go ahead and break <b>${p.newNum}</b> now.`,
    },
    step_Q1_2_fail: {
      title: "Not Quite!",
      text: (p) =>
        `Oops! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> didn't work. <b>${p.num}</b> is not evenly divisible by ${p.hammerNum}. Try a different hammer!`,
    },
    step_Q1_2_done: {
      title: "Well Done!",
      text: (p) =>
        `Yay! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> worked. And, we are done! Because every part is now a prime number.`,
    },

    step_Q1_3: {
      title: "Visualizing Factors",
      text: "So, 42 is made of one 2, one 3, and one 7. We've placed them in the prime rods box of 42!",
    },

    // Factorization of 60
    step_Q1_4_start: {
      title: "Factorize 60",
      text: "Now, let's break 60 into smaller parts using the hammers until every part is a prime number!",
    },
    step_Q1_4_success: {
      title: "Great!",
      text: (p) =>
        `Yay! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> worked.`,
    },
    step_Q1_4_fail: {
      title: "Not Quite!",
      text: (p) =>
        `Oops! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> didn't work. <b>${p.num}</b> is not evenly divisible by ${p.hammerNum}.`,
    },
    step_Q1_4_done: {
      title: "Well Done!",
      text: (p) =>
        `Yay! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> worked. And, we are done! Because every part is now a prime number.`,
    },

    step_Q1_5: {
      title: "Visualizing Factors",
      text: "Great! 60 is made of two 2s, one 3, and one 5. Let's see its prime rods box.",
    },

    // Combining for LCM
    step_Q1_6: {
      title: "Ready for LCM",
      text: "We have brought the prime rods boxs of 42 and 60 together to find LCM.",
    },
    step_Q1_7: {
      title: "The LCM Box",
      text: "Here is the LCM box. We will use this to find the LCM of 42 and 60.",
    },

    // Finding LCM steps
    step_Q1_8_start: {
      title: "Let's Find LCM!",
      text: " Start with the prime-2 rod. Tap 42 or 60—the one with more 2's.",
    },
    step_Q1_8_correct: {
      title: "Correct!",
      text: "That's Correct! We have placed two 2s in the LCM box. Click next to check the prime-3 rod.",
    },
    step_Q1_8_incorrect: {
      title: "Try Again!",
      text: "Oops! 60 has two 2s, but 42 has only one 2.",
    },

    step_Q1_9_start: {
      title: "Let's Find LCM!",
      text: "Now, look at the prime-3 rod. Both 42 and 60 have one 3. Tap either 42 or 60 to bring 3 to the LCM box.",
    },
    step_Q1_9_correct: {
      title: "Yay!",
      text: "Yay! We have placed one 3 in the LCM box.",
    },
    step_Q1_9_incorrect: {
      title: "Try Again!",
      text: "Oops! Try again.",
    },

    step_Q1_10_start: {
      title: "Let's Find LCM!",
      text: "Now, the prime-5 rod. Tap 42 or 60—the one with more 5's.",
    },
    step_Q1_10_correct: {
      title: "Correct!",
      text: "That's Correct! We have placed one 5 in the LCM box.",
    },
    step_Q1_10_incorrect: {
      title: "Try Again!",
      text: "Oops! 60 has a 5, but 42 does not.",
    },

    step_Q1_11_start: {
      title: "Let's Find LCM!",
      text: "Finally, the prime-7 rod. Tap 42 or 60—the one with more 7's.",
    },
    step_Q1_11_correct: {
      title: "Correct!",
      text: "That's Correct! We have placed one 7 in the LCM box.",
    },
    step_Q1_11_incorrect: {
      title: "Try Again!",
      text: "Oops! 42 has a 7, but 60 does not.",
    },

    step_Q1_12: {
      title: "The Result!",
      text: "Let's Find LCM!<br>LCM of 42 and 60<br>= <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='7'>7</span><br>= 420",
    },

    step_Q1_13: {
      title: "Your Turn!",
      text: "Tap the correct LCM of 42 and 60.",
    },

    step_Q1_13_correct: {
      title: "Excellent!",
      text: "That's correct! The LCM of 42 and 60 is 420.",
    },

    step_Q1_13_incorrect: {
      title: "Try Again!",
      text: "That's not correct. Think about the prime factors: 2 × 2 × 3 × 5 × 7.",
    },

    step_Q1_14: {
      title: "The Result!",
      text: "Let's Find LCM!<br>LCM of 42 and 60<br>= <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='7'>7</span><br>= 420",
    },

    final_screen_Q1: {
      title: "Great Job!",
      text: "Yay! We did it! We learned how to find the LCM using prime factorisation!",
    },
  },
  
  id: {
    step_Q1_0: {
      title: "Halo!",
      text: "Hari ini, mari kita jelajahi cara mencari KPK dari 42 dan 60 menggunakan faktorisasi prima.",
    },
    step_Q1_1: {
      title: "Palu Ajaib",
      text: "Saatnya menggunakan palu ajaibku untuk menemukan faktorisasi prima dari 42 dan 60!",
    },

    // Factorization of 42
    step_Q1_2_start: {
      title: "Faktorkan 42",
      text: "Gunakan palu yang disediakan dan pecahkan angka 42 sampai setiap bagiannya menjadi bilangan prima.",
    },
    step_Q1_2_success: {
      title: "Bagus!",
      text: (p) =>
        `Hore! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> berhasil. Silakan pecahkan <b>${p.newNum}</b> sekarang.`,
    },
    step_Q1_2_fail: {
      title: "Belum Tepat!",
      text: (p) =>
        `Ups! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> tidak berhasil. <b>${p.num}</b> tidak habis dibagi oleh ${p.hammerNum}. Coba palu yang lain!`,
    },
    step_Q1_2_done: {
      title: "Kerja Bagus!",
      text: (p) =>
        `Hore! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> berhasil. Dan, kita selesai! Karena setiap bagian sekarang adalah bilangan prima.`,
    },

    step_Q1_3: {
      title: "Memvisualisasikan Faktor",
      text: "Jadi, 42 terdiri dari satu angka 2, satu angka 3, dan satu angka 7. Kami telah menempatkannya di kotak batang prima 42!",
    },

    // Factorization of 60
    step_Q1_4_start: {
      title: "Faktorkan 60",
      text: "Sekarang, mari kita pecah 60 menjadi bagian-bagian yang lebih kecil menggunakan palu sampai setiap bagiannya menjadi bilangan prima!",
    },
    step_Q1_4_success: {
      title: "Bagus!",
      text: (p) =>
        `Hore! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> berhasil.`,
    },
    step_Q1_4_fail: {
      title: "Belum Tepat!",
      text: (p) =>
        `Ups! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> tidak berhasil. <b>${p.num}</b> tidak habis dibagi oleh ${p.hammerNum}.`,
    },
    step_Q1_4_done: {
      title: "Kerja Bagus!",
      text: (p) =>
        `Hore! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> berhasil. Dan, kita selesai! Karena setiap bagian sekarang adalah bilangan prima.`,
    },

    step_Q1_5: {
      title: "Memvisualisasikan Faktor",
      text: "Bagus! 60 terdiri dari dua angka 2, satu angka 3, dan satu angka 5. Mari kita lihat kotak batang primanya.",
    },

    // Combining for LCM
    step_Q1_6: {
      title: "Siap untuk KPK",
      text: "Kami telah menyatukan kotak batang prima dari 42 dan 60 untuk mencari KPK.",
    },
    step_Q1_7: {
      title: "Kotak KPK",
      text: "Ini adalah kotak KPK. Kita akan menggunakan ini untuk mencari KPK dari 42 dan 60.",
    },

    // Finding LCM steps
    step_Q1_8_start: {
      title: "Mari Menemukan KPK",
      text: "Mulai dengan batang prima-2. Ketuk 42 atau 60—yang memiliki lebih banyak angka 2.",
    },
    step_Q1_8_correct: {
      title: "Benar!",
      text: "Itu Benar! Kami telah menempatkan dua angka 2 di kotak KPK. Klik berikutnya untuk memeriksa batang prima-3.",
    },
    step_Q1_8_incorrect: {
      title: "Coba Lagi!",
      text: "Ups! 60 memiliki dua angka 2, tetapi 42 hanya memiliki satu angka 2.",
    },

    step_Q1_9_start: {
      title: "Mari Menemukan KPK",
      text: "Sekarang, lihatlah batang prima-3. Baik 42 maupun 60 memiliki satu angka 3. Ketuk 42 atau 60 untuk membawa angka 3 ke kotak KPK.",
    },
    step_Q1_9_correct: {
      title: "Hore!",
      text: "Hore! Kami telah menempatkan satu angka 3 di kotak KPK.",
    },
    step_Q1_9_incorrect: {
      title: "Coba Lagi!",
      text: "Ups! Coba lagi.",
    },

    step_Q1_10_start: {
      title: "Mari Menemukan KPK",
      text: "Sekarang, batang prima-5. Ketuk 42 atau 60—yang memiliki lebih banyak angka 5.",
    },
    step_Q1_10_correct: {
      title: "Benar!",
      text: "Itu Benar! Kami telah menempatkan satu angka 5 di kotak KPK.",
    },
    step_Q1_10_incorrect: {
      title: "Coba Lagi!",
      text: "Ups! 60 memiliki angka 5, tetapi 42 tidak.",
    },

    step_Q1_11_start: {
      title: "Mari Menemukan KPK",
      text: "Terakhir, batang prima-7. Ketuk 42 atau 60—yang memiliki lebih banyak angka 7.",
    },
    step_Q1_11_correct: {
      title: "Benar!",
      text: "Itu Benar! Kami telah menempatkan satu angka 7 di kotak KPK.",
    },
    step_Q1_11_incorrect: {
      title: "Coba Lagi!",
      text: "Ups! 42 memiliki angka 7, tetapi 60 tidak.",
    },

    step_Q1_12: {
      title: "Hasilnya!",
      text: "Ayo Cari KPK!<br>KPK dari 42 dan 60<br>= <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='7'>7</span><br>= 420",
    },

    step_Q1_13: {
      title: "Giliranmu!",
      text: "Ketuk KPK yang benar dari 42 dan 60.",
    },

    step_Q1_13_correct: {
      title: "Luar Biasa!",
      text: "Itu benar! KPK dari 42 dan 60 adalah 420.",
    },

    step_Q1_13_incorrect: {
      title: "Coba Lagi!",
      text: "Itu tidak benar. Pikirkan tentang faktor prima: 2 × 2 × 3 × 5 × 7.",
    },

    step_Q1_14: {
      title: "Hasilnya!",
      text: "Ayo Cari KPK!<br>KPK dari 42 dan 60<br>= <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='7'>7</span><br>= 420",
    },

    final_screen_Q1: {
      title: "Kerja Bagus!",
      text: "Hore! Kita berhasil! Kita belajar cara mencari KPK menggunakan faktorisasi prima!",
    },
  },
};

// Export for use in index.js
if (typeof window !== 'undefined') {
  window.Q1_TEXTS = Q1_TEXTS;
} else if (typeof module !== 'undefined') {
  module.exports = Q1_TEXTS;
}