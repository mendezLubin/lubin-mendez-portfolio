const selHamburgerBtn= document.querySelector(".hamburger-button");
const selMenu= document.getElementById("menu");

selHamburgerBtn.addEventListener("click", () => {
  selMenu.classList.toggle("mobile-menu");
});

// Removes the class when any link inside it is clicked
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    selMenu.classList.remove("mobile-menu");
  });
});

// Automatically close the mobile menu by removing the clss if the screen is resized to desktop width (≥768px)
// This prevents the mobile menu from staying open on larger screens
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    selMenu.classList.remove("mobile-menu");
  }
});

// Extra safety: close the mobile menu (removes class) on initial page load if already in desktop mode
// This prevents potential issues if the "mobile-menu" class was somehow applied (e.g., from cache or history)
window.addEventListener("load", () => {
  if (window.innerWidth >= 768) {
    selMenu.classList.remove("mobile-menu");
  }
});