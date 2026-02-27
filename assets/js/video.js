// Simple preload removal (optional)
window.addEventListener('load', () => {
  document.body.classList.remove('is-preload');
});

// Video thumbnail click handler
document.querySelectorAll(".thumb").forEach(t => {
  t.addEventListener("click", () => {
    const id = t.getAttribute("data-video");
    const main = document.getElementById("mainPlayer");
    if (main) {
      main.src = `https://www.youtube.com/embed/${id}`;
    }
  });
});