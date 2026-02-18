import React from 'react';
const ProfileCard = () => {
  return (
    <div className="card">
      <div className="cover-gradient" style={{ 
        height: '180px', 
        backgroundImage: 'url(https://i.stack.imgur.com/SvWWN.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></div>
      
      <div style={{ padding: '0 24px 24px' }}>
        <div style={{ marginTop: '-70px', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
          <img src='/img/fanum.png' alt="Profile" style={{ width: '280px', height: '340px', borderRadius: '5%', border: '4px solid white' }} />
        </div>
        
        <div className="profile-header">
          <h1 style={{ fontSize: '28px', fontWeight: '700', margin: '0' }}>PONGSAKORN SIRITEMKUL</h1>
          <p className='profile-name-thai'>พงศกร ศิริเต็มกุล</p>
          <p><strong>Programming Skills:</strong> Python, Java, C/C++.</p>
          <p><strong>Web applications development:</strong> HTML, CSS, JavaScript, Node.js, React.</p>
          <p><strong>Hardware & IoT:</strong> Arduino, Raspberry Pi, ESP32.</p>
          <p><strong>Tools & Version Control: </strong>VS Code, Git, GitHub.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;