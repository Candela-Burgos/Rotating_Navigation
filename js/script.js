const getId = (id) => document.getElementById(`${id}`);
const container = document.querySelector(".container");
const btnOpen = getId("open");
const btnClose = getId("close");

btnOpen.addEventListener("click", () => {
  container.classList.add("rotate");
});

btnClose.addEventListener("click", () => {
  container.classList.remove("rotate");
});
