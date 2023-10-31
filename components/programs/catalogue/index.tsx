import React from "react";
import { FaLaptopCode, FaProductHunt } from "react-icons/fa";
import { GiCyberEye } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiVitest } from "react-icons/si";
import {
  MdOutlineProductionQuantityLimits,
  MdDesignServices,
  MdBusiness,
  MdOutlineDataThresholding,
} from "react-icons/md";
import CatalogueCard from "@/components/micro/catalogue/card";
import { backendWebDevelopment, brandStorytelling, businessAnalysis, communityManagement, customerService, cyberSecurity, dataAnalytics, digitalMarketing, frontend, fullstack, noCode, productDesign, productManagement, productMarketing, qualityAssurance } from "@/components/database/courses";

const Catalogue = () => {

  return (
    <section className="text-text pt-14 lg:pt-24">
      <div className="text-center flex flex-col">
        <h1 className=" lg:text-4xl md:text-3xl text-2xl xl:text-[44px] font-medium">
          Explore Our Course Catalogue
        </h1>
        <p className="text-base text-texts py-4">
          Discover talent training programs to help grow your career.
        </p>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-10">
          <CatalogueCard
            icon={<FaLaptopCode />}
            heading="Full-Stack Web Development"
            service="We offer web development training to prospective talents, by our own highly skilled tech professionals"
            data={fullstack}
            name="Full-Stack Web Development"
          />
          <CatalogueCard
            icon={<FaLaptopCode />}
            heading="Frontend Web Development"
            service="We offer frontend development training to prospective talents, by our own highly skilled tech professionals"
            data={frontend}
            name="Frontend Web Development"
          />

          <CatalogueCard
            icon={<FaLaptopCode />}
            heading="Backend Web Development"
            service="We offer backend development tranining to prospective talents, by our own highly skilled tech professionals"
            data={backendWebDevelopment}
            name="Backend Web Development"
          />
          <CatalogueCard
            icon={<MdDesignServices />}
            heading="Product Design"
            service="We offer product design training to prospective talents, by our own highly skilled tech professionals"
            data={productDesign}
            name="Product Design "
          />
          <CatalogueCard
            icon={<MdOutlineProductionQuantityLimits />}
            heading="Product Marketing"
            service="We offer product marketing courses to prospective talents, by our own highly skilled tech professionals"
            data={productMarketing}
            name="Product Marketing"
          />
          <CatalogueCard
            icon={<FaProductHunt />}
            heading="Product Management"
            service="We offer product management courses to prospective talents, by our own highly skilled tech professionals"
            data={productManagement}
            name="Product Management"
          />
          <CatalogueCard
            icon={<RiCustomerService2Fill />}
            heading="Community Management "
            service="We offer community management courses to prospective talents, by our own highly skilled tech professionals"
            data={communityManagement}
            name="Community Management "
          />

          <CatalogueCard
            icon={<MdDesignServices />}
            heading="Brand Storytelling"
            service="We offer brand story telling training to prospective talents, by our own highly skilled tech professionals"
            data={brandStorytelling}
            name="Brand Storytelling and Content Writing "
          />
          <CatalogueCard
            icon={<MdBusiness />}
            heading="Digital Marketing"
            service="We offer digital marketing courses to prospective talents, by our own highly skilled tech professionals"
            data={digitalMarketing}
            name="Digital Marketing"
          />
          <CatalogueCard
            icon={<MdOutlineDataThresholding />}
            heading="Data Analytics"
            service="We offer data analytics training to prospective talents, by our own highly skilled tech professionals"
            data={dataAnalytics}
            name="Data Analytics"
          />
          <CatalogueCard
            icon={<MdBusiness />}
            heading="Business Analysis"
            service="We offer business analysis training to prospective talents, by our own highly skilled tech professionals"
            data={businessAnalysis}
            name="Business Analysis"
          />
          <CatalogueCard
            icon={<RiCustomerService2Fill />}
            heading="Customer Success "
            service="We offer customer success training to prospective talents, by our own highly skilled tech professionals"
            data={customerService}
            name="Customer Success"
          />
          <CatalogueCard
            icon={<GiCyberEye />}
            heading="Cyber Security"
            service="We offer cyber security courses to prospective talents, by our own highly skilled tech professionals"
            data={cyberSecurity}
            name="Cyber Security"
          />

          <CatalogueCard
            icon={<FaLaptopCode />}
            heading="No-code development"
            service="We offer no code development courses to prospective talents, by our own highly skilled tech professionals"
            data={noCode}
            name="No-code development"
          />
          <CatalogueCard
            icon={<SiVitest />}
            heading="Quality Assurance"
            service="We offer quality assurance training to prospective talents, by our own highly skilled tech professionals"
            data={qualityAssurance}
            name="Quality Assurance"
          />
        </div>
      </div>
      <hr className="lg:mt-24 mt-14 opacity-10" />
    </section>
  );
};

export default Catalogue;
