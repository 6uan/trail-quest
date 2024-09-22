const rendertrails = async () => {
  const response = await fetch("/trails");
  const data = await response.json();

  const trailCards = document.getElementById("trail-cards");

  if (data) {
    data.map((trail) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const cardImage = document.createElement("img");
      cardImage.classList.add("card-image");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      cardBody.textContent = trail.name;

      card.appendChild(cardImage);
      card.appendChild(cardBody);

      trailCards.appendChild(card);
    });
  } else {
    const noTrails = document.createElement("p");
    noTrails.textContent = "No trails found 🚫🏃‍♂️";
  }
};

rendertrails();
