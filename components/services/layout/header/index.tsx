import Button from "@/components/micro/button";
import React from "react";

const Header = () => {
  return (
    <header className="lg:pt-10 text-text">
      <h4 className="text-section text-sm font-medium">Our Services</h4>
      <h1 className="pt-1 font-semibold lg:text-5xl xl:text-6xl text-3xl max-w-lg lg:max-w-3xl">
        All things tech made affordable and accessible
      </h1>
      <p className="text-base text-justify md:text-lg max-w-3xl text-texts leading-7 pt-3">
        We are a tech organization dedicated to providing a comprehensive suite
        of services in the tech ecosystem, covering talent training,
        recruitment, meticulous event planning, and the curation of branded
        merchandise.
      </p>

      <div className="pt-5 space-y-5 md:space-y-0 md:space-x-10 flex flex-col md:flex-row">
        <Button>Explore Our Services</Button>
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </header>
  );
};

export default Header;
