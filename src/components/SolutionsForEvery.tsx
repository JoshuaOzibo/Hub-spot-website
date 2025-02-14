import Button from "./Button";
import SolutionImageOne from "../assets/Images/SolutionImageOne.webp";
import SolutionImageTwo from "../assets/Images/SolutionImageTwo.webp";
import SolutionImageThree from "../assets/Images/SolutionImageThree.webp";

const SolutionsForEvery = () => {
  return (
    <section className="px-5 py-20 lg:px-40 ">
      <h1 className="mb-4 text-2xl font-bold text-center">
        Solutions for every business
      </h1>
      <p>
        Growing a business isn't easy, but we've got your back. Explore some of
        our customers' top business challenges and learn how HubSpot's
        integrated software and solutions can help you leave these problems in
        the past.
      </p>

      <main className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-row-dense">
        <div className="bg-white border-2 border-gray-100 rounded-lg">
          <img className=" rounded-t-lg" src={SolutionImageOne} alt="SolutionImageOne" />
          <div className="px-6 my-5">
            <div className="space-y-5">
              <h2 className="text-lg font-bold">
                Generate High-Quality Leads and Maximize Revenue
              </h2>
              <p>
                Discover how to use AI-powered marketing tools to attract and
                convert more leads without multiplying your marketing spend.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <Button
                className="mt-10 bg-[#ff5c35] py-4 px-8 text-base font-bold text-white"
                value="Learn more"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-100 rounded-lg">
          <img className=" rounded-t-lg" src={SolutionImageTwo} alt="SolutionImageTwo" />
          <div className="px-6 my-5">
            <div className="space-y-5">
              <h3 className="text-lg font-bold">
                Accelerate Your Sales and Close More Deals Faster
              </h3>
              <p>
                Start closing more deals faster and streamlining your sales
                process with HubSpot's AI-powered deal management tools.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <Button
                className="mt-10 px-8 bg-[#ff5c35] py-4 text-base font-bold text-white"
                value="Learn more"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-100 rounded-lg lg:w-auto md:w-1/2 m-auto md:col-span-2 lg:col-span-1">
          <img className=" rounded-t-lg" src={SolutionImageThree} alt="SolutionImageThree" />
          <div className="px-6 my-5">
            <div className="space-y-5">
              <h4 className="text-lg font-bold">
                Create Content for Every Stage of the Customer Journey
              </h4>
              <p>
                Fuel the entire customer journey with content across formats and
                channels with all-in-one, AI-powered content marketing software.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <Button
                className="mt-10 px-8 bg-[#ff5c35] py-4 text-base font-bold text-white"
                value="Learn more"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SolutionsForEvery;
