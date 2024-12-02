// Select sections and navigation items
const sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');

// Build the navigation menu dynamically
sections.forEach((section) => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = section.dataset.nav;
    anchor.href = `#${section.id}`;
    anchor.classList.add('menu__link');
    listItem.appendChild(anchor);
    navbarList.appendChild(listItem);
});

// Update the active section state
window.addEventListener('scroll', () => {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const link = document.querySelector(`a[href="#${section.id}"]`);
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            section.classList.add('your-active-class');
            link.classList.add('active');
        } else {
            section.classList.remove('your-active-class');
            link.classList.remove('active');
        }
    });
});

// Add 'Home' to the navigation menu
const homeItem = document.createElement('li');
const homeLink = document.createElement('a');
homeLink.textContent = 'Home';
homeLink.href = '#'; 
homeLink.classList.add('menu__link');
homeItem.appendChild(homeLink);
navbarList.prepend(homeItem); 

// Smooth scrolling when clicking a navigation link
navbarList.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.nodeName === 'A') {
        const section = document.querySelector(event.target.hash);
        section.scrollIntoView({ behavior: 'smooth' });
    }
});

// Smooth scroll to the top when 'Home' is clicked
homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Create the "Scroll to Top" button
const scrollToTop = document.createElement('button');
scrollToTop.textContent = '↑';
scrollToTop.className = 'scroll-to-top';
document.body.appendChild(scrollToTop);

// Show/Hide the "Scroll to Top" button while scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
});

// Smooth scroll to the top when the button is clicked
scrollToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Select the Navbar element
const navbar = document.querySelector('.navbar__menu');

// Add a scroll event listener to change the Navbar background color
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled'); 
    }
});

// Select the hamburger menu button and the navigation list
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.getElementById('navbar__list');

// Toggle the menu visibility on click
hamburgerMenu.addEventListener('click', () => {
    navList.classList.toggle('show'); 
});

