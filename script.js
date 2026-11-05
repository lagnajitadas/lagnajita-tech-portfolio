const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

siteNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const discoveries = {
  python: "Programming capsule ✦ Python is one of the languages I’m practising as I strengthen my coding and problem-solving foundations.",
  web: "Web builder capsule ✦ I use HTML, CSS and JavaScript to create responsive pages and interactive browser experiences.",
  cloud: "Cloud journey capsule ☁ I’m exploring AWS and learning how cloud services can help publish projects for people to use.",
  secret: "A little fact ✨ I believe progress comes from building small things, learning from mistakes and improving one step at a time."
};

const output = document.getElementById("machineOutput");
document.querySelectorAll("[data-reveal]").forEach(button => {
  button.addEventListener("click", () => {
    output.textContent = discoveries[button.dataset.reveal];
    document.querySelectorAll("[data-reveal]").forEach(item => item.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
