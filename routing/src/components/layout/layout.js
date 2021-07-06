import LayoutStyles from "./layout.module.css";
import NavigationBar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />

      <main className={LayoutStyles.main}>{children}</main>
    </>
  );
};

export default Layout;
