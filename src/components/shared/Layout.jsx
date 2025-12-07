import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { getMenuData } from "../../graphql/Components/getMenuData";
import { getConstructedMenuData } from "../../utils/getConstructedMenuData";
import GoogleTagManager from "./GoogleTagManager";
import Container from "./Container";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Badge from "./Badge";
import ReactLenis, { useLenis } from "lenis/react";
import { Skeleton } from "../ui/skeleton";

const LayoutContent = ({ menuData }) => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    // Use Lenis scroll method instead of window.scrollTo
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return (
    <>
      {/* <GoogleTagManager /> */}
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
    </>
  );
};

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

  if (loading) return <Skeleton className="min-h-screen" />;

  return (
    <ReactLenis root>
      <LayoutContent menuData={menuData} />
    </ReactLenis>
  );
};

export default Layout;

// import { useState, useEffect } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// // import Container from "../shared/Container";
// // import Navbar from "./Navbar";
// // import Footer from "./Footer";
// // import Badge from "../shared/Badge";
// // import GoogleTagManager from "../shared/GoogleTagManager";
// import { getMenuData } from "../../graphql/Components/getMenuData";
// import { getConstructedMenuData } from "../../utils/getConstructedMenuData";
// import GoogleTagManager from "./GoogleTagManager";
// import Container from "./Container";
// import Navbar from "../layout/Navbar";
// import Footer from "../layout/Footer";
// import Badge from "./Badge";
// import ReactLenis from "lenis/react";
// import { HelmetProvider } from "react-helmet-async";
// import { Skeleton } from "../ui/skeleton";

// const Layout = () => {
//   const [menuData, setMenuData] = useState({
//     navbarData: null,
//     footerData: null,
//   });
//   const [loading, setLoading] = useState(true);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const fetchMenuData = async () => {
//       try {
//         const data = await getMenuData("main-navigation");
//         const formattedMenuData = getConstructedMenuData(data);
//         setMenuData(formattedMenuData);
//       } catch (error) {
//         console.error("Error fetching menu data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMenuData();
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   if (loading) return <Skeleton className="min-h-screen" />;

//   return (
//     <>
//       <ReactLenis root>
//         {/* <HelmetProvider> */}
//         <GoogleTagManager />
//         <Container>
//           <Navbar data={menuData.navbarData} />
//           <div className="mt-2.5 lg:mt-5 space-y-[50px] lg:space-y-[120px]">
//             <Outlet />
//             <Footer
//               footerData={menuData.footerData}
//               navbarData={menuData.navbarData}
//             />
//           </div>
//         </Container>
//         <Badge />
//         {/* </HelmetProvider> */}
//       </ReactLenis>
//     </>
//   );
// };

// export default Layout;
