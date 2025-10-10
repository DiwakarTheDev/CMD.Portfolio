import profileAvatar from "@/assets/profile-avatar.png";
import projectTerminal from "@/assets/project-terminal.png";
import projectEcommerce from "@/assets/project-ecommerce.png";
import projectWeather from "@/assets/project-weather.png";

export interface CommandOutput {
  type: "output" | "error";
  content: string | React.ReactNode;
}

const commands: Record<string, () => CommandOutput> = {
  help: () => ({
    type: "output",
    content: (
      <div className="space-y-2">
        <div className="text-primary text-glow font-semibold mb-3">Available Commands:</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div><span className="text-secondary text-glow-secondary">help</span> - Show this help message</div>
          <div><span className="text-secondary text-glow-secondary">about</span> - Learn about me</div>
          <div><span className="text-secondary text-glow-secondary">skills</span> - View my technical skills</div>
          <div><span className="text-secondary text-glow-secondary">projects</span> - Browse my projects</div>
          <div><span className="text-secondary text-glow-secondary">contact</span> - Get in touch</div>
          <div><span className="text-secondary text-glow-secondary">clear</span> - Clear the terminal</div>
        </div>
      </div>
    ),
  }),

  about: () => ({
    type: "output",
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <img 
            src={profileAvatar} 
            alt="Diwakar's profile" 
            className="w-24 h-24 rounded-lg border-2 border-primary border-glow"
          />
          <div className="space-y-2">
            <div className="text-primary text-glow text-lg font-bold">Diwakar - Full Stack Developer</div>
            <div className="text-secondary text-glow-secondary">Problem Solver | Tech Enthusiast</div>
            <div className="text-muted-foreground">📍 Based in India</div>
          </div>
        </div>
        <div className="text-terminal-text space-y-2">
          <p>
            👋 Hello! I'm a passionate developer who loves building elegant solutions to complex problems.
          </p>
          <p>
            💡 I specialize in creating beautiful, performant, and user-friendly applications with cutting-edge web technologies.
          </p>
          <p>
            🚀 Always learning, always building, always improving.
          </p>
        </div>
      </div>
    ),
  }),

  skills: () => ({
    type: "output",
    content: (
      <div className="space-y-3">
        <div className="text-primary text-glow font-semibold mb-2">Technical Skills:</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-secondary text-glow-secondary font-semibold mb-2">Frontend</div>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 & CSS3</li>
            </ul>
          </div>
          <div>
            <div className="text-secondary text-glow-secondary font-semibold mb-2">Backend</div>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Node.js & Express</li>
              <li>Python & Django</li>
              <li>PostgreSQL & MongoDB</li>
              <li>REST APIs & GraphQL</li>
            </ul>
          </div>
          <div>
            <div className="text-secondary text-glow-secondary font-semibold mb-2">Tools & DevOps</div>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>CI/CD Pipelines</li>
              <li>AWS & Vercel</li>
            </ul>
          </div>
          <div>
            <div className="text-secondary text-glow-secondary font-semibold mb-2">Other</div>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>UI/UX Design</li>
              <li>Agile & Scrum</li>
              <li>Testing (Jest, Cypress)</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  }),

  projects: () => ({
    type: "output",
    content: (
      <div className="space-y-4">
        <div className="text-primary text-glow font-semibold mb-3 text-lg">Featured Projects:</div>
        
        <div className="space-y-3">
          <img 
            src={projectTerminal} 
            alt="Terminal Portfolio" 
            className="w-24 h-24 rounded-lg border border-primary/30 hover:border-primary transition-all object-cover"
          />
          <div className="text-secondary text-glow-secondary font-semibold">🖥️ Portfolio Terminal</div>
          <p className="text-sm mt-1 mb-2">A unique terminal-style portfolio website with command-line interface and hacker aesthetic.</p>
          <div className="flex gap-3 text-xs">
            <a href="https://github.com/diwakar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub →</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Live Demo →</a>
          </div>
        </div>

        <div className="space-y-3 mt-6">
          <img 
            src={projectEcommerce} 
            alt="E-Commerce Platform" 
            className="w-24 h-24 rounded-lg border border-primary/30 hover:border-primary transition-all object-cover"
          />
          <div className="text-secondary text-glow-secondary font-semibold">🚀 E-Commerce Platform</div>
          <p className="text-sm mt-1 mb-2">Full-stack e-commerce solution with modern shopping experience and real-time inventory management.</p>
          <div className="flex gap-3 text-xs">
            <a href="https://github.com/diwakar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub →</a>
            <a href="https://demo.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Live Demo →</a>
          </div>
        </div>

        <div className="space-y-3 mt-6">
          <img 
            src={projectWeather} 
            alt="Weather Dashboard" 
            className="w-24 h-24 rounded-lg border border-primary/30 hover:border-primary transition-all object-cover"
          />
          <div className="text-secondary text-glow-secondary font-semibold">🌦️ Weather Dashboard</div>
          <p className="text-sm mt-1 mb-2">Real-time weather tracking application with beautiful UI and forecast visualization.</p>
          <div className="flex gap-3 text-xs">
            <a href="https://github.com/diwakar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub →</a>
            <a href="https://demo.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Live Demo →</a>
          </div>
        </div>
      </div>
    ),
  }),

  contact: () => ({
    type: "output",
    content: (
      <div className="space-y-3">
        <div className="text-primary text-glow font-semibold mb-3">Get In Touch:</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-secondary text-glow-secondary">📧 Email:</span>
            <a href="mailto:diwakar@example.com" className="text-terminal-text hover:text-primary hover:underline">
              diwakar@example.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-secondary text-glow-secondary">💼 LinkedIn:</span>
            <a href="https://linkedin.com/in/diwakar" target="_blank" rel="noopener noreferrer" className="text-terminal-text hover:text-primary hover:underline">
              linkedin.com/in/diwakar
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-secondary text-glow-secondary">🐙 GitHub:</span>
            <a href="https://github.com/diwakar" target="_blank" rel="noopener noreferrer" className="text-terminal-text hover:text-primary hover:underline">
              github.com/diwakar
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-secondary text-glow-secondary">🐦 Twitter:</span>
            <a href="https://twitter.com/diwakar" target="_blank" rel="noopener noreferrer" className="text-terminal-text hover:text-primary hover:underline">
              @diwakar
            </a>
          </div>
        </div>
      </div>
    ),
  }),
};

export const processCommand = (input: string): CommandOutput => {
  const command = input.trim().toLowerCase();

  if (commands[command]) {
    return commands[command]();
  }

  return {
    type: "error",
    content: `Command not found: ${input}. Type 'help' for available commands.`,
  };
};
