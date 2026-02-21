import React from 'react';
import ProfileCard from '../components/ProfileCard';
import AboutCard from '../components/AboutCard';
import EducationCard from '../components/EducationCard';
import ExperienceSection from '../components/ExperienceCard';
import ContactCard from '../components/ContactCard';
import SkillCard from '../components/Skillcard';

const ProfilePage = () => {
  return (
    <>
      <ProfileCard />
      <AboutCard />
      <SkillCard />
      <ContactCard />
      <EducationCard />
      <ExperienceSection />
    </>
  );
};

export default ProfilePage;