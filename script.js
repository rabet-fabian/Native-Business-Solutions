// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-100px";
//   }
//   prevScrollpos = currentScrollPos;
// };

document.addEventListener("scroll", function () {
  var scrisapare = document.getElementById("scrisapare");
  if (window.scrollY > 400) {
    scrisapare.style.display = "grid";
  } else {
    scrisapare.style.display = "none";
  }
});

document.addEventListener("scroll", function () {
  var scrisapare2 = document.getElementById("scrisapare2");
  if (window.scrollY > 600) {
    scrisapare2.style.display = "grid";
  } else {
    scrisapare2.style.display = "none";
  }
});

// const hamMenu = document.querySelector(`.ham-menu`);

// const offScreenMenu = document.querySelector(`.off-screen-menu`);

// hamMenu.addEventListener(`click`, () => {
//   hamMenu.classList.toggle(`active`);
//   offScreenMenu.classList.toggle(`active`);
// });

window.onscroll = () => {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    console.log("You are at the end of the page.");
  }
};
const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

let mysBtn = document.getElementById("to-top");

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mysBtn.style.display = "block";
  } else {
    mysBtn.style.display = "none";
  }
});
