import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './../index.css';

/** Footer */
export const Footer: React.FC = () => (
    <footer className="py-4">
        <Container>
            <Row>
                <Col md={6}>© {new Date().getFullYear()} Harish Kumar</Col>
                <Col md={6} className="text-end">Made with ❤️ using React + TypeScript + Bootstrap</Col>
            </Row>
        </Container>
    </footer>
);
