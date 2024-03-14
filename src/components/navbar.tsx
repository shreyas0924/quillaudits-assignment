import { Menu } from "lucide-react";
import logo from "../assets/logo.svg";
import arrow from "../assets/arrow.svg";
import { Button } from "./ui/button";

type NavbarItemsProps = {
  name: string;
  icon: boolean;
};
const NavbarItems = ({ name, icon }: NavbarItemsProps) => {
  return (
    <div className="m-2 flex gap-1 items-center justify-center text-white text-xl">
      <h1>{name}</h1>
      <div>{icon ? <img src={arrow} alt="Arrow" /> : null}</div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="flex justify-between p-2 items-center">
      <img src={logo} alt="Logo" />
      <div className="flex items-center gap-3">
        <NavbarItems name="Services" icon={true} />
        <NavbarItems name="Prices" icon={false} />
        <NavbarItems name="Our Audits" icon={false} />
        <NavbarItems name="Tools" icon={true} />
        <NavbarItems name="Resources" icon={true} />
        <NavbarItems name="Refer-Earn-Secure" icon={false} />
      </div>
      <Button className="bg-gradient-to-r from-[#7184FD] via-[#3F7AF0] to-[#4F37EE]">
        Request An Audit
      </Button>
      <Menu className="md:hidden" />
    </div>
  );
};

export default Navbar;
