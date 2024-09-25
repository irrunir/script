(function () {
  "use strict";

  var items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

function lodemore1() {
  document.querySelector(".timeline button div").style.display = "block";
  setTimeout(function() {
    document.querySelector(".shabnam .timeline2").style.display = "block";
    document.querySelector(".timeline .lode-more").style.display = "none";
    document.querySelector(".timeline ul").style.cssText = "padding: 50px 0 0 0;";
    document.querySelector(".timeline2 ul").style.cssText = "padding: 0 0 50px 0;";
  }, 1500);
}
function lodemore2() {
  document.querySelector(".timeline2 button div").style.display = "block";
  setTimeout(function() {
    document.querySelector(".shabnam .timeline3").style.display = "block";
    document.querySelector(".timeline2 .lode-more").style.display = "none";
    document.querySelector(".timeline2 ul").style.cssText = "padding: 50px 0 0 0;";
    document.querySelector(".timeline3 ul").style.cssText = "padding: 0 0 50px 0;";
  }, 1500);
}
function lodemore3() {
  document.querySelector(".timeline3 button div").style.display = "block";
  setTimeout(function() {
    document.querySelector(".shabnam .timeline4").style.display = "block";
    document.querySelector(".timeline3 .lode-more").style.display = "none";
    document.querySelector(".timeline3 ul").style.cssText = "padding: 50px 0 0 0;";
    document.querySelector(".timeline4 ul").style.cssText = "padding: 0 0 50px 0;";
  }, 1500);
}