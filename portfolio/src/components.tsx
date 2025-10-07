//import 'bootstrap/dist/css/bootstrap.min.css';
//import React from 'react';
//import './index.css'
//import { Container, Row, Col, Card, Button, Form, Navbar, Nav } from 'react-bootstrap';
//import heroImage from '../src/assets/Nirmalkumar_pic.jpg';

////main navbar
//export const MainNavbar: React.FC<{ onNavClick: (id: string) => (e: React.MouseEvent) => void }> = ({ onNavClick }) => {
//    return (
//        <Navbar expand="lg" fixed="top" className="top-nav">
//            <Container>
//                <Navbar.Brand href="#" className="logo">Harish Kumar</Navbar.Brand>
//                <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                <Navbar.Collapse id="basic-navbar-nav">
//                    <Nav className="ms-auto align-items-center">
//                        <Nav.Link href="#work" onClick={onNavClick('work')}>Work</Nav.Link>
//                        <Nav.Link href="#about" onClick={onNavClick('about')}>About</Nav.Link>
//                        <Nav.Link href="#resume" onClick={onNavClick('resume')} className="text-danger">Resume</Nav.Link>
//                        {/*<Button variant="outline-light" className="ms-3 dark-toggle">☀</Button>*/}
//                    </Nav>
//                </Navbar.Collapse>
//            </Container>
//        </Navbar>
//    );
//};

////Contact Section
//export const Contact: React.FC = () => {
//    return (
//        <section id="contact" className="contact-section py-6 reveal-section">
//            <Container className="text-center">
//                <div className="say-hi reveal">
//                    <hr className="divider" />
//                    <p className="say-hi-text">SAY HI</p>
//                </div>

//                <h3 className="contact-email reveal">harishkumarn1112@gmail.com</h3>

//                <p className="contact-note reveal">
//                    If you want to know more about my experiences and journey, or just talk in general, get in touch! ✌
//                </p>

//                <div className="contact-buttons reveal mt-4">
//                    <a href="#" className="btn btn-danger btn-lg me-3">Resume</a>
//                    <a href="#" className="social-icon" aria-label="LinkedIn">in</a>
//                    <a href="#" className="social-icon" aria-label="GitHub">gh</a>
//                </div>

//                <p className="mt-5 small text-muted">© {new Date().getFullYear()} All rights reserved.</p>
//            </Container>
//        </section>
//    );
//};

///** Footer */
//export const Footer: React.FC = () => (
//    <footer className="py-4">
//        <Container>
//            <Row>
//                <Col md={6}>© {new Date().getFullYear()} Harish Kumar</Col>
//                <Col md={6} className="text-end">Made with ❤️ using React + TypeScript + Bootstrap</Col>
//            </Row>
//        </Container>
//    </footer>
//);

//// Hero Section
//export const Hero: React.FC<{ onCTAClick?: () => void }> = ({ onCTAClick }) => {
//    return (
//        <section className="hero-section">
//            <Container>
//                <Row className="align-items-center">
//                    <Col lg={7}>
//                        <h1 className="hero-title reveal">Hello, I'm Harish Kumar.</h1>
//                        <p className="hero-subtitle reveal">
//                            👋 Hey there! I'm a Backend developer and Data scientist, turning ideas into intelligent solutions.
//                            Passionate about AI and innovation — building systems that make a real impact.
//                        </p>

//                        <div className="skills-grid reveal">
//                            <div>
//                                <ul className="skills-list">
//                                    <li>NodeJS</li>
//                                    <li>Adonis JS</li>
//                                    <li>WebSockets</li>
//                                    <li>Machine Learning</li>
//                                </ul>
//                            </div>
//                            <div>
//                                <ul className="skills-list">
//                                    <li>Express JS</li>
//                                    <li>TypeScript</li>
//                                    <li>Flask (Python)</li>
//                                    <li>Data Science</li>
//                                </ul>
//                            </div>
//                        </div>

//                        <div className="hero-cta reveal">
//                            <Button className="btn-resume me-3" onClick={onCTAClick}>Resume</Button>

//                            <div className="contact-buttons reveal d-inline-block">
//                                <a href="#" className="social-icon" aria-label="LinkedIn">in</a>
//                                <a href="#" className="social-icon" aria-label="GitHub">gh</a>
//                            </div>
//                        </div>
//                    </Col>

//                    <Col lg={5} className="d-none d-lg-flex justify-content-center">
//                        <div className="portrait-card reveal">
//                            <div className="portrait-frame">
//                                {/* Replace with your portrait path */}
//                                <img
//                                    src={heroImage}
//                                    alt="Nirmalkumar"
//                                />
//                            </div>
//                        </div>
//                    </Col>
//                </Row>
//            </Container>
//        </section>
//    );
//};

//// About Section
//export const About: React.FC = () => {
//    return (
//        <section id="about" className="about-section py-6 reveal-section">
//            <Container>
//                <h2 className="section-heading mb-5 reveal">ABOUT ME</h2>
//                <Row className="align-items-center g-5">
//                    <Col lg={5} className="reveal">
//                        <div className="about-image">
//                            <img
//                                src="~/../Nirmalkumar_pic.jpg"
//                                alt="Harish Kumar"
//                                className="img-fluid rounded-4 shadow"
//                            />
//                        </div>
//                    </Col>

//                    <Col lg={7} className="reveal">
//                        <h3 className="about-name">Harish Kumar</h3>
//                        <p className="about-pronounce">/huh-rish.ku-maar/</p>

//                        <p className="about-intro">
//                            Hi there ✌ nice to meet you! I'm a <strong>Backend Developer</strong> and <strong>Data Scientist</strong> based out of Tamil Nadu, India.
//                        </p>

//                        <p className="about-desc">
//                            I’m passionate about building intelligent solutions that solve real-world problems.
//                            I specialize in creating scalable backend systems and developing AI-powered applications
//                            that enhance decision-making. I primarily code in <strong>Python</strong> and <strong>TypeScript</strong>,
//                            while exploring cutting-edge AI and data-driven technologies.
//                        </p>

//                        <p className="about-desc">
//                            In my free time, I enjoy exploring new AI trends 🤖, working out 🏋️,
//                            and experimenting with culinary techniques in the kitchen 🍳. I love learning
//                            new concepts and pushing boundaries to build impactful solutions.
//                        </p>

//                        <Row className="mt-4 g-3">
//                            <Col md={6}>
//                                <Card className="about-card p-3">
//                                    <h6>Education</h6>
//                                    <p className="mb-0">
//                                        <strong>Coimbatore Institute of Technology</strong>
//                                        <br />
//                                        M.Sc Decision and Computing Sciences
//                                        <br />
//                                        <small>Nov 2021 – May 2026</small>
//                                        <br />
//                                        GPA: <strong>8.75 / 10</strong>
//                                    </p>
//                                </Card>
//                            </Col>

//                            <Col md={6}>
//                                <Card className="about-card p-3">
//                                    <h6>Experience</h6>
//                                    <p className="mb-0">
//                                        <strong>NGP Websmart</strong> — Software Engineer Intern (Backend)
//                                        <br />
//                                        <small>Jun 2024 – Nov 2024</small>
//                                        <br />
//                                        Revamped performance management system using AdonisJS, Node.js
//                                    </p>
//                                </Card>
//                            </Col>
//                        </Row>
//                    </Col>
//                </Row>
//            </Container>
//        </section>
//    );
//};

//// Skills Section
//export const Skills: React.FC = () => {
//    const skillGroups = [
//        {
//            title: 'Programming',
//            skills: ['TypeScript', 'JavaScript', 'Python', 'C', 'SQL'],
//        },
//        {
//            title: 'Web',
//            skills: ['React', 'Vue', 'NodeJS', 'Flask', 'OAuth', 'WebSockets', 'AdonisJS', 'ExpressJS'],
//        },
//        {
//            title: 'Databases',
//            skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
//        },
//        {
//            title: 'Data Science',
//            skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-Learn', 'Seaborn', 'PowerBI'],
//        },
//    ];

//    return (
//        <section id="skills" className="skills-section py-6 reveal-section">
//            <Container>
//                <h2 className="section-heading mb-5 reveal">Skills</h2>

//                <Row className="gy-5">
//                    {skillGroups.map((group) => (
//                        <Col md={6} key={group.title} className="reveal">
//                            <h5 className="skill-category">{group.title}</h5>
//                            <div className="skill-tags">
//                                {group.skills.map((skill) => (
//                                    <span key={skill} className="skill-pill">
//                                        {skill}
//                                    </span>
//                                ))}
//                            </div>
//                        </Col>
//                    ))}
//                </Row>
//            </Container>
//        </section>
//    );
//};

//// Projects Section
//export const Projects: React.FC = () => {
//    const projects = [
//        {
//            title: 'LearnPath',
//            desc: 'A dynamic web app that generates and tracks personalized roadmaps based on user skills and proficiency levels.',
//            img: '/project-learnpath.png',
//            tags: ['Nextjs', 'TypeScript', 'NodeJS', 'MongoDB']
//        },
//        {
//            title: 'DataHorizon Website',
//            desc: 'Micro-services based website developed for a marketing company with secure data handling and integrated services.',
//            img: '/project-datahorizon.png',
//            tags: ['HTML', 'CSS', 'Javascript', 'MySQL']
//        },
//        {
//            title: 'Telangana Growth Analysis',
//            desc: 'Interactive dashboard with visual insights and predictive models for policy decision making.',
//            img: '/project-telangana.png',
//            tags: ['Power BI', 'Excel', 'Machine Learning']
//        }
//    ];

//    return (
//        <section id="work" className="projects-section">
//            <Container>
//                <div className="section-label reveal">FEATURED PROJECTS</div>

//                {projects.map((p, i) => (
//                    <div key={p.title} className={`project-feature reveal ${i % 2 === 1 ? 'reverse' : ''}`}>
//                        <div className="project-content" style={{ flex: 1 }}>
//                            <h2>{p.title}</h2>
//                            <div style={{ color: 'var(--muted)', marginBottom: 12 }}>Mar 2024 - Present</div>
//                            <p>{p.desc}</p>

//                            <div style={{ marginTop: 16 }}>
//                                {p.tags.map((t) => <span className="tag-pill" key={t}>{t}</span>)}
//                            </div>

//                            <div style={{ marginTop: 20 }}>
//                                <Button variant="light" className="me-3">Read More →</Button>
//                                <Button variant="outline-dark">GitHub</Button>
//                            </div>
//                        </div>

//                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
//                            <div className="project-screenshot">
//                                <img src={p.img} alt={p.title} />
//                            </div>
//                        </div>
//                    </div>
//                ))}

//            </Container>
//        </section>
//    );
//};