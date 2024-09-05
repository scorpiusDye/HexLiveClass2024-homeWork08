import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.2,
  spaceBetween: 24,
  
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row"
      }
    },
    1199: {
      slidesPerView: 4,
      grid: {
        rows: 4,
        fill: "row"
      }
    }
  }
});



//content-sticky-bg
document.addEventListener("scroll", function () {
  const anchorList = document.querySelector(".bg-sticky-transparent");
  if (anchorList.getBoundingClientRect().top === 0) {
    anchorList.classList.add("is-sticky");
  } else {
    anchorList.classList.remove("is-sticky");
  }
});







//nav-menu 開關 (w6)
const toggleBtn = document.querySelector(".toggle-btn");
const toggleIcon = document.querySelector(".toggle-icon");
const menuContent = document.querySelector(".menu-content");

toggleBtn.addEventListener("click", function () {
  // 判斷選單當前是否顯示
  const isMenuVisible = menuContent.style.display === "block";

  // 切換選單顯示/隱藏
  menuContent.style.display = isMenuVisible ? "none" : "block";

  // 根據選單狀態切換圖標類
  toggleIcon.classList.toggle("bi-list", isMenuVisible);
  toggleIcon.classList.toggle("bi-x", !isMenuVisible);
});


// nav 文字換色 (w6)
const input = document.querySelector('.form-control');
const span = document.querySelector('.text-color-focus-change');

input.addEventListener('focus', function() {
span.classList.add('focused');
});

input.addEventListener('blur', function() {
span.classList.remove('focused');
});