import Button from "./Button";
import HeroImage from "../assets/Images/Hero_image.webp";

export default function Hero() {
  return (
    <section className=" bg-[#fef4ea] flex justify-center lg:px-40 px-5 md:py-40 py-10">
      <main className="md:flex m-auto items-center justify-between w-full">
        <div>
          <p className="text-sm font-bold">HUBSPOT CUSTOMER PLATFORM</p>
          <h1 className="text-5xl font-bold">Grow better with HubSpot</h1>
          <p className="text-base my-4">
            Software that's powerful, not overpowering. Seamlessly connect your
            data, teams, and customers on one AI-powered customer platform that
            grows with your business.
          </p>

          <div className="flex items-center gap-4">
            <Button className="px-6 py-4 bg-[#ff5c35] text-[#fff] font-bold" value="Get a demo" />
            <Button className="px-6 py-4 text-[#ff5c35] font-semibold" value="Get started free" />
          </div>
          <p className="my-3 text-sm">
            Get a demo of our premium software, or get started with free tools.
          </p>
        </div>

        <img className="md:w-1/2 w-full hidden md:block right-0" src={HeroImage} alt="HeroImage" />
      </main>
    </section>
  );
}
