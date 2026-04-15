// EchoForge Lite JavaScript
// Data Models
const issues = [
    {
        id: 1,
        title: "Food Insecurity in Urban Schools",
        description: "Many students lack access to nutritious meals during school hours.",
        location: "New York City",
        category: "education",
        severity: "high",
        image: "https://images.unsplash.com/photo-1582233479366-9d3020a7d57f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 2,
        title: "Mental Health Support Gap",
        description: "Limited access to mental health resources for teenagers in rural areas.",
        location: "Montana",
        category: "health",
        severity: "high",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 3,
        title: "Digital Divide in Education",
        description: "Students without reliable internet access struggle with remote learning.",
        location: "Appalachia",
        category: "education",
        severity: "medium",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 4,
        title: "Plastic Pollution in Waterways",
        description: "Local rivers and lakes contaminated with plastic waste affecting ecosystems.",
        location: "California",
        category: "environment",
        severity: "medium",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 5,
        title: "Homelessness Among Youth",
        description: "Increasing numbers of teenagers experiencing homelessness in major cities.",
        location: "Seattle",
        category: "social",
        severity: "high",
        image: "https://images.unsplash.com/photo-1523978591478-c753949ff840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 6,
        title: "Climate Change Awareness",
        description: "Lack of climate education leading to insufficient youth engagement in sustainability.",
        location: "Texas",
        category: "environment",
        severity: "low",
        image: "https://images.unsplash.com/photo-1516387887980-51a7ad79e0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 7,
        title: "Elderly Isolation",
        description: "Senior citizens experiencing loneliness due to limited social interaction.",
        location: "Florida",
        category: "health",
        severity: "medium",
        image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 8,
        title: "Gender Inequality in STEM",
        description: "Underrepresentation of women and minorities in science and technology fields.",
        location: "Nationwide",
        category: "social",
        severity: "low",
        image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    }
];

const communityProjects = [
    {
        id: 1,
        title: "Urban Garden Initiative",
        description: "Creating community gardens in food deserts to improve access to fresh produce.",
        author: "Green Teens NYC",
        location: "Brooklyn, NY",
        likes: 124,
        forks: 32,
        impact: "Feeds 500 families monthly"
    },
    {
        id: 2,
        title: "Mental Health Buddy System",
        description: "Peer support network for students dealing with stress and anxiety.",
        author: "Mindful Students",
        location: "Austin, TX",
        likes: 89,
        forks: 15,
        impact: "Supports 200+ students annually"
    },
    {
        id: 3,
        title: "Digital Literacy Program",
        description: "Teaching seniors how to use smartphones and computers for better connectivity.",
        author: "Tech Connect",
        location: "Phoenix, AZ",
        likes: 156,
        forks: 42,
        impact: "Trained 300+ seniors"
    },
    {
        id: 4,
        title: "Beach Cleanup Movement",
        description: "Monthly beach cleanups reducing ocean pollution in coastal communities.",
        author: "Ocean Protectors",
        location: "San Diego, CA",
        likes: 210,
        forks: 67,
        impact: "Removed 2 tons of trash"
    }
];

// Initialize session storage
function initStorage() {
    if (!localStorage.getItem('echoForgeProjects')) {
        localStorage.setItem('echoForgeProjects', JSON.stringify([]));
    }
    if (!localStorage.getItem('echoForgeLikes')) {
        localStorage.setItem('echoForgeLikes', JSON.stringify({}));
    }
    if (!localStorage.getItem('echoForgeForks')) {
        localStorage.setItem('echoForgeForks', JSON.stringify({}));
    }
}

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    initStorage();
    renderIssues();
    renderCommunityProjects();
    populateIssueSelect();
    setupEventListeners();
    setupIntersectionObservers();
});

// Event Listeners
function setupEventListeners() {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });
    
    // Filter Buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Filter issues
            const category = this.dataset.category;
            filterIssues(category);
        });
    });
    
    // Forge Button
    const forgeBtn = document.getElementById('forgeBtn');
    forgeBtn.addEventListener('click', generateActionPlan);
    
    // Save Project Button
    const saveProjectBtn = document.getElementById('saveProjectBtn');
    saveProjectBtn.addEventListener('click', saveProject);
    
    // Export Portfolio Button
    const exportBtn = document.getElementById('exportPortfolioBtn');
    exportBtn.addEventListener('click', exportPortfolio);
    
    // Search Input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', searchCommunityProjects);
    
    // Like/Fork Buttons (delegated)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.like-btn')) {
            const projectId = e.target.closest('.community-card').dataset.id;
            likeProject(projectId);
        }
        
        if (e.target.closest('.fork-btn')) {
            const projectId = e.target.closest('.community-card').dataset.id;
            forkProject(projectId);
        }
    });
}

// Intersection Observer for animations
function setupIntersectionObservers() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.section-header, .issue-card, .forge-container, .project-card, .community-card').forEach(el => {
        observer.observe(el);
    });
}

// Render Issues
function renderIssues(category = 'all') {
    const container = document.getElementById('issuesContainer');
    container.innerHTML = '';
    
    const filteredIssues = category === 'all' ? issues : issues.filter(issue => issue.category === category);
    
    filteredIssues.forEach(issue => {
        const issueCard = document.createElement('div');
        issueCard.className = 'issue-card';
        issueCard.innerHTML = `
            <h3>${issue.title}</h3>
            <div class="issue-meta">
                <span>${issue.location}</span>
                <span class="severity ${issue.severity}">${issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)}</span>
            </div>
            <p class="issue-description">${issue.description}</p>
            <button class="forge-btn" data-id="${issue.id}">
                <i class="fas fa-hammer"></i> Forge this Issue
            </button>
        `;
        
        container.appendChild(issueCard);
    });
    
    // Add event listeners to forge buttons
    document.querySelectorAll('.forge-btn').forEach(button => {
        button.addEventListener('click', function() {
            const issueId = parseInt(this.dataset.id);
            document.getElementById('issueSelect').value = issueId;
            scrollToSection('forge');
        });
    });
}

// Filter Issues
function filterIssues(category) {
    renderIssues(category);
}

// Populate Issue Select
function populateIssueSelect() {
    const select = document.getElementById('issueSelect');
    issues.forEach(issue => {
        const option = document.createElement('option');
        option.value = issue.id;
        option.textContent = issue.title;
        select.appendChild(option);
    });
}

// Generate Action Plan with AI
async function generateActionPlan() {
    const issueId = document.getElementById('issueSelect').value;
    const tone = document.querySelector('input[name="tone"]:checked').value;
    
    if (!issueId) {
        showToast("Please select an issue first!");
        return;
    }
    
    const issue = issues.find(i => i.id == issueId);
    
    // Show loading state
    const forgeBtn = document.getElementById('forgeBtn');
    const btnText = forgeBtn.querySelector('.btn-text');
    const spinner = forgeBtn.querySelector('.spinner');
    
    btnText.textContent = 'Generating...';
    spinner.classList.add('active');
    forgeBtn.disabled = true;
    
    try {
        // Simulate AI processing time
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // In a real implementation, we would call the Groq API here
        // For this demo, we'll generate mock data
        
        const projectName = `${issue.title.split(' ')[0]} Solutions`;
        const steps = [
            "Research existing initiatives addressing this issue in your community",
            "Identify key stakeholders and potential partners",
            "Develop a detailed action plan with timelines and responsibilities",
            "Create awareness campaigns through social media and local events",
            "Implement pilot program and collect feedback for improvements"
        ];
        
        const impactEstimate = Math.floor(Math.random() * 500) + 100;
        const timelineEstimate = Math.floor(Math.random() * 12) + 4;
        
        // Update preview
        document.getElementById('previewTitle').textContent = projectName;
        document.getElementById('previewCategory').textContent = issue.category.charAt(0).toUpperCase() + issue.category.slice(1);
        document.getElementById('previewDescription').textContent = `Action plan for addressing "${issue.title}" with a ${tone} approach.`;
        
        const stepsContainer = document.getElementById('previewSteps');
        stepsContainer.innerHTML = '';
        steps.forEach((step, index) => {
            const stepElement = document.createElement('div');
            stepElement.className = 'step-item';
            stepElement.innerHTML = `
                <div class="step-number">${index + 1}</div>
                <div class="step-text">${step}</div>
            `;
            stepsContainer.appendChild(stepElement);
        });
        
        document.getElementById('previewImpact').textContent = impactEstimate;
        document.getElementById('previewTimeline').textContent = timelineEstimate;
        
        // Store generated data for saving
        window.currentProjectData = {
            title: projectName,
            issue: issue.title,
            category: issue.category,
            steps: steps,
            impact: impactEstimate,
            timeline: timelineEstimate,
            description: `Action plan for addressing "${issue.title}" with a ${tone} approach.`
        };
        
        showToast("Action plan generated successfully!");
    } catch (error) {
        console.error("Error generating action plan:", error);
        showToast("Failed to generate action plan. Please try again.");
    } finally {
        // Reset button state
        btnText.textContent = 'Generate Action Plan';
        spinner.classList.remove('active');
        forgeBtn.disabled = false;
    }
}

// Save Project
function saveProject() {
    if (!window.currentProjectData) {
        showToast("Please generate an action plan first!");
        return;
    }
    
    const projects = JSON.parse(localStorage.getItem('echoForgeProjects')) || [];
    const newProject = {
        id: Date.now(),
        ...window.currentProjectData,
        status: "Active",
        progress: 0,
        createdAt: new Date().toISOString()
    };
    
    projects.push(newProject);
    localStorage.setItem('echoForgeProjects', JSON.stringify(projects));
    
    showToast("Project saved successfully!");
    renderProjects();
    scrollToSection('projects');
}

// Render Projects
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    const projects = JSON.parse(localStorage.getItem('echoForgeProjects')) || [];
    
    if (projects.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-folder-open" style="font-size: 4rem; margin-bottom: 20px;"></i>
                <h3>No Projects Yet</h3>
                <p>Start forging issues to see your projects appear here</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-status status-active">${project.status}</span>
            </div>
            <p>${project.description}</p>
            <div class="progress-container">
                <div class="progress-label">
                    <span>Progress</span>
                    <span>${project.progress}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${project.progress}%"></div>
                </div>
            </div>
            <div class="project-actions">
                <button class="action-btn update-btn">
                    <i class="fas fa-edit"></i> Update
                </button>
                <button class="action-btn share-btn">
                    <i class="fas fa-share-alt"></i> Share
                </button>
            </div>
        `;
        
        container.appendChild(projectCard);
    });
}

// Export Portfolio
function exportPortfolio() {
    const projects = JSON.parse(localStorage.getItem('echoForgeProjects')) || [];
    
    if (projects.length === 0) {
        showToast("No projects to export!");
        return;
    }
    
    let exportContent = "# EchoForge Portfolio\n\n";
    exportContent += `Generated on: ${new Date().toLocaleDateString()}\n\n`;
    
    projects.forEach(project => {
        exportContent += `## ${project.title}\n`;
        exportContent += `**Issue:** ${project.issue}\n`;
        exportContent += `**Category:** ${project.category}\n`;
        exportContent += `**Status:** ${project.status}\n`;
        exportContent += `**Estimated Impact:** ${project.impact} people\n`;
        exportContent += `**Timeline:** ${project.timeline} weeks\n\n`;
        exportContent += "**Action Steps:**\n";
        project.steps.forEach((step, index) => {
            exportContent += `${index + 1}. ${step}\n`;
        });
        exportContent += "\n---\n\n";
    });
    
    // Create and download file
    const blob = new Blob([exportContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'echoforge-portfolio.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast("Portfolio exported successfully!");
}

// Render Community Projects
function renderCommunityProjects(searchTerm = '') {
