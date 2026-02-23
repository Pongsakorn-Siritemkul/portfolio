import React from "react";

const EducationCard = () => {
  return (
    <div>
        <div className="card" style={{ padding: '48px' }}>
        <h2 style={{ fontSize: '24px', margin: '0 0 36px 0' }}>EDUCATION</h2>
            <div style={{ display: 'flex', gap: '140px' , marginBottom: '48px' }}>
                <h3 style={{ margin: 0, fontSize: '24px' }}>Loei Technical College</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '24px' }}>Diploma in Computer Technology</p>
                <h3 style={{ margin: 0, fontSize: '24px' }}>GPAX 3.88</h3>
                <p style={{ margin: 0, color: '#94a3b8' }}>2019 - 2021</p>
            </div>
            <div style={{ display: 'flex', gap: '105px' , marginBottom: '36px' }}>
                <h3 style={{ margin: 0, fontSize: '22px' }}>King Mongkut's University of <br></br>Technology North Bangkok</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '24px' }}>Bachelor of Industrial Technology</p>
                <h3 style={{ margin: 0, fontSize: '24px' }}>GPAX 3.31</h3>
                <p style={{ margin: 0, color: '#94a3b8' }}>2022 - present</p>
            </div>
        </div>
    </div>
  );
};

export default EducationCard;