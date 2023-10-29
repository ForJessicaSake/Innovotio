import Link from "next/link";
import Image from "next/image";
import Button from "@/components/micro/button";
import Card from "@/components/micro/services/card";
import IndustryExpertise from "../../../../public/assets/services/industryExpertise.svg";
import Feedback from "../../../../public/assets/services/feedback.svg";
import ContinousFeedback from "../../../../public/assets/services/continousFeedback.svg";
import BudgetOptimization from "../../../../public/assets/services/budgetOptimization.svg";
import ContrivedPlanning from "../../../../public/assets/services/contrivedPlanning.svg";
import VendorPlanning from "../../../../public/assets/services/vendorPlanning.svg";

const Event = () => {
  return (
    <section className="lg:pt-24 pt-14 text-text">
      <div
        className="flex lg:flex-row flex-col-reverse lg:space-x-5 justify-between lg:items-center"
        id="event"
      >
        <div>
          <Image
            src="../../../../assets/services/Community2.svg"
            alt="community"
            width={590}
            height={400}
          />
        </div>
        <div className="">
          <h4 className="text-section font-medium">Tech Event Management</h4>
          <h1 className="pt-1 font-medium xl:text-4xl md:text-3xl text-2xl md:max-w-lg">
            Delight in a seamlessly managed event
          </h1>
          <p className="pt-5 text-base text-justify text-texts lg:max-w-sm xl:max-w-lg">
            We ensure your tech event goes off without a hitch and give your
            guests a quality time by organizing your tech event.
          </p>
          <Link href="/services/event" target="_blank">
            <Button className="my-5">Get Event Support</Button>
          </Link>
        </div>
      </div>
      <div>
        <div className="lg:pt-10 pt-5 grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-5">
          <div>
            <Card
              src={ContrivedPlanning}
              text="Tailored event planning to match the unique goals and theme of the tech event."
              title="Contrived Planning"
            />
          </div>
          <div>
            <Card
              src={VendorPlanning}
              text="Coordination of vendors, speakers, and logistics for a seamless & awesome event."
              title="Vendor Management"
            />
          </div>
          <div>
            <Card
              src={IndustryExpertise}
              text="Access to experienced event managers with deep understanding of tech industries."
              title="Industry Expertise"
            />
          </div>
          <div>
            <Card
              src={Feedback}
              text=" Facilitation of meaningful connections and networking sessions for attendees."
              title="Networking Opportunities"
            />
          </div>
          <div>
            <Card
              src={BudgetOptimization}
              text="Strategies for cost-effective event management without compromising quality."
              title="Budget Optimization"
            />
          </div>
          <div>
            <Card
              src={ContinousFeedback}
              text="Evaluation and feedback sessions for continuous improvement and future event planning."
              title="Post-Event Analysis"
            />
          </div>
        </div>
      </div>
      <hr className="lg:mt-24 mt-14 opacity-10" />
    </section>
  );
};

export default Event;
