import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "To Do List",
      description: "A modern, interactive task manager application with local storage persistence. Keep track of your daily tasks, mark them as complete, and organize your workflow efficiently.",
      tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      image: "/images/to-do.jpg",
      code: "https://github.com/AyushLochan/To-Do_List",
      demo: "https://ayushlochan.github.io/To-Do_List/",
      category: "utility",
      features: [
        "Add, edit and delete tasks",
        "Mark tasks as complete",
        "Filter tasks by status",
        "Persistent storage using localStorage",
        "Responsive design for all devices"
      ]
    },
    {
      id: 2,
      title: "Password Generator",
      description: "A secure random password generator with customizable options. Create strong, unique passwords with various character types to enhance your online security.",
      tech: ["JavaScript", "Clipboard API", "CSS"],
      image: "/images/password.jpg",
      code: "https://github.com/AyushLochan/Password-Generator",
      demo: "https://ayushlochan.github.io/Password-Generator/",
      category: "security",
      features: [
        "Generate secure random passwords",
        "Customize password length and character types",
        "Copy to clipboard functionality",
        "Password strength indicator",
        "Clean, intuitive interface"
      ]
    },
    {
      id: 3,
      title: "Digital Clock",
      description: "A simple digital clock displaying the current time with a sleek and responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/clock.jpg",
      code: "https://github.com/ayushlochan/Digital-Clock",
      demo: "https://ayushlochan.github.io/Digital-Clock/",
      category: "utility",
      features: [
        "Real-time digital clock",
        "Responsive design",
        "Smooth animations",
        "Light and dark mode support"
      ]
    },
    {
      id: 4,
      title: "Expense Splitter",
      description: "A mobile app to split expenses between multiple participants, track balances, and send notifications.",
      tech: ["React Native", "Expo", "JavaScript"],
      image: "/images/expense.jpg",
      code: "https://github.com/AyushLochan/Expense-Splitter",
      demo: "https://snack.expo.dev/@ayush8081/expense-splitter?platform=web",
      category: "finance",
      features: [
        "Add participants to the group",
        "Track expenses with payer details",
        "Calculate balances for each participant",
        "Send notifications for balance updates",
        "Clear expenses when needed"
      ]
    },
    {
      id: 5,
      title: "Sport Shoes App",
      description: "A mobile app for browsing and purchasing sport shoes, apparel, and accessories.",
      tech: ["React Native", "JavaScript"],
      image: "/images/shopping.jpg",
      code: "https://github.com/AyushLochan/sneaker-shop-app",
      demo: "https://snack.expo.dev/@ayush8081/41e0c1",
      category: "shopping",
      features: [
        "Browse and search for sport shoes, apparel, and accessories",
        "View product details like price and category",
        "Manage wallet balance",
        "Top-up wallet balance for purchases",
        "Category-based product navigation"
      ]
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sectionNode = sectionRef.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        },
        { threshold: 0.1 }
      );

      if (sectionNode) {
        observer.observe(sectionNode);
      }

      return () => {
        if (sectionNode) {
          observer.unobserve(sectionNode);
        }
      };
    }
  }, []);

  const toggleProjectDetails = (id, event) => {
    const isLinkClick = event?.target.closest('a');
    if (isLinkClick) return;

    setActiveProject(activeProject === id ? null : id);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFilter = filter === 'all' || project.category === filter;

    return matchesSearch && matchesFilter;
  });

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Showcasing my technical skills & creativity</p>
        </motion.div>

        <motion.div
          className="filter-container"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="search-box">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </div>

          <div className="category-filters">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => handleFilterChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${activeProject === project.id ? 'active' : ''}`}
                onClick={(e) => toggleProjectDetails(project.id, e)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)"
                }}
              >
                <div className="project-content">
                  <div className="project-image-container">
                    <div className="relative w-full h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdAJAAZU73QAAAABJRU5ErkJggg=="
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://via.placeholder.com/600x400?text=${project.title}`;
                        }}
                      />
                    </div>
                    <div className="project-category-badge">{project.category}</div>
                    <div className="project-overlay">
                      <div className="overlay-content">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="tech-tags">
                          {project.tech.map((tech, i) => (
                            <motion.span
                              key={i}
                              className="tech-tag"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.1 * i }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                        <motion.button
                          className="details-btn"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fas fa-info-circle"></i> View Details
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="project-details"
                    initial={{ opacity: 0 }}
                    animate={activeProject === project.id ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="details-header">
                      <h3>{project.title}</h3>
                      <motion.button
                        className="close-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveProject(null);
                        }}
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        ×
                      </motion.button>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="features-container">
                      <h4>Key Features</h4>
                      <ul className="features-list">
                        {project.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={activeProject === project.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                          >
                            <span className="feature-bullet">•</span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-links">
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo-link"
                        onClick={handleLinkClick}
                        whileHover={{ y: -5, boxShadow: "0 5px 10px rgba(0,0,0,0.2)" }}
                      >
                        <i className="fas fa-eye"></i> Live Demo
                      </motion.a>
                      <motion.a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="code-link"
                        onClick={handleLinkClick}
                        whileHover={{ y: -5, boxShadow: "0 5px 10px rgba(0,0,0,0.1)" }}
                      >
                        <i className="fas fa-code"></i> View Code
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <i className="fas fa-search"></i>
              <h3>No projects found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <motion.button
                className="reset-filters-btn"
                onClick={() => {
                  setSearchTerm('');
                  setFilter('all');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reset Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
