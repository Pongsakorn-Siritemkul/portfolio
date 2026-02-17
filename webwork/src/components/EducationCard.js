import React from "react";

const EducationCard = () => {
  return (
    <div className="card" style={{ padding: '24px' }}>
      <h2 style={{ fontSize: '20px', margin: '0 0 16px 0' }}>Education</h2>
        <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{
                fontSize: '24px',
                background: '#f1f5f9',
                padding: '12px',
                borderRadius: '12px',
                height: 'fit-content'           
            }}>🎓
            </div> 
            <div></div>
                <h3 style={{ margin: 0, fontSize: '18px' }}>King Mongkut's University of Technology North Bangkok</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '15px' }}>Bachelor of Industrial Technology in Electronic Technology</p>
                <h3 style={{ margin: 0, fontSize: '18px' }}>GPAX 3.31</h3>
                <p style={{ margin: 0, color: '#94a3b8' }}>2022 - Present</p>
        </div>
    </div>
  );
};

export default EducationCard;