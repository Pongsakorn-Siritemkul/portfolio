import React from 'react';
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Hackathon Participant",
      company: "Tokio Marine Insurance",
      date: "2025",
      desc: "Developed a member point redemption web app using PHP, MySQL, and JavaScript.",
      icon: "🏆"
    },
  ];

  return (
    <div className="card" style={{ padding: '24px' , marginBottom: '24px' }}>
      <h2 style={{ marginBottom: '20px' }}>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <div style={{ 
            fontSize: '24px', 
            background: '#f1f5f9', 
            padding: '12px', 
            borderRadius: '12px',
            height: 'fit-content'
          }}>{exp.icon}</div>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px' }}>{exp.title}</h3>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>{exp.company}</p>
            <p style={{ fontSize: '14px', color: '#94a3b8' }}>{exp.date}</p>
            <p style={{ marginTop: '8px', lineHeight: '1.5' }}>{exp.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;