import React from 'react';
import ProfileCard from '../components/ProfileCard';
import AboutCard from '../components/AboutCard';
import EducationCard from '../components/EducationCard';
import ExperienceSection from '../components/ExperienceCard';
import ContactCard from '../components/ContactCard';

const ProfilePage = () => {
  return (
    <>
      <ProfileCard />
      <ContactCard />
      <AboutCard />
      <EducationCard />
      <ExperienceSection />
    </>
  );
};

export default ProfilePage;