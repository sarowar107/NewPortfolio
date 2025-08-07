import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-1">
              <div className="bg-gray-900 rounded-2xl overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/sarowar107/NewPortfolio/main/Photos/profile.png" 
                  alt="Sarowar Islam" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-3">
              <User size={32} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold">Who am I?</h3>
          <p className="text-gray-300 text-lg">
            I'm a passionate engineering student at Chittagong University of Engineering & Technology (CUET), 
            currently pursuing my Bachelor of Science degree. With a strong foundation in computer science 
            and engineering principles, I'm dedicated to creating innovative solutions through technology.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <GraduationCap className="text-purple-500 mt-1 mr-3" />
              <div>
                <h4 className="text-xl font-semibold">Education</h4>
                <p className="text-gray-400">BSc in Computer Science & Engineering, CUET</p>
                <p className="text-gray-400">HSC from Adhyapak Abdul Majid College</p>
                <p className="text-gray-400">SSC from Duariya A G Model Academy</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="text-purple-500 mt-1 mr-3" />
              <div>
                <h4 className="text-xl font-semibold">Location</h4>
                <p className="text-gray-400">Chittagong, Bangladesh</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-300 text-lg">
            My journey in technology began with curiosity about how things work, and it has evolved into 
            a passion for building solutions that make a difference. I'm constantly exploring new technologies 
            and frameworks to expand my skillset.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
