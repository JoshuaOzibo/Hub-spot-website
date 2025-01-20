import Button from "./Button";

const YourWhole = () => {
  return (
    <section className="py-10 bg-black">
      <main>
        <div>
          <h1 className="text-3xl font-bold">Your whole front office. One customer platform.</h1>
          <p>
            HubSpot brings your marketing, sales, and service teams together on
            the same AI-powered customer platform. It's easy to use, provides
            value fast, and gives all teams a unified view of the customer at
            every stage in their journey. Each product in the platform is
            powerful on its own, but the real magic happens when you use them
            together.
          </p>

          <div>
            <Button className="" value="Get a demo" />
            <Button className="" value="Get started free" />
          </div>
        </div>

        {/* card section */}
        <div></div>
      </main>
    </section>
  );
};

export default YourWhole;
