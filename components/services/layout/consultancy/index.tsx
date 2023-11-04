import React from "react";
import Image from "next/image";
import Button from "@/components/micro/button";
import Card from "@/components/micro/services/card";
import IndustryExpertise from "../../../../public/assets/services/industryExpertise.svg";
import Talent from "../../../../public/assets/services/techTalent.svg";
import Feedback from "../../../../public/assets/services/feedback.svg";
import StreamlinedProcess from "../../../../public/assets/services/streamlinedProcess.svg";
import ContinousFeedback from "../../../../public/assets/services/continousFeedback.svg";
import FlexibleHiringModels from "../../../../public/assets/services/flexibleHiringModels.svg";

const Consultancy = () => {
  return (
    <section className="pt-14 lg:pt-24">
      <div
        className="flex lg:flex-row flex-col justify-between 2xl:justify-around lg:items-center text-text"
        id="consultancy"
      >
        <div className="">
          <h4 className="text-section text-sm font-medium">Consultancy</h4>
          <h1 className="pt-1 font-medium xl:text-4xl md:text-3xl text-2xl md:max-w-md">
            Give your business that extra push
          </h1>
          <p className="pt-5 text-base text-justify text-texts lg:max-w-sm xl:max-w-lg">
            We offer business consultation sessions to aid project launch,
            business launch and staffing requirements for SMEs, startups and
            corporations.
          </p>
          <a href="mailto:innovotioworkforce@gmail.com">
            <Button className="my-6">Book A Session </Button>
          </a>
        </div>
        <div>
          <Image
            src="../../../../assets/services/consultancy.svg"
            alt="community"
            width={590}
            height={400}
          />
        </div>
      </div>
      <div>
        <div className="lg:pt-10 pt-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <Card
              src={Talent}
              text="Tailored consultation services to meet the specific needs of SMEs, startups, and corporations."
              title="Customized Solutions"
            />
          </div>
          <div>
            <Card
              src={IndustryExpertise}
              text="Access to seasoned consultants with expertise in various industries."
              title="Experienced Consultants"
            />
          </div>
          <div>
            <Card
              src={Feedback}
              text="Comprehensive market analysis and insights for informed decision-making."
              title="Market Research"
            />
          </div>
          <div>
            <Card
              src={FlexibleHiringModels}
              text=" Options for full-time, part-time, contract, or remote hiring to meet various needs."
              title="Strategic Guidance"
            />
          </div>
          <div>
            <Card
              src={ContinousFeedback}
              text="Complete assistance in navigating legal requirements and regulations."
              title="Legal Compliance"
            />
          </div>
          <div>
            <Card
              src={StreamlinedProcess}
              text="Industry strategies for cost-effective project and business management."
              title="Cost Optimization"
            />
          </div>
        </div>
      </div>
      <hr className="lg:mt-24 mt-14 opacity-10" />
    </section>
  );
};

export default Consultancy;
