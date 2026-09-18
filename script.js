document.querySelectorAll(".link").forEach((link) => {
  link.addEventListener("click", () => {
    link.blur();
  });
});
