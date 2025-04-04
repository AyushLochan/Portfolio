import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Home = ({ typedRef }) => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Ayush_Lochan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="container">
      <motion.div 
        className="hero"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="content" variants={itemVariants}>
          <motion.h4
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ayush Lochan
          </motion.h4>
          
          <motion.h1 variants={itemVariants}>
            I&apos;m a <span ref={typedRef} className="text-rotate"></span>
          </motion.h1>
          
          <motion.p 
            className="description"
            variants={itemVariants}
          >
            Passionate Web Developer skilled in crafting elegant solutions,
            transforming ideas into functional and user-friendly web experiences.
            Specializing in modern frontend technologies to create responsive and
            intuitive interfaces.
          </motion.p>
          
          <motion.div 
            className="buttons-container"
            variants={itemVariants}
          >
            <motion.button 
              className="button resume-button"
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="button-icon" /> Download Resume
            </motion.button>
            
            <Link href="/projects">
              <motion.button 
                className="button projects-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects <FaArrowRight className="button-icon-right" />
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.div
              className="social-icon"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { delay: 1.5, duration: 0.3 }
              }}
            >
              <a href="https://github.com/AyushLochan" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </motion.div>
            
            <motion.div
              className="social-icon"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { delay: 1.6, duration: 0.3 }
              }}
            >
              <a href="https://www.linkedin.com/in/ayush-lochan-9b63a4276/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </motion.div>

            <motion.div
              className="social-icon"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { delay: 1.7, duration: 0.3 }
              }}
            >
              <a href="mailto:ayushlochan4u@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="image-container"
          variants={itemVariants}
        >
          <motion.div 
            className="image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { 
                type: "spring",
                stiffness: 100,
                duration: 0.8 
              }
            }}
          >
            <div className="profile-image-container">
              <Image
                src="/Profile.jpg"
                alt="Profile"
                className="profile-image"
                width={300}
                height={300}
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;