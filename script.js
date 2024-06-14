document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "") {
            alert("Name field cannot be empty.");
            event.preventDefault();
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        if (message === "") {
            alert("Message field cannot be empty.");
            event.preventDefault();
        }
    });
});

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = slide.length - 1;
    } else {
        currentIndex--;
    }
    updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
    if (currentIndex === slide.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSlidePosition();
});

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Optional: Auto-slide functionality
let autoSlideInterval = setInterval(() => {
    if (currentIndex === slide.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSlidePosition();
}, 2000);

// Pause auto-slide on hover
document.querySelector('.slider').addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

document.querySelector('.slider').addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(() => {
        if (currentIndex === slide.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateSlidePosition();
    }, 2000);
});
