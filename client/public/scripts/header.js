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
