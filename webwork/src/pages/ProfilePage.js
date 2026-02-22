import React from 'react';
import ProfileCard from '../components/ProfileCard';
import AboutCard from '../components/AboutCard';
import EducationCard from '../components/EducationCard';
import ExperienceSection from '../components/ExperienceCard';
import SkillCard from '../components/Skillcard';

const ProfilePage = () => {
  return (
    <>
      <div id="home">
        <ProfileCard />
      </div>
      <div id="about">
        <AboutCard />
      </div>
      <div id="skills">
        <SkillCard />
      </div>
      <div id="education">
        <EducationCard />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
    </>
  );
};

export default ProfilePage;