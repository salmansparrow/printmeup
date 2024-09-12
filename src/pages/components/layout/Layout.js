import Footer from "../common/Footer";

function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
