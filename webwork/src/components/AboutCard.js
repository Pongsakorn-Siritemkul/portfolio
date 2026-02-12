import React from 'react';

const AboutCard = () => {
  return (
    <div className="card" style={{ padding: '24px' }}>
      <h2 style={{ fontSize: '20px', margin: '0 0 16px 0' }}>About</h2>
      
      <p style={{ lineHeight: '1.6', color: 'var(--text-main)', marginBottom: '16px' }}>
        I am a Computer Engineering student passionate about <strong>Artificial Intelligence</strong>, <strong>Image Processing</strong>, and <strong>Full Stack Development</strong>. 
        My academic focus involves integrating hardware with intelligent software, specifically using Genetic Algorithms (GA) for MPPT Solar Charge Controllers.
      </p>

      <p style={{ lineHeight: '1.6', color: 'var(--text-main)' }}>
        Recently, I participated in the <strong>Tokio Marine Hackathon</strong>, where I developed a web-based point redemption system under tight deadlines. 
        I am currently looking for opportunities to apply my skills in Python (OpenCV), React, and IoT solutions to solve real-world problems.
      </p>
    </div>
  );
};

export default AboutCard;