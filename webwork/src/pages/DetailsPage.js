import React from 'react';

const ProjectsPage = () => {
  const myProjects = [
    {
      id: 1,
      title: "GA MPPT Solar Charge Controller",
      category: "Hardware & AI Project",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7SDkhC7SU_UyFUH0JnF2fsPxXuDsaw80S-w&s", // Replace with your thesis hardware photo
      description: "Bachelor Thesis: Implementing Genetic Algorithms to optimize solar energy harvesting efficiency.",
      tags: ["Python", "GA", "MPPT", "Electronics"],
      link: "#"
    },
    {
      id: 2,
      title: "Tokio Marine Hackathon Project",
      category: "Web Development",
      image: "", // Replace with a relevant project image
      description: "Developed a member point redemption system within a high-pressure 8-hour competition.",
      tags: ["PHP", "MySQL", "JavaScript", "CSS"],
      link: "https://www.linkedin.com/posts/tokio-marine-life-thailand_smartperson-smartworlplace-growtogether-activity-7368549924138905601-hjjg"
    },
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