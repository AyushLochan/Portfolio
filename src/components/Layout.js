import Nav from './Nav';

const Layout = ({ children, darkMode, setDarkMode, currentPage }) => {
  return (
    <>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} currentPage={currentPage} />
      <main>{children}</main>
    </>
  );
};

export default Layout;