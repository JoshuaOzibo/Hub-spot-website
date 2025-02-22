import Button from "./Button";
import Card from "./Card";
// lastCardImages
import LastCardIconOne from "../assets/Icons/lastCardIcons/lastIconOne.webp";
import LastCardIconTwo from "../assets/Icons/lastCardIcons/lastIconTwo.webp";
import LastCardIconThree from "../assets/Icons/lastCardIcons/lastIconThree.webp";
import LastCardIconFour from "../assets/Icons/lastCardIcons/lastIconFour.webp";
import LastCardIconFive from "../assets/Icons/lastCardIcons/lastIconFive.webp";
import LastCardIconSix from "../assets/Icons/lastCardIcons/lastIconSix.webp";
import YourWholeFrontImage from "../assets/Images/YourWholeFontImage.webp";
export default function YourWholeFront() {
  return (
    <section className="bg-[#fef4ea] w-full py-5 lg:px-40 px-4">
      <main>
        <img src={YourWholeFrontImage} alt="YourWholeFrontImage" />

        <div className="mt-5 space-y-6">
          <h1 className="text-3xl font-bold text-center">
            Your whole front office. One customer platform.
          </h1>
          <p className="text-base">
            HubSpot brings your marketing, sales, and service teams together on
            the same AI-powered customer platform. It's easy to use, provides
            value fast, and gives all teams a unified view of the customer at
            every stage in their journey. Each product in the platform is
            powerful on its own, but the real magic happens when you use them
            together.
          </p>
          <div className="flex md:flex-row flex-col justify-center gap-4">
            <Button
              className=" hover:bg-[#ee4318] px-5 font-bold bg-[#ff5c35] text-white py-4"
              value="Get a demo"
            />
            <Button
              className=" hover:bg-[#ffe9e3] px-8 font-semibold text-[#fc7756] py-4"
              value="Get started free"
            />
          </div>
        </div>

        <div className="mt-16">
          <Card />
        </div>

        <div className="bg-white hover:bg-gray-100 cursor-pointer transition-all hover:scale-[102%] duration-300 lg:w-full md:w-[49%] rounded p-8 mt-6">
          <main className="flex flex-col-reverse lg:flex-row items-center gap-6">
            <div className="md:w-full lg:w-1/2 w-full">
              <h3 className="text-2xl mb-3 font-bold">Small Business Bundle</h3>
              <p>
                The Starter edition of every HubSpot product, bundled together
                at a discounted price for your startup or small business. Find
                and reach customers, grow sales and get paid faster, and
                organize customer data — all on one unified platform.
              </p>
              <Button
                className="w-full mt-8 hover:bg-[#ee4318] bg-[#ff5c35] py-4 text-base font-bold text-white"
                value="Learn more"
              />
            </div>

            <div className="grid md:w-full lg:mb-0 mb-10 lg:w-1/2 w-full grid-cols-3 gap-2">
              <img src={LastCardIconOne} alt="LastCardIconOne" />
              <img src={LastCardIconTwo} alt="LastCardIconTwo" />
              <img src={LastCardIconThree} alt="LastCardIconThree" />
              <img src={LastCardIconFour} alt="LastCardIconFour" />
              <img src={LastCardIconFive} alt="LastCardIconFive" />
              <img src={LastCardIconSix} alt="LastCardIconSix" />
            </div>
          </main>
        </div>
      </main>
    </section>
  );
}
