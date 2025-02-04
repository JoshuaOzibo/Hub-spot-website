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
const App = () => {
  return (
    <div>
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
