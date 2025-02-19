import Button from "./Button";
import growBetterRightImage from "../assets/Images/GrowBetterImage.webp";
// grow better first card Images
import GrowBetterGmail from "../assets/logo/GrowBetterSvg/gmail-icon-1.svg";
import GrowBetterGoogle from "../assets/logo/GrowBetterSvg/google-ads-icon-1.svg";
import GrowBetterMailchimp from "../assets/logo/GrowBetterSvg/mailchimp-icon-1.svg";
import GrowBetterShopify from "../assets/logo/GrowBetterSvg/shopify-icon-1.svg";
import GrowBetterSlack from "../assets/logo/GrowBetterSvg/slack-icon-1.svg";
import GrowBetterZapier from "../assets/logo/GrowBetterSvg/zapier-icon-1.svg";

// grow better SECOND card Images
import awardImageOne from "../assets/Images/LeaderAward_1.webp";
import awardImageTwo from "../assets/Images/winnerAward_2.webp";
import awardImageThree from "../assets/Images/winnerAward_3.webp";
import awardImageFour from "../assets/Images/winnerAward_4.webp";
import awardImageFive from "../assets/Images/winnerAward_5.webp";
import awardImageSix from "../assets/Images/winnerAward_6.webp";

const GrowBetterWithHub = () => {
  return (
    <section className="bg-[#f6f9fc] px-4">
      <main className="grid grid-cols-1 lg:px-40 py-24 md:grid-cols-2 gap-6">
        <div className="  bg-white border-2 border-gray-200  rounded p-8">
          {/* image */}
          <div className="grid -mt-2 grid-cols-3 lg:grid-cols-4 lg:px-5 space-y-5 gap-5 w-full place-items-center">
            <img
              className="col-span-1"
              src={GrowBetterGmail}
              alt="GrowBetterGmail"
            />
            <img
              className="col-span-1"
              src={GrowBetterShopify}
              alt="GrowBetterShopify"
            />
            <img
              className="col-span-1"
              src={GrowBetterMailchimp}
              alt="GrowBetterMailchimp"
            />
            <img
              className="col-span-1"
              src={GrowBetterZapier}
              alt="GrowBetterZapier"
            />
            <img
              className="lg:col-start-2 col-span-1"
              src={GrowBetterGoogle}
              alt="GrowBetterGoogle"
            />
            <img
              className="col-span-1"
              src={GrowBetterSlack}
              alt="GrowBetterSlack"
            />
          </div>

          <div className="mt-32 px-5 space-y-5">
            <h2 className="mb-3 text-center text-2xl font-semibold">
              1,700+ ways to connect your tools
            </h2>
            <p className="text-center font-bold underline">
              <a href="##">View all apps</a>
            </p>
          </div>
        </div>
        <div className=" bg-white border-2 border-gray-200  rounded p-8">
          {/* image */}
          <div className="grid -mt-4 grid-cols-3 lg:px-5 space-y-5 gap-5 w-full place-items-center">
            <img
              className="col-span-1 w-[70px]"
              src={awardImageOne}
              alt="awardImageOne"
            />
            <img
              className="col-span-1 w-[70px]"
              src={awardImageTwo}
              alt="awardImageTwo"
            />
            <img
              className="col-span-1 w-[70px]"
              src={awardImageThree}
              alt="awardImageThree"
            />
            <img
              className="col-span-1 w-[70px]"
              src={awardImageFour}
              alt="awardImageFour"
            />
            <img
              className="w-[70px] col-span-1"
              src={awardImageFive}
              alt="awardImageFive"
            />
            <img
              className=" col-span-1 w-[70px]"
              src={awardImageSix}
              alt="awardImageSix"
            />
          </div>

          {/* 300 389 */}

          <div className="mt-24 px-5 space-y-5">
            <h2 className="mb-3 text-center text-2xl font-semibold px-5">
              Voted #1 in 571 Reports
            </h2>
            <p className="text-center font-bold underline">
              <a href="##">View all apps</a>
            </p>
          </div>
        </div>
      </main>

      <main className="bg-[#ffffff] lg:px-40 px-5 py-20">
        <div className="flex flex-col-reverse gap-10 md:flex-row m-auto justify-between items-center">
          <div className="text-center space-y-5">
            <h3 className="text-2xl font-bold">
              Grow better with HubSpot today
            </h3>
            <div className="space-x-5 md:mt-0 mt-5 space-y-5">
              <Button
                className=" hover:bg-[#ee4318] px-10 font-bold bg-[#ff5c35] text-white py-4"
                value="Get a demo"
              />
              <Button
                className=" hover:bg-[#ffe9e3] px-14 font-semibold text-[#fc7756] py-4"
                value="Get started free"
              />
            </div>
          </div>

          <img
            className="md:m-0 m-auto md:w-1/3"
            src={growBetterRightImage}
            alt="growBetterRightImage"
          />
        </div>
      </main>
    </section>
  );
};

export default GrowBetterWithHub;
