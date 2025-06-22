import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section className="bg-gradient-to-b from-black text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl w-full max-w-md hover:scale-105 transition-transform duration-500 ease-in">
            <h3 className="text-2xl font-semibold text-pink-400 mb-2">{project.name}</h3>
            <p className="text-gray-300 mb-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs bg-gray-700 px-3 py-1 rounded-full text-white">{tech}</span>
              ))}
            </div>

            <div className="flex gap-4 my-6">
              <a href={project.live} target="_blank" className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded  transition">Live</a>
              <a href={project.code} target="_blank" className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
