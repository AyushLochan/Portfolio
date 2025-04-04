import Layout from '../components/Layout';
import About from '../components/About';

export default function AboutPage({ darkMode, setDarkMode }) {
  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode} currentPage="about">
      <About />
    </Layout>
  );
}