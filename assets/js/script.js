window.onload = function(){
  document.querySelector(".menuMobile").addEventListener("click", function(){
      if(document.querySelector(".menu nav ul").style.display == 'flex') {
          document.querySelector(".menu nav ul").style.display ='none';
      } else {
          document.querySelector(".menu nav ul").style.display = 'flex';
      }
  })
};

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args)
    }
}
const target = document.querySelectorAll('[data-animate]');
const animationClass = 'animate';

function animeScroll () {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) /4);
  target.forEach(function(element){
    if ((windowTop) > element.offsetTop) {
      element.classList.add(animationClass)
    } else {
      element.classList.remove(animationClass)
    }
  }
)};
// animeScroll();
if(target.length) {
  window.addEventListener('scroll',debounce(function() {
    animeScroll();
  }, 200));
}