import React from 'react';
import Slider from 'react-slick';
import { ArrowRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  const achievements = [
    {
      title: 'Certified Developer',
      description: 'Obtained certification in Full Stack Development from XYZ Institute.',
      buttonText: 'View Certificate',
    },
    {
      title: 'Certified Developer',
      description: 'Obtained certification in Full Stack Development from XYZ Institute.',
      buttonText: 'View Certificate',
    },
    {
      title: 'Certified Developer',
      description: 'Obtained certification in Full Stack Development from XYZ Institute.',
      buttonText: 'View Certificate',
    },
    {
      title: 'Certified Developer',
      description: 'Obtained certification in Full Stack Development from XYZ Institute.',
      buttonText: 'View Certificate',
    },
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
          <h2 className="section-title text-gray-800 dark:text-gray-100 mb-8">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Profile"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 bg-primary dark:bg-primary"
              />
            </div>
            <div className="space-y-4 text-center">
              <p className="text-lg text-text dark:text-gray-300">
                I'm a passionate Full Stack Developer with a strong foundation in modern web technologies.
                My journey in software development started with a curiosity about how things work on the internet,
                and has evolved into a professional career building robust web applications.
              </p>
              <p className="text-lg text-text dark:text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through technical blog posts.
              </p>
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
                  <h3 className="text-xl font-semibold mb-4 text-secondary dark:text-gray-100">{achievement.title}</h3>
                  <p className="text-center text-muted dark:text-gray-300 mb-6">{achievement.description}</p>
                  <button className="mt-auto bg-primary text-white px-4 py-2 rounded flex items-center hover:bg-highlight hover:text-secondary transition-colors duration-300">
                    {achievement.buttonText}
                    <ArrowRight size={16} className="ml-2" />
                  </button>
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