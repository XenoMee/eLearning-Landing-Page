const darkModeToggleButton = document.getElementById("toggle-button");
let storagedDarkMode = localStorage.getItem("darkmode");
const moonIcon = darkModeToggleButton.children[0];
const sunIcon = darkModeToggleButton.children[1];

if (storagedDarkMode === "enabled") {
  enableDarkMode();
  enableSunIcon();
} else enableMoonIcon();

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

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkmode", null);
}

darkModeToggleButton.addEventListener("click", function () {
  storagedDarkMode = localStorage.getItem("darkmode");
  if (storagedDarkMode !== "enabled") {
    enableDarkMode();
    enableSunIcon();
  } else {
    disableDarkMode();
    enableMoonIcon();
  }
});
