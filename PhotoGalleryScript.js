let slideIndex = 1;
showSlides(slideIndex);

/* Open */
function openNav(n) {
  document.getElementById("myNav").style.height = "100%";
  currentSlide(n);
  hideHeader();
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  showHeader();
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

function hideHeader() {
    document.getElementById("header-section").classList.add("hide");
  }

  function showHeader() {
    document.getElementById("header-section").classList.remove("hide");
  }
