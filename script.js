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

// Test Users Database
const testUsers = {
    'student@edulearn.com': {
        password: 'Student123!',
        name: 'John Student',
        role: 'student',
        plan: 'free'
    },
    'pro.user@edulearn.com': {
        password: 'ProUser123!',
        name: 'Sarah Pro',
        role: 'student',
        plan: 'pro'
    },
    'web.instructor@edulearn.com': {
        password: 'WebDev123!',
        name: 'David Webb',
        role: 'instructor',
        course: 'Web Development'
    },
    'data.instructor@edulearn.com': {
        password: 'DataSci123!',
        name: 'Emma Data',
        role: 'instructor',
        course: 'Data Science'
    },
    'admin@edulearn.com': {
        password: 'Admin123!',
        name: 'Admin User',
        role: 'admin'
    }
};

// Form submission handling
document.getElementById('signinForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    // Check credentials
    if (testUsers[email] && testUsers[email].password === password) {
        const user = testUsers[email];
        // Store user session
        sessionStorage.setItem('currentUser', JSON.stringify({
            email,
            name: user.name,
            role: user.role,
            plan: user.plan
        }));
        
        // Show success message
        alert(`Welcome back, ${user.name}!`);
        
        // Close modal
        closeModalFunc();
        
        // Update UI based on user role
        updateUIForUser(user);
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;
    const confirmPassword = e.target.querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (testUsers[email]) {
        alert('This email is already registered. Please sign in instead.');
        return;
    }

    // Add new user to testUsers
    testUsers[email] = {
        password: password,
        name: name,
        role: 'student', // Default role for new users
        plan: 'free'    // Default plan for new users
    };

    // Show success message with the new user's details
    alert(`Account created successfully!\nName: ${name}\nEmail: ${email}\nRole: Student\nPlan: Free\n\nPlease sign in with your credentials.`);
    
    // Switch to sign in form
    closeModalFunc();
    showSignin();
});

// Update UI based on user role
function updateUIForUser(user) {
    const navAuth = document.querySelector('.nav-auth');
    const pricingButtons = document.querySelectorAll('.pricing-button');
    const enrollButtons = document.querySelectorAll('.enroll-button');

    // Update auth buttons with enhanced user menu
    navAuth.innerHTML = `
        <div class="user-menu">
            <span>Welcome, ${user.name}</span>
            <button class="signout-btn" onclick="handleSignOut()">
                <i class="fas fa-sign-out-alt"></i> Sign Out
            </button>
        </div>
    `;

    // Update pricing buttons based on plan
    if (user.role === 'student') {
        pricingButtons.forEach(button => {
            if (button.parentElement.querySelector('h3').textContent.toLowerCase() === user.plan) {
                button.textContent = 'Current Plan';
                button.disabled = true;
            }
        });
    }

    // Update enroll buttons for instructors
    if (user.role === 'instructor') {
        enrollButtons.forEach(button => {
            const courseCard = button.closest('.course-card');
            if (courseCard.querySelector('h3').textContent === user.course) {
                button.textContent = 'Manage Course';
            }
        });
    }
}

// Enhanced sign out functionality
function handleSignOut() {
    const confirmSignOut = confirm('Are you sure you want to sign out?');
    
    if (confirmSignOut) {
        // Add fade-out animation to user menu
        const userMenu = document.querySelector('.user-menu');
        userMenu.style.opacity = '0';
        userMenu.style.transform = 'translateY(-10px)';
        
        // Delay the actual sign-out to show animation
        setTimeout(() => {
            sessionStorage.removeItem('currentUser');
            
            // Show sign-out message
            const message = document.createElement('div');
            message.className = 'signout-message';
            message.textContent = 'Signed out successfully!';
            document.body.appendChild(message);
            
            // Remove message and reload after delay
            setTimeout(() => {
                message.remove();
                location.reload();
            }, 1500);
        }, 300);
    }
}

// Add styles for sign-out message
const style = document.createElement('style');
style.textContent = `
    .signout-message {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        animation: slideIn 0.3s ease forwards;
        z-index: 1000;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Check for existing session on page load
window.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (currentUser) {
        updateUIForUser(currentUser);
    }
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