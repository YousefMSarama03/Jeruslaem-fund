  document.addEventListener("DOMContentLoaded", function () {
    const paragraph = document.getElementById("paragraph");
    const toggleBtn = document.getElementById("toggleBtn");

    // Hide toggle if content is 4 lines or less
    const checkLines = () => {
      const lineHeight = parseFloat(getComputedStyle(paragraph).lineHeight);
      const lines = Math.round(paragraph.scrollHeight / lineHeight);
      if (lines <= 4) {
        toggleBtn.style.display = "none";
      }
    };

    checkLines();

    toggleBtn.addEventListener("click", function (e) {
      e.preventDefault();
      paragraph.classList.toggle("expanded");

      if (paragraph.classList.contains("expanded")) {
        toggleBtn.textContent = "read less";
      } else {
        toggleBtn.textContent = "...read more";
      }
    });
  });
