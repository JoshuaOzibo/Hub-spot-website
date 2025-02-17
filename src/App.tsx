import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TopCountries from "./components/TopCountries";
import WhatIsHubspot from "./components/WhatIsHubspot";
import YourWholeFront from "./components/YourWholeFront";
import MeetBreeze from "./components/MeetBreeze";
import SolutionsForEvery from "./components/SolutionsForEvery";
import HubspotCustomers from "./components/HubspotCustomers";
import GrowBetterWithHub from "./components/GrowBetterWithHub";
import Footer from './components/Footer'
import MessageButton from "./components/MessageButton";
import HubBot from "./components/HubBot";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000, }}>
        <MessageButton setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      {!isOpen && <div style={{ position: 'fixed', bottom: '110px', right: '20px', zIndex: 1000, boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.4)' }}>
        <HubBot />
      </div>}
      <Navbar />
      <Hero />
      <TopCountries />
      <WhatIsHubspot />
      <YourWholeFront />
      <MeetBreeze />
      <SolutionsForEvery />
      <HubspotCustomers />
      <GrowBetterWithHub />
      <Footer />
    </div>
  );
};

export default App
