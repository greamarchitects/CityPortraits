document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".dashboard-card");

  cards.forEach(card => {
    const data = {
      id: card.id,
      category: card.dataset.category,
      type: card.dataset.type,
      tags: card.dataset.tags.split(" "),
      items: [...card.querySelectorAll("[data-key]")]
        .map(item => item.dataset.key)
    };

    console.log(data); // for now

    // Example: click interaction
    card.addEventListener("click", () => {
      console.log("Clicked:", data);
    });
  });

});