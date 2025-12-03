import React from 'react';
import About from './About.jsx'; 
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

const Home = () => {
  return (
    <div className="home-container">
      
      {/* 1. INTRO SECTION - החלק העליון */}
      <section id="intro" className="intro"> 
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about-me" className="about-section">
        <About /> 
      </section>
      
      {/* 3. PROJECTS SECTION */}
      <section id="my-projects" className="projects-section">
        <Projects /> 
      </section>
      
      {/* 4. CONTACT SECTION */}
      <section id="contact-me" className="contact-section">
        <Contact />
      </section>

      {/* 5. TECH STACK STRIP (אם אתה רוצה אותו נפרד) */}
      <section className="techStack">
        {/* ... תוכן ה-Tech Stack שלך ... */}
      </section>
      
    </div>
  );
};

export default Home;