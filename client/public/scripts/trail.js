const renderTrail = async () => {
  console.log("looking for url");
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch(`/trails`);
  const data = await response.json();

  const trailContent = document.getElementById("trail-content");

  const trail = data.find((trail) => trail.id === requestedID);

  if (trail) {
    const trailBody = document.createElement("div");
    trailBody.classList.add("trail-body");

    // topBody has trail title
    const topBody = document.createElement("div");
    topBody.classList.add("top-body");

    const trailTitle = document.createElement("h2");
    trailTitle.classList.add("trail-title");
    trailTitle.textContent = trail.parkTrailName;
    topBody.appendChild(trailTitle);
    trailBody.appendChild(topBody);

    // bottomBody has description, miles, location, and images
    const bottomBody = document.createElement("div");
    bottomBody.classList.add("bottom-body");

    const bottomLeft = document.createElement("div");
    bottomLeft.classList.add("bottom-left");

    const infoBanner = document.createElement("div");
    infoBanner.classList.add("info-banner");
    const trailMiles = document.createElement("p");
    trailMiles.classList.add("trail-miles");
    trailMiles.textContent = `${trail.distance} ${trail.distanceType}`;
    infoBanner.appendChild(trailMiles);

    const cityState = document.createElement("p");
    cityState.classList.add("city-state");
    cityState.textContent = trail.cityState;
    infoBanner.appendChild(cityState);

    bottomLeft.appendChild(infoBanner);

    const trailText = document.createElement("div");
    trailText.classList.add("trail-text");

    const trailDescription = document.createElement("p");
    trailDescription.classList.add("trail-description");
    trailDescription.textContent = trail.description;
    trailText.appendChild(trailDescription);
    bottomLeft.appendChild(trailText);

    const link = document.createElement("a");
    link.classList.add("directions-link");
    link.href = trail.directions;
    link.target = "_blank";

    const trailDirectionContainer = document.createElement("div");
    trailDirectionContainer.classList.add("trail-direction-container");
    const trailDirection = document.createElement("p");
    trailDirection.classList.add("trail-direction");
    trailDirection.textContent = "Directions";

    link.appendChild(trailDirection);
    trailDirectionContainer.appendChild(link);
    bottomLeft.appendChild(trailDirectionContainer);

    bottomBody.appendChild(bottomLeft);

    const bottomRight = document.createElement("div");
    bottomRight.classList.add("bottom-right");

    const trailImageContainer = document.createElement("div");
    trailImageContainer.classList.add("trail-image-container");
    const trailImage = document.createElement("img");
    trailImage.classList.add("trail-image");
    trailImage.src = trail.trailImage;
    trailImageContainer.appendChild(trailImage);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    const image = document.createElement("img");
    image.classList.add("image");
    image.src = trail.image;
    imageContainer.appendChild(image);

    bottomRight.appendChild(trailImageContainer);
    bottomRight.appendChild(imageContainer);
    bottomBody.appendChild(bottomRight);

    trailBody.appendChild(bottomBody);
    trailContent.appendChild(trailBody);
  } else {
    const noTrail = document.createElement("p");
    noTrail.textContent = "No trail found 🚫🏃‍♂️";
    trailContent.appendChild(noTrail);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderTrail();
});
