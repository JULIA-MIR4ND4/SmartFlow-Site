export function scrollToSection(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
}