// State
let commandHistory = [];
let historyIndex = -1;

// DOM Elements
const terminalContent = document.getElementById('terminalContent');
const commandInput = document.getElementById('commandInput');
const statusIndicator = document.getElementById('statusIndicator');

// Online/Offline Status
function updateOnlineStatus() {
    if (navigator.onLine) {
        statusIndicator.classList.remove('offline');
    } else {
        statusIndicator.classList.add('offline');
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
updateOnlineStatus();

// Commands
const commands = {
    help: () => ({
        type: 'output',
        content: `
            <div class="help-commands">
                <h3 style="color: var(--text-prompt); margin-bottom: 1rem;">Available Commands:</h3>
                <ul>
                    <li><span class="command">help</span> <span>- Display this help message</span></li>
                    <li><span class="command">about</span> <span>- Learn more about me</span></li>
                    <li><span class="command">skills</span> <span>- View my technical skills</span></li>
                    <li><span class="command">projects</span> <span>- Browse my portfolio projects</span></li>
                    <li><span class="command">contact</span> <span>- Get in touch with me</span></li>
                    <li><span class="command">clear</span> <span>- Clear the terminal</span></li>
                </ul>
            </div>
        `
    }),

    about: () => ({
        type: 'output',
        content: `
            <div class="profile-section">
                <img src="src/assets/profile-avatar.png" alt="Profile" class="profile-image">
                <div class="profile-info">
                    <h2>Diwakar - Full Stack Developer</h2>
                    <p>🚀 Passionate about building elegant solutions to complex problems</p>
                    <p>💻 Specializing in modern web technologies and cloud architecture</p>
                    <p>🎯 Always learning, always improving</p>
                    <p>📍 Based in India, working globally</p>
                </div>
            </div>
        `
    }),

    skills: () => ({
        type: 'output',
        content: `
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>Frontend</h3>
                    <ul>
                        <li>React & Next.js</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>Vue.js</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Cloud & DevOps</h3>
                    <ul>
                        <li>AWS</li>
                        <li>Docker</li>
                        <li>CI/CD</li>
                        <li>Kubernetes</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Tools</h3>
                    <ul>
                        <li>Git</li>
                        <li>VS Code</li>
                        <li>Figma</li>
                        <li>Postman</li>
                    </ul>
                </div>
            </div>
        `
    }),

    projects: () => ({
        type: 'output',
        content: `
            <div class="projects-grid">
                <div class="project-card">
                    <img src="src/assets/project-ecommerce.png" alt="E-commerce Platform" class="project-image">
                    <div class="project-info">
                        <h3>E-commerce Platform</h3>
                        <p>A full-stack e-commerce solution with real-time inventory management and payment processing.</p>
                        <p class="project-tech">Tech: React, Node.js, PostgreSQL, Stripe</p>
                    </div>
                </div>
                <div class="project-card">
                    <img src="src/assets/project-design-system.png" alt="Design System" class="project-image">
                    <div class="project-info">
                        <h3>Component Library</h3>
                        <p>Reusable UI component library with comprehensive documentation and theming support.</p>
                        <p class="project-tech">Tech: React, TypeScript, Storybook, Tailwind</p>
                    </div>
                </div>
                <div class="project-card">
                    <img src="src/assets/project-analytics.png" alt="Analytics Dashboard" class="project-image">
                    <div class="project-info">
                        <h3>Analytics Dashboard</h3>
                        <p>Real-time data visualization dashboard with interactive charts and custom reporting.</p>
                        <p class="project-tech">Tech: Next.js, D3.js, Python, FastAPI</p>
                    </div>
                </div>
            </div>
        `
    }),

    contact: () => ({
        type: 'output',
        content: `
            <div class="contact-grid">
                <div class="contact-item">
                    <strong>Email:</strong>
                    <span>diwakar@example.com</span>
                </div>
                <div class="contact-item">
                    <strong>GitHub:</strong>
                    <span>github.com/diwakar</span>
                </div>
                <div class="contact-item">
                    <strong>LinkedIn:</strong>
                    <span>linkedin.com/in/diwakar</span>
                </div>
                <div class="contact-item">
                    <strong>Twitter:</strong>
                    <span>@diwakar_dev</span>
                </div>
            </div>
        `
    })
};

// Process Command
function processCommand(input) {
    const cmd = input.trim().toLowerCase();
    
    if (cmd === 'clear') {
        terminalContent.innerHTML = `
            <div class="output-line">Welcome to Diwakar's Portfolio Terminal v1.0.0</div>
            <div class="output-line">Type "help" to see available commands.</div>
        `;
        return;
    }
    
    // Add command to display
    const commandLine = document.createElement('div');
    commandLine.className = 'command-line';
    commandLine.innerHTML = `<span class="prompt">❯</span><span>${input}</span>`;
    terminalContent.appendChild(commandLine);
    
    // Process command
    if (commands[cmd]) {
        const result = commands[cmd]();
        const outputLine = document.createElement('div');
        outputLine.className = result.type === 'error' ? 'error-line' : 'output-line';
        outputLine.innerHTML = result.content;
        terminalContent.appendChild(outputLine);
    } else {
        const errorLine = document.createElement('div');
        errorLine.className = 'error-line';
        errorLine.textContent = `Command not found: ${cmd}. Type "help" for available commands.`;
        terminalContent.appendChild(errorLine);
    }
    
    // Scroll to bottom
    terminalContent.scrollTop = terminalContent.scrollHeight;
}

// Handle Command Input
commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = commandInput.value.trim();
        if (command) {
            commandHistory.push(command);
            historyIndex = commandHistory.length;
            processCommand(command);
            commandInput.value = '';
        }
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (commandHistory.length > 0 && historyIndex > 0) {
            historyIndex--;
            commandInput.value = commandHistory[historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            commandInput.value = commandHistory[historyIndex];
        } else {
            historyIndex = commandHistory.length;
            commandInput.value = '';
        }
    }
});

// Click to focus
terminalContent.addEventListener('click', () => {
    commandInput.focus();
});

// Auto-focus on load
commandInput.focus();