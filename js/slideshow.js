let slideIndex = 1;
showSlides(1);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let item;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (item = 0; item < slides.length; item++) {
    slides[item].style.display = "none";  
  }
  
  for (item = 0; item < dots.length; item++) {
    dots[item].className = dots[item].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active"; /* 0_0 */
}