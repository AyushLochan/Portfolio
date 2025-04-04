import Layout from '../components/Layout';
import Projects from '../components/Projects';

export default function ProjectsPage({ darkMode, setDarkMode }) {
  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode} currentPage="projects">
      <Projects />
    </Layout>
  );
}