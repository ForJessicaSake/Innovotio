import Link from "next/link";
import React from "react";
import { MdGroups, MdOutlinePersonPin } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { TbUserSearch } from "react-icons/tb";
import { BsFillGiftFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import Button from "@/components/micro/button";
import ServiceCard from "@/components/micro/services";

const Services = () => {
  return (
    <section className="pt-14 lg:pt-24">
      <div className="flex flex-col lg:justify-between lg:items-end lg:flex-row">
        <div className="space-y-5">
          <div>
            <p className="text-section text-sm font-medium">Services</p>
            <h2 className="pt-1 font-medium lg:text-4xl md:text-3xl text-2xl xl:text-[44px] text-text">
              Our Services
            </h2>
          </div>
          <p className="lg:text-lg text-base max-w-lg text-texts">
            Innovotio provides more than just basic support. We focus on your
            pain points to give you a great experience.
          </p>
        </div>
        <div className="pt-5">
          <Link href="/services" legacyBehavior>
            <a target="_blank">
              <Button className="">Explore Our Services</Button>
            </a>
          </Link>
        </div>
      </div>
      <div className="lg:pt-10 pt-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <ServiceCard
            title="Merchandising"
            route="/services/#merch"
            className="w-80 h-72"
            icon={<BsFillGiftFill />}
            illustration="../../.././assets/services/one.svg"
            illustration2="../../.././assets/services/two.svg"
            text="Collaborate with our team to design and curate merchandise tailored to your tech events and brand needs. Whether you're hosting conferences, workshops, or promotional campaigns, we can help you create your identity."
          />
        </div>
        <div className="col-span-1">
          <ServiceCard
            title="Recruitment"
            route="/services/#recruitment"
            className="w-72 h-72"
            icon={<MdOutlinePersonPin />}
            illustration="../../.././assets/services/recruit.svg"
            text="Fast track your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
          />
        </div>
      </div>
      <div className="pt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ServiceCard
          title="Tech Event Management"
          route="/services/#event"
          className="w-[564px] h-72"
          text="Ensure your tech event goes off without a hitch and give your guests an unforgettable experience with our event team."
          icon={<HiUserGroup />}
          illustration="../../.././assets/services/event3.svg"
        />
        <ServiceCard
          title="Consultancy"
          route="/services/#consultancy"
          className="w-72 h-72"
          icon={<FaPeopleCarry />}
          illustration="../../.././assets/services/consult.svg"
          text="Get business consultation session to aid project launch, business launch and scalling requirements."
        />
      </div>
      <div className="pt-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <ServiceCard
            title="Tech Talent Management"
            route="/services/#talent"
            className="w-80 h-72"
            icon={<TbUserSearch />}
            illustration="../../.././assets/services/event.svg"
            illustration2="../../.././assets/services/event2.svg"
            text="Train, assess and maintain the quality of talent pool regularly to ensure satisfaction both for businesses and talents."
          />
        </div>
        <div className="col-span-1">
          <ServiceCard
            title="Community"
            route="/services/#community"
            className="w-72 h-72"
            icon={<MdGroups />}
            illustration="../../.././assets/services/community.svg"
            text="Get quick support to meet all your needs on our slack community."
          />
        </div>
      </div>
      <hr className="lg:mt-24 mt-14 opacity-10" />
    </section>
  );
};

export default Services;
