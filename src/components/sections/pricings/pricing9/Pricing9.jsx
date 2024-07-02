import React from "react";

const ProjectCard = ({ project }) => (
  <div className="bg-[var(--website-9-color-1)]  rounded-lg overflow-hidden shadow-lg">
    <img
      src={project.imgUrl}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "/path/to/fallback-image.jpg"; // Fallback image path
      }}
      alt={project.description}
      className="w-full h-64 object-cover"
    />
    <div className="p-4 hover:bg-[var(--website-9-color-2)] ease-in-out duration-300">
      <h2 className="text-xl text-[var(--website-9-color-3)] font-bold mb-2">{project.description}</h2>
      <p className="text-[var(--website-9-color-3)]  mb-2">{project.subtitle}</p>
      <div className="flex items-center gap-2 mb-4">
        {project.icons.map((icon, index) => (
          <div key={index} className="flex items-center gap-1">
            <img src={icon.icon} alt={icon.title} className="w-4 h-4" />
            <span>{icon.title}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Pricing9 = ({ template }) => {
  const projects = template.projects.projects;

  return (
    <main className="container mx-auto pt-8 px-3">
      <div className="lg:flex justify-between items-center hover:bg-[var(--website-9-color-2)] ease-in-out duration-300 p-4 rounded-lg">
        <div className="lg:w-3/5">
          <h1 className="text-[var(--website-9-color-3)]  hover:text-[var(--website-9-color-1)] ease-in-out duration-300 text-2xl font-bold">{template.projects.title}</h1>
          <p className="text-lg text-[var(--website-9-color-3)] hover:text-[var(--website-9-color-1)] ease-in-out duration-300 ">{template.projects.description}</p>
          <p className="text-sm text-[var(--website-9-color-4)] hover:text-[var(--website-9-color-1)] ease-in-out duration-300">{template.projects.subtitle}</p>
        </div>
        <div className="flex gap-4 lg:w-2/5 lg:pt-0 pt-6">
          {template.projects.categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 text-[var(--website-9-color-4)]  border border-[var(--website-9-color-1)] hover:text-[var(--website-9-color-1)] hover:bg-[var(--website-9-color-6)] rounded-full hover:text-[var(--website-9-color-3)]  hover:bg-[var(--website-9-color-3)] ease-in-out duration-300  focus:outline-none"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <section className="mt-8 grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </main>
  );
};

export default Pricing9;
