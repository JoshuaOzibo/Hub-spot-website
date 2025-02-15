import Button from "./Button";
import HowHubspotWorks_Image from "../assets/Images/How_hubspot_worksImage.webp";
import { IoMdPlay } from "react-icons/io";

export default function () {
  return (
    <section className="bg-[#f6f9fc] py-20 w-full lg:px-40 px-4">
      <main className="md:flex block space-y-7 items-center gap-2 justify-between">
        <div className="bg-black relative lg:w-1/2 z-10 md:w-[50%]">
          <img src={HowHubspotWorks_Image} alt="HubspotImage" className="z-10"/>
          <div className="absolute cursor-pointer top-1/2 w-16 h-16 bg-[#fc7756] rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl">
            <IoMdPlay
              color="#fff"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        {/* <video 
        className="h-[300px] w-full" 
        crossOrigin="anonymous" 
        playsInline 
        preload="none" 
        id="vjs_video_3_html5_api" 
        tabIndex={-1}
        role="application" 
        src="blob:https://play.hubspotvideo.com/ba66b64d-96e5-45f0-8e9d-f2a9ec1a7e9b"
      ></video> */}

        <div className="md:w-[45%] text-start">
          <h3 className="text-2xl mb-2 font-bold">What is HubSpot?</h3>
          <div className="space-y-4">
            <p className="text-base">
              HubSpot is an AI-powered customer platform with all the software,
              integrations, and resources you need to connect your marketing,
              sales, and customer service. HubSpot's connected platform enables
              you to grow your business faster by focusing on what matters most:
              your customers.
            </p>
            <p>
              Get a demo to learn about our premium software, or get started
              with our full suite of free tools and upgrade as you grow.
            </p>
            <div className="w-full flex flex-col md:flex-row gap-4">
              <Button
                className="w-full px-5 font-bold bg-[#ff5c35] text-white py-4"
                value="Get a demo"
              />
              <Button
                className="w-full px-8 font-semibold text-[#fc7756] py-4"
                value="Get started free"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
