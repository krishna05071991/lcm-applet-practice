// Question 3 (150 & 252) Text Content
const Q3_TEXTS = {
  en: {
    step_Q3_0: {
      title: "Challenge Time!",
      text: "Ready for a bigger challenge? Let's find the LCM of 150 and 252 using prime factorisation.",
    },
    step_Q3_1: {
      title: "Magical Hammer",
      text: "Time to use my magical hammer to find the prime factorisation of 150 and 252!",
    },

    // Factorization of 150
    step_Q3_2_start: {
      title: "Factorize 150",
      text: "Use the hammers provided and break the number 150 until every part is a prime number.",
    },
    step_Q3_2_success: {
      title: "Great!",
      text: (p) =>
        `Yay! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> worked. Go ahead and break <b>${p.newNum}</b> now.`,
    },
    step_Q3_2_fail: {
      title: "Not Quite!",
      text: (p) =>
        `Oops! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> didn't work. <b>${p.num}</b> is not evenly divisible by ${p.hammerNum}. Try a different hammer!`,
    },
    step_Q3_2_done: {
      title: "Well Done!",
      text: (p) =>
        `Yay! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> worked. And, we are done! Because every part is now a prime number.`,
    },

    step_Q3_3: {
      title: "Visualizing Factors",
      text: "So, 150 is made of one 2, one 3, and two 5s. We've placed them in the prime rods box of 150!",
    },

    // Factorization of 252
    step_Q3_4_start: {
      title: "Factorize 252",
      text: "Now, let's break 252 into smaller parts using the hammers until every part is a prime number!",
    },
    step_Q3_4_success: {
      title: "Great!",
      text: (p) =>
        `Yay! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> worked.`,
    },
    step_Q3_4_fail: {
      title: "Not Quite!",
      text: (p) =>
        `Oops! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> didn't work. <b>${p.num}</b> is not evenly divisible by ${p.hammerNum}.`,
    },
    step_Q3_4_done: {
      title: "Well Done!",
      text: (p) =>
        `Yay! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> worked. And, we are done! Because every part is now a prime number.`,
    },

    step_Q3_5: {
      title: "Visualizing Factors",
      text: "Great! 252 is made of two 2s, two 3s, and one 7. Let's see its prime rods box.",
    },

    // Combining for LCM
    step_Q3_6: {
      title: "Ready for LCM",
      text: "We have brought the prime rods boxs of 150 and 252 together to find LCM.",
    },
    step_Q3_7: {
      title: "The LCM Box",
      text: "Here is the LCM box. We will use this to find the LCM of 150 and 252.",
    },

    // Finding LCM steps
    step_Q3_8_start: {
      title: "Let's Find LCM!",
      text: " Start with the prime-2 rod. Tap 150 or 252—the one with more 2's.",
    },
    step_Q3_8_correct: {
      title: "Correct!",
      text: "That's Correct! We have placed two 2s in the LCM box. Click next to check the prime-3 rod.",
    },
    step_Q3_8_incorrect: {
      title: "Try Again!",
      text: "Oops! 252 has two 2s, but 150 has only one 2.",
    },

    step_Q3_9_start: {
      title: "Let's Find LCM!",
      text: "Now, look at the prime-3 rod. Tap 150 or 252—the one with more 3's.",
    },
    step_Q3_9_correct: {
      title: "Yay!",
      text: "Yay! We have placed two 3s in the LCM box.",
    },
    step_Q3_9_incorrect: {
      title: "Try Again!",
      text: "Oops! 252 has two 3s, but 150 has only one 3.",
    },

    step_Q3_10_start: {
      title: "Let's Find LCM!",
      text: "Now, the prime-5 rod. Tap 150 or 252—the one with more 5's.",
    },
    step_Q3_10_correct: {
      title: "Correct!",
      text: "That's Correct! We have placed two 5s in the LCM box.",
    },
    step_Q3_10_incorrect: {
      title: "Try Again!",
      text: "Oops! 150 has two 5s, but 252 has no 5s.",
    },

    step_Q3_11_start: {
      title: "Let's Find LCM!",
      text: "Finally, the prime-7 rod. Tap 150 or 252—the one with more 7's.",
    },
    step_Q3_11_correct: {
      title: "Correct!",
      text: "That's Correct! We have placed one 7 in the LCM box.",
    },
    step_Q3_11_incorrect: {
      title: "Try Again!",
      text: "Oops! 252 has a 7, but 150 does not.",
    },

    step_Q3_12: {
      title: "The Result!",
      text: "Let's Find LCM!<br>LCM of 150 and 252<br>= <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='7'>7</span><br>= 6300",
    },

    step_Q3_13: {
      title: "Your Turn!",
      text: "Tap the correct LCM of 150 and 252.",
    },

    step_Q3_13_correct: {
      title: "Excellent!",
      text: "That's correct! The LCM of 150 and 252 is 6300.",
    },

    step_Q3_13_incorrect: {
      title: "Try Again!",
      text: "That's not correct. Think about the prime factors: 2 × 2 × 3 × 3 × 5 × 5 × 7.",
    },

    step_Q3_14: {
      title: "The Result!",
      text: "Let's Find LCM!<br>LCM of 150 and 252<br>= <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='7'>7</span><br>= 6300",
    },

    final_screen_Q3: {
      title: "Amazing!",
      text: "Outstanding! You've become a master at finding LCM using prime factorisation!",
    },
  },
  
  id: {
    step_Q3_0: {
      title: "Waktu Tantangan!",
      text: "Siap untuk tantangan yang lebih besar? Mari kita cari KPK dari 150 dan 252 menggunakan faktorisasi prima.",
    },
    step_Q3_1: {
      title: "Palu Ajaib",
      text: "Saatnya menggunakan palu ajaibku untuk menemukan faktorisasi prima dari 150 dan 252!",
    },

    // Factorization of 150
    step_Q3_2_start: {
      title: "Faktorkan 150",
      text: "Gunakan palu yang disediakan dan pecahkan angka 150 sampai setiap bagiannya menjadi bilangan prima.",
    },
    step_Q3_2_success: {
      title: "Bagus!",
      text: (p) =>
        `Hore! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> berhasil. Silakan pecahkan <b>${p.newNum}</b> sekarang.`,
    },
    step_Q3_2_fail: {
      title: "Belum Tepat!",
      text: (p) =>
        `Ups! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> tidak berhasil. <b>${p.num}</b> tidak habis dibagi oleh ${p.hammerNum}. Coba palu yang lain!`,
    },
    step_Q3_2_done: {
      title: "Kerja Bagus!",
      text: (p) =>
        `Hore! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> berhasil. Dan, kita selesai! Karena setiap bagian sekarang adalah bilangan prima.`,
    },

    step_Q3_3: {
      title: "Memvisualisasikan Faktor",
      text: "Jadi, 150 terdiri dari satu angka 2, satu angka 3, dan dua angka 5. Kami telah menempatkannya di kotak batang prima 150!",
    },

    // Factorization of 252
    step_Q3_4_start: {
      title: "Faktorkan 252",
      text: "Sekarang, mari kita pecah 252 menjadi bagian-bagian yang lebih kecil menggunakan palu sampai setiap bagiannya menjadi bilangan prima!",
    },
    step_Q3_4_success: {
      title: "Bagus!",
      text: (p) =>
        `Hore! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> berhasil.`,
    },
    step_Q3_4_fail: {
      title: "Belum Tepat!",
      text: (p) =>
        `Ups! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> tidak berhasil. <b>${p.num}</b> tidak habis dibagi oleh ${p.hammerNum}.`,
    },
    step_Q3_4_done: {
      title: "Kerja Bagus!",
      text: (p) =>
        `Hore! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> berhasil. Dan, kita selesai! Karena setiap bagian sekarang adalah bilangan prima.`,
    },

    step_Q3_5: {
      title: "Memvisualisasikan Faktor",
      text: "Bagus! 252 terdiri dari dua angka 2, dua angka 3, dan satu angka 7. Mari kita lihat kotak batang primanya.",
    },

    // Combining for LCM
    step_Q3_6: {
      title: "Siap untuk KPK",
      text: "Kami telah menyatukan kotak batang prima dari 150 dan 252 untuk mencari KPK.",
    },
    step_Q3_7: {
      title: "Kotak KPK",
      text: "Ini adalah kotak KPK. Kita akan menggunakan ini untuk mencari KPK dari 150 dan 252.",
    },

    // Finding LCM steps
    step_Q3_8_start: {
      title: "Mari Menemukan KPK",
      text: "Mulai dengan batang prima-2. Ketuk 150 atau 252—yang memiliki lebih banyak angka 2.",
    },
    step_Q3_8_correct: {
      title: "Benar!",
      text: "Itu Benar! Kami telah menempatkan dua angka 2 di kotak KPK. Klik berikutnya untuk memeriksa batang prima-3.",
    },
    step_Q3_8_incorrect: {
      title: "Coba Lagi!",
      text: "Ups! 252 memiliki dua angka 2, tetapi 150 hanya memiliki satu angka 2.",
    },

    step_Q3_9_start: {
      title: "Mari Menemukan KPK",
      text: "Sekarang, lihatlah batang prima-3. Ketuk 150 atau 252—yang memiliki lebih banyak angka 3.",
    },
    step_Q3_9_correct: {
      title: "Hore!",
      text: "Hore! Kami telah menempatkan dua angka 3 di kotak KPK.",
    },
    step_Q3_9_incorrect: {
      title: "Coba Lagi!",
      text: "Ups! 252 memiliki dua angka 3, tetapi 150 hanya memiliki satu angka 3.",
    },

    step_Q3_10_start: {
      title: "Mari Menemukan KPK",
      text: "Sekarang, batang prima-5. Ketuk 150 atau 252—yang memiliki lebih banyak angka 5.",
    },
    step_Q3_10_correct: {
      title: "Benar!",
      text: "Itu Benar! Kami telah menempatkan dua angka 5 di kotak KPK.",
    },
    step_Q3_10_incorrect: {
      title: "Coba Lagi!",
      text: "Ups! 150 memiliki dua angka 5, tetapi 252 tidak memiliki angka 5.",
    },

    step_Q3_11_start: {
      title: "Mari Menemukan KPK",
      text: "Terakhir, batang prima-7. Ketuk 150 atau 252—yang memiliki lebih banyak angka 7.",
    },
    step_Q3_11_correct: {
      title: "Benar!",
      text: "Itu Benar! Kami telah menempatkan satu angka 7 di kotak KPK.",
    },
    step_Q3_11_incorrect: {
      title: "Coba Lagi!",
      text: "Ups! 252 memiliki angka 7, tetapi 150 tidak.",
    },

    step_Q3_12: {
      title: "Hasilnya!",
      text: "Ayo Cari KPK!<br>KPK dari 150 dan 252<br>= <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='7'>7</span><br>= 6300",
    },

    step_Q3_13: {
      title: "Giliranmu!",
      text: "Ketuk KPK yang benar dari 150 dan 252.",
    },

    step_Q3_13_correct: {
      title: "Luar Biasa!",
      text: "Itu benar! KPK dari 150 dan 252 adalah 6300.",
    },

    step_Q3_13_incorrect: {
      title: "Coba Lagi!",
      text: "Itu tidak benar. Pikirkan tentang faktor prima: 2 × 2 × 3 × 3 × 5 × 5 × 7.",
    },

    step_Q3_14: {
      title: "Hasilnya!",
      text: "Ayo Cari KPK!<br>KPK dari 150 dan 252<br>= <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='7'>7</span><br>= 6300",
    },

    final_screen_Q3: {
      title: "Luar Biasa!",
      text: "Luar biasa! Kamu telah menjadi master dalam mencari KPK menggunakan faktorisasi prima!",
    },
  },
};

// Export for use in index.js
if (typeof window !== 'undefined') {
  window.Q3_TEXTS = Q3_TEXTS;
} else if (typeof module !== 'undefined') {
  module.exports = Q3_TEXTS;
}