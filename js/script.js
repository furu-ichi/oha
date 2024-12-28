// ハンバーガーメニュークリック時
$("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();

  // ハンバーガーメニューをバツアイコンに変更
  $("#js-drawer-icon").toggleClass("is-checked");
  $("#js-drawer-content").toggleClass("is-checked");
});

// Q＆A開閉
$(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if ($(this).parent().hasClass("is-open")) {
    $(this).parent().removeClass("is-open");
    $(this).next().slideToggle();
  } else {
    $(this).parent().addClass("is-open");
    $(this).next().slideToggle();
  }
});

// Swiper
const swiper = new Swiper("#js-gallery-swiper", {
  spaceBetween: 85,

  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    // el: ".swiper-pagination",
    el: "#js-gallery-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-gallery-next",
    prevEl: "#js-gallery-prev",
  },

  // スクロールバーいらないので記述不要
  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
