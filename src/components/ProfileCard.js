import React from 'react';

const ProfileCard = () => {
  return (
    <div className="card">
      <div className="cover-gradient" style={{ 
        height: '300px', 
        backgroundImage: 'url("/img/cover_img.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></div>
      
      <div style={{ padding: '0 48px 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '32px' }}>
          <div style={{ marginTop: '-240px', position: 'relative', flexShrink: 0 }}>
            <img 
              src='/img/profile_img.png' 
              alt="Profile" 
              style={{ 
                width: '300px', 
                height: '500px', 
                borderRadius: '5%',
              }} 
            />
          </div>
          
          <div className="profile-header" style={{ paddingBottom: '16px'}}>
            <h1 style={{ fontSize: '72px', fontWeight: '700', fontFamily: 'Righteous, cursive', margin: '0', lineHeight: '1.1' }}>
              PONGSAKORN SIRITEMKUL
            </h1>
            <p className='profile-name-thai' style={{ fontSize: '24px', margin: '8px 0 0 0' }}>
              พงศกร ศิริเต็มกุล
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileCard;