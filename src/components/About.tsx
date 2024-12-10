import React from 'react';
import Slider from 'react-slick';
import { ArrowRight, Briefcase, Rocket, Zap,ExternalLink,TvMinimal   } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  const achievements = [
    {
      title: 'Design Matters',
      description: 'Transforming ideas into impactful UI-UX solutions.',
      buttonText: 'View Certificate',
      link: 'https://drive.google.com/file/d/1mUu5tEs2ol9T0oGuMGgst1-qK_DP05gf/view?usp=sharing',
      icon: <TvMinimal   className="w-6 h-6 text-primary" />,
    },
    {
      title: 'AI & Machine Learning',
      description: 'Shaping the Future of IT" held on the 4th day of October 2024..',
      buttonText: 'View Certificate',
      link: 'https://drive.google.com/file/d/1ZAPSXrLzZotJuBc2AJPAs_RlQi4G9gxI/view?usp=sharing',
      icon: <TvMinimal   className="w-6 h-6 text-primary" />,
    },
    {
      title: 'OpenSSF Scorecard',
      description: ' helps developers & organizations assess security health of open-source projects.',
      buttonText: 'View Certificate',
      link: 'https://drive.google.com/file/d/1zkrR8AlRgAug5vFMQLyrdGAIs-c1ejiV/view?usp=sharing',
      icon: <TvMinimal   className="w-6 h-6 text-primary" />,
    },
    {
      title: ' Machine Learning Algorithms',
      description: 'Solving problems in natural language processingn & predictive analytics.',
      buttonText: 'View Certificate',
      link: 'https://drive.google.com/file/d/1TIMrX0wj3RotPwnETGm-Egu97nvlZi1r/view?usp=sharing',
      icon: <TvMinimal   className="w-6 h-6 text-primary" />,
    },
  ];

  // Add new profile details
  const profileDetails = [
    {
      title: "Experience",
      value: "3+",
      icon: <Briefcase className="w-6 h-6 mx-auto" />
    },
    {
      title: "Projects",
      value: "5+",
      icon: <Rocket className="w-6 h-6 mx-auto" />
    },
    {
      title: "Technologies",
      value: "15+",
      icon: <Zap className="w-6 h-6 mx-auto" />
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Sets autoplay interval to 3 seconds
    arrows: false, // Removes left and right navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section id="about" className="py-20 bg-background dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-gray-800 dark:text-gray-100 mb-12 text-center">About Me</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
              {/* Profile Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  <img
                    src="/me.jpg"
                    alt="Profile"
                    className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary"
                  />
                  <div className="absolute bottom-0 right-1/3 bg-primary text-white px-4 py-1 rounded-full text-sm">
                    Available
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {profileDetails.map((detail, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl mb-1">{detail.icon}</div>
                      <div className="text-xl font-bold text-gray-800 dark:text-gray-100">{detail.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{detail.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* About Content */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Background</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm a passionate Full Stack Developer with a strong foundation in modern web technologies.
                    My journey in software development started with a curiosity about how things work on the internet,
                    and has evolved into a professional career building robust web applications.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">What I Do</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                    or sharing my knowledge through technical blog posts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12 text-gray-800 dark:text-gray-100">Achievements</h2>
          <Slider {...settings}>
            {achievements.map((achievement, index) => (
              <div key={index} className="px-4">
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105">
                  <div className="mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-secondary dark:text-gray-100">{achievement.title}</h3>
                  <p className="text-center text-muted dark:text-gray-300 mb-6">{achievement.description}</p>
                  <a 
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto bg-primary text-white px-4 py-2 rounded flex items-center hover:bg-highlight hover:text-secondary transition-colors duration-300"
                  >
                    {achievement.buttonText}
                    <ExternalLink  size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default About;