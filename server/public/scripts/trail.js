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

    const trailTitle = document.createElement("h2");
    trailTitle.classList.add("trail-title");
    trailTitle.textContent = trail.parkTrailName;
    trailBody.appendChild(trailTitle);

    const trailDescription = document.createElement("p");
    trailDescription.classList.add("trail-description");
    trailDescription.textContent = trail.description;
    trailBody.appendChild(trailDescription);

    const trailImageContainer = document.createElement("div");
    trailImageContainer.classList.add("trail-image-container");

    const trailImage = document.createElement("img");
    trailImage.classList.add("trail-image");
    trailImage.src = trail.trailImage;
    trailImageContainer.appendChild(trailImage);
    trailBody.appendChild(trailImageContainer);

    trailContent.appendChild(trailBody);
    // document.getElementById("image").src = trail.image;
    // document.getElementById("trail-name").textContent = trail.parkTrailName;
    // document.getElementById("city-state").textContent = trail.cityState;
    // document.getElementById("distance").textContent = trail.distance;
    // document.getElementById("distance-type").textContent = trail.distanceType;
    // document.getElementById("description").textContent = trail.description;
  } else {
    const noTrail = document.createElement("p");
    noTrail.textContent = "No trail found 🚫🏃‍♂️";
    trailContent.appendChild(noTrail);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderTrail();
});
