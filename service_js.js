// script.js

document.addEventListener("DOMContentLoaded", () => {
    const bookButtons = document.querySelectorAll(".book-now");
    const viewButtons = document.querySelectorAll(".view-course");
  
    bookButtons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Sorry, this service is not yet available for online bookings.Please contact us for more information.");
      });
    });
  
    viewButtons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Viewing course details.");
      });
    });
  });
  
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }