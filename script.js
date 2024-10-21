// Smooth scrolling
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Initialize the image slider
document.addEventListener('DOMContentLoaded', function () {
  $('.slider').slick({
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 3000,
  });
});
