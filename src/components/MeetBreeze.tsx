import Button from "./Button";

export default function MeetBreeze() {
  return (
    <section className="bg-[#b7ecec] w-full lg:px-40 px-5 py-10">
      <div className=" lg:flex block justify-between items-center m-auto">
      <div className=" lg:w-[80%] w-full">
        <h2 className="text-2xl mt-4 lg:text-start text-center font-medium text-black mb-5">
          Meet Breeze — The complete AI solution for your business.
        </h2>

        <p className=" text-lg lg:text-start text-center font-light">
          Use Breeze Copilot to assist with tasks, Breeze Agents to automate
          your work, Breeze Intelligence to enrich your data, and a growing list
          of Breeze features to help you get work done faster.
        </p>
      </div>
      <div className=" flex lg:justify-end justify-center items-center">
      <Button
        className=" px-8 m-auto hover:bg-[#ffe9e3] bg-white font-bold text-[#fc7756] py-4"
        value="Learn more"
      />
      </div>
      </div>
    </section>
  );
}
