let lightboxTriggers = document.querySelectorAll(".lightbox-trigger");
let lightbox = document.querySelector(".lightbox");

const activateLightBox = () => {
  lightboxTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      let imgSrc = trigger.dataset.src;
      lightbox.innerHTML = `<img src=${imgSrc}>`;
      lightbox.classList.toggle("hidden");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.toggle("hidden");
  });
};

activateLightBox();
