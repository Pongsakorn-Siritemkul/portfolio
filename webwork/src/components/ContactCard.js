import React from "react";

const ContactCard = () => {
  return (
    <div className="card" style={{ padding: '24px' }}>
      <h2 style={{ fontSize: '20px', margin: '0 0 16px 0' }}>CONTACT</h2>
      <p style={{ lineHeight: '1.6', color: 'var(--text-main)', marginBottom: '8px' }}>
        <strong>Email:</strong> Equill777@gmail.com
        </p>
        <p style={{ lineHeight: '1.6', color: 'var(--text-main)', marginBottom: '8px' }}>
        <strong>Phone:</strong> +66 99 632 0462
        </p>
        <p style={{ lineHeight: '1.6', color: 'var(--text-main)' }}>
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
        </p>
    </div>
  );
}

export default ContactCard;