"use strict";

function toggleVisibility(downBtn, section, upBtn) {
  downBtn.addEventListener("click", function () {
    section.classList.remove("hidden");
    upBtn.classList.remove("hidden");
    downBtn.classList.add("hidden");
  });
  upBtn.addEventListener("click", function () {
    section.classList.add("hidden");
    upBtn.classList.add("hidden");
    downBtn.classList.remove("hidden");
  });
}

toggleVisibility(
  document.querySelector(".Features_down_btn"),
  document.querySelector(".features-section"),
  document.querySelector(".Features_up_btn")
);

toggleVisibility(
  document.querySelector(".company_down_btn"),
  document.querySelector(".company-section"),
  document.querySelector(".company_up_btn")
);

toggleVisibility(
  document.querySelector(".menu_open_btn"),
  document.querySelector(".nav_bar"),
  document.querySelector(".menu_close_btn")
);

const media = function () {
  let query = window.matchMedia("(max-width: 600px)");

  if (query.matches) {
    document.querySelector(".nav_bar").classList.add("hidden");
  } else {
    document.querySelector(".nav_bar").classList.remove("hidden");
  }
};
onresize = media;
onload = media;
