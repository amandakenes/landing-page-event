const dropdown = document.querySelector(".dropdown");
const menuIcon = document.querySelector(".menu-icon");

const flipButtons = document.querySelectorAll(".card-front button");
const unflipButtons = document.querySelectorAll(".card-back button");

// carrosel de imagens para os palestrantes (talkers)
document.addEventListener("DOMContentLoaded", function () {
  const firstRow = document.getElementById("first-row");
  const secondRow = document.getElementById("second-row");

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const images = document.querySelectorAll(".talkers img");
  const totalImages = images.length;

  let currentIndex = 0;

  function showCurrentImage() {
    images.forEach((img, index) => {
      if (index === currentIndex) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  }

  function nextImage() {
    currentIndex++;
    if (currentIndex >= totalImages) {
      currentIndex = 0;
    }
    showCurrentImage();
  }

  // configuração do intervalo para avançar automaticamente
  const interval = setInterval(nextImage, 2000);

  prevBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalImages - 1;
    }
    showCurrentImage();
  });

  nextBtn.addEventListener("click", nextImage);

  showCurrentImage();
});

// dropdown menu
dropdown.addEventListener("mouseenter", function () {
  const submenu = this.querySelector(".submenu");
  submenu.style.display = "block";

  menuIcon.classList.remove("fa-bars");
  menuIcon.classList.add("fa-caret-down");
});

dropdown.addEventListener("mouseleave", function () {
  const submenu = this.querySelector(".submenu");
  submenu.style.display = "none";

  menuIcon.classList.remove("fa-caret-down");
  menuIcon.classList.add("fa-bars");
});

// cards da programação
flipButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = button.closest(".card");
    card.classList.add("flipped");
  });
});

unflipButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = button.closest(".card");
    card.classList.remove("flipped");
  });
});
