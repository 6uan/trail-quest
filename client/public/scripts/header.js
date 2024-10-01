const header = document.querySelector("header");

const headerContainer = document.createElement("div");
headerContainer.classList.add("header-container");

// Left side of the header with logo and title

const headerLeft = document.createElement("div");
headerLeft.classList.add("header-left");

const headerTitle = document.createElement("h1");
headerTitle.classList.add("header-title");
headerTitle.textContent = "TrailQuest";

const headerImage = document.createElement("img");
headerImage.classList.add("header-image");
headerImage.src = "/logo.svg";

headerLeft.appendChild(headerImage);
headerLeft.appendChild(headerTitle);

// Right side of the header with home button

const headerRight = document.createElement("div");
headerRight.classList.add("header-right");
// headerRight.classList.add("pico");

// SEARCH INPUT
const searchInput = document.createElement("input");
searchInput.classList.add("search-input");
searchInput.placeholder = "Search trails...";
// REMOVE SEARCH INPUT
const exitSearch = document.createElement("div");
exitSearch.classList.add("exit-search");

const exitSearchImage = document.createElement("img");
exitSearchImage.classList.add("exit-search-image");
exitSearchImage.src = "/exit.svg";
exitSearchImage.style.visibility = "hidden";

searchInput.addEventListener("input", (e) => {
  const query = e.target.value;

  if (query === "" || query === null) {
    exitSearchImage.style.visibility = "hidden";
  } else {
    exitSearchImage.style.visibility = "visible";
  }

  // Notify trails.js of the search input change
  const event = new CustomEvent("searchQueryUpdated", { detail: query });
  window.dispatchEvent(event);
});

exitSearch.onclick = () => {
  searchInput.value = "";
  const event = new CustomEvent("searchQueryUpdated", { detail: "" });
  exitSearchImage.style.visibility = "hidden";
  window.dispatchEvent(event);
};

exitSearch.appendChild(exitSearchImage);
headerRight.appendChild(searchInput);
headerRight.appendChild(exitSearch);

// HOME BUTTON
const homeButton = document.createElement("button");
homeButton.classList.add("home-button");
homeButton.textContent = "Home";
homeButton.onclick = () => {
  window.location.href = "/";
};

headerRight.appendChild(homeButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer);
