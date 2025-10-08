import React, { useEffect } from 'react';
import resumePdf from './assets/Resume.pdf';
import { About } from './components/about';
import { Certification } from './components/certification';
import { Contact } from './components/contact';
import { Experience } from './components/experience';
import { Hero } from './components/hero';
import { MainNavbar } from './components/main-navbar';
import { Products } from './components/products';
import { Projects } from './components/projects';
import { Skills } from './components/skills';
import { details, navItems } from './details/details';

const useScrollReveal = (selector = '.reveal', options?: IntersectionObserverInit) => {
    useEffect(() => {
        const els = Array.from(document.querySelectorAll(selector));
        if (!els.length) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add('in-view');
            });
        }, options || { threshold: 0.15 });
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [selector, options]);
};

const App: React.FC = () => {
    useEffect(() => {
        const handleNav = () => {
            const nav = document.querySelector('.top-nav');
            if (!nav) return;
            if (window.scrollY > 80) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
        };
        window.addEventListener('scroll', handleNav);
        return () => window.removeEventListener('scroll', handleNav);
    }, []);

    useScrollReveal();

    const scrollTo = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        const el = document.querySelector(`#${id}`);
        if (el) {
            const yOffset = -80; // Adjust this for your navbar height
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const onCTAClick = () => {
        const link = document.createElement("a");
        link.href = details.resume;
        link.download = resumePdf; // optional: custom filename
        link.click();
    };
    return (
        <div>
            <MainNavbar details={details} navItems={navItems} onNavClick={scrollTo} />
            <Hero details={details} onCTAClick={onCTAClick} />
            <main>
                <About details={details} />
                <Experience details={details} />
                <Skills details={details} />
                <Projects details={details} />
                <Products details={details} />
                <Certification details={details} />
                <Contact details={details} />
            </main>
        </div>
    );
};

export default App;