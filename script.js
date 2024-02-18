const darkModeToggleButton = document.getElementById("toggle-button");
let storagedDarkMode = localStorage.getItem("darkmode");
const moonIcon = darkModeToggleButton.children[0];
const sunIcon = darkModeToggleButton.children[1];

function enableMoonIcon() {
  moonIcon.style.display = "inline-block";
  sunIcon.style.display = "none";
}

// darkModeToggleButton.addEventListener("click", function () {
//     if(storagedDarkMode !== "enabled") {

//     }
// });
