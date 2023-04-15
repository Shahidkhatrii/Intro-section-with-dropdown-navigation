// 'use strict'

// const featureDownBtn = document.querySelector('.Features_down_btn');
// const featureSection = document.querySelector('.features-section');
// const featureUpBtn = document.querySelector('.Features_up_btn');

// featureDownBtn.addEventListener('click',function(){
//     featureSection.classList.remove('hidden');
//     featureUpBtn.classList.remove('hidden');
//     featureDownBtn.classList.add('hidden');
// });
// featureUpBtn.addEventListener('click',function(){
//     featureSection.classList.add('hidden');
//     featureUpBtn.classList.add('hidden');
//     featureDownBtn.classList.remove('hidden');
// });

// const companyDownBtn = document.querySelector('.company_down_btn');
// const companySection = document.querySelector('.company-section');
// const companyUpBtn = document.querySelector('.company_up_btn');

// companyDownBtn.addEventListener('click',function(){
//     companySection.classList.remove('hidden');
//     companyUpBtn.classList.remove('hidden');
//     companyDownBtn.classList.add('hidden');

// });
// companyUpBtn.addEventListener('click',function(){
//     companySection.classList.add('hidden');
//     companyUpBtn.classList.add('hidden');
//     companyDownBtn.classList.remove('hidden');

// });

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
