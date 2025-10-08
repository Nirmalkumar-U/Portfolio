import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// Define interfaces for TypeScript typing
interface PersonalInfo {
    name: string;
    title: string;
    summary: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    photo: string;
}

interface Skill {
    name: string;
    proficiency: string;
    icon: string;
}

interface Experience {
    company: string;
    role: string;
    duration: string;
    description: string;
}

interface Project {
    name: string;
    description: string;
    technologies: string[];
    image: string;
}

// Store all portfolio data in variable objects
const personalInfo: PersonalInfo = {
    name: 'NIRMALKUMAR UTHAMARAJ',
    title: 'Full Stack .NET Developer',
    summary: 'Passionate Full Stack Developer with over 8 years of experience in .NET technologies, crafting scalable web applications, RESTful APIs, and modern React frontends. Dedicated to clean code, agile methodologies, and innovative solutions.',
    email: 'unirmalkumar3@gmail.com',
    phone: '+91 8778359970',
    linkedin: 'https://www.linkedin.com/in/nirmalkumar-uthamaraj',
    github: 'https://github.com/Nirmalkumar-U',
    photo: 'src/assets/Nirmalkumar_pic.jpg', // Place your profile photo in public/assets/profile.jpg
};

const skills: Skill[] = [
    { name: '.NET Core', proficiency: 'Expert', icon: 'bi-microsoft' },
    { name: '.NET Web API', proficiency: 'Expert', icon: 'bi-microsoft' },
    { name: '.NET Entity Framework &#x26; Linq', proficiency: 'Expert', icon: 'bi-microsoft' },
    { name: 'C#', proficiency: 'Expert', icon: 'bi-hash' },
    { name: 'Angular &#x26; TypeScript', proficiency: 'Advanced', icon: 'bi-angular' },
    { name: 'React &#x26; TypeScript', proficiency: 'Advanced', icon: 'bi-react' },
    { name: 'SQL Server', proficiency: 'Expert', icon: 'bi-database' },
    { name: 'Azure DevOps', proficiency: 'Advanced', icon: 'bi-azure' },
    { name: 'Agile methodology', proficiency: 'Advanced', icon: 'bi-kanban' },
    { name: 'RESTful APIs &#x26; Microservices', proficiency: 'Expert', icon: 'bi-plug' },
    { name: 'Git &#x26; CI/CD Pipelines', proficiency: 'Advanced', icon: 'bi-git' },
    { name: 'Microsoft PowerBi', proficiency: 'Advanced', icon: 'bi-bar-chart' },
    { name: 'RDL &#x26;PDLC Reporting', proficiency: 'Advanced', icon: 'bi-file-bar-graph' },
    { name: 'HTML5, CSS3, Bootstrap', proficiency: 'Advanced', icon: 'bi-bootstrap' },
];

const experiences: Experience[] = [
    {
        company: 'Accenture.',
        role: 'Package App Development Senior Analyst',
        duration: 'Oct-2024 - Present',
        description: 'Spearheaded development of enterprise applications using .NET Core and React, achieving 50% performance gains through optimized queries and CI/CD pipelines.',
    },
    {
        company: 'Byteforza Technologies PVT Ltd.',
        role: 'Software Engineer',
        duration: 'Aug-2022 - Oct-2024',
        description: 'Developed robust web applications with ASP.NET MVC, integrated APIs, and guided junior developers on best practices.',
    },
];

const projects: Project[] = [
    {
        name: 'BECU Credit Card',
        description: 'A scalable platform with .NET Core, React, and SQL Server, featuring user authentication, payment integration, and real-time data processing.',
        technologies: ['.NET Core', 'React', 'SQL Server', 'Azure'],
        image: 'src/assets/BECU.png',
    },
    {
        name: 'HMID',
        description: 'A collaborative task tracking tool with ASP.NET Web API, Entity Framework, and a React-based UI for real-time updates.',
        technologies: ['ASP.NET', 'C#', 'React', 'PostgreSQL'],
        image: 'src/assets/hmids.png',
    },
    {
        name: 'Smart Tools',
        description: 'This responsive portfolio showcasing skills and projects, built with React, TypeScript, and Bootstrap.',
        technologies: ['React', 'TypeScript', 'Bootstrap'],
        image: 'src/assets/smarttools.png',
    },
];

// Custom hook for Intersection Observer
const useOnScreen = (ref: React.RefObject<HTMLElement>) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stop observing after first visibility
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return isVisible;
};

const App: React.FC = () => {
    // Refs for sections to trigger animations
    const aboutRef = useRef<HTMLElement>(null);
    const skillsRef = useRef<HTMLElement>(null);
    const experienceRef = useRef<HTMLElement>(null);
    const projectsRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    // Visibility states
    const isAboutVisible = useOnScreen(aboutRef);
    const isSkillsVisible = useOnScreen(skillsRef);
    const isExperienceVisible = useOnScreen(experienceRef);
    const isProjectsVisible = useOnScreen(projectsRef);
    const isContactVisible = useOnScreen(contactRef);

    return (
        <div className="App">
            {/* Navbar - Sleek with hover animation */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-navy fixed-top shadow-lg">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold animate__animated animate__fadeIn" href="#">
                        <i className="bi bi-code-slash me-2"></i>{personalInfo.name}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link nav-link-hover" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link nav-link-hover" href="#skills">Skills</a></li>
                            <li className="nav-item"><a className="nav-link nav-link-hover" href="#experience">Experience</a></li>
                            <li className="nav-item"><a className="nav-link nav-link-hover" href="#projects">Projects</a></li>
                            <li className="nav-item"><a className="nav-link nav-link-hover" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Gradient overlay, animated profile photo */}
            <section id="about" ref={aboutRef} className="d-flex align-items-center min-vh-100 text-white text-center hero-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8" style={{ padding: "84px" }} >
                            <img
                                style={{
                                    height: "255px",
                                    width: "236px",
                                }}
                                src={personalInfo.photo}
                                alt="Profile"
                                className={`rounded-circle mb-4 img-fluid profile-photo ${isAboutVisible ? 'animate__animated animate__zoomIn' : ''}`}
                            />
                            <h1 className={`display-3 fw-bold ${isAboutVisible ? 'animate__animated animate__fadeInDown' : ''}`}>{personalInfo.name}</h1>
                            <h2 className={`lead fw-normal ${isAboutVisible ? 'animate__animated animate__fadeInUp' : ''}`}>{personalInfo.title}</h2>
                            <p className={`mt-4 mx-auto ${isAboutVisible ? 'animate__animated animate__fadeIn' : ''}`} style={{ maxWidth: '700px' }}>
                                {personalInfo.summary}
                            </p>
                            <a href="#contact" className={`btn btn-outline-light btn-lg mt-3 ${isAboutVisible ? 'animate__animated animate__pulse animate__infinite' : ''}`}>
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section - Animated cards with hover effects */}
            <section id="skills" ref={skillsRef} className="py-5 bg-light">
                <div className="container">
                    <h2 className={`text-center mb-5 fw-bold ${isSkillsVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                        <i className="bi bi-star-fill me-2 text-primary"></i>Skills
                    </h2>
                    <div className="row">
                        {skills.map((skill, index) => (
                            <div key={index} className="col-md-4 col-sm-6 mb-4">
                                <div className={`card h-100 skill-card shadow-sm ${isSkillsVisible ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="card-body text-center">
                                        <i className={`bi ${skill.icon} fs-1 mb-3 text-primary`}></i>
                                        <h5 className="card-title fw-bold">{skill.name}</h5>
                                        <p className="card-text">{skill.proficiency}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section - Timeline with animated entries */}
            <section id="experience" ref={experienceRef} className="py-5 bg-white">
                <div className="container">
                    <h2 className={`text-center mb-5 fw-bold ${isExperienceVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                        <i className="bi bi-briefcase-fill me-2 text-primary"></i>Professional Experience
                    </h2>
                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`timeline-item mb-5 ${isExperienceVisible ? 'animate__animated animate__slideInLeft' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="row">
                                    <div className="col-md-3 text-md-end">
                                        <h5>{exp.duration}</h5>
                                    </div>
                                    <div className="col-md-9 p-3">
                                        <h4 className="fw-bold">{exp.role} at {exp.company}</h4>
                                        <p>{exp.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section - Cards with image zoom, no view button */}
            <section id="projects" ref={projectsRef} className="py-5 bg-light">
                <div className="container">
                    <h2 className={`text-center mb-5 fw-bold ${isProjectsVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                        <i className="bi bi-folder-fill me-2 text-primary"></i>Projects
                    </h2>
                    <div className="row">
                        {projects.map((project, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className={`card h-100 project-card shadow-sm ${isProjectsVisible ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="project-img-wrapper">
                                        <img src={project.image} className="card-img-top" alt={project.name} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{project.name}</h5>
                                        <p className="card-text">{project.description}</p>
                                        <p className="card-text"><small className="text-muted">Technologies: {project.technologies.join(', ')}</small></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section - Altered design with contact details only */}
            <section id="contact" ref={contactRef} className="py-5">
                <div className="container">
                    <h2 className={`text-center mb-5 fw-bold ${isContactVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                        <i className="bi bi-envelope-fill me-2 text-primary"></i>Contact Me
                    </h2>
                    <div className={`row justify-content-center ${isContactVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                        <div className="col-md-6">
                            <div className="contact-details p-4 rounded shadow-sm">
                                <p className="mb-3">
                                    <i className="bi bi-envelope me-2 text-azure"></i>
                                    <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                                </p>
                                <p className="mb-3">
                                    <i className="bi bi-phone me-2 text-azure"></i>
                                    {personalInfo.phone}
                                </p>
                                <p className="mb-3">
                                    <i className="bi bi-linkedin me-2 text-azure"></i>
                                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
                                </p>
                                <p className="mb-3">
                                    <i className="bi bi-github me-2 text-azure"></i>
                                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">View GitHub Profile</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer - Gradient with subtle animation */}
            <footer className="gradient-footer text-white text-center py-4">
                <p className="animate__animated animate__fadeIn">&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;