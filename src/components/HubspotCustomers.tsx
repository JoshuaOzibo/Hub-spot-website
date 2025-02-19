import Button from "./Button";
import HubspotCustomerLogoOne from '../assets/logo/HubspotLogoOne.svg'
import HubspotCustomerLogoTwo from '../assets/logo/HubspotLogoTwo.svg'
import HubspotCustomerLogoThree from '../assets/logo/HubspotLogoThree.svg'

const HubspotCustomers = () => {
  return (
    <section className="py-16 bg-[#192733] px-5 lg:px-40 ">
      <h1 className="text-white text-center text-3xl font-bold mb-8">
        HubSpot customer’s results after 1 year:
      </h1>

      <main className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
        <div className=" bg-white rounded px-8 py-6">
          <img className="w-1/2 m-auto" src={HubspotCustomerLogoOne} alt="HubspotCustomerLogoOne" />
          <div className=" space-y-5 text-center">
            <h2 className="text-2xl font-bold">114%</h2>
            <p className="text-lg">more web traffic</p>
          </div>
        </div>
        <div className=" bg-white rounded px-8 py-6">
          <img className="w-1/2 m-auto" src={HubspotCustomerLogoTwo} alt="HubspotCustomerLogoTwo" />
          <div className=" space-y-5 text-center">
            <h3 className="text-2xl font-bold">55%</h3>
            <p className="text-lg">more deals</p>
          </div>
        </div>
        <div className=" bg-white rounded px-8 py-6">
          <img className="w-1/2 m-auto" src={HubspotCustomerLogoThree} alt="HubspotCustomerLogoThree" />
          <div className=" space-y-5 text-center">
            <h4 className="text-2xl font-bold">43%</h4>
            <p className="text-lg">more tickets resolved</p>
          </div>
        </div>
      </main>

      <div className="text-center mt-16 space-y-4 px-16">
        <h3 className="text-white text-xl font-bold">
          HubSpot customers see improvement across their customer journey. What
          could your ROI be?
        </h3>
        <Button value="see ROI report" className="border-none hover:bg-[#9dc5e7] font-semibold text-xl bg-white px-8 py-4 m-auto" />
      </div>
    </section>
  );
};

export default HubspotCustomers;
