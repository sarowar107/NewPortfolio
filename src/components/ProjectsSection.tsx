import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Machine Learning with Disaster Prediction',
      description: 'Developed a machine learning model to predict the severity of disasters using advanced regression techniques.',
      imageUrl: 'https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      link: '#',
    },
    {
      title: 'House Price Advanced Regression',
      description: 'Implemented a regression model to predict house prices based on various features, enhancing prediction accuracy.',
      imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      link: '#',
    },
    {
      title: 'GHOORNI - CUET Student Portal',
      description: 'A web application serving as a student portal for CUET, providing essential resources and information.',
      imageUrl: 'https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            className="rounded-2xl overflow-hidden shadow-lg bg-gray-800 hover:scale-105 transition-transform duration-300"
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-gradient-to-l transition-colors duration-300">
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
