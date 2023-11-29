import Image from "next/image";
import Link from "next/link";
import Button from "@/components/micro/button";
import Card from "@/components/micro/services/card";
import IndustryExpertise from "../../../../public/assets/services/industryExpertise.svg";
import NetworkingOpportunities from "../../../../public/assets/services/networkingOpportunities.svg";
import Workshop from "../../../../public/assets/services/workshop.svg";
import DiverseOpportunities from "../../../../public/assets/services/diverseOpportunities.svg";
import JobOpportunities from "../../../../public/assets/services/jobOpportunities.svg";
import Support from "../../../../public/assets/services/support.svg";
import comm from "../../../../public/assets/services/cc.jpeg";

const Community = () => {
  return (
    <section className="pt-14 lg:pt-24">
      <div
        className="flex lg:flex-row flex-col justify-between  2xl:justify-around lg:items-center text-text"
        id="community"
      >
        <div>
          <p className="text-section text-sm font-medium">Community</p>
          <h1 className="pt-1 font-medium xl:text-4xl md:text-3xl text-2xl max-w-lg">
            Foster collaboration, share knowledge & innovate
          </h1>
          <p className="py-5 text-base text-justify text-texts lg:max-w-sm xl:max-w-lg">
            We provide a platform for individuals with shared interests in
            technology to come together, collaborate, and learn from one another
            in a supportive environment.
          </p>

          <p className="text-base text-justify text-texts lg:max-w-sm xl:max-w-lg">
            By fostering collaboration and knowledge sharing, we empower
            individuals to tackle challenges collectively, push boundaries, and
            drive positive change within the tech industry.
          </p>
          <Link href="http://bit.ly/Innovotio" target="_blank">
            <Button className="my-6">Join Innovotio</Button>
          </Link>
        </div>
        <div>
          <Image
            src={comm}
            alt="community"
            width={590}
            height={400}
            className="rounded-xl"
          />
        </div>
      </div>
      <div>
        <div className="lg:pt-10 pt-5 grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-5">
          <div>
            <Card
              src={NetworkingOpportunities}
              text="Regular events and meetups to facilitate connections among tech enthusiasts."
              title="Networking Opportunities"
            />
          </div>
          <div>
            <Card
              src={IndustryExpertise}
              text="Matching talents to Industry experts for extensive job shadowing"
              title="Mentorship Programs"
            />
          </div>
          <div>
            <Card
              src={Workshop}
              text="Regular educational events on emerging tech topics and skills."
              title="Workshop and Webinars"
            />
          </div>

          <div>
            <Card
              src={JobOpportunities}
              text="Exclusive job postings and career development resources."
              title="Job Opportunities"
            />
          </div>
          <div>
            <Card
              src={Support}
              text="A forum for sharing challenges and receiving constructive feedback and solutions from peers."
              title=" Supportive Community"
            />
          </div>
          <div>
            <Card
              src={DiverseOpportunities}
              text=" Access to a repository of resources, articles, and tutorials shared by the community."
              title="Information Repository"
            />
          </div>
        </div>
      </div>
      <hr className="lg:mt-24 mt-14 opacity-10" />
    </section>
  );
};

export default Community;
