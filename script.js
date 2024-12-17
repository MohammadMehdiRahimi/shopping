document.documentElement.setAttribute("color-scheme", "light");
const collapseMenu = document.getElementById("collapse-menu");
collapseMenu.addEventListener("click", () => {
  collapseMenu.classList.add("d-none");
  const navbar2 = document.getElementById("navbar2");
  navbar2.classList.remove("d-none");
  navbar2.classList.add("d-flex");
});
