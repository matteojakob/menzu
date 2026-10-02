// Mobile navigation toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("is-open", !open);
});

nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
});

// Menu tabs: show one category at a time (without JS all categories stay visible)
const tabs = [...document.querySelectorAll(".menu-nav a")];
const panels = [...document.querySelectorAll(".menu-cat")];

function showCategory(id) {
  tabs.forEach((tab) => {
    const active = tab.getAttribute("aria-controls") === id;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  panels.forEach((panel) => (panel.hidden = panel.id !== id));
}

if (tabs.length) {
  document.documentElement.classList.add("has-tabs");
  showCategory(tabs[0].getAttribute("aria-controls"));

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      showCategory(tab.getAttribute("aria-controls"));
    });
    tab.addEventListener("keydown", (e) => {
      const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (!step) return;
      const next = tabs[(i + step + tabs.length) % tabs.length];
      next.focus();
      next.click();
    });
  });
}

// Keep the copyright year current
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
