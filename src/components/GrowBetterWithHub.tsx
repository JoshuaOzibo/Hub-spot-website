import Button from "./Button";

const GrowBetterWithHub = () => {
  return (
    <section className="bg-[#f6f9fc]">
      <main className="grid grid-cols-1 lg:px-40 px-5 py-24 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className=" bg-white border-2 border-gray-200  rounded p-8">
          {/* image */}
          <div></div>

          <h2 className="mb-3 text-center text-2xl font-semibold px-5">
            1,700+ ways to connect your tools
          </h2>
          <p className="text-center font-bold underline">
            <a href="##">View all apps</a>
          </p>
        </div>
        <div className=" bg-white border-2 border-gray-200  rounded p-8">
          {/* image */}
          <div></div>

          <h2 className="mb-3 text-center text-2xl font-semibold px-5">
          Voted #1 in 571 Reports
          </h2>
          <p className="text-center font-bold underline">
            <a href="##">View all apps</a>
          </p>
        </div>
      </main>

      <main className="bg-[#ffffff] lg:px-40 px-5 py-20">
        <div className="md:flex items-center">
            <div>
                <h3 className="text-2xl font-bold">Grow better with HubSpot today</h3>
                <div className="space-x-5 space-y-5">
                    <Button className=" px-10 font-bold bg-[#ff5c35] text-white py-4" value="Get a demo" />
                    <Button className=" px-14 font-semibold text-[#fc7756] py-4" value="Get started free" />
                </div>
            </div>

            <img src="" alt="" />
        </div>
      </main>
    </section>
  );
};

export default GrowBetterWithHub;
