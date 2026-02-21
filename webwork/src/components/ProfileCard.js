import React from 'react';
const ProfileCard = () => {
  return (
    <div className="card">
      <div className="cover-gradient" style={{ 
        height: '180px', 
        backgroundImage: 'url(https://images.unsplash.com/photo-1614630669107-f48325791b57?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25vdyUyMGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></div>
      
      <div style={{ padding: '0 24px 24px' }}>
        <div style={{ marginTop: '-70px', marginBottom: '16px', display: 'flex', justifyContent: 'left' }}>
          <img src='/img/fanum.png' alt="Profile" style={{ width: '200px', height: '240px', borderRadius: '5%', border: '4px solid white' }} />
        </div>
        
        <div className="profile-header">
          <h1 style={{ fontSize: '28px', fontWeight: '700', margin: '0' }}>PONGSAKORN SIRITEMKUL</h1>
          <p className='profile-name-thai'>พงศกร ศิริเต็มกุล</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;