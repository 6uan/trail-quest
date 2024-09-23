const rendertrails = async () => {
  const response = await fetch("/trails");
  const data = await response.json();

  const trailCards = document.getElementById("trail-cards");

  if (data) {
    console.log(data);
    data.map((trail) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const cardImageContainer = document.createElement("div");
      cardImageContainer.classList.add("card-image-container");

      const cardImage = document.createElement("img");
      cardImage.classList.add("card-image");
      cardImage.src = trail.image;

      cardImageContainer.appendChild(cardImage);

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardBodyLeft = document.createElement("div");
      cardBodyLeft.classList.add("card-body-left");

      const cardBodyLeftText = document.createElement("p");
      cardBodyLeftText.textContent = trail.parkTrailName;
      cardBodyLeftText.classList.add("card-body-left-text");

      const tooltip = document.createElement("span");
      tooltip.textContent = trail.parkTrailName;
      tooltip.classList.add("tooltip");

      const link = document.createElement("a");
      link.classList.add("card-link");
      link.setAttribute("role", "button");
      link.href = `/trails/${trail.id}`;

      link.appendChild(cardBodyLeftText);

      cardBodyLeft.appendChild(link);
      cardBodyLeft.appendChild(tooltip);

      const cardBodyRight = document.createElement("div");
      cardBodyRight.classList.add("card-body-right");

      const cardBodyRightText = document.createElement("p");
      cardBodyRightText.textContent = `${trail.distance} mi`;
      cardBodyRightText.classList.add("card-body-right-text");

      cardBodyRight.appendChild(cardBodyRightText);

      cardBody.appendChild(cardBodyLeft);
      cardBody.appendChild(cardBodyRight);

      card.appendChild(cardImageContainer);
      card.appendChild(cardBody);

      trailCards.appendChild(card);
      console.log("card genned");
    });
  } else {
    const noTrails = document.createElement("p");
    noTrails.textContent = "No trails found 🚫🏃‍♂️";
    trailCards.appendChild(noTrails);
  }
};

const requestedUrl = window.location.href.split("/").pop();

if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  rendertrails();
}
