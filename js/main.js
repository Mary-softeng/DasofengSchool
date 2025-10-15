// DOM Elements
const applyBtn = document.getElementById('applyBtn');
const heroApplyBtn = document.getElementById('heroApplyBtn');
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModalButtons = document.querySelectorAll('.close-modal');

// Redirect to Application Page
if (applyBtn) {
    applyBtn.addEventListener('click', () => {
        window.location.href = 'pages/application.html';
    });
}

if (heroApplyBtn) {
    heroApplyBtn.addEventListener('click', () => {
        window.location.href = 'pages/application.html';
    });
}

// Show Login Modal
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });
}

// Close Modals
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});