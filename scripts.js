document.getElementById("play-btn").addEventListener("click", function () {
  const audio = document.getElementById("audio");
  const playIcon = document.getElementById("play-icon");

  if (audio.paused) {
    audio.play();
    playIcon.src = "./images/pause.png"; // Change to pause icon
  } else {
    audio.pause();
    playIcon.src = "./images/play.png"; // Change back to play icon
  }
});

// Set the target date and time to the wedding day: 28th August at 16:00
const targetDate = new Date("May 03, 2025 16:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown").innerHTML = "TIME UP";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText =
    seconds < 10 ? "0" + seconds : seconds;
}, 1000);

//

function createFlower() {
  const flower = document.createElement("img");
  flower.src = "https://cdn-icons-png.flaticon.com/512/531/531813.png";
  flower.style.position = "fixed";
  flower.style.width = "30px";
  flower.style.height = "30px";
  flower.style.left = Math.random() * window.innerWidth + "px";
  flower.style.top = "0";
  document.body.appendChild(flower);

  gsap.to(flower, {
    y: window.innerHeight,
    duration: Math.random() * 10 + 5,
    opacity: 0,
    onComplete: () => flower.remove(),
    ease: "linear",
  });
}

setInterval(createFlower, 1000);
