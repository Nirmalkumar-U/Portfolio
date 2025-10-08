import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './../index.css';
import { DetailsProps } from '../details/interfaces';

export const About: React.FC<DetailsProps> = ({ details }) => {
    return (
        <section id="about" className="about-section py-6 reveal-section">
            <Container>
                <h2 className="section-heading mb-5 reveal">ABOUT ME</h2>
                <Row className="align-items-center g-5">
                    <Col lg={5} className="reveal">
                        <div className="about-image">
                            <img
                                src={details.profileImage}
                                alt={details.name}
                                className="img-fluid rounded-4 shadow"
                            />
                        </div>
                    </Col>
                    <Col lg={7} className="reveal">
                        <h3 className="about-name">{details.name}</h3>
                        <p className="about-pronounce">{details.namePronunciation}</p>
                        <p className="about-intro">{details.aboutIntro}</p>
                        <p className="about-desc">{details.aboutDesc1}</p>
                        <p className="about-desc">{details.aboutDesc2}</p>
                        <Row className="mt-4 g-3">
                            <Col md={6}>
                                <Card className="about-card p-3">
                                    <h6>Education</h6>
                                    <p className="mb-0">
                                        <strong>{details.education.college}</strong>
                                        <br />
                                        {details.education.degree}
                                        <br />
                                        <small>{details.education.period}</small>
                                        <br />
                                        GPA: <strong>{details.education.gpa}</strong>
                                    </p>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="about-card p-3">
                                    <h6>Experience</h6>
                                    {details.experiencesInAbout.map((exp, index) => (
                                        <div key={index} className="mb-3">
                                            <p className="mb-0">
                                                <strong>{exp.company}</strong> — {exp.role}
                                                <br />
                                                <small>{exp.period}</small>
                                                <br />
                                                {exp.summary}
                                            </p>
                                            {index !== details.experiencesInAbout.length - 1 && <hr className="my-2" />}
                                        </div>
                                    ))}
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
