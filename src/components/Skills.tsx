import { Layout, Clock, MessageSquare, Users, Palette, Briefcase, Calendar, Building, Wallpaper } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    {
      category: "Frontend Development",
      icon: <Layout className="w-8 h-8 text-primary" />,
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", proficiency: 50 },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", proficiency: 55 },
        { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", proficiency: 70 },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", proficiency: 45 },
      ]
    },
    {
      category: "Design Tools",
      icon: <Palette className="w-8 h-8 text-primary" />,
      skills: [
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", proficiency: 85 },
        { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", proficiency: 80 },
        { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", proficiency: 75 },
        { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", proficiency: 90 }
      ]
    },
    {
      category: "Microsoft Office",
      icon: <Wallpaper className="w-8 h-8 text-primary" />,
      skills: [
        { name: "Word", icon: "https://img.icons8.com/color/48/000000/microsoft-word-2019--v2.png", proficiency: 95 },
        { name: "Excel", icon: "https://img.icons8.com/color/48/000000/microsoft-excel-2019--v2.png", proficiency: 90 },
        { name: "PowerPoint", icon: "https://img.icons8.com/color/48/000000/microsoft-powerpoint-2019--v2.png", proficiency: 92 },
        { name: "Access", icon: "https://img.icons8.com/color/48/000000/microsoft-access-2019--v2.png", proficiency: 85 }
      ]
    }
  ];

  const softSkills = [
    {
      name: "Time Management",
      icon: <Clock className="w-8 h-8 text-primary" />,
      proficiency: 90,
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
      proficiency: 90,
      description: "Effective team player with leadership abilities"
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
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <img src={skill.icon} alt={skill.name} className="w-8 h-8 mb-2" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">{skill.name}</span>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="h-1.5 rounded-full bg-gradient-to-r from-[#FF4E50] to-[#F9D423]"
                        />
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">{skill.proficiency}%</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
            Professional Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {experience.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100">
                  {experience.title}
                </h4>
                <div className="flex flex-col items-center gap-2 mb-4">
                  <span className="font-medium text-gray-600 dark:text-gray-200">{experience.company}</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    {experience.type}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>{experience.period}</span>
                    <span>•</span>
                    <span>{experience.location}</span>
                  </div>
                </div>
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

         {/* Soft Skills */}
         <div className="mb-20">
         <h3 className="text-2xl font-bold mb-8 text-center text-gray-700 dark:text-gray-100">
          Soft Skills</h3>
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
      </div>
    </section>
  );
};

export default Skills;