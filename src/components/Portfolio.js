import React from 'react';
import img1 from './../images/mgi-tours.jpg';
import img2 from './../images/monkey-mountain.jpg';
import img3 from './../images/mgi-candles.jpg';
import img4 from './../images/tpcSecurity.png';
import img5 from './../images/MgiDashboard.jpg';

const Portfolio = ({ id }) => {
  const projects = [
    {
      image: img3,
      title: "Mgi Candles",
      description: "A platform for forex training, providing resources and guidance for beginners and experts.",
      url: "https://mgi-candle.vercel.app/",
    },
    {
      image: img5,
      title: "MGI Dashboard",
      description: "This is a Developing Dashboard for Administrator to be updating data to Mgi Candles Website.",
      url: "https://mgi-admin-dashboard.vercel.app/",
    },
    {
      image: img4,
      title: "Security Incidence Log",
      description: "Dashboard for security companies to log incident events around the area ie Industrial Area.",
      url: "https://incidents-log.vercel.app/",
    },
    {
      image: img1,
      title: "Mgi Tours",
      description: "A website dedicated to promoting tourism and showcasing beautiful travel destinations.",
      url: "https://frankyle.github.io/Tours-Website/",
    },
    {
      image: img2,
      title: "Monkey Mountain",
      description: "A luxurious hotel in Zanzibar offering the best hospitality and serene surroundings.",
      url: "https://frankyle.github.io/Monkey-Mountain-web/",
    },
  ];

  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Portfolio Section Title */}
        <div className="mb-12">
          <span className="block text-blue-500 text-6xl mb-2 animate-bounce">★</span>
          <h2 className="text-5xl font-extrabold text-gray-800 relative inline-block">
            Portfolio
          </h2>
          <div className="h-1 w-16 bg-blue-500 mx-auto mt-3"></div>
        </div>

        {/* GitHub Link Section */}
        <div className="mt-12">
          <p className="text-gray-800 text-lg font-medium">
            Below is a preview of some of my projects. For more amazing work, visit my{" "}
            <a
              href="https://github.com/frankyle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline hover:text-blue-800 transition-colors"
            >
              GitHub account
            </a>
            . <span className="inline-block ml-2 text-blue-600 animate-pulse">⬇</span>
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2
              ${index % 2 === 0 ? 'animate-fadeInUp' : 'animate-fadeInDown'}`}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                <span className="text-blue-500">◈ </span>
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>

              {/* Preview Link */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:underline"
              >
                Preview
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
