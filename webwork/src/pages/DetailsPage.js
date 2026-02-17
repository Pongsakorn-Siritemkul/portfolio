import React from 'react';

const ProjectsPage = () => {
  const myProjects = [
    {
      id: 1,
      title: "GA MPPT Solar Charge Controller",
      category: "Hardware & AI",
      image: "https://via.placeholder.com/400x200", // Replace with your thesis hardware photo
      description: "Bachelor Thesis: Implementing Genetic Algorithms to optimize solar energy harvesting efficiency.",
      tags: ["Python", "GA", "MPPT", "Electronics"],
      link: "#"
    },
    {
      id: 2,
      title: "Tokio Marine Hackathon App",
      category: "Web Development",
      image: "https://via.placeholder.com/400x200", 
      description: "Developed a member point redemption system within a high-pressure 48-hour competition.",
      tags: ["PHP", "MySQL", "JavaScript", "CSS"],
      link: "#"
    },
    {
      id: 3,
      title: "Image Processing Suite",
      category: "Computer Vision",
      image: "https://via.placeholder.com/400x200",
      description: "Automated corner detection and RGB channel splitting using OpenCV on Google Colab.",
      tags: ["OpenCV", "Python", "Colab"],
      link: "#"
    }
  ];

  return (
    <div className="projects-grid">
      {myProjects.map((project) => (
        <div key={project.id} className="card project-card">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
            <span className="project-category">{project.category}</span>
          </div>
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-container">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <button className="btn-outline-small">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;