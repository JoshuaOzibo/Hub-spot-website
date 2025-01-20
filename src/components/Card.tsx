import { Database } from "../db/Database";
import Button from "./Button";

const Card = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Database.map((item, index) => (
        <main className="bg-red-400 rounded p-6" key={index}>
          <div>
            <img src="" alt="" />
            <h1>{item.title}</h1>
          </div>
          <p>{item.description}</p>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">{item.h3}</h3>
            <ul>
              {item.list.map((item) => (
                <div>
                  <img src="" alt="" />
                  <p>{item.p}</p>
                </div>
              ))}
            </ul>
            <Button className="" value="Learn more" />
          </div>
        </main>
      ))}
    </section>
  );
};

export default Card;
