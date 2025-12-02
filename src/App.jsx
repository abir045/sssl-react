// import "./App.css";

import { Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
import HomePage from "./components/pages/Home";
import Layout from "./components/shared/Layout";
import OurServicesPage from "./components/pages/Service";
import ServiceDetailsPage from "./components/pages/ServiceDetailsPage";
import FaqPage from "./components/pages/Faq";
import WhoWeArePage from "./components/pages/WhoWeArePage";
import AchievementPage from "./components/pages/Achievements";
import OurStoryPage from "./components/pages/OurStory";
import OurManagementPage from "./components/pages/OurManagement";
import BlogAndArticlesPage from "./components/pages/BlogsAndArticles";
import BlogDetailsPage from "./components/pages/BlogDetails";
import NewsAndMediaPage from "./components/pages/NewsAndMedia";
import NewsDetailsPage from "./components/pages/NewsDetails";
// import { HelmetProvider } from "react-helmet-async";
import CSRPage from "./components/pages/Csr";
import ContactUsPage from "./components/pages/ContactUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/our-services" element={<OurServicesPage />} />
          <Route path="/our-services/:slug" element={<ServiceDetailsPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/about-us/who-we-are" element={<WhoWeArePage />} />
          <Route path="/about-us/achievements" element={<AchievementPage />} />
          <Route path="/about-us/our-story" element={<OurStoryPage />} />
          <Route
            path="/about-us/our-management"
            element={<OurManagementPage />}
          />
          <Route path="/blog-and-articles" element={<BlogAndArticlesPage />} />
          <Route
            path="/blog-and-articles/:slug"
            element={<BlogDetailsPage />}
          />
          <Route path="/news-and-media" element={<NewsAndMediaPage />} />
          <Route path="/news-and-media/:slug" element={<NewsDetailsPage />} />
          <Route path="/csr" element={<CSRPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route
            path="*"
            element={
              <div className="h-screen flex items-center justify-center font-bold text-4xl">
                404 | Not Found
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
