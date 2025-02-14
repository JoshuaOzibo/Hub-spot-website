import { FaChevronRight } from "react-icons/fa6";

const FooterMobileSection = () => {
  return (
    <section className="text-white">
      <main className="flex cursor-pointer px-4 items-center border-b py-5 justify-between">
        <h1 className="font-bold">Popular Features</h1>
        <FaChevronRight />
      </main>
      <main className="flex cursor-pointer px-4 items-center border-b py-5 justify-between">
        <h1 className="font-bold">Free Tools</h1>
        <FaChevronRight />
      </main>
      <main className="flex cursor-pointer px-4 items-center border-b py-5 justify-between">
        <h1 className="font-bold">Company</h1>
        <FaChevronRight />
      </main>
      <main className="flex cursor-pointer px-4 items-center border-b py-5 justify-between">
        <h1 className="font-bold">Customers</h1>
        <FaChevronRight />
      </main>
      <main className="flex cursor-pointer px-4 items-center border-b py-5 justify-between">
        <h1 className="font-bold">Partners</h1>
        <FaChevronRight />
      </main>
    </section>
  );
};

export default FooterMobileSection;
