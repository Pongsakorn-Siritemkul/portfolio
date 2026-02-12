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
          <p style={{ color: 'var(--text-muted)', margin: '4px 0 0 0' }}>Computer Engineering Student</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;