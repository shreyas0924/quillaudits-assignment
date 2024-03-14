import hero from "../assets/hero-img.png";
import hero2 from "../assets/hero2.png";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

const Hero = () => {
  return (
    <>
      <div className="flex text-white">
        <div>
          <img src={hero} alt="hero" />
          <img className="bg-white" src={hero2} alt="hero" />
        </div>

        <div className="flex-col text-white">
          <h2>
            Securing Trust : Boosting Security and Strengthening Trust at Carpe
            Diem Pension
          </h2>
          <h2>
            QuillAudits enhances Carpe Diem Pension by addressing 33
            vulnerabilities on the Pulse blockchain, boosting security and user
            trust in digital pensions.
          </h2>
        </div>
      </div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">QuillAudits</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Resources</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-white">Case Studies</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default Hero;
