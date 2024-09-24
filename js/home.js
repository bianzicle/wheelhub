$(document).ready(function () {
  let slideIndex = 0;
  const slides = $(".carousel-slide img");
  const totalSlides = slides.length;

  $(".carousel-arrow.right").click(function () {
    slideIndex++;
    if (slideIndex === totalSlides) slideIndex = 0;
    updateSlidePosition();
  });

  $(".carousel-arrow.left").click(function () {
    slideIndex--;
    if (slideIndex < 0) slideIndex = totalSlides - 1;
    updateSlidePosition();
  });

  function updateSlidePosition() {
    slides.each(function (index) {
      $(this).css("transform", `translateX(-${slideIndex * 100}%)`);
    });
  }

  setInterval(() => {
    slideIndex++;
    if (slideIndex === totalSlides) slideIndex = 0;
    updateSlidePosition();
  }, 5000);
});
