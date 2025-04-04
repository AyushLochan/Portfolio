import Layout from '../components/Layout';
import Contact from '../components/Contact';

export default function ContactPage({ darkMode, setDarkMode }) {
  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode} currentPage="contact">
      <Contact />
    </Layout>
  );
}