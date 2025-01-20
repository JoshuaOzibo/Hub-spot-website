import Button from "./Button";
import Card from "./Card";

export default function YourWholeFront() {
  return (
    <section className="bg-[#f6f9fc] w-full py-5 lg:px-40 px-4">
      <main>
        <img src="" alt="" />

        <div className="mt-5 space-y-6">
          <h1 className="text-3xl font-bold text-center">Your whole front office. One customer platform.</h1>
          <p className="text-base">
            HubSpot brings your marketing, sales, and service teams together on
            the same AI-powered customer platform. It's easy to use, provides
            value fast, and gives all teams a unified view of the customer at
            every stage in their journey. Each product in the platform is
            powerful on its own, but the real magic happens when you use them
            together.
          </p>
          <div className="flex justify-center gap-4">
          <Button className=" px-5 font-bold bg-[#ff5c35] text-white py-4" value="Get a demo" />
          <Button className=" px-8 font-semibold text-[#fc7756] py-4" value="Get started free" />
          </div>
        </div>

        <div className="mt-16">
          <Card />
        </div>
      </main>
    </section>
  );
}
