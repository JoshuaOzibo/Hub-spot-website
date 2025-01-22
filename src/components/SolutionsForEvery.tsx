import Button from "./Button";

const SolutionsForEvery = () => {
  return (
    <section className="px-5 lg:px-40 ">
      <h3 className="mb-4">Solutions for every business</h3>
      <p>
        Growing a business isn’t easy, but we’ve got your back. Explore some of
        our customers’ top business challenges and learn how HubSpot’s
        integrated software and solutions can help you leave these problems in
        the past.
      </p>

      <main className="grid grid-cols-1 md:grid-cols-2 bg-slate-300 lg:grid-cols-3 gap-6">
        <div className=" bg-white border-2 border-gray-100 rounded p-8">
          <img src="" alt="" />
          <div>
            <div className="space-y-5">
              <h4>Generate High-Quality Leads and Maximize Revenue</h4>
              <p>
                Discover how to use AI-powered marketing tools to attract and
                convert more leads without multiplying your marketing spend.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <Button className="mt-10 bg-[#ff5c35] py-4 px-8 text-base font-bold text-white" value="Learn more" />
            </div>
          </div>
        </div>
        <div className=" bg-white border-2 border-gray-100 rounded p-8">
          <img src="" alt="" />
          <div>
            <div className="space-y-5">
              <h4>Accelerate Your Sales and Close More Deals Faster</h4>
              <p>
                Start closing more deals faster and streamlining your sales
                process with HubSpot’s AI-powered deal management tools.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <Button className="mt-10 px-8 bg-[#ff5c35] py-4 text-base font-bold text-white" value="Learn more" />
            </div>
          </div>
        </div>
        <div className=" bg-white border-2 border-gray-100 rounded p-8">
          <img src="" alt="" />
          <div>
            <div className="space-y-5">
              <h4>Create Content for Every Stage of the Customer Journey</h4>
              <p>
                Fuel the entire customer journey with content across formats and
                channels with all-in-one, AI-powered content marketing software.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <Button className="mt-10 px-8 bg-[#ff5c35] py-4 text-base font-bold text-white" value="Learn more" />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SolutionsForEvery;
