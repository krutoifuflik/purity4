var video = document.getElementById("full_video");
var playPauseBtn = document.getElementById("playPauseBtn");

// Set video source
video.src = "./video/The Gucci Aria Advertising Campaign.mp4";

playPauseBtn.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playPauseBtn.classList.add("hidden_video"); // Hide the play button
  } else {
    video.pause();
    playPauseBtn.classList.remove("hidden_video"); // Show the play button
  }
});

video.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playPauseBtn.classList.add("hidden_video"); // Hide the play button
  } else {
    video.pause();
    playPauseBtn.classList.remove("hidden_video"); // Show the play button
  }
});
