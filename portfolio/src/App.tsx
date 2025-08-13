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
    link: string;
    image: string;
}

// Store all portfolio data in variable objects
const personalInfo: PersonalInfo = {
    name: 'John Doe',
    title: 'Full Stack .NET Developer',
    summary: 'Passionate Full Stack Developer with over 8 years of experience in .NET technologies, crafting scalable web applications, RESTful APIs, and modern React frontends. Dedicated to clean code, agile methodologies, and innovative solutions.',
    email: 'john.doe@example.com',
    phone: '+1 (123) 456-7890',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    photo: 'src/assets/SmartTools.png', // Place your profile photo in public/assets/profile.jpg
};

const skills: Skill[] = [
    { name: '.NET Core / ASP.NET', proficiency: 'Expert', icon: 'bi-microsoft' },
    { name: 'C#', proficiency: 'Expert', icon: 'bi-code-slash' },
    { name: 'React & TypeScript', proficiency: 'Advanced', icon: 'bi-react' },
    { name: 'SQL Server & Entity Framework', proficiency: 'Expert', icon: 'bi-database' },
    { name: 'Azure / AWS Cloud Services', proficiency: 'Advanced', icon: 'bi-cloud' },
    { name: 'RESTful APIs & Microservices', proficiency: 'Expert', icon: 'bi-plug' },
    { name: 'HTML5, CSS3, Bootstrap', proficiency: 'Advanced', icon: 'bi-bootstrap' },
    { name: 'Git & CI/CD Pipelines', proficiency: 'Advanced', icon: 'bi-git' },
];

const experiences: Experience[] = [
    {
        company: 'Tech Innovations Inc.',
        role: 'Senior Full Stack Developer',
        duration: '2020 - Present',
        description: 'Spearheaded development of enterprise applications using .NET Core and React, achieving 50% performance gains through optimized queries and CI/CD pipelines.',
    },
    {
        company: 'Software Solutions Ltd.',
        role: 'Full Stack .NET Developer',
        duration: '2017 - 2020',
        description: 'Developed robust web applications with ASP.NET MVC, integrated APIs, and guided junior developers on best practices.',
    },
    {
        company: 'Startup Ventures',
        role: 'Junior .NET Developer',
        duration: '2015 - 2017',
        description: 'Built backend services with C# and .NET Framework, contributed to front-end features, and ensured code quality with unit tests.',
    },
];

const projects: Project[] = [
    {
        name: 'SmartTools Platform',
        description: 'A scalable platform with .NET Core, React, and SQL Server, featuring user authentication, payment integration, and real-time data processing.',
        technologies: ['.NET Core', 'React', 'SQL Server', 'Azure'],
        link: 'https://github.com/johndoe/smarttools',
        image: 'src/assets/SmartTools.png',
    },
    {
        name: 'Task Management App',
        description: 'A collaborative task tracking tool with ASP.NET Web API, Entity Framework, and a React-based UI for real-time updates.',
        technologies: ['ASP.NET', 'C#', 'React', 'PostgreSQL'],
        link: 'https://github.com/johndoe/task-manager',
        image: 'src/assets/SmartTools.png',
    },
    {
        name: 'Portfolio Website',
        description: 'This responsive portfolio showcasing skills and projects, built with React, TypeScript, and Bootstrap.',
        technologies: ['React', 'TypeScript', 'Bootstrap'],
        link: 'https://github.com/johndoe/portfolio',
        image: 'src/assets/SmartTools.png',
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
                        <div className="col-lg-8">
                            <img
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
                                    <div className="col-md-9">
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

            {/* Contact Section - Animated form and info */}
            <section id="contact" ref={contactRef} className="py-5 bg-light">
                <div className="container">
                    <h2 className={`text-center mb-5 fw-bold ${isContactVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                        <i className="bi bi-envelope-fill me-2 text-primary"></i>Contact Me
                    </h2>
                    <div className={`row ${isContactVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                        <div className="col-md-6 mb-4">
                            <h4 className="fw-bold">Get in Touch</h4>
                            <p><i className="bi bi-envelope me-2 text-primary"></i>Email: <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
                            <p><i className="bi bi-phone me-2 text-primary"></i>Phone: {personalInfo.phone}</p>
                            <p><i className="bi bi-linkedin me-2 text-primary"></i>LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">Connect</a></p>
                            <p><i className="bi bi-github me-2 text-primary"></i>GitHub: <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">View Profile</a></p>
                        </div>
                        <div className="col-md-6">
                            <form>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className={`form-control form-control-lg ${isContactVisible ? 'animate__animated animate__fadeIn' : ''}`}
                                        placeholder="Your Name"
                                        style={{ animationDelay: '0.1s' }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className={`form-control form-control-lg ${isContactVisible ? 'animate__animated animate__fadeIn' : ''}`}
                                        placeholder="Your Email"
                                        style={{ animationDelay: '0.2s' }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className={`form-control form-control-lg ${isContactVisible ? 'animate__animated animate__fadeIn' : ''}`}
                                        rows={4}
                                        placeholder="Your Message"
                                        style={{ animationDelay: '0.3s' }}
                                    ></textarea>
                                </div>
                                <button type="submit" className={`btn btn-primary btn-lg ${isContactVisible ? 'animate__animated animate__pulse' : ''}`}>
                                    Send Message
                                </button>
                            </form>
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