import React from 'react';
import ProfileCard from '../components/ProfileCard';
import AboutCard from '../components/AboutCard';
import EducationCard from '../components/EducationCard';
import ExperienceSection from '../components/ExperienceCard';

const ProfilePage = () => {
  return (
    <>
      <ProfileCard />
      <AboutCard />
      <EducationCard />
      <ExperienceSection />
    </>
  );
};

export default ProfilePage;