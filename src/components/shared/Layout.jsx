import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
// import Container from "../shared/Container";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Badge from "../shared/Badge";
// import GoogleTagManager from "../shared/GoogleTagManager";
import { getMenuData } from "../../graphql/Components/getMenuData";
import { getConstructedMenuData } from "../../utils/getConstructedMenuData";
import GoogleTagManager from "./GoogleTagManager";
import Container from "./Container";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Badge from "./Badge";
import ReactLenis from "lenis/react";
import { HelmetProvider } from "react-helmet-async";
import { Skeleton } from "../ui/skeleton";

const Layout = () => {
  const [menuData, setMenuData] = useState({
    navbarData: null,
    footerData: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const data = await getMenuData("main-navigation");
        const formattedMenuData = getConstructedMenuData(data);
        setMenuData(formattedMenuData);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  // Set page title
  //   useEffect(() => {
  //     document.title = "Sentry Security || Homepage";
  //   }, []);

  if (loading) return <Skeleton />;
  //    {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen">
  //       <p className="text-gray-500">Loading...</p>
  //     </div>
  //   );
  // }

  return (
    <>
      <ReactLenis root>
        {/* <HelmetProvider> */}
        <GoogleTagManager />
        <Container>
          <Navbar data={menuData.navbarData} />
          <div className="mt-2.5 lg:mt-5 space-y-[50px] lg:space-y-[120px]">
            <Outlet />
            <Footer
              footerData={menuData.footerData}
              navbarData={menuData.navbarData}
            />
          </div>
        </Container>
        <Badge />
        {/* </HelmetProvider> */}
      </ReactLenis>
    </>
  );
};

export default Layout;
