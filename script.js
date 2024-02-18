const darkModeToggleButton = document.getElementById("toggle-button");
let storagedDarkMode = localStorage.getItem("darkmode");
const moonIcon = darkModeToggleButton.children[0];
const sunIcon = darkModeToggleButton.children[1];

function enableMoonIcon() {
  moonIcon.style.display = "inline-block";
  sunIcon.style.display = "none";
}

function enableSunIcon() {
  sunIcon.style.display = "inline-block";
  moonIcon.style.display = "none";
}

function enableDarkMode() {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkmode", "enabled");
}

// darkModeToggleButton.addEventListener("click", function () {
//   if (storagedDarkMode !== "enabled") {
//     enableMoonIcon();
//   }
// });
