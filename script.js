
function danceEl(elm) {
  elm.style.position = "fixed";
  elm.style.transition = "all 0.35s ease";

  /* STEP 1: Center */
  elm.style.top = "50%";
  elm.style.left = "50%";
  elm.style.transform = "translate(-50%, -50%) scale(1.2)";
  elm.style.animation = "tagdaDance 0.6s ease-in-out";

  /* STEP 2: Move UP */
  setTimeout(() => {
    elm.style.animation = "none";
    elm.style.top = "12%";
    elm.style.transform = "translate(-50%, 0) scale(1)";
  }, 700);
}

const btn = document.querySelector("#ms-random");

btn.addEventListener("click", function (e) {
  danceEl(e.target);
});
