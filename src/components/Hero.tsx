import Button from "./Button";
import HeroImage from "../assets/Images/Hero_image.webp";

export default function Hero() {
  return (
    <section className=" bg-[#fef4ea] flex justify-center lg:px-40 px-5 md:py-40 py-10">
      <main className="lg:flex m-auto items-center justify-between w-full">
        <div className="w-full">
          <p className="text-sm w-full font-bold">HUBSPOT CUSTOMER PLATFORM</p>
          <h1 className="md:text-5xl text-3xl font-bold">
            With HubSpot, you can have it all
          </h1>
          <p className="text-base my-4">
            Unify your growing business on one AI-powered platform that’s easy
            to use, delivers ROI in no time, and transforms customer happiness
            into your competitive edge.
          </p>

          <div className="flex md:flex-row flex-col items-center gap-4">
            <Button
              className="px-6 py-4 md:w-auto w-full bg-[#ff5c35] text-[#fff] font-bold"
              value="Get a demo"
            />
            <Button
              className="px-6 py-4 md:w-auto w-full text-[#ff5c35] font-semibold"
              value="Get started free"
            />
          </div>
          <p className="my-3 text-sm">
            Get a demo of our premium software, or get started with free tools.
          </p>
        </div>

        <img
          className=" w-full lg:w-1/2 m-auto sm:block hidden right-0"
          src={HeroImage}
          alt="HeroImage"
        />
      </main>
    </section>
  );
}
