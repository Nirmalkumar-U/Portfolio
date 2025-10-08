import BecuProjectImg from '../assets/BECU.png'
import AccentureImg from '../assets/Accenture.png'
import ByteforzaImg from '../assets/Byteforza.png'
import heroImage from '../assets/Nirmalkumar_pic.jpg';
import hmidImg from '../assets/hmids.png';
import smarttoolsImg from '../assets/smarttools.png';
import assetManagementImg from '../assets/AssetManagement.png';
import libraryManagementImg from '../assets/LibraryManagement.png';
import bankingToolImg from '../assets/BankingTool.jpg';
import azureFundamentalImg from '../assets/AzureFundamentals.jpg';
import understandingDesignImg from '../assets/UnderstandingDesign.jpg';
import resumePdf from '../assets/resume.pdf';
import { PortfolioProps } from '../details/interfaces';

export const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'products', label: 'Products' },
    { id: 'certification', label: 'Certification' },
    { id: 'contact', label: 'Resume', highlight: true }
];

export const details: PortfolioProps = {
    name: "Nirmalkumar",
    lastName: "Uthamaraj",
    mailId: 'unirmalkumar3@gmail.com',
    githubLink: 'https://github.com/Nirmalkumar-U',
    linkedinLink: 'https://www.linkedin.com/in/nirmalkumar-uthamaraj/',
    profileImage: heroImage,
    resume: resumePdf,
    namePronunciation: "/neer-mal-koo-mar/",
    descriptionMe: "👋 Hey there! I'm a .NET Full Stack Developer, crafting scalable and efficient web solutions from front to back. Passionate about clean architecture, modern design, and building applications that truly make a difference.",
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
        ".Net Core", ".Net Core WebApi", ".Net Core EntityFrameWork", "C#", "Test Driven Development", 
        "Angular 15", "React TS", "MS Sql Server", "Azure DevOps",
        "Agile methodology", "RESTful APIs", "GitHub CI/CD Pipelines", "Microsoft PowerBi",
        "RDL RDLC Reporting", "HTML5, CSS3, Bootstrap"
    ],
    experience: [
        {
            title: 'Accenture',
            desc: 'Develop RESTful APIs using .Net core, .Net EntityFrameWork, Test Driven Development and Azure DevOps.',
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
            skills: ['PowerBi', 'RDL & RDLC Reporting'],
        },
        {
            title: 'Testing and development',
            skills: ['Test Driven Development', 'xUnit', 'nUnit', 'Moq'],
        },
        {
            title: 'Version control',
            skills: ['Azure DevOps', 'GitHub'],
        },
    ],
    projects: [
        {
            title: 'BECU',
            desc: 'Developed WebApis for Credit Card banking using .Net Core WebApi and Azure.',
            img: BecuProjectImg,
            tags: ['.Net Core', '.Net Core WebApi', '.Net Core EntityFrameWork', 'Test Driven Development', 'nUnit', 'xUnit', 'Moq']
        },
        {
            title: 'HMID',
            desc: 'The Hazardous Material Inventory and Disposal (HMID) module tracks Hazardous Material and Waste from "Cradle to Grave," fully integrated with the Defense Logistics Agency systems.',
            img: hmidImg,
            tags: ['Angular 15', 'Micro Service', 'C Sharp', '.Net Core', '.Net Core WebApi', '.Net Core EntityFrameWork', 'SQL Server', 'PowerBi', 'RDL & RDLC Reporting', 'Azure Devops']
        },
        {
            title: 'Smart tool',
            desc: 'Smart Tool is a web-based application for storing information regarding US Government inspections, functioning both online and offline.',
            img: smarttoolsImg,
            tags: ['Angular 15', 'Micro Service', 'C Sharp', '.Net Core', '.Net Core WebApi', '.Net Core EntityFrameWork', 'SQL Server', 'PowerBi', 'RDL & RDLC Reporting', 'Azure Devops']
        }
    ],
    ownProjects: [
        {
            title: 'Banking Tool',
            desc: 'Developed a banking management application that enables users to efficiently manage their financial activities, including banking transactions, budgeting, wallet management, and financial notes. The system also integrates a calendar feature for scheduling payments and tracking due dates, along with statement generation and downloads for record-keeping.',
            img: bankingToolImg,
            tags: ['Angular 15', 'Micro Service', 'C Sharp', '.Net Core', '.Net Core WebApi', '.Net Core EntityFrameWork', 'SQL Server', 'GitHub'],
            githubLink: 'https://github.com/Nirmalkumar-U/BankingTool'
        },
        {
            title: 'Asset Management',
            desc: 'Designed and developed an Asset Management System to streamline the tracking, allocation, and maintenance of organizational assets.',
            img: assetManagementImg,
            tags: ['Angular 15', 'React Js', 'Micro Service', 'C Sharp', '.Net Core', '.Net Core WebApi', '.Net Core EntityFrameWork', 'SQL Server', 'GitHub'],
            githubLink: 'https://github.com/Nirmalkumar-U/AssetManagement'
        },
        {
            title: 'Library Management',
            desc: 'Developed a Library Management System to automate and streamline the management of books, members, and borrowing activities.',
            img: libraryManagementImg,
            tags: ['JQuery', '.Net MVC', '.Net Core EntityFrameWork', 'SQL Server', 'GitHub'],
            githubLink: 'https://github.com/Nirmalkumar-U/Library'
        }
    ],
    certifications: [
        {
            title: 'Microsoft Certified: Azure Fundamentals',
            platform: 'Microsoft',
            desc: 'This certification validates foundational knowledge of cloud services and how those services are provided with Microsoft Azure.',
            img: azureFundamentalImg,
            period: 'Issued on March 2025 - Expire on March 2026'
        },
        {
            title: 'Understanding design',
            platform: 'NPTEL',
            desc: 'This course covers the fundamental principles of design, including color theory, typography, layout, and composition.',
            img: understandingDesignImg,
            period: 'Issued on April 2021'
        }
    ]
};