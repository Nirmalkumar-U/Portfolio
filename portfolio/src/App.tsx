import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {
    const resumeData = {
        firstName: 'Nirmalkumar',
        lastName: 'Uthamaraj',
        title: 'Software Engineer',
        role: 'Full Stack Developer',
        contact: {
            email: 'unirmalkumar3@gmail.com',
            phone: '8778359970',
            linkedin: 'linkedin.com/in/johndoe',
            linkedinLink: 'linkedin.com/in/johndoe',
        },
        education: [
            {
                educate: 'Best Employee Award In ByteForza',
                whereAndYer: 'June 2023 and Nov 2023'
            },
            {
                educate: 'M.Sc.Computer Science',
                whereAndYer: 'KASC - Coimbatore - April 2022'
            },
            {
                educate: 'B.Sc.Computer Science',
                whereAndYer: 'KASC - Coimbatore - Oct 2020'
            },
            {
                educate: 'Understanding Design',
                whereAndYer: 'NPTEL - 2022'
            }
        ],
        experience: [
            {
                title: 'Software Engineer',
                role: 'Full Stack Developer',
                company: ' ByteForza Technologies',
                project: 'Smart tools',
                duration: 'Augest 2022 - Feburary 2023',
                description: 'description',
                responsibility: [
                    'Developed web applications using Angular',
                    'Collaborated with cross-functional teams to deliver projects on time',
                    'Participated in code reviews and provided constructive feedback',
                    'Collaborated with cross-functional teams to deliver projects on time',
                    'Participated in code reviews and provided constructive feedback',
                ],
                environment: 'DotNet Core 6.0, DotNet Entity Framework, Web API, Angular 14, Bootstrap 5, SQL Server',
            },
            {
                title: 'Software Engineer',
                role: 'Full Stack Developer',
                company: ' ByteForza Technologies',
                project: 'HMID',
                duration: 'March 2023 - Present',
                description: 'description',
                responsibility: [
                    'Developed web applications using Angular',
                    'Collaborated with cross-functional teams to deliver projects on time',
                    'Participated in code reviews and provided constructive feedback',
                    'Collaborated with cross-functional teams to deliver projects on time',
                    'Participated in code reviews and provided constructive feedback',
                ],
                environment: 'DotNet Core 6.0, DotNet Entity Framework, Web API, Angular 14, Bootstrap 5, SQL Server, Power Bi, Azure DevOps, RDLC and RDL Reporting',
            }
        ],
        skills: {
            frontEnd: [
                'Angular 14',
                'Bootstrap 5',
                'HTML, CSS',
            ],
            backEnd: [
                'ASP DotNet',
                'DotNet Core 6',
                'DotNet Entity Framework',
                'Web API',
                'RDL/RDLC Reporting'
            ],
            dataHandlingTechnologies: [
                'SQL Server',
                'Power Bi'
            ],
            technicalProficiencies: [
                'Azure DevOps',
                'GitHub'
            ]
        },
    };

    // Function to handle the button click event
    const handleDownload = () => {
        // Replace 'your-pdf-file.pdf' with the path to your PDF file
        const pdfUrl = './src/assets/resume.pdf';

        // Triggering the download
        fetch(pdfUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'nirmalkumar-uthamaraj-resume.pdf');
                document.body.appendChild(link);
                link.click();
                link.parentNode?.removeChild(link);
                window.URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error('Error downloading the PDF: ', error);
            });
    };

    return (
        <div>
            <div className="scroll-up-btn">
                <i className="fas fa-angle-up"></i>
            </div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="max-width">
                    <a className="navbar-brand" href="#home">{resumeData.firstName}{resumeData.lastName}</a>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Hello, This is</div>
                        <div className="text-2">{resumeData.firstName} {resumeData.lastName}</div>
                        <div className="text-3">And I'm a <span className="typing">{resumeData.title}</span></div>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title">About Me</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src={"https://media.licdn.com/dms/image/D5603AQEHyNj4AdcwwA/profile-displayphoto-shrink_200_200/0/1688196948298?e=2147483647&v=beta&t=4yI-1B0Oc5z6rkuTuUmz4IXdYkRoDYXTXlc2wprYRh0"} />
                        </div>
                        <div className="column right">
                            <div className="text">I'm {resumeData.firstName} and I'm a {resumeData.title}</div>
                            <p>Seeking an entry-level opportunity with an esteemed organization where I can utilize my skills & enhance learning in the field of work. Capable of mastering new technologies.</p>
                            <br />
                            <div className="text">Why Work With Me</div>
                            <p>I'm a great communicator & love to invest the necessary time to understand the customer's problem very well.</p>

                            <a href="#link" onClick={handleDownload} target="blank">Download CV</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services" id="services">
                <div className="max-width">
                    <h2 className="title">My services</h2>
                    <div className="serv-content">
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-laptop-code"></i>
                                <div className="text">Web Design</div>
                                <p>Your Next Web Developer, who is working in Shopify Dropshipping Stores, High Converting Ecommerce stores, Product Page also having Custom code, liquid template design.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-user-secret"></i>
                                <div className="text">User Secret</div>
                                <p>I ensures that, there is no sensitive data included in the source code and are stored outside of the project folder. And all the data which is stored by User Secrets is not encrypted.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-code"></i>
                                <div className="text">Apps Design</div>
                                <p>I encompasses both the user interface(UI) & user experience(UX). The overall style of the app, including things like the colour scheme, font selection, and the types of buttons and widgets which will use.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">My Skills</h2>
                    <div className="skills-content">
                        <div className="column left">
                            <div className="text">PROJECT</div>

                            <p>
                                <li className="project">Portfolio (HTML, CSS, js, Bootstraps)</li>
                                <li className="project">eCommerce Website (Shopify liquid-code, HTML, CSS)</li>
                                <li className="project">QuickShop - eCommerce Website (Like Amazon, Flipkart etc.)</li>
                                <li className="project">Fully Responsive Design Email Subscribe form</li>
                                <li className="project">Blog (HTML, CSS, Bootstraps)</li>
                                <li className="project">Currently Working on a Messaging App (Like WhatsApp)</li>
                            </p>
                            <br />
                            <div className="text">DEVELOPMENT SKILLS</div>
                            <p>
                                I'm familiar & work on a daily basis with HTML, CSS, JavaScript, Bootstrap, React js and other modern frameworks.
                            </p>
                        </div>
                        <div className="column right">
                            <div className="bars">
                                <div className="info">
                                    <span>Python</span>
                                    <span>90%</span>
                                </div>
                                <div className="line python"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>HTML</span>
                                    <span>80%</span>
                                </div>
                                <div className="line html"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>CSS</span>
                                    <span>60%</span>
                                </div>
                                <div className="line css"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>JavaScript</span>
                                    <span>40%</span>
                                </div>
                                <div className="line js"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Bootstraps</span>
                                    <span>60%</span>
                                </div>
                                <div className="line bootstraps"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Django</span>
                                    <span>70%</span>
                                </div>
                                <div className="line django"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projects" id="projects">
                <div className="container">
                    <h2 className="title text-center mb-5">Projects</h2>
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="custom-card">
                                <img src="https://source.unsplash.com/100x100/?shopping" className="custom-card-img rounded-circle"/>
                                <div className="custom-card-overlay">
                                    <div className="project-info">
                                        <h3 className="project-title">{resumeData.experience[0].project}</h3>
                                        <p className="project-description">{resumeData.experience[0].description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="custom-card">
                                <img src="https://source.unsplash.com/100x100/?shopping" className="custom-card-img rounded-circle"/>
                                <div className="custom-card-overlay">
                                    <div className="project-info">
                                        <h3 className="project-title">{resumeData.experience[1].project}</h3>
                                        <p className="project-description">{resumeData.experience[1].description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>









            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contact Me</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <div className="text">Get in Touch</div>
                            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be a part of your visions. Email me with any questions or inquiries. I'll happy to answer your questions and set up a meeting with you.</p>
                            <div className="icons">

                                <a href="https://instagram.com/aistscience">
                                    <div className="row">
                                        <i className="fa-solid fa-user-large"></i>
                                        <div className="info">
                                            <div className="head">Name</div>
                                            <div className="sub-title"><a href="https://aistechx.com/" style={{ textDecoration: "none", color: "#333" }}>Akash Mahapatra</a></div>
                                        </div>
                                    </div>
                                </a>

                                <div className="row">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <div className="info">
                                        <div className="head">&nbsp;Address</div>
                                        <div className="sub-title">&nbsp;ABC, 123 Lane, India</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <i className="fa-solid fa-envelope"></i>
                                    <div className="info">
                                        <div className="head">Email</div>
                                        <div className="sub-title"><a href="mailto:#" style={{ textDecoration: "none", color: "#333" }}> example@example.com</a></div>
                                    </div>
                                </div>

                                <div className="row">
                                    <i className="bi bi-translate"></i>
                                    <div className="info">
                                        <div className="head">Language Known</div>
                                        <div className="sub-title">Hindi, English, Odia, Bengali</div>
                                    </div>
                                </div>

                                <br />

                                <div className="social-menu">
                                    <ul>
                                        <li><a href="https://github.com/akashm47"><i className="fa-brands fa-github"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/akashmahapatra/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                        <li><a href="https://www.instagram.com/___kaaashx___/"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="https://twitter.com/___kaaashx___/"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="https://aistechx.com/" title="Get Educate with Us"><i className="fa-solid fa-graduation-cap"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text">Message me</div>
                            <form action="#">
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" placeholder="Your Name" required />
                                    </div>
                                    <div className="field email">
                                        <input type="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="field">
                                    <input type="text" placeholder="Subject" required />
                                </div>
                                <div className="field textarea">
                                    <textarea className="form-control" cols={30} rows={10} placeholder="Message.." required></textarea>
                                </div>
                                <div className="button-area">
                                    <button type="submit">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <span>
                    <a href="https://www.linkedin.com/in/akashmahapatra"> Akash Mahapatra</a> | <span className="far fa-copyright"></span> 2022 All Rights Reserved. Privacy Policy
                </span>
            </footer>
        </div>
    );
};

export default App

