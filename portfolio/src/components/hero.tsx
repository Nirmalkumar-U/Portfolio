import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { HeroProps } from '../details/interfaces';
import './../index.css';

export const Hero: React.FC<HeroProps> = ({ details, onCTAClick }) => {
    const mid = Math.ceil(details.skillSet.length / 2);
    const column1 = details.skillSet.slice(0, mid);
    const column2 = details.skillSet.slice(mid);
    return (
        <section id="hero" className="hero-section">
            <Container>
                <Row className="align-items-center">
                    <Col lg={7}>
                        <h1 className="hero-title reveal">Hello, I'm {details.name}.</h1>
                        <p className="hero-subtitle reveal">
                            {details.descriptionMe}
                        </p>

                        <div className="skills-grid reveal">
                            <div>
                                <ul className="skills-list">
                                    {column1.map((skill) => (
                                        <li key={skill}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <ul className="skills-list">
                                    {column2.map((skill) => (
                                        <li key={skill}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="hero-cta reveal">
                            <Button className="btn-resume me-3" onClick={onCTAClick}>Resume</Button>

                            <div className="contact-buttons reveal d-inline-block">
                                <a href={details.linkedinLink} target="_blank" className="social-icon" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href={details.githubLink} target="_blank" className="social-icon" aria-label="GitHub">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} className="d-none d-lg-flex justify-content-center">
                        <div className="portrait-card reveal">
                            <div className="portrait-frame">
                                <img
                                    src={details.profileImage}
                                    alt={details.name}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
