import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import { DetailsProps } from '../details/interfaces';
import './../index.css';

export const Certification: React.FC<DetailsProps> = ({ details }) => {
    return (
        <section id="certification" className="projects-section">
            <Container>
                <h2 className="section-heading mb-5 reveal">CERTIFICATION</h2>
                {details.certifications.map((p) => (
                    <div key={p.title} className={`project-feature reveal`}>
                        <div className="project-content" style={{ flex: 1 }}>
                            <h2>{p.title}</h2>
                            <div style={{ color: 'var(--muted)', marginBottom: 12 }}>{p.period}</div>
                            <p>{p.desc}</p>
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