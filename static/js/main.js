let logoImg = document.getElementById("logoImg");
let jobPos = document.getElementById("job-pos");
let currentIndex = 0;
let currentIndexjp = 0;
let logoList = ["GAME DEP", "FILM DEP", "MUSIC DEP", "TECH DEP", "VISUALS DEP"];
let posList = [
  "Web Developer",
  "Mobile Developer",
  "UI/UX Designer",
  "Designer By Heart",
];

logoImg.addEventListener("click", () => {
  // Change the logo every 2 seconds
  setInterval(updateLogo, 500);
});

setInterval(updateJobPos, 4000);

function updateLogo() {
  // Update the `src` attribute
  logoImg.src = `images/${logoList[currentIndex]}.png`;
  // Move to the next index, looping back to 0 if needed
  currentIndex = (currentIndex + 1) % logoList.length;
}

function updateJobPos() {
  // Remove the animation class to reset the animation
  jobPos.parentNode.classList.remove("typewriter");
  // Change the text content
  jobPos.innerText = `${posList[currentIndexjp]}`;

  // Trigger a reflow to restart the animation
  void jobPos.parentNode.offsetWidth; // This forces a reflow

  // Reapply the animation class
  jobPos.parentNode.classList.add("typewriter");

  // Move to the next position in the list
  currentIndexjp = (currentIndexjp + 1) % posList.length;
}
