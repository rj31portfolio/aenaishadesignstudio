// product-sec-code start
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Page load par first tab auto open
document.addEventListener("DOMContentLoaded", function () {
    const firstBtn = document.querySelector(".tablinks");
    if (firstBtn) {
        firstBtn.click();
    }
});
// product-sec-code end
AOS.init();



// Compare code start
function initComparisons() {
  var x = document.getElementsByClassName("img-comp-overlay");

  for (let i = 0; i < x.length; i++) {
    compareImages(x[i]);
  }

  function compareImages(img) {
    let slider, clicked = 0;

    let w = img.parentElement.offsetWidth;

    img.style.width = "50%";

    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");

    img.parentElement.insertBefore(slider, img);

    // ✅ CENTER START POSITION
    slider.style.left = (w / 2) + "px";
    slider.style.top = "50%";

    slider.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);

    slider.addEventListener("touchstart", slideReady);
    window.addEventListener("touchend", slideFinish);

    function slideReady(e) {
      e.preventDefault();
      clicked = 1;
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }

    function slideFinish() {
      clicked = 0;
    }

    function slideMove(e) {
      if (clicked == 0) return false;

      let w = img.parentElement.offsetWidth; // ✅ dynamic width
      let pos = getCursorPos(e);

      if (pos < 0) pos = 0;
      if (pos > w) pos = w;

      slide(pos);
    }

    function getCursorPos(e) {
      let a = img.parentElement.getBoundingClientRect();
      let x = (e.touches ? e.touches[0].pageX : e.pageX) - a.left;
      return x;
    }

    function slide(x) {
      img.style.width = x + "px";
      slider.style.left = x + "px"; // ✅ moves perfectly with drag
    }
  }
}

window.onload = initComparisons;
// Compare code start
