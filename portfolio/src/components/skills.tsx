import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { DetailsProps } from '../details/interfaces';
import './../index.css';

// Skills Section
export const Skills: React.FC<DetailsProps> = ({ details }) => {
    return (
        <section id="skills" className="skills-section py-2 reveal-section">
            <Container>
                <h2 className="section-heading mb-5 reveal">Skills</h2>

                <Row className="gy-5">
                    {details.skills.map((group) => (
                        <Col md={6} key={group.title} className="reveal">
                            <h5 className="skill-category">{group.title}</h5>
                            <div className="skill-tags">
                                {group.skills.map((skill) => (
                                    <span key={skill} className="skill-pill">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};
