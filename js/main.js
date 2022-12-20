var slideImage = document.getElementById("sliderImg");
var flag = 0;
var intrval;
var cou = document.getElementById("cou");

function next() {
  flag++;
  slideImage.src = `imgs/sliderimag/${flag}.jpg`;
  if (flag === 4) {
    flag = 1;
    slideImage.src = `imgs/sliderimag/${flag}.jpg`;
  }
}
setInterval(next, 2000);

var allProducts = document.querySelectorAll(".dis");
var allBtn = document.getElementById("all");
var shoseBtn = document.getElementById("shose");
var clothesBtn = document.getElementById("clothes");
var foodBtn = document.getElementById("food");

function allproductDis() {
  for (i = 0; i < allProducts.length; i++) {
    allProducts[i].style.display = "block";
  }
}
function shoseDis() {
  for (i = 4; i < allProducts.length; i++) {
    allProducts[i].style.display = "none";
  }

  for (i = 0; i < 4; i++) {
    allProducts[i].style.display = "block";
  }
}
function clothesDis() {
  for (i = 0; i < 4; i++) {
    allProducts[i].style.display = "none";
  }
  for (i = 4; i < 8; i++) {
    allProducts[i].style.display = "block";
  }
  for (i = 8; i < allProducts.length; i++) {
    allProducts[i].style.display = "none";
  }
}
function foodDis() {
  for (i = 0; i < 8; i++) {
    allProducts[i].style.display = "none";
  }
  for (i = 8; i < allProducts.length; i++) {
    allProducts[i].style.display = "block";
  }
}
allBtn.addEventListener("click", allproductDis);
shoseBtn.addEventListener("click", shoseDis);
clothesBtn.addEventListener("click", clothesDis);
foodBtn.addEventListener("click", foodDis);

clickCounter();
localStorage.clickcount = Number(localStorage.clickcount) - 1;
document.getElementById("cou").innerHTML = localStorage.clickcount;

function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("cou").innerHTML = localStorage.clickcount;
}

let addTo = document.getElementsByClassName("addingToCard");
for (let i = 0; i < addTo.length; i++) {
  addTo[i].addEventListener("click", clickCounter);
}

window.onscroll = function () {
  myFunction();
};
function myFunction() {
  if (document.documentElement.scrollTop > 500) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
}

let scroll = document.querySelector(".go-top-btn");
function scrollToTop() {
  window.scrollTo(0, 0);
}
btnContainer = document.getElementById("filterbtn");
let btnFilter = btnContainer.getElementsByClassName("btnFilter");
for (var i = 0; i < btnFilter.length; i++) {
  btnFilter[i].addEventListener("click", function () {
    var current = btnContainer.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
