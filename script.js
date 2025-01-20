// Smooth scrolling for section links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        const href = this.getAttribute('href');

        // Ensure it is an internal section link (starts with #)
        if (href.startsWith("#")) {
            event.preventDefault();
            const targetSection = document.querySelector(href);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Navigation menu toggle for mobile view
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

// Toggle menu on button click
navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Hide menu when clicking a menu item (only in mobile view)
document.querySelectorAll('.nav-list li a').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) { // Only hide on mobile
            navList.classList.remove('active');
        }
    });
});
document.querySelector('a[href="Assets/cv.pdf"]').addEventListener('click', function(event) {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = 'Assets/cv.pdf';
    link.download = 'Chuckie_Baltazar_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

