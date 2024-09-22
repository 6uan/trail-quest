const renderTrail = async () => {
  console.log("looking for url");
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch(`/trails`);
  const data = await response.json();

  const trailContent = document.getElementById("trail-content");

  const trail = data.find((trail) => trail.id === requestedID);

  if (trail) {
    console.log(trail);
    console.log("generating trail");
    document.getElementById("image").src = trail.image;
    document.getElementById("trail-name").textContent = trail.parkTrailName;
    document.getElementById("city-state").textContent = trail.cityState;
    document.getElementById("distance").textContent = trail.distance;
    document.getElementById("distance-type").textContent = trail.distanceType;
    document.getElementById("description").textContent = trail.description;
  } else {
    const noTrail = document.createElement("p");
    noTrail.textContent = "No trail found 🚫🏃‍♂️";
    trailContent.appendChild(noTrail);
  }
};

renderTrail();
