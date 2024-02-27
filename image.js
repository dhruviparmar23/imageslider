let slideIndex = 0;
let playing = true;
let slideInterval;

function showSlide(index) {
  const slides = document.getElementsByClassName("slide");
  const captions = document.getElementsByClassName("caption");
  
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  for (let i = 0; i < captions.length; i++) {
    captions[i].style.display = "none";
  }
  captions[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function togglePlayPause() {
  playing = !playing;
  const playPauseButton = document.querySelector(".playPause");
  if (playing) {
    playPauseButton.textContent = "Pause";
    slideInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
  } else {
    playPauseButton.textContent = "Play";
    clearInterval(slideInterval);
  }
}

showSlide(slideIndex);
togglePlayPause();
