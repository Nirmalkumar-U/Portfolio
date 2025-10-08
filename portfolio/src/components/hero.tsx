import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './../index.css';
import { PortfolioProps } from '../App';

interface HeroProps {
    details: PortfolioProps
    onCTAClick?: () => void;
}
// Hero Section
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
                            👋 Hey there! I'm a Backend developer and Data scientist, turning ideas into intelligent solutions.
                            Passionate about AI and innovation — building systems that make a real impact.
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
                                <a href="#" className="social-icon" aria-label="LinkedIn">in</a>
                                <a href="#" className="social-icon" aria-label="GitHub">gh</a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={5} className="d-none d-lg-flex justify-content-center">
                        <div className="portrait-card reveal">
                            <div className="portrait-frame">
                                {/* Replace with your portrait path */}
                                <img
                                    src={details.profileImage}
                                    alt="Nirmalkumar"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
