// Gallery Lightbox
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });
});

// Form Validation and Submission
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    // Email validation
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput && emailInput.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailInput.style.borderColor = 'red';
            isValid = false;
        }
    }

    return isValid;
}

function handleFormSubmission(form, successMessage) {
    if (validateForm(form)) {
        // Simulate form submission
        alert(successMessage);
        form.reset();
    } else {
        alert('Please fill in all required fields correctly.');
    }
}

// Reservation Form
const reservationForm = document.getElementById('reservationForm');
if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission(this, 'Reservation submitted successfully! We will contact you soon.');
    });
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission(this, 'Message sent successfully! We will get back to you soon.');
    });
}

// Mobile Navigation (if needed)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}