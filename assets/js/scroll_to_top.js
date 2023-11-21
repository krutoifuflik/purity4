var scrollToTopButton = document.getElementById("scrollToTop");

// Show button when user scrolls down
window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.opacity = "1";
  } else {
    scrollToTopButton.style.opacity = "0";
  }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener("click", function () {
  // For smooth scrolling, use the behavior property
  window.scrollTo({ top: 0, behavior: "smooth" });
});
