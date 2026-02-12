import React from 'react';
const ProfileCard = () => {
  return (
    <div className="card">
      <div className="cover-gradient" style={{ 
        height: '180px', 
        background: 'linear-gradient(90deg, #0a66c2 0%, #5c9ce6 100%)' 
      }}></div>
      
      <div style={{ padding: '0 24px 24px' }}>
        <div style={{ marginTop: '-70px', marginBottom: '16px' }}>
          <img 
            className="profile-pic" 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" 
            alt="Profile" 
          />
        </div>
        
        <div className="profile-header">
          <h1 style={{ fontSize: '28px', fontWeight: '700', margin: '0' }}>Your Name</h1>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginTop: '4px' }}>
            Full Stack Developer | AI & Image Processing | Solar Energy Researcher
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Bangkok City • <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Contact Info</span>
          </p>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn-primary">Open to work</button>
            <button className="btn-outline" style={{ 
              border: '1px solid var(--primary-color)', 
              color: 'var(--primary-color)',
              padding: '8px 20px',
              borderRadius: '20px',
              background: 'transparent',
              fontWeight: '600'
            }}>View Thesis</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;