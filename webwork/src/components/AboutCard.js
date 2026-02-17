import React from 'react';

const AboutCard = () => {
  return (
    <div className="card" style={{ padding: '24px' }}>
      <h2 style={{ fontSize: '20px', margin: '0 0 16px 0' }}>About</h2>
      
      <p style={{ lineHeight: '1.6', color: 'var(--text-main)', marginBottom: '16px' }}>
        I am a student in <strong>Bachelor of Industrial Technology</strong> in <strong>Electronic Technology</strong> at <strong>King Mongkut's University of Technology North Bangkok.</strong> 
        My academic focus is on computer engineering, and I have a strong passion for programming and technology.
      </p>
      <p style={{ lineHeight: '1.6', color: 'var(--text-main)' }}>
        I have experience in various programming languages, including <strong>Python, Java, C++, and JavaScript.</strong><br></br>
        I enjoy working on projects that allow me to apply my skills and learn new technologies.
      </p>
    </div>
  );
};

export default AboutCard;