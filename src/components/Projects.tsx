import { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      links: ["https://project-one.com", "https://github.com/project-one"],
    },
    {
      title: "Project Two",
      description: "Mobile-first e-commerce platform",
      tech: ["React Native", "Firebase", "Stripe"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      links: ["https://project-two.com", "https://github.com/project-two"],
    },
    {
      title: "Project Three",
      description: "Real-time chat application",
      tech: ["Socket.io", "Express", "Redis"],
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      links: ["https://project-three.com", "https://github.com/project-three"],
    },
  ];

  const handleCardClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-gray-900 dark:text-gray-100">MY PROJECTS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => handleCardClick(project.links[0])}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;