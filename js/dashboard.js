// LMS Dashboard Functionality for New Design
document.addEventListener('DOMContentLoaded', function() {
    initializeLMSDashboard();
});

function initializeLMSDashboard() {
    // Load student data
    loadStudentData();
    
    // Initialize navigation
    initializeLMSNavigation();
    
    // Set up event listeners
    setupEventListeners();
    
    console.log('LMS Dashboard initialized');
}

function loadStudentData() {
    const studentData = {
        name: 'John Doe',
        email: 'john.doe@student.dasofeng.edu',
        course: 'Data Analytics',
        enrollmentDate: '2024-10-15'
    };
    
    // Update UI with student data
    document.getElementById('lmsStudentName').textContent = studentData.name;
    document.getElementById('lmsStudentCourse').textContent = studentData.course;
}

function initializeLMSNavigation() {
    const navItems = document.querySelectorAll('.lms-nav-item');
    const tabs = document.querySelectorAll('.lms-tab');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items and tabs
            navItems.forEach(nav => nav.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Show corresponding tab
            const tabName = this.getAttribute('data-tab');
            const tabElement = document.getElementById(tabName + 'Tab');
            if (tabElement) {
                tabElement.classList.add('active');
            }
        });
    });
}

function setupEventListeners() {
    // Logout button
    const logoutBtn = document.getElementById('lmsLogoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to log out?')) {
                logout();
            }
        });
    }
}

function continueLearning() {
    alert('Continuing with Module 2: SQL for Data Analysis\n\nThis would open the learning interface.');
}

function startAssignment(assignmentId) {
    alert(`Starting Assignment ${assignmentId}\n\nThis would open the assignment submission interface.`);
}

function logout() {
    // Clear any session data
    localStorage.removeItem('studentSession');
    
    // Redirect to home page
    window.location.href = '../index.html';
}

// Utility functions for future expansion
function updateProgress(moduleId, progress) {
    console.log(`Updating progress for module ${moduleId}: ${progress}%`);
    // Implementation for progress tracking
}

function submitAssignment(assignmentId, data) {
    console.log(`Submitting assignment ${assignmentId}`, data);
    // Implementation for assignment submission
}

function loadModuleContent(moduleId) {
    console.log(`Loading content for module ${moduleId}`);
    // Implementation for module content loading
}