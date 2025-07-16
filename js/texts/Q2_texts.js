// Question 2 (90 & 100) Text Content
const Q2_TEXTS = {
  en: {
    step_Q2_0: {
      title: "Hello Again!",
      text: "Now let's practice finding the LCM of 90 and 100 using prime factorisation.",
    },
    step_Q2_1: {
      title: "Magical Hammer",
      text: "Time to use my magical hammer to find the prime factorisation of 90 and 100!",
    },

    // Factorization of 90
    step_Q2_2_start: {
      title: "Factorize 90",
      text: "Use the hammers provided and break the number 90 until every part is a prime number.",
    },
    step_Q2_2_success: {
      title: "Great!",
      text: (p) =>
        `Yay! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> worked. Go ahead and break <b>${p.newNum}</b> now.`,
    },
    step_Q2_2_fail: {
      title: "Not Quite!",
      text: (p) =>
        `Oops! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> didn't work. <b>${p.num}</b> is not evenly divisible by ${p.hammerNum}. Try a different hammer!`,
    },
    step_Q2_2_done: {
      title: "Well Done!",
      text: (p) =>
        `Yay! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> worked. And, we are done! Because every part is now a prime number.`,
    },

    step_Q2_3: {
      title: "Visualizing Factors",
      text: "So, 90 is made of two 2s, two 3s, and one 5. We've placed them in the prime rods box of 90!",
    },

    // Factorization of 100
    step_Q2_4_start: {
      title: "Factorize 100",
      text: "Now, let's break 100 into smaller parts using the hammers until every part is a prime number!",
    },
    step_Q2_4_success: {
      title: "Great!",
      text: (p) =>
        `Yay! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> worked.`,
    },
    step_Q2_4_fail: {
      title: "Not Quite!",
      text: (p) =>
        `Oops! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> didn't work. <b>${p.num}</b> is not evenly divisible by ${p.hammerNum}.`,
    },
    step_Q2_4_done: {
      title: "Well Done!",
      text: (p) =>
        `Yay! The <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> worked. And, we are done! Because every part is now a prime number.`,
    },

    step_Q2_5: {
      title: "Visualizing Factors",
      text: "Great! 100 is made of two 2s and two 5s. Let's see its prime rods box.",
    },

    // Combining for LCM
    step_Q2_6: {
      title: "Ready for LCM",
      text: "We have brought the prime rods boxs of 90 and 100 together to find LCM.",
    },
    step_Q2_7: {
      title: "The LCM Box",
      text: "Here is the LCM box. We will use this to find the LCM of 90 and 100.",
    },

    // Finding LCM steps
    step_Q2_8_start: {
      title: "Let's Find LCM!",
      text: " Start with the prime-2 rod. Tap 90 or 100—the one with more 2's.",
    },
    step_Q2_8_correct: {
      title: "Correct!",
      text: "That's Correct! Both have two 2s, so we have placed two 2s in the LCM box. Click next to check the prime-3 rod.",
    },
    step_Q2_8_incorrect: {
      title: "Try Again!",
      text: "Oops! Both 90 and 100 have two 2s.",
    },

    step_Q2_9_start: {
      title: "Let's Find LCM!",
      text: "Now, look at the prime-3 rod. Tap 90 or 100—the one with more 3's.",
    },
    step_Q2_9_correct: {
      title: "Yay!",
      text: "Yay! We have placed two 3s in the LCM box.",
    },
    step_Q2_9_incorrect: {
      title: "Try Again!",
      text: "Oops! 90 has two 3s, but 100 has no 3s.",
    },

    step_Q2_10_start: {
      title: "Let's Find LCM!",
      text: "Now, the prime-5 rod. Tap 90 or 100—the one with more 5's.",
    },
    step_Q2_10_correct: {
      title: "Correct!",
      text: "That's Correct! We have placed two 5s in the LCM box.",
    },
    step_Q2_10_incorrect: {
      title: "Try Again!",
      text: "Oops! 100 has two 5s, but 90 has only one 5.",
    },

    step_Q2_11_start: {
      title: "Let's Find LCM!",
      text: "Finally, the prime-7 rod. Tap 90 or 100—the one with more 7's.",
    },
    step_Q2_11_correct: {
      title: "Correct!",
      text: "That's Correct! Neither 90 nor 100 has 7s, so we don't need any 7s in the LCM box.",
    },
    step_Q2_11_incorrect: {
      title: "Try Again!",
      text: "Oops! Neither 90 nor 100 has any 7s.",
    },

    step_Q2_12: {
      title: "The Result!",
      text: "Let's Find LCM!<br>LCM of 90 and 100<br>= <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='5'>5</span><br>= 900",
    },

    step_Q2_13: {
      title: "Your Turn!",
      text: "Tap the correct LCM of 90 and 100.",
    },

    step_Q2_13_correct: {
      title: "Excellent!",
      text: "That's correct! The LCM of 90 and 100 is 900.",
    },

    step_Q2_13_incorrect: {
      title: "Try Again!",
      text: "That's not correct. Think about the prime factors: 2 × 2 × 3 × 3 × 5 × 5.",
    },

    step_Q2_14: {
      title: "The Result!",
      text: "Let's Find LCM!<br>LCM of 90 and 100<br>= <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='5'>5</span><br>= 900",
    },

    final_screen_Q2: {
      title: "Fantastic!",
      text: "Excellent work! You've mastered finding the LCM using prime factorisation for both questions!",
    },
  },
  
  id: {
    step_Q2_0: {
      title: "Halo Lagi!",
      text: "Sekarang mari kita berlatih mencari KPK dari 90 dan 100 menggunakan faktorisasi prima.",
    },
    step_Q2_1: {
      title: "Palu Ajaib",
      text: "Saatnya menggunakan palu ajaibku untuk menemukan faktorisasi prima dari 90 dan 100!",
    },

    // Factorization of 90
    step_Q2_2_start: {
      title: "Faktorkan 90",
      text: "Gunakan palu yang disediakan dan pecahkan angka 90 sampai setiap bagiannya menjadi bilangan prima.",
    },
    step_Q2_2_success: {
      title: "Bagus!",
      text: (p) =>
        `Hore! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> berhasil. Silakan pecahkan <b>${p.newNum}</b> sekarang.`,
    },
    step_Q2_2_fail: {
      title: "Belum Tepat!",
      text: (p) =>
        `Ups! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> tidak berhasil. <b>${p.num}</b> tidak habis dibagi oleh ${p.hammerNum}. Coba palu yang lain!`,
    },
    step_Q2_2_done: {
      title: "Kerja Bagus!",
      text: (p) =>
        `Hore! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> berhasil. Dan, kita selesai! Karena setiap bagian sekarang adalah bilangan prima.`,
    },

    step_Q2_3: {
      title: "Memvisualisasikan Faktor",
      text: "Jadi, 90 terdiri dari dua angka 2, dua angka 3, dan satu angka 5. Kami telah menempatkannya di kotak batang prima 90!",
    },

    // Factorization of 100
    step_Q2_4_start: {
      title: "Faktorkan 100",
      text: "Sekarang, mari kita pecah 100 menjadi bagian-bagian yang lebih kecil menggunakan palu sampai setiap bagiannya menjadi bilangan prima!",
    },
    step_Q2_4_success: {
      title: "Bagus!",
      text: (p) =>
        `Hore! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> berhasil.`,
    },
    step_Q2_4_fail: {
      title: "Belum Tepat!",
      text: (p) =>
        `Ups! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> tidak berhasil. <b>${p.num}</b> tidak habis dibagi oleh ${p.hammerNum}.`,
    },
    step_Q2_4_done: {
      title: "Kerja Bagus!",
      text: (p) =>
        `Hore! <div class="inline-hammer-wrapper"><img src="${window.APP_TEXTS?.item_images?.hammer_active || "./assets/hammer_active.png"}" data-number="${p.hammerNum}" class="inline-hammer" alt="Hammer"></div> berhasil. Dan, kita selesai! Karena setiap bagian sekarang adalah bilangan prima.`,
    },

    step_Q2_5: {
      title: "Memvisualisasikan Faktor",
      text: "Bagus! 100 terdiri dari dua angka 2 dan dua angka 5. Mari kita lihat kotak batang primanya.",
    },

    // Combining for LCM
    step_Q2_6: {
      title: "Siap untuk KPK",
      text: "Kami telah menyatukan kotak batang prima dari 90 dan 100 untuk mencari KPK.",
    },
    step_Q2_7: {
      title: "Kotak KPK",
      text: "Ini adalah kotak KPK. Kita akan menggunakan ini untuk mencari KPK dari 90 dan 100.",
    },

    // Finding LCM steps
    step_Q2_8_start: {
      title: "Mari Menemukan KPK",
      text: "Mulai dengan batang prima-2. Ketuk 90 atau 100—yang memiliki lebih banyak angka 2.",
    },
    step_Q2_8_correct: {
      title: "Benar!",
      text: "Itu Benar! Keduanya memiliki dua angka 2, jadi kami telah menempatkan dua angka 2 di kotak KPK. Klik berikutnya untuk memeriksa batang prima-3.",
    },
    step_Q2_8_incorrect: {
      title: "Coba Lagi!",
      text: "Ups! Baik 90 maupun 100 memiliki dua angka 2.",
    },

    step_Q2_9_start: {
      title: "Mari Menemukan KPK",
      text: "Sekarang, lihatlah batang prima-3. Ketuk 90 atau 100—yang memiliki lebih banyak angka 3.",
    },
    step_Q2_9_correct: {
      title: "Hore!",
      text: "Hore! Kami telah menempatkan dua angka 3 di kotak KPK.",
    },
    step_Q2_9_incorrect: {
      title: "Coba Lagi!",
      text: "Ups! 90 memiliki dua angka 3, tetapi 100 tidak memiliki angka 3.",
    },

    step_Q2_10_start: {
      title: "Mari Menemukan KPK",
      text: "Sekarang, batang prima-5. Ketuk 90 atau 100—yang memiliki lebih banyak angka 5.",
    },
    step_Q2_10_correct: {
      title: "Benar!",
      text: "Itu Benar! Kami telah menempatkan dua angka 5 di kotak KPK.",
    },
    step_Q2_10_incorrect: {
      title: "Coba Lagi!",
      text: "Ups! 100 memiliki dua angka 5, tetapi 90 hanya memiliki satu angka 5.",
    },

    step_Q2_11_start: {
      title: "Mari Menemukan KPK",
      text: "Terakhir, batang prima-7. Ketuk 90 atau 100—yang memiliki lebih banyak angka 7.",
    },
    step_Q2_11_correct: {
      title: "Benar!",
      text: "Itu Benar! Baik 90 maupun 100 tidak memiliki angka 7, jadi kita tidak perlu angka 7 di kotak KPK.",
    },
    step_Q2_11_incorrect: {
      title: "Coba Lagi!",
      text: "Ups! Baik 90 maupun 100 tidak memiliki angka 7.",
    },

    step_Q2_12: {
      title: "Hasilnya!",
      text: "Ayo Cari KPK!<br>KPK dari 90 dan 100<br>= <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='5'>5</span><br>= 900",
    },

    step_Q2_13: {
      title: "Giliranmu!",
      text: "Ketuk KPK yang benar dari 90 dan 100.",
    },

    step_Q2_13_correct: {
      title: "Luar Biasa!",
      text: "Itu benar! KPK dari 90 dan 100 adalah 900.",
    },

    step_Q2_13_incorrect: {
      title: "Coba Lagi!",
      text: "Itu tidak benar. Pikirkan tentang faktor prima: 2 × 2 × 3 × 3 × 5 × 5.",
    },

    step_Q2_14: {
      title: "Hasilnya!",
      text: "Ayo Cari KPK!<br>KPK dari 90 dan 100<br>= <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='2'>2</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='3'>3</span> × <span class='num-prime' data-value='5'>5</span> × <span class='num-prime' data-value='5'>5</span><br>= 900",
    },

    final_screen_Q2: {
      title: "Fantastis!",
      text: "Kerja yang luar biasa! Kamu telah menguasai cara mencari KPK menggunakan faktorisasi prima untuk kedua pertanyaan!",
    },
  },
};

// Export for use in index.js
if (typeof window !== 'undefined') {
  window.Q2_TEXTS = Q2_TEXTS;
} else if (typeof module !== 'undefined') {
  module.exports = Q2_TEXTS;
}