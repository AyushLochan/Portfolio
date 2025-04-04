import { useEffect, useState } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/Home.css';    // Home page global styles
import '../styles/About.css';   // About page global styles
import '../styles/Contact.css'; // Contact page global styles
import '../styles/Projects.css';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>Ayush Lochan - Web Developer</title>
        <meta name="description" content="Ayush Lochan - Web Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`containers ${darkMode ? 'dark' : ''}`}>
        <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </>
  );
}

export default MyApp;