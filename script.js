
function togglePlay() {
  const video = document.getElementById("myVideo");
  const playBtn = document.querySelector(".play-button");

  if (video.paused) {
    video.play();
    playBtn.style.display = "none";
  } else {
    video.pause();
    playBtn.style.display = "flex";
  }

  video.onended = () => {
    playBtn.style.display = "flex";
  };
}

let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

// Auto change every 5 seconds
setInterval(nextSlide, 3000);

// Manual navigation
function goToSlide(index) {
  showSlide(index);
}
