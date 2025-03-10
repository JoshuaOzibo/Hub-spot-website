import { Database } from "../db/Database";
import Button from "./Button";

const Card = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Database.map((item, index) => (
        <main className=" hover:bg-gray-100 cursor-pointer transition-all hover:scale-[102%] duration-300 bg-white rounded p-8" key={index}>
          <div className=" pb-4">
            <div className="flex mb-10 items-center gap-3">
              <img 
                className="w-[30px] h-[30px]" 
                src={item.image} 
                alt="image" 
              />
              <h1 className="text-2xl font-bold">{item.title}</h1>
            </div>
            <p>{item.description}</p>
          </div>

          {/* line */}
          <div className="w-full border border-black my-6"></div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">{item.h3}</h3>
            <ul className="space-y-1 pb-4">
              {item.list.map((item, index) => (
                <div key={index} className="flex items-center">
                  <img src="" alt="" />
                  <p>{item.p}</p>
                </div>
              ))}
            </ul>
            <Button
              className="w-full hover:bg-[#ee4318] bg-[#ff5c35] py-4 text-base font-bold text-white"
              value="Learn more"
            />
          </div>
        </main>
      ))}
    </section>
  );
};

export default Card;
