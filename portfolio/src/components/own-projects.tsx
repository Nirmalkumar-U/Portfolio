import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './../index.css';

// Projects Section
export const OwnProjects: React.FC = () => {
    const projects = [
        {
            title: 'LearnPath',
            desc: 'A dynamic web app that generates and tracks personalized roadmaps based on user skills and proficiency levels.',
            img: '/project-learnpath.png',
            tags: ['Nextjs', 'TypeScript', 'NodeJS', 'MongoDB']
        },
        {
            title: 'DataHorizon Website',
            desc: 'Micro-services based website developed for a marketing company with secure data handling and integrated services.',
            img: '/project-datahorizon.png',
            tags: ['HTML', 'CSS', 'Javascript', 'MySQL']
        },
        {
            title: 'Telangana Growth Analysis',
            desc: 'Interactive dashboard with visual insights and predictive models for policy decision making.',
            img: '/project-telangana.png',
            tags: ['Power BI', 'Excel', 'Machine Learning']
        }
    ];

    return (
        <section id="ownprojects" className="projects-section">
            <Container>
                <div className="section-label reveal">FEATURED PROJECTS</div>

                {projects.map((p, i) => (
                    <div key={p.title} className={`project-feature reveal ${i % 2 === 1 ? 'reverse' : ''}`}>
                        <div className="project-content" style={{ flex: 1 }}>
                            <h2>{p.title}</h2>
                            <div style={{ color: 'var(--muted)', marginBottom: 12 }}>Mar 2024 - Present</div>
                            <p>{p.desc}</p>

                            <div style={{ marginTop: 16 }}>
                                {p.tags.map((t) => <span className="tag-pill" key={t}>{t}</span>)}
                            </div>

                            <div style={{ marginTop: 20 }}>
                                <Button variant="light" className="me-3">Read More →</Button>
                                <Button variant="outline-dark">GitHub</Button>
                            </div>
                        </div>

                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                            <div className="project-screenshot">
                                <img src={p.img} alt={p.title} />
                            </div>
                        </div>
                    </div>
                ))}

            </Container>
        </section>
    );
};