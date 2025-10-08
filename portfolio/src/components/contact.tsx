import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import { DetailsProps } from '../details/interfaces';
import './../index.css';

export const Contact: React.FC<DetailsProps> = ({ details }) => {
    return (
        <section id="contact" className="contact-section py-6 reveal-section">
            <Container className="text-center">
                <div className="say-hi reveal">
                    <hr className="divider" />
                    <p className="say-hi-text">SAY HI</p>
                    <hr className="divider" />
                </div>
                <h3 className="contact-email reveal">{details.mailId}</h3>
                <p className="contact-note reveal">
                    If you want to know more about my experiences and journey, or just talk in general, get in touch! ✌
                </p>
                <div className="contact-buttons reveal mt-4">
                    <a href={details.resume} className="btn btn-danger btn-lg me-3" download>Resume</a>
                    <a href={details.linkedinLink} target="_blank" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href={details.githubLink} target="_blank" className="social-icon" aria-label="GitHub"><i className="fab fa-github"></i></a>
                </div>
                <p className="mt-5 small text-muted">© {new Date().getFullYear()} All rights reserved.</p>
            </Container>
        </section>
    );
};
