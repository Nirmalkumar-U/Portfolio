import React, { useEffect } from 'react';
<<<<<<< HEAD
import resumePdf from './assets/resume.pdf';
=======
>>>>>>> parent of 7e267d8 (Refactor portfolio for dynamic rendering and maintainability)
import { About } from './components/about';
import { Contact } from './components/contact';
import { Hero } from './components/hero';
import { MainNavbar } from './components/main-navbar';
import { Projects } from './components/projects';
import { Skills } from './components/skills';
import { Experience } from './components/experience';
import { OwnProjects } from './components/own-projects';
//import BecuProjectImg from './assets/BECU.png'
import AccentureImg from './assets/Accenture.png'
import ByteforzaImg from './assets/Byteforza.png'
import heroImage from './assets/Nirmalkumar_pic.jpg';

export interface Education {
    college: string;
    degree: string;
    period: string;
    gpa: string;
}
export interface ExperienceInAbout {
    company: string;
    role: string;
    period: string;
    summary: string;
}
export interface SkillSet {
    title: string;
    skills: string[];
}
export interface Experience {
    title: string;
    desc: string;
    img: string;
    tags: string[];
    period: string;
}
export interface PortfolioProps {
    name: string;
    lastName: string;
    profileImage: string;
    namePronunciation: string;
    heroDescription: string;
    aboutIntro: string;
    aboutDesc1: string;
    aboutDesc2: string;
    education: Education;
    experiencesInAbout: ExperienceInAbout[];
    skillSet: string[];
    experience: Experience[];
    skills: SkillSet[];
}

// Simple helper to add 'in-view' class when element is visible
const useScrollReveal = (selector = '.reveal', options?: IntersectionObserverInit) => {
    useEffect(() => {
        const els = Array.from(document.querySelectorAll(selector));
        if (!els.length) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add('in-view');
            });
        }, options || { threshold: 0.15 });
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [selector, options]);
};

const App: React.FC = () => {
    useEffect(() => {
        const handleNav = () => {
            const nav = document.querySelector('.top-nav');
            if (!nav) return;
            if (window.scrollY > 80) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
        };
        window.addEventListener('scroll', handleNav);
        return () => window.removeEventListener('scroll', handleNav);
    }, []);

    useScrollReveal();

    const scrollTo = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        const el = document.querySelector(`#${id}`);
        if (el) {
            const yOffset = -80; // Adjust this for your navbar height
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };
    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Resume', highlight: true }
    ];

    const details: PortfolioProps = {
        name: "Nirmalkumar",
        lastName: "Uthamaraj",
        profileImage: heroImage,
        namePronunciation: "/neer-mal-koo-mar/",
        heroDescription: "👋 Hey there! I’m a full stack Software Engineer at Accenture . I completed my M.Sc. In Computer Science batch of 2022.",
        aboutIntro:
            "Hi there ✌ nice to meet you! I’m a full stack DotNet Developer at Accenture . I completed my M.Sc. In Computer Science batch of 2022.",
        aboutDesc1:
            "I’m passionate about building intelligent solutions that solve real-world problems. Over all 3 year of extensive experience in web development.",
        aboutDesc2:
            "I am very enthusiastic about new tech development. A Self Learning with some vision and I'm an excellent collaborator and I challenge myself to enhance my professional skills, capabilities and I manage to work well under pressure and possess excellent time-keeping skills.",

        education: {
            college: "Kongunadu Arts and Science College",
            degree: "M.Sc Computing Sciences",
            period: "June 2020 – May 2022",
            gpa: "7.5",
        },
        experiencesInAbout: [
            {
                company: "Accenture",
                role: "Packaged Appliction Development Senior Analyst",
                period: "Oct 2024 – Present*",
                summary: "Develop RESTful APIs using .Net core and Azure DevOps.",
            },
            {
                company: "ByteForza Technologies Private Limited",
                role: "Software Engineer",
                period: "Aug 2022 – Oct 2024",
                summary: "Developed Web application using Angular, .Net Core WebApi, .Net EntityFrameWork, SQL Server, PowerBi and Azure.",
            },
        ],
        skillSet: [
            ".Net Core", ".Net Core WebApi", ".Net Core EntityFrameWork", "C#",
            "Angular 15", "React TS", "MS Sql Server", "Azure DevOps",
            "Agile methodology", "RESTful APIs", "GitHub CI/CD Pipelines", "Microsoft PowerBi",
            "RDL RDLC Reporting", "HTML5, CSS3, Bootstrap"
        ],
        experience: [
            {
                title: 'Accenture',
                desc: 'Develop RESTful APIs using .Net core and Azure DevOps.',
                img: AccentureImg,
                tags: ['.Net Core', '.Net Core WebApi', '.Net Core EntityFrameWork', 'Test Driven Development', 'Azure DevOps'],
                period: 'Oct 2024 – Present*'
            },
            {
                title: 'ByteForza Technologies Private Limited',
                desc: 'Developed Web application using Angular, .Net Core WebApi, .Net EntityFrameWork, SQL Server, PowerBi and Azure.',
                img: ByteforzaImg,
                tags: ['Angular 15', '.Net Core', '.Net Core WebApi', '.Net Core EntityFrameWork', 'SQL Server', 'PowerBi', 'RDL & RDLC Reporting', 'Azure DevOps'],
                period: 'Aug 2022 – Oct 2024'
            }
        ],
        skills: [
            {
                title: 'Programming Languages',
                skills: ['TypeScript', 'JavaScript', 'C Sharp', 'SQL', 'HTML', 'CSS'],
            },
            {
                title: 'Back End Web Technology',
                skills: ['.Net Core', '.Net Core WebApi', '.Net Core EntityFrameWork', 'ADO .Net'],
            },
            {
                title: 'Front End Web Technology',
                skills: ['Angular', 'React', 'JQuery'],
            },
            {
                title: 'Database',
                skills: ['SQL Server', 'PostgreSQL'],
            },
            {
                title: 'Data Science',
                skills: ['PowerBi','RDL & RDLC Reporting'],
            },
        ]
    };

    return (
        <div>
            <MainNavbar details={details} brandName={`${details.name} ${details.lastName}`} navItems={navItems} onNavClick={scrollTo} />
            <Hero details={details} onCTAClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })} />
            <main>
                <About details={details} />
                <Experience details={details} />
                <Skills details={details} />
                <Projects />
                <OwnProjects />
                <Contact />
            </main>
            {/*<Footer />*/}
        </div>
    );
};

export default App;