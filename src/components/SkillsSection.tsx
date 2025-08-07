import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = {
    'Programming Languages': [
  
      { name: 'C++', level: 90 },
      { name: 'C#', level: 60 },
      { name: 'Python', level: 70 },
      { name: 'Java', level: 80 },
      { name: 'JavaScript', level: 80 },
    ],
    'Frontend Development': [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Bootstrap', level: 85 },
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
    ],
    'Backend Development': [
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 80 },
      { name: 'Python', level: 80 },
      { name: 'Django', level: 75 },
      { name: 'Node.js', level: 80 },
    ],
    'Database Management': [
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 70 },
    ],
  };

  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {Object.entries(skills).map(([category, skillList], index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-200">
              {category}
            </h3>
            <div className="space-y-4">
              {skillList.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.05 * skillIndex }}
                >
                  <div className="mb-1 text-sm font-medium text-gray-300">
                    {skill.name}
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.0, ease: 'easeInOut' }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full absolute top-0 left-0"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
