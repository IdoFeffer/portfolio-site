import React from 'react';
// כבר אין צורך ב-Link מ-react-router-dom מאחר שעברנו לאתר עמוד אחד
import About from './About.jsx'; 
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

const Home = () => {
  return (
    <div className="home-container">
      
      {/* 1. INTRO SECTION - החלק העליון והבולט */}
      <section id="intro" className="intro section-padding"> 
        <div className="introContent slide-in-left"> {/* קלאס לאנימציה */}
          
          <p className="greeting">Hi there, I'm</p> {/* הוספת קלאס לברכה */}

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
            {/* שימוש ב-a href לניווט עוגן */}
            <a href="#my-projects" className="btn btnPrimary">
              View My Work
            </a>
            
            <a href="#contact-me" className="btn btnOutline">
              Get In Touch
            </a>
          </div>
        </div>
        
        {/* Placeholder for illustration/image */}
        <div className="introImage bounce-in"> {/* קלאס לאנימציה */}
           <div className="placeholderCircle"></div> 
        </div>
      </section>

      {/* 2. ABOUT SECTION - כפי שהגדרנו */}
      <section id="about-me" className="about-section section-padding">
        <About /> 
      </section>
      
      {/* 3. PROJECTS SECTION - כפי שהגדרנו */}
      <section id="my-projects" className="projects-section section-padding">
        <Projects /> 
      </section>
      
      {/* 4. CONTACT SECTION - כפי שהגדרנו */}
      <section id="contact-me" className="contact-section section-padding">
        <Contact />
      </section>

      {/* 5. TECH STACK STRIP - רצועת המיומנויות */}
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

    </div>
  );
};

export default Home;