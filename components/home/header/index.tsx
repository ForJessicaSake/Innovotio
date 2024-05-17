import Link from "next/link";
import { MdGroups } from "react-icons/md";
import Button from "@/components/micro/button";

const Header = () => {
  return (
    <header className="lg:pt-10 pt-0">
     
     <div className="space-y-5">
        <h1 className="xl:text-[65px] lg:text-5xl md:text-4xl text-3xl font-semibold max-w-md sm:max-w-[480px] lg:max-w-3xl xl:max-w-5xl text-text">
          Get qualified tech talents & event support
        </h1>
        <p className="lg:text-lg text-base sm:max-w-3xl text-texts">
          We provide qualified tech talents to hiring organizations, organize
          tech events and curate branded merchandise.
        </p>
        <div className="flex sm:flex-row flex-col gap-x-4 space-y-4 md:space-y-0 pt-3 sm:max-w-[480px] items-center justify-center sm:justify-between">
          <Link href="/services/recruit" target="_blank" className="w-full">
            <Button className="w-full bg-text text-black hover:bg-section hover:text-black">
              Hire Tech Talent
            </Button>
          </Link>
          <Link href="/services/merchandise" target="_blank" className="w-full">
            <Button className="w-full  hover:bg-section hover:text-black"> Order Merch</Button>
          </Link>
          <Link
            href="http://bit.ly/Innovotio"
            target="_blank"
            className="w-full"
          >
            <p className="text-[#FCFCFC] flex items-center justify-center  join">
              <span className="pr-2">
                <MdGroups className="text-2xl" />
              </span>
              Join Innovotio
            </p>
          </Link>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="lg:pt-20 pt-14 flex justify-center items-center "
      >
        <img
          src="../../../clients.svg"
          alt="brands"
          className="w-full h-10 sm:block hidden"
        />
        <img
          src="../../../clients-mobile.svg"
          alt="brands"
          className="w-96 h-36 sm:hidden block"
        />
      </div>
    
      <hr className="lg:mt-20 mt-14 opacity-10" />

      <style jsx>{`
        
        .join::after {
          content: "";
          display: block;
          border-bottom: solid 3px #FFCC00;
          padding-bottom: 1%;
          transform: scaleX(0);
          transition: transform 300ms ease-in-out;
        }
        .join:hover:after {
          transform: scaleX(1);
        }
      `}</style>
      
    </header>
  );
};

export default Header;
