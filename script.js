// Search functionality
document.getElementById("searchBox").addEventListener("keyup", function() {
  let filter = this.value.toLowerCase();
  let cards = document.querySelectorAll(".coffee-card");

  cards.forEach(card => {
    let text = card.textContent.toLowerCase();
    card.style.display = text.includes(filter) ? "block" : "none";
  });
});

// Smooth scroll control
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
