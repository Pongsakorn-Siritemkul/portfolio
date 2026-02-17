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
          <img src='https://media.tenor.com/qTLXf8tqtKMAAAAe/arab-fanum-mewing.png' alt="Profile" style={{ width: '180px', height: '240px', borderRadius: '5%', border: '4px solid white' }} />
        </div>
        
        <div className="profile-header">
          <h1 style={{ fontSize: '28px', fontWeight: '700', margin: '0' }}>Pongsakorn Siritemkul</h1>
          <p style={{ color: 'var(--text-muted)', margin: '4px 0 0 0' }}>Name in Thai : พงศกร ศิริเต็มกุล</p>
          <p><strong>Programming Skills :</strong> Python, Java, C/C++.</p>
          <p><strong>Web applications development :</strong> HTML, CSS, JavaScript, React, Node.js.</p>
          <p><strong>Hardware & IoT :</strong> Arduino, Raspberry Pi, ESP32.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;