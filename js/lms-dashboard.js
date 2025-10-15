// LMS Dashboard Functionality with Error Handling
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Load student data
        loadStudentData();
        
        // Initialize dashboard navigation
        initializeDashboardNavigation();
        
        // Initialize progress chart
        initializeProgressChart();
        
        // Set up logout functionality
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function() {
                if (confirm('Are you sure you want to log out?')) {
                    logout();
                }
            });
        }
        
        console.log('LMS Dashboard initialized successfully');
    } catch (error) {
        console.error('Error initializing LMS Dashboard:', error);
        // Show user-friendly error message
        alert('There was an issue loading the dashboard. Please refresh the page.');
    }
});

// Rest of your existing functions...
// LMS Dashboard Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load student data
    loadStudentData();
    
    // Initialize dashboard navigation
    initializeDashboardNavigation();
    
    // Initialize progress chart
    initializeProgressChart();
    
    // Set up logout functionality
    document.getElementById('logoutBtn').addEventListener('click', function() {
        if (confirm('Are you sure you want to log out?')) {
            logout();
        }
    });
});

function loadStudentData() {
    // In a real implementation, this would fetch from your backend
    const studentData = {
        name: 'John Doe',
        email: 'john.doe@student.dasofeng.edu',
        course: 'Data Analytics',
        enrollmentDate: '2024-10-15'
    };
    
    // Update UI with student data
    document.getElementById('studentName').textContent = studentData.name;
    document.getElementById('studentCourse').textContent = studentData.course;
    document.getElementById('profileName').textContent = studentData.name;
    document.getElementById('profileEmail').textContent = studentData.email;
    document.getElementById('profileCourse').textContent = studentData.course;
    document.getElementById('fullName').value = studentData.name;
    document.getElementById('studentEmail').value = studentData.email;
}

function initializeDashboardNavigation() {
    const navLinks = document.querySelectorAll('.dashboard-nav a');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and tabs
            navLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding tab content
            const tabName = this.getAttribute('data-tab');
            const tabElement = document.getElementById(tabName + 'Tab');
            if (tabElement) {
                tabElement.classList.add('active');
            }
        });
    });
}

function initializeProgressChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    
    // Simple chart implementation
    // In a real implementation, you would use Chart.js or similar
    console.log('Progress chart initialized');
    
    // For now, we'll just show a message
    const chartContainer = document.querySelector('.chart-container');
    chartContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <i class="fas fa-chart-line" style="font-size: 3rem; color: var(--primary-teal); margin-bottom: 1rem;"></i>
            <h4>Progress Analytics</h4>
            <p>Your learning progress will be visualized here as you complete more modules.</p>
        </div>
    `;
}

// Module Functions
function continueModule(moduleId) {
    alert(`Continuing with Module ${moduleId}\n\nIn a real implementation, this would open the module content.`);
    // window.location.href = `module-${moduleId}.html`;
}

function reviewModule(moduleId) {
    alert(`Reviewing Module ${moduleId}\n\nYou can revisit all lessons and materials from this module.`);
}

// Assignment Functions
function startAssignment(assignmentId) {
    const assignmentContent = `
        <div class="assignment-details">
            <h3>Assignment ${assignmentId}: SQL Queries</h3>
            <div class="assignment-instructions">
                <h4>Instructions:</h4>
                <p>Write SQL queries to solve the following problems using the provided database schema.</p>
                
                <h4>Tasks:</h4>
                <ol>
                    <li>Retrieve all customers who made purchases in the last 30 days</li>
                    <li>Calculate total sales by product category</li>
                    <li>Find the top 5 best-selling products</li>
                    <li>Identify customers who haven't purchased in over 60 days</li>
                </ol>
                
                <h4>Submission Guidelines:</h4>
                <ul>
                    <li>Submit your SQL queries in a .sql file</li>
                    <li>Include comments explaining your approach</li>
                    <li>Due date: October 25, 2024</li>
                </ul>
            </div>
            
            <div class="assignment-submission">
                <h4>Submit Your Work:</h4>
                <div class="form-group">
                    <label for="assignmentFile">Upload your solution file:</label>
                    <input type="file" id="assignmentFile" accept=".sql,.txt">
                </div>
                <div class="form-group">
                    <label for="assignmentNotes">Additional notes (optional):</label>
                    <textarea id="assignmentNotes" rows="4" placeholder="Any comments about your submission..."></textarea>
                </div>
                <button class="btn btn-primary" onclick="submitAssignment(${assignmentId})">Submit Assignment</button>
            </div>
        </div>
    `;
    
    document.getElementById('modalAssignmentTitle').textContent = `Assignment ${assignmentId}: SQL Queries`;
    document.getElementById('assignmentContent').innerHTML = assignmentContent;
    document.getElementById('assignmentModal').style.display = 'flex';
}

function viewFeedback(assignmentId) {
    const feedbackContent = `
        <div class="feedback-details">
            <h3>Feedback for Assignment ${assignmentId}</h3>
            <div class="grade-summary">
                <h4>Grade: 85/100</h4>
                <div class="breakdown">
                    <p><strong>Query Accuracy:</strong> 40/45</p>
                    <p><strong>Code Quality:</strong> 25/30</p>
                    <p><strong>Documentation:</strong> 20/25</p>
                </div>
            </div>
            
            <div class="instructor-feedback">
                <h4>Instructor Comments:</h4>
                <div class="feedback-message">
                    <p>Excellent work on the main queries! Your solutions for tasks 1-3 were well-structured and efficient.</p>
                    <p><strong>Areas for improvement:</strong></p>
                    <ul>
                        <li>Task 4 could be optimized with a subquery</li>
                        <li>Add more comments for complex joins</li>
                        <li>Consider using CTEs for better readability</li>
                    </ul>
                    <p>Overall, great job! Keep up the good work.</p>
                </div>
            </div>
            
            <div class="feedback-actions">
                <button class="btn btn-outline" onclick="closeModal()">Close</button>
                <button class="btn btn-primary" onclick="resubmitAssignment(${assignmentId})">Request Resubmission</button>
            </div>
        </div>
    `;
    
    document.getElementById('modalAssignmentTitle').textContent = `Feedback - Assignment ${assignmentId}`;
    document.getElementById('assignmentContent').innerHTML = feedbackContent;
    document.getElementById('assignmentModal').style.display = 'flex';
}

function submitAssignment(assignmentId) {
    const fileInput = document.getElementById('assignmentFile');
    if (!fileInput.files.length) {
        alert('Please select a file to upload.');
        return;
    }
    
    // Simulate submission
    alert(`Assignment ${assignmentId} submitted successfully!\n\nYour work has been sent for grading. You will receive feedback within 3-5 business days.`);
    closeModal();
}

function resubmitAssignment(assignmentId) {
    if (confirm('Request resubmission for this assignment?')) {
        alert('Resubmission request sent to your instructor.');
        closeModal();
    }
}

// Resource Functions
function downloadResource(type) {
    alert(`Downloading ${type} resources...\n\nIn a real implementation, this would download the actual files.`);
}

function watchVideos() {
    alert('Opening video library...\n\nAccess all supplemental video content for your course.');
}

function joinStudyGroup() {
    alert('Joining study group...\n\nConnect with peers for collaborative learning sessions.');
}

function downloadTools() {
    alert('Downloading required software tools...\n\nInstallation guides and download links provided.');
}

function openHelp() {
    alert('Opening help center...\n\nFind answers to common questions and troubleshooting guides.');
}

// Profile Functions
function updateProfile() {
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('studentEmail').value;
    const phone = document.getElementById('studentPhone').value;
    
    // Simulate profile update
    alert('Profile updated successfully!');
    document.getElementById('profileName').textContent = name;
    document.getElementById('studentName').textContent = name;
}

// Modal Functions
function closeModal() {
    document.getElementById('assignmentModal').style.display = 'none';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('assignmentModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Logout function
function logout() {
    // Clear any session data
    localStorage.removeItem('studentSession');
    
    // Redirect to home page
    window.location.href = '../index.html';
}

// Initialize close buttons
document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', closeModal);
});