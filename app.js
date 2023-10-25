// Navigation bar
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    links.classList.toggle('show-links');
});

// Main
const sectionToggles = document.querySelectorAll('.section-toggle');
const contents = document.querySelectorAll('.content');

sectionToggles.forEach((sectionToggle, index) => {
    sectionToggle.addEventListener('click', function () {
        contents[index].classList.toggle('show-content');
    });
});


