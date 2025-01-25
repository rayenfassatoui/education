// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('nav-open');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        document.body.classList.remove('nav-open');
    }
});

// Smooth Scroll Implementation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Simple Button Interactions
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.98)';
    });

    button.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    
    if (emailInput.value) {
        // Here you would typically send this to your backend
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    }
});

// Course Enrollment Handler
const enrollButtons = document.querySelectorAll('.enroll-button');

enrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        const courseName = button.parentElement.querySelector('h3').textContent;
        alert(`Thank you for your interest in ${courseName}! Enrollment form will be available soon.`);
    });
});

// Pricing Button Handler
const pricingButtons = document.querySelectorAll('.pricing-button');

pricingButtons.forEach(button => {
    button.addEventListener('click', () => {
        const planName = button.parentElement.querySelector('h3').textContent;
        alert(`Thank you for choosing the ${planName} plan! Registration form will be available soon.`);
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.classList.add('loaded');
    });
});

// Get Started Button Handler
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', () => {
    const coursesSection = document.querySelector('#courses');
    coursesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Auth Modal Functionality
const authModal = document.getElementById('authModal');
const signinBtn = document.querySelector('.signin-btn');
const signupBtn = document.querySelector('.signup-btn');
const closeModal = document.querySelector('.close-modal');
const switchToSignup = document.querySelector('.switch-to-signup');
const switchToSignin = document.querySelector('.switch-to-signin');
const signinForm = document.querySelector('.signin-form');
const signupForm = document.querySelector('.signup-form');

// Open modal functions
function openModal() {
    authModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    authModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Switch between forms
function showSignup() {
    signinForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
}

function showSignin() {
    signupForm.classList.add('hidden');
    signinForm.classList.remove('hidden');
}

// Event Listeners
signinBtn.addEventListener('click', () => {
    openModal();
    showSignin();
});

signupBtn.addEventListener('click', () => {
    openModal();
    showSignup();
});

closeModal.addEventListener('click', closeModalFunc);

switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    showSignup();
});

switchToSignin.addEventListener('click', (e) => {
    e.preventDefault();
    showSignin();
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        closeModalFunc();
    }
});

// Form submission handling
document.getElementById('signinForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your sign in logic here
    alert('Sign in functionality will be implemented soon!');
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your sign up logic here
    alert('Sign up functionality will be implemented soon!');
});

// Active link highlighting
function setActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

setActiveLink(); 