import Button from "./Button";

const Navbar = () => {
  return (
    <nav>
      <a href="" aria-label="HubSpot">
        <header>HubSpot</header>
      </a>

      <ul>
        <li>Products </li>
        <li>Solutions</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>

      <div>
        <Button className="" value="Get a demo" />
        <Button className="" value="Get started free" />
      </div>
    </nav>
  );
};

export default Navbar;
