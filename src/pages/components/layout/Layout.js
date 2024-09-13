import Footer from "../common/Footer";
import MainNavbar from "../common/MainNavbar";

function Layout({ children }) {
  return (
    <>
      <MainNavbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
