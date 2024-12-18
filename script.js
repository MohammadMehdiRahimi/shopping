const colseButton = document.getElementById("close-btn");
const navbar = document.getElementById("navbar");
colseButton.addEventListener("click", () => {
  if (navbar.classList.contains("open")) {
    navbar.style.transform = "translateX(200%)";
    navbar.classList.remove("open");
    colseButton.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    navbar.style.transform = "translateX(0)";
    navbar.classList.add("open");
    colseButton.innerHTML = `x`;
  }
});
