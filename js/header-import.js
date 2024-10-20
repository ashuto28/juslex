// JavaScript to import header.html content into the #header-placeholder div
document.addEventListener("DOMContentLoaded", function() {
    var headerPlaceholder = document.getElementById('header-placeholder');
    
    // Load header.html content
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            headerPlaceholder.innerHTML = data;

            // JavaScript for Mobile Menu Toggle
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');

            hamburger.addEventListener('click', () => {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                hamburger.classList.toggle('active');
            });
        })
        .catch(error => console.error('Error loading header:', error));
});
