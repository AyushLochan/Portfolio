import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = ({
  name = "Ayush Lochan",
  title = "Web Developer",
  description = "Passionate software engineer with a love for creating elegant solutions to complex problems. Specializing in full-stack development and cloud architecture with a focus on scalable applications.",
  location = "Nagpur, India",
  email = "ayushlochan4u@gmail.com",
  education = [
    {
      degree: "Bachelor's in Computer Science",
      school: "Ramdeobaba University, Nagpur, Maharashtra",
      period: "2022 - 2026"
    },
    {
      degree: "12th",
      school: "Sarwashree Junior College, Nagpur, Maharashtra",
      period: "2022",
    },
    {
      degree: "10th ",
      school: "M.K.H Sancheti Public School, Nagpur, Maharashtra",
      period: "2020",
    }
  ],
  skills = [
    { name: "React", level: 50 },
    { name: "C++", level: 65 },
    { name: "Python", level: 50 },
    { name: "Java", level: 75 },
    { name: "Node.js", level: 50 },
    { name: "Javascript", level: 60 }
  ],
  achievements = [
    { icon: "🏅", text: "Contest rating 1623 on CodeChef (3 star)" },
    { icon: "🧩", text: "450+ Questions solved across various Coding Platforms" },
    { icon: "🥇", text: "Contest rating 1800 on leetcode" },
    { icon: "🚀", text: "Explorer Badge on HackerEarth " }
  ],
  hobbies = [
    { icon: "💻", text: "Competitive Coding" },
    { icon: "📚", text: "Reading Books" },
    { icon: "🎮", text: "Video Gaming" },
    { icon: "🚴‍♂️", text: "Cycling" },
    { icon: "🏏", text: "Cricket" },
    { icon: "♟️", text: "Chess" }
  ],



}) => {
  const observerRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = bar.getAttribute('data-level');
      }, 500);
    });

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observerRef.current.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const animatableElements = document.querySelectorAll('.animatable');
    animatableElements.forEach(el => {
      observerRef.current.observe(el);
    });

    if (profileRef.current) {
      profileRef.current.classList.add('animate-in');
    }

    return () => {
      if (observerRef.current) {
        animatableElements.forEach(el => {
          observerRef.current.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <div className="about-container">
      <div className="about-header">
        <div className="profile-section" ref={profileRef}>
          <div className="about-profile-image-container">

            <Image
              src="/Profile.jpg"
              alt="description"
              width={500}
              height={300}
              priority={true}
              className="about-profile-image"
            />


            <div className="profile-image-overlay">
              <div className="pulse-effect"></div>
            </div>
          </div>

          <div className="profile-info">
            <h1 className="profile-name">{name}</h1>
            <div className="typewriter">
              <div className="profile-tag">{title}</div>
            </div>
            <p className="profile-bio">{description}</p>

            <div className="profile-contact">
              {location && (
                <div className="contact-item hover-effect">
                  <i className="location-icon">📍</i>
                  <span>{location}</span>
                </div>
              )}
              {email && (
                <div className="contact-item hover-effect">
                  <i className="email-icon">✉️</i>
                  <span>{email}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="content-grid">
          {education.length > 0 && (
            <div className="about-card animatable fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="card-header">
                <i className="card-icon bouncing">🎓</i>
                <h2>Education</h2>
              </div>

              <div className="timeline">
                {education.map((edu, index) => (
                  <div
                    className="timeline-item animatable slide-in-right"
                    key={`edu-${index}`}
                    style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
                  >
                    <div className="timeline-dot purple">
                      <div className="pulse-dot"></div>
                    </div>
                    <div className="timeline-content">
                      <h3>{edu.degree}</h3>
                      <div className="timeline-subtitle">
                        <span className="highlight">{edu.school}</span>
                      </div>
                      <span className="period">• {edu.period}</span>
                      <p>{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {skills.length > 0 && (
            <div className="about-card animatable fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="card-header">
                <i className="card-icon spinning">⚙️</i>
                <h2>Technical Skills</h2>
              </div>

              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div
                    className="skill-item animatable fade-in"
                    key={`skill-${index}`}
                    style={{ animationDelay: `${index * 0.15 + 0.6}s` }}
                  >
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        data-level={`${skill.level}%`}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {achievements.length > 0 && (
            <div className="about-card animatable fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="card-header">
                <i className="card-icon scaling">🏆</i>
                <h2>Achievements</h2>
              </div>

              <div className="achievements-list">
                {achievements.map((achievement, index) => (
                  <div
                    className="achievement-item animatable slide-in-left"
                    key={`achievement-${index}`}
                    style={{ animationDelay: `${index * 0.2 + 0.8}s` }}
                  >
                    <i className="achievement-icon">{achievement.icon}</i>
                    <p>{achievement.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {hobbies.length > 0 && (
            <div className="about-card animatable fade-up" style={{ animationDelay: '0.8s' }}>
              <div className="card-header">
                <i className="card-icon rotating">🎯</i>
                <h2>Hobbies</h2>
              </div>

              <div className="hobbies-list">
                {hobbies.map((hobby, index) => (
                  <div
                    className="hobby-item animatable slide-in-right"
                    key={`hobby-${index}`}
                    style={{ animationDelay: `${index * 0.2 + 1}s` }}
                  >
                    <i className="hobby-icon">{hobby.icon}</i>
                    <p>{hobby.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="connect-section animatable fade-up">
          <h2>Let&apos;s Connect</h2>
          <motion.div
            className="about-social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.div
              className="about-social-icon"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 1.5, duration: 0.3 }
              }}
            >
              <a href="https://github.com/AyushLochan" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            </motion.div>

            <motion.div
              className="about-social-icon"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 1.6, duration: 0.3 }
              }}
            >
              <a href="https://www.linkedin.com/in/ayush-lochan-9b63a4276/" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            </motion.div>

            <motion.div
              className="about-social-icon"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 1.7, duration: 0.3 }
              }}
            >
              <a href="mailto:ayushlochan4u@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
