document.querySelectorAll("a.tab-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

const tabs = new bootstrap.Tab(document.getElementById("mens-tab"));
// Select the default tab (Men's Clothing)
tabs.show();
// Add event listeners for tab switching
document.getElementById("mens-tab").addEventListener("click", () => {
  tabs.show();
});
document.getElementById("womens-tab").addEventListener("click", () => {
  tabs.show();
});
