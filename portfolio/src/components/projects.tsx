import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import { DetailsProps } from '../details/interfaces';
import './../index.css';

export const Projects: React.FC<DetailsProps> = ({ details }) => {
    return (
        <section id="projects" className="projects-section">
            <Container>
                <h2 className="section-heading mb-5 reveal">PROJECTS</h2>
                {details.projects.map((p, i) => (
                    <div key={p.title} className={`project-feature reveal ${i % 2 === 1 ? 'reverse' : ''}`}>
                        <div className="project-content" style={{ flex: 1 }}>
                            <h2>{p.title}</h2>
                            <div style={{ color: 'var(--muted)', marginBottom: 12 }}>Mar 2024 - Present</div>
                            <p>{p.desc}</p>
                            <div style={{ marginTop: 16 }}>
                                {p.tags.map((t) => <span className="tag-pill m-1" key={t}>{t}</span>)}
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