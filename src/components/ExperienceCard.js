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
    {
      title: "Internship",
      company: "Loei Technical College",
      date: "2022",
      desc: "IT support intern, assisting with hardware and software troubleshooting, network maintenance, and user support.",
      icon: "💼"
    },
    {
      title: "1st : Network System Mangagement",
      company: "Office of the Vocational Education Commission (OVEC)",
      date: "2022",
      desc: "Secured 1st place at the 34rd AFT Regional Conference (Northeastern). Demonstrated expertise in network design, configuration, and troubleshooting.",
      icon: "🥇"
    },
    {
      title: "2nd : Computer Assembly & Software Installation",
      company: "Office of the Vocational Education Commission (OVEC)",
      date: "2019",
      desc: "Secured 2nd place at the 29th AFT Regional Conference (Northeastern). Demonstrated expertise in hardware assembly and system configuration.",
      icon: "🥈"
    },
    {
      title: "Bronze Medal: Multimedia Technology",
      company: "Office of the Vocational Education Commission (OVEC)",
      date: "2020",
      desc: "Awarded at the 31st Association of Future Thai Professionals (AFT) Regional Conference (Northeastern). Recognized for creativity and technical skills in multimedia content creation.",
      icon: "🥉"
    },
  ];

  return (
    <div className="card" style={{ padding: '48px' , marginBottom: '24px' }}>
      <h2 style={{ marginBottom: '36px' }}>Experience</h2>
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