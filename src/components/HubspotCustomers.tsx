import Button from "./Button";

const HubspotCustomers = () => {
  return (
    <section className="py-12 bg-[#192733] px-4">
      <h2 className="text-white text-center text-3xl font-bold mb-8">
        HubSpot customer’s results after 1 year:
      </h2>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className=" bg-white rounded p-8">
          <img src="" alt="" />
          <div className=" space-y-5 text-center">
            <h1 className="text-2xl font-bold">114%</h1>
            <p className="text-lg">more web traffic</p>
          </div>
        </div>
        <div className=" bg-white rounded p-8">
          <img src="" alt="" />
          <div className=" space-y-5 text-center">
            <h1 className="text-2xl font-bold">55%</h1>
            <p className="text-lg">more deals</p>
          </div>
        </div>
        <div className=" bg-white rounded p-8">
          <img src="" alt="" />
          <div className=" space-y-5 text-center">
            <h1 className="text-2xl font-bold">43%</h1>
            <p className="text-lg">more tickets resolved</p>
          </div>
        </div>
      </main>

      <div className="text-center mt-16 space-y-4 px-16">
        <h3 className="text-white text-xl font-bold">
          HubSpot customers see improvement across their customer journey. What
          could your ROI be?
        </h3>
        <Button value="see ROI report" className="border-none font-semibold text-xl bg-white px-8 py-4 m-auto" />
      </div>
    </section>
  );
};

export default HubspotCustomers;
