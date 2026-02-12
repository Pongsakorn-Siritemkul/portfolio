import React from 'react';
import ProfileCard from '../components/ProfileCard';
import AboutCard from '../components/AboutCard'; // <--- Import this
import ExperienceSection from '../components/ExperienceSection';

const ProfilePage = () => {
  return (
    <>
      <ProfileCard />
      <AboutCard /> {/* <--- Add this here */}
      <ExperienceSection />
    </>
  );
};

export default ProfilePage;