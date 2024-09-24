//import React from 'react'
import employeeMSImage from "../assets/abilities.png";
//import bookMSImage from "../assets/dashboard.png";
import obs from "../assets/obs.png";
import btrs from "../assets/btrs.webp";

const projects = [
    {
        id: 1,
        name: "Online_Book_Shop",
        technologies: "HTML,CSS,JS,PHP",
        image: obs,
        github: "https://github.com/bala00790/Online_Book_Shop",
    },
    {
        id: 2,
        name: "Bus_Ticket_Reservation",
        technologies: "Java",
        image: btrs,
        github: "https://github.com/bala00790/Bus_Ticket_Reservation_System",
    },
    {
        id: 3,
        name: "Project3",
        technologies: "Language",
        image: employeeMSImage,
        github: "https://github.com/bala00790",
    },
    {
        id: 4,
        name: "Project4",
        technologies: "Language",
        image: employeeMSImage,
        github: "https://github.com/bala00790",
    },
];

const Projects = () => {
  return (
    <div className='bg-black text-which py-20 h-screen flex items-center justify-center flex-col' id='project'> 
    <div className='container mx-auto px-8 md:px-16 lg:px-24 '>
      <h2 className='text-4xl font-bold text-center text-white mb-12'>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
            <div key={projects.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg
            transform transition-transform duration-300 hover:scale-105">
                <img src= {project.image} alt={project.name} className="rounded-lg mb-4
                w-full h-48 object-cover" />
                <h3 className=" text-gray-200 text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.technologies}</p>
                <a href={project.github} className="inline-block bg-gradient-to-r
                from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank"
                rel="noopener noreferrer">GitHub</a>
            </div>
        ))}
        </div>
        </div>
        </div>
  )
}

export default Projects
