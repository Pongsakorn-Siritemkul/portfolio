import React from 'react';
import { useState } from 'react';

const DetailsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const myInfo = [
    {
      id: 1,
      title: "GA MPPT Solar Charge Controller",
      category: "Project",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7SDkhC7SU_UyFUH0JnF2fsPxXuDsaw80S-w&s",
      description: "Bachelor Thesis: Implementing Genetic Algorithms to optimize solar energy harvesting efficiency.",
      link: "#"
    },
    {
      id: 2,
      title: "Transcript",
      category: "Document",
      image: "/img/Transcript.png",
      description: "My academic transcript.",
      link: "#"
    },
    {
      id: 3,
      title: "Certificate",
      category: "Document",
      image: "/img/cer1.jpg",
      description: "My academic certificate in diploma.",
      link: "#"
    },
    {
      id: 4,
      title: "Certificate",
      category: "Document",
      image: "/img/cer2.jpg",
      description: "My academic certificate in diploma.",
      link: "#"
    },
    {
      id: 5,
      title: "Certificate",
      category: "Document",
      image: "/img/cer3.jpg",
      description: "My academic certificate in diploma.",
      link: "#"
    },
    
  ];

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="projects-grid">
        {myInfo.map((project) => (
          <div key={project.id} className="card project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <span className="project-category">{project.category}</span>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button 
                className="btn-outline-small"
                onClick={() => setSelectedImage(project.image)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Full Preview" />
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPage;