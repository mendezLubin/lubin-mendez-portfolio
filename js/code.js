// alert("conected");

const hamburguerButton = document.querySelector(".hamburguer-button");
const mobileMenu = document.getElementById("mobile-menu-nav");

hamburguerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// Closes the menu when any link inside it is clicked
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

