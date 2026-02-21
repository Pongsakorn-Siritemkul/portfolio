import React from 'react';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaRaspberryPi, FaGitAlt, FaGithub, FaMicrochip } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiArduino } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { MdComputer, MdWeb, MdMemory, MdBuild } from 'react-icons/md';

const SkillCard = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Programming Skills",
      icon: <MdComputer size={24} color="#64748b" />,
      skills: [
        { name: "Python", icon: <FaPython color="#3776AB" /> },
        { name: "Java", icon: <FaJava color="#007396" /> },
        { name: "C/C++", icon: <SiCplusplus color="#00599C" /> }
      ]
    },
    {
      id: 2,
      title: "Web Applications",
      icon: <MdWeb size={24} color="#64748b" />,
      skills: [
        { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
        { name: "React", icon: <FaReact color="#61DAFB" /> }
      ]
    },
    {
      id: 3,
      title: "Hardware & IoT",
      icon: <MdMemory size={24} color="#64748b" />,
      skills: [
        { name: "Arduino", icon: <SiArduino color="#00979D" /> },
        { name: "Raspberry Pi", icon: <FaRaspberryPi color="#A22846" /> },
        { name: "ESP32", icon: <FaMicrochip color="#475569" /> }
      ]
    },
    {
      id: 4,
      title: "Tools & Version Control",
      icon: <MdBuild size={24} color="#64748b" />,
      skills: [
        { name: "VS Code", icon: <TbBrandVscode color="#007ACC" /> },
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "GitHub", icon: <FaGithub color="#ffffff" /> }
      ]
    }
  ];

  return (
    <div className="card skill-card" style={{ padding: '24px' }}>
      <h2 style={{ fontSize: '20px', margin: '0 0 16px 0' }}>SKILLS</h2>
      <div className="skill-container">
        {skillCategories.map((category) => (
          <div key={category.id} className="skill-group" style={{ marginTop: '24px' }}>
            <div className="skill-header">
              <span className="skill-icon-wrapper">{category.icon}</span>
              <h3 className="skill-category-title">{category.title}</h3>
            </div>

            {/* UPDATED: Changed from tag-container to skill-grid */}
            <div className="skill-grid">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-item-icon">{skill.icon}</div>
                  <span className="skill-item-name">{skill.name}</span>
                </div>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;