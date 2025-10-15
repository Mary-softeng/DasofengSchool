// Login Form Submission
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('studentEmail').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // In a real app, this would validate credentials with a server
        // For demo purposes, we'll use a simple check
        if (email === 'student@dasofeng.edu' && password === 'password') {
            // Store login state (in a real app, use secure methods)
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('studentEmail', email);
            
            // Redirect to dashboard
            window.location.href = 'pages/dashboard.html';
        } else {
            alert('Invalid credentials. For demo, use: student@dasofeng.edu / password');
        }
    });
}

// Check if user is logged in (for protected pages)
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && window.location.pathname.includes('dashboard.html')) {
        window.location.href = '../index.html';
    }
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('studentEmail');
    window.location.href = '../index.html';
}

// Initialize auth check on page load
document.addEventListener('DOMContentLoaded', checkAuth);