import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = {
    'Machine Learning': [
      { name: 'TensorFlow', level: 70, indicator: 'Advanced' },
      { name: 'PyTorch', level: 65, indicator: 'Intermediate' },
    ],
    'Programming Languages': [
      { name: 'C', level: 75, indicator: 'Advanced' },
      { name: 'C++', level: 70, indicator: 'Advanced' },
      { name: 'C#', level: 60, indicator: 'Intermediate' },
      { name: 'Python', level: 80, indicator: 'Advanced' },
      { name: 'JavaScript', level: 90, indicator: 'Expert' },
    ],
    'Frontend Development': [
      { name: 'React', level: 85, indicator: 'Advanced' },
      { name: 'Tailwind CSS', level: 90, indicator: 'Expert' },
    ],
    'Backend Development': [
      { name: 'Node.js', level: 80, indicator: 'Advanced' },
    ],
    'Cybersecurity': [
      { name: 'Network Security', level: 50, indicator: 'Intermediate' },
      { name: 'Ethical Hacking', level: 55, indicator: 'Intermediate' },
    ],
  };

  const getIndicatorColor = (indicator: string) => {
    switch (indicator) {
      case 'Beginner': return 'bg-green-300';
      case 'Intermediate': return 'bg-blue-300';
      case 'Advanced': return 'bg-purple-300';
      case 'Expert': return 'bg-pink-300';
      default: return 'bg-gray-300';
    }
  };

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
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

      {Object.entries(skills).map(([category, skillList], index) => (
        <div key={index} className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-gray-300">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillList.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 * skillIndex }}
                className="bg-gray-800 rounded-2xl shadow-lg p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold">{skill.name}</h4>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${getIndicatorColor(skill.indicator)}`}>
                    {skill.indicator}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-6 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-6 rounded-full absolute top-0 left-0"
                  ></motion.div>
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm font-bold">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
