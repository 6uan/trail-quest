const trailCards = document.getElementById("trail-cards");

// Function to render trails
const renderTrails = (data) => {
  trailCards.innerHTML = ""; // Clear existing cards before rendering new ones

  if (data && data.length > 0) {
    data.forEach((trail) => {
      const link = document.createElement("a");
      link.classList.add("card-link");
      link.setAttribute("role", "button");
      link.href = `/trails/${trail.id}`;

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
      cardBodyLeftText.textContent = trail.parktrailname;
      cardBodyLeftText.classList.add("card-body-left-text");

      const tooltip = document.createElement("span");
      tooltip.textContent = trail.parktrailname;
      tooltip.classList.add("tooltip");

      cardBodyLeft.appendChild(cardBodyLeftText);
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

      link.appendChild(card);

      trailCards.appendChild(link);
    });
  } else {
    const noTrailsContainer = document.createElement("div");
    noTrailsContainer.classList.add("no-trails-container");
    const noTrails = document.createElement("p");
    noTrails.classList.add("no-trails");
    noTrails.textContent = "No trails found 🚫🏃‍♂️";
    noTrailsContainer.appendChild(noTrails);
    trailCards.appendChild(noTrailsContainer);
  }
};

// Function to fetch trails (either default or filtered)
const fetchTrails = async (query = "") => {
  const endpoint = query
    ? `/trails/search?q=${encodeURIComponent(query)}`
    : "/trails";

  const response = await fetch(endpoint);
  const data = await response.json();
  renderTrails(data); // Render trails with the fetched data
};

// Event listener for search query updates
window.addEventListener("searchQueryUpdated", (event) => {
  const query = event.detail; // The search query passed from header.js
  console.log("Heard search query:", query);
  fetchTrails(query); // Fetch filtered trails based on the search query
});

// Initial fetch of all trails
const requestedUrl = window.location.href.split("/").pop();
if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  fetchTrails(); // Fetch all trails on page load
}
