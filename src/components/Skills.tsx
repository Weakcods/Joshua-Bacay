import { Code, Database, Layout, Clock, MessageSquare, Users, ChefHat, Palette, Music, Briefcase, Calendar, Building, PencilLine  } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    {
      category: "Frontend Development",
      icon: <Layout className="w-8 h-8 text-primary" />,
      skills: [
        { name: "React", proficiency: 70 },
        { name: "TypeScript", proficiency: 65 },
        { name: "HTML/CSS", proficiency: 55 },
        { name: "Tailwind CSS", proficiency: 40 }
      ]
    },
    {
      category: "My Tools",
      icon: <PencilLine  className="w-8 h-8 text-primary" />,
      skills: [
        { name: "Figma", proficiency: 85 },
        { name: "Photoshop", proficiency: 45 },
        { name: "Framer", proficiency: 50 },
        { name: "VSCode", proficiency: 99 }
      ]
    },
    {
      category: "Programming Languages",
      icon: <Code className="w-8 h-8 text-primary" />,
      skills: [
        { name: "HTML/CSS", proficiency: 55 },
        { name: "Python", proficiency: 48 },
        { name: "JavaScript", proficiency: 30 },
        { name: "C#", proficiency: 20 }
      ]
    }
  ];

  const softSkills = [
    {
      name: "Time Management",
      icon: <Clock className="w-8 h-8 text-primary" />,
      proficiency: 95,
      description: "Excellent ability to prioritize and meet deadlines"
    },
    {
      name: "Communication",
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      proficiency: 90,
      description: "Strong written and verbal communication skills"
    },
    {
      name: "Team Collaboration",
      icon: <Users className="w-8 h-8 text-primary" />,
      proficiency: 95,
      description: "Effective team player with leadership abilities"
    }
  ];

  const personalTalents = [
    {
      name: "Cooking",
      icon: <ChefHat className="w-8 h-8 text-primary" />,
      description: "Passionate about creating innovative dishes"
    },
    {
      name: "Digital Art",
      icon: <Palette className="w-8 h-8 text-primary" />,
      description: "Creating digital illustrations and designs"
    },
    {
      name: "Music Production",
      icon: <Music className="w-8 h-8 text-primary" />,
      description: "Composing and producing electronic music"
    }
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Led the development of several user-friendly React applications, enhancing performance by 40%. Mentored junior developers and adopted modern frontend practices.",
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      type: "Full-time",
      location: "San Francisco, CA"
    },
    {
      title: "Software Engineer",
      company: "Digital Innovations",
      period: "2019 - 2021",
      description: "Developed and maintained multiple web applications using React, TypeScript, and Node.js. Collaborated with cross-functional teams to deliver high-quality solutions.",
      icon: <Building className="w-8 h-8 text-primary" />,
      type: "Full-time",
      location: "New York, NY"
    },
    {
      title: "Frontend Developer",
      company: "StartUp Hub",
      period: "2018 - 2019",
      description: "Implemented responsive designs and interactive features for various client projects. Worked directly with clients to gather requirements and deliver solutions.",
      icon: <Calendar className="w-8 h-8 text-primary" />,
      type: "Contract",
      location: "Remote"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        
        {/* Professional Experience */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
            Professional Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:bg-gray-800 dark:border-gray-700 flex flex-col"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {experience.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100">
                  {experience.title}
                </h4>
                <div className="flex flex-col items-center gap-1 mb-4">
                  <span className="font-medium text-gray-600 dark:text-gray-200">{experience.company}</span>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>{experience.period}</span>
                    <span>•</span>
                    <span>{experience.location}</span>
                  </div>
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    {experience.type}
                  </span>
                </div>
                <p className="text-center text-gray-600 dark:text-gray-400 font-inter">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-700 dark:text-gray-100">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {technicalSkills.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center mb-6">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
                  {category.category}
                </h4>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
                    >
                      <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-gray-200">
                        <span>{skill.name}</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {skill.proficiency}%
                        </motion.span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.5, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 0.5, delay: 0.5 + skillIndex * 0.1 }}
                          className="h-2.5 rounded-full bg-gradient-to-r from-[#FF4E50] to-[#F9D423]"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-700 dark:text-gray-100">
            Soft Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center mb-6">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
                  {skill.name}
                </h4>
                <div className="mb-6">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="h-2.5 rounded-full bg-gradient-to-r from-[#FF4E50] to-[#F9D423]"
                    />
                  </motion.div>
                  <motion.div 
                    className="text-center mt-3 text-gray-600 dark:text-gray-400 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    {skill.proficiency}%
                  </motion.div>
                </div>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Talents */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-700 dark:text-gray-100">
            Personal Talents
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {personalTalents.map((talent, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center mb-6">
                  {talent.icon}
                </div>
                <h4 className="text-xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
                  {talent.name}
                </h4>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  {talent.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;