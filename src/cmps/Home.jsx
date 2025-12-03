import React from 'react';
import About from './About.jsx'; 
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

const Home = () => {
  return (
    <div className="home-container">
      
      {/* 1. INTRO SECTION */}
      <section id="intro" className="intro section-padding"> 
        <div className="introContent slide-in-left"> 
          
          <p className="greeting">Hi there, I'm</p> 

          <h1 className="title">
            Hello, I'm <span className="highlight name-animate">Ido Feffer</span>
          </h1>
          
          <h2 className="subtitle type-writer">
            Full Stack Developer specializing in the MERN Stack
          </h2>
          
          <p className="description">
            Transforming ideas into modern, fast, and secure web solutions.
          </p>
          
          <div className="ctaButtons">
            <a href="#my-projects" className="btn btnPrimary">
              View My Work
            </a>
            
            <a href="#contact-me" className="btn btnOutline">
              Get In Touch
            </a>
          </div>
        </div>
        
        {/* Placeholder for illustration/image */}
        <div className="introImage bounce-in"> 
           <div className="placeholderCircle"></div> 
        </div>
      </section>

      {/* 2. ABOUT SECTION -  */}
      <section id="about-me" className="about-section section-padding">
        <About /> 
      </section>
      
      {/* 3. TECH STACK STRIP */}
      <section className="techStack section-strip">
        <h3>Technologies I Love</h3>
        <div className="techIcons">
           <span>⚛️ React</span>
           <span>🟢 Node.js</span>
           <span>🍃 MongoDB</span>
           <span>🎨 Sass</span>
           <span>🐳 Docker</span>
           <span>✉️ Postman</span>
        </div>
      </section>

      {/* 4. PROJECTS SECTION -  */}
      <section id="my-projects" className="projects-section section-padding">
        <Projects /> 
      </section>
      
      {/* 5. CONTACT SECTION -  */}
      <section id="contact-me" className="contact-section section-padding">
        <Contact />
      </section>


    </div>
  );
};

export default Home;