import React from 'react';
// אם אתה רוצה להשתמש בקישורים לעוגנים כמו `#contact-me`, אין צורך ב-Link מ-react-router-dom

const About = () => {
  return (
    <section id="about-me" className="about-section section-padding">
      <div className="about-container">
        
        {/* RIGHT COLUMN: Content (בצד ימין בעיצוב עברי) */}
        <div className="about-content">
          <h2 className="section-title">Who Am I?</h2>
          
          <p className="bio-summary">
            I'm a passionate Full Stack Developer with 4 years of experience, specializing in creating high-performance, user-centric web applications using **React** and **Node.js**. I bridge the gap between complex technical challenges and clean, intuitive user experiences.
          </p>

          <h3 className="section-subtitle">My Experience & Value</h3>
          <p className="bio-details">
            My journey began in [שנה/תחום], where I quickly transitioned from [משהו ישן] to modern web development. I thrive in agile environments, leading projects from initial concept to deployment. I bring a strong background in robust testing and architectural design to ensure scalable products.
          </p>
          
          <h3 className="section-subtitle">Core Expertise</h3>
          {/* רשימה של כישורים/טכנולוגיות מרכזיות */}
          <ul className="expertise-list">
            <li>Modern JavaScript (ES6+), TypeScript, and functional programming.</li>
            <li>Frontend: React, Redux/Zustand, and Next.js (SSR/SSG).</li>
            <li>Backend: Node.js, Express, RESTful APIs, and Microservices.</li>
            <li>Databases: MongoDB, PostgreSQL, and basic SQL optimization.</li>
            <li>DevOps & Tools: Git, Docker, and CI/CD pipelines (Jenkins/GitHub Actions).</li>
          </ul>

          <a href="#contact-me" className="btn btnPrimary cta-inline">
            See My CV / Contact Me
          </a>
        </div>
        
        {/* LEFT COLUMN: Image/Illustration (בצד שמאל בעיצוב עברי) */}
        <div className="about-image-wrapper">
          {/* Placeholder for your professional photo */}
          <div className="about-photo-placeholder">
            {/* יכול להיות תמונה או איור שמייצג אותך */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;