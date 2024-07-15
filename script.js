var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

document.addEventListener("scroll", function () {
  var scrisapare = document.getElementById("scrisapare");
  if (window.scrollY > 100) {
    scrisapare.style.display = "grid";
  } else {
    scrisapare.style.display = "none";
  }
});

document.addEventListener("scroll", function () {
  var scrisapare = document.getElementById("scrisapare2");
  if (window.scrollY > -100) {
    scrisapare2.style.display = "grid";
  } else {
    scrisapare2.style.display = "none";
  }
});
