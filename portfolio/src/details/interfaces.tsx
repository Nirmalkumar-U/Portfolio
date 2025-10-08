export interface PortfolioProps {
    name: string;
    lastName: string;
    mailId: string;
    profileImage: string;
    namePronunciation: string;
    resume: string;
    descriptionMe: string;
    githubLink: string;
    linkedinLink: string;
    aboutIntro: string;
    aboutDesc1: string;
    aboutDesc2: string;
    education: Education;
    experiencesInAbout: ExperienceInAbout[];
    skillSet: string[];
    experience: Experience[];
    skills: SkillSet[];
    projects: Projects[];
    ownProjects: OwnProjects[];
    certifications: Certification[];
}
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
export interface Projects {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}
export interface OwnProjects {
    title: string;
    desc: string;
    img: string;
    tags: string[];
    githubLink: string;
}
export interface Certification {
    title: string;
    platform: string;
    desc: string;
    img: string;
    period: string;
}

export interface DetailsProps {
    details: PortfolioProps;
}

export interface HeroProps {
    details: PortfolioProps
    onCTAClick?: () => void;
}
export interface NavItem {
    id: string;
    label: string;
    highlight?: boolean;
}

export interface MainNavbarProps {
    navItems: NavItem[];
    onNavClick: (id: string) => (e: React.MouseEvent) => void;
    details: PortfolioProps;
}