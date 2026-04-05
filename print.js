// JavaScript source code

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".start-btn");
  btn.addEventListener("click", () => {
    const paraEl = document.createElement("p");
    const bodyEl = document.querySelector("body");

    bodyEl.appendChild(paraEl);
    paraEl.textContent = "Ciallo～(∠・ω< )⌒⭐";
  });
});