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

// モーダルを開く
$(".js-modal-open").on("click", function (e) {
  e.preventDefault();

  $("#js-about-modal")[0].showModal();

  // 後ろの要素が選択できない
  // $("#js-about-modal")[0].show();
});

// モーダルを閉じる
$(".js-modal-close").on("click", function (e) {
  e.preventDefault();

  $("#js-about-modal")[0].close();
});

// スムーススクロール
$('a[href^="#"]').on("click", function (e) {
  e.preventDefault();

  const speed = 700;

  const id = $(this).attr("href");
  const target = "#" == id ? "html" : id;
  const position = $(target).offset().top;

  $("html, body").animate(
    { scrollTop: position },
    speed,
    "swing" // or linear
  );
});

// スマホの場合のスムーススクロールは、ドロワーメニューを閉じる
$('#js-drawer-content a[href^="#"]').on("click", function (e) {
  $("#js-drawer-icon").removeClass("is-checked");
  $("#js-drawer-content").removeClass("is-checked");
});
