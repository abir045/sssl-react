import AchievementCardsWrapper from "./page/achievements/AchievementCardsWrapper";
import BlogsAndNewsWrapper from "./page/blogs-and-news/BlogsAndNewsWrapper";
import NewsMediaHeroSection from "./page/blogs-and-news/NewsMediaHeroSection";
import ContactMap from "./page/contact-us/ContactMap";
import ContactUsPageWrapper from "./page/contact-us/ContactUsPageWrapper";
import CSRImageGallery from "./page/csr/CSRImageGallery";
import FAQSection from "./page/faq/FAQSection";
import AchievementSection from "./page/homepage/AchievementSection";
import DownloadBrochure from "./page/homepage/DownloadBrochure";
import HomeVideo from "./page/homepage/HomeVideo";
import LatestNewsSlider from "./page/homepage/LatestNewsSlider";
import LegacySection from "./page/homepage/LegacySection";
import OurPresence from "./page/homepage/OurPresence";
import OurServices from "./page/homepage/OurServices";
import TestimonialSlider from "./page/homepage/TestimonialSlider";
import WeServe from "./page/homepage/WeServe";
import WhyChoose from "./page/homepage/WhyChoose";
import WorkProgress from "./page/homepage/WorkProgress";
import MemberSection from "./page/management/MemberSection";
import OurServicesWrapper from "./page/our-services/OurServicesWrapper";
import MissionVisionWithCounter from "./page/who-we-are/MissionVisionWithCounter";
import HalfAndHalfCard from "./shared/cards/HalfAndHalfCard";
import GlobalBanner from "./shared/GlobalBanner";
import FooterGenericCards from "./shared/sections/FooterGenericCards";
import HeroSlider from "./slider/HeroSlider";
import TopClientMarquee from "./slider/TopClientMarquee";



const blockComponentsMapping = {
  'carbon-fields/hero-slider': HeroSlider,
  'carbon-fields/top-clients-section': TopClientMarquee,
  'carbon-fields/our-services-section': OurServices,
  'carbon-fields/our-legacy-section': LegacySection,
  'carbon-fields/achievement-section': AchievementSection,
  'carbon-fields/video-section': HomeVideo,
  'carbon-fields/our-presence-section': OurPresence,
  'carbon-fields/work-process-section': WorkProgress,
  'carbon-fields/why-choose-us-section': WhyChoose,
  'carbon-fields/we-serve-industries-section': WeServe,
  'carbon-fields/testimonial-section': TestimonialSlider,
  'carbon-fields/download-brochure-section': DownloadBrochure,
  'carbon-fields/latest-news-section': LatestNewsSlider,
  'carbon-fields/global-banner-section': GlobalBanner,
  'carbon-fields/mission-vision-with-counter-section': MissionVisionWithCounter,
  'carbon-fields/half-and-half-section': HalfAndHalfCard,
  'carbon-fields/generic-footer-cards-section': FooterGenericCards,
  'carbon-fields/members-section': MemberSection,
  'carbon-fields/achievement-cards-section': AchievementCardsWrapper,
  'carbon-fields/services-cards-section': OurServicesWrapper,
  'carbon-fields/csr-image-gallery-section': CSRImageGallery,
  'carbon-fields/blogs-and-news-card-section': BlogsAndNewsWrapper,
  'carbon-fields/featured-news-media-section': NewsMediaHeroSection,
  'carbon-fields/contact-details-section': ContactUsPageWrapper,
  'carbon-fields/contact-map-section': ContactMap,
  'carbon-fields/faq-section': FAQSection,
};

export default blockComponentsMapping;
