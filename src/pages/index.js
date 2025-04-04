import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Layout from '../components/Layout';
import HomePage from '../components/Home';

export default function Home({ darkMode, setDarkMode }) {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }

      typedInstance.current = new Typed(typedRef.current, {
        strings: ["Coder", "Web Developer", "Frontend Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
        typedInstance.current = null;
      }
    };
  }, []);

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode} currentPage="home">
      <HomePage typedRef={typedRef} />
    </Layout>
  );
}