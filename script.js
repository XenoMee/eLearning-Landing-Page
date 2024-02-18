const darkModeToggleButton = document.getElementById("toggle-button");
let storagedDarkMode = localStorage.getItem("darkmode");
const moonIcon = darkModeToggleButton.children[0];
const sunIcon = darkModeToggleButton.children[1];
const headerLogo = document.getElementById("header-logo-image");
const footerLogo = document.getElementById("footer-logo-image");

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
  headerLogo.src = "./assets/logo-light.svg";
  footerLogo.src = "./assets/logo-dark.svg";
  localStorage.setItem("darkmode", "enabled");
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  headerLogo.src = "./assets/logo-dark.svg";
  footerLogo.src = "./assets/logo-light.svg";
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
