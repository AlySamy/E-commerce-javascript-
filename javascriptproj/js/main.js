var slideImage = document.getElementById("sliderImg");
var flag = 0;
var intrval;

function next() {
  flag++;
  slideImage.src = `imgs/sliderimag/${flag}.jpg`;
  if (flag === 3) {
    flag = 0;
    img.src = `imgs/sliderimag/${flag}.jpg`;
  }
}
setInterval(next, 2000);
