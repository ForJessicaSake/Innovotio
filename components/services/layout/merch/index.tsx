import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Button from "@/components/micro/button";
import Card from "@/components/micro/services/card";
import collage2 from "../../../../public/assets/services/collage2.png";
import collage3 from "../../../../public/assets/services/collage3.png";
import collage from "../../../../public/assets/services/collage.png";
import design from "../../../../public/assets/services/design.svg";
import Workshop from "../../../../public/assets/services/workshop.svg";
import IndustryExpertise from "../../../../public/assets/services/industryExpertise.svg";
import ContinousFeedback from "../../../../public/assets/services/continousFeedback.svg";
import FlexibleHiringModels from "../../../../public/assets/services/flexibleHiringModels.svg";
import DiverseOpportunities from "../../../../public/assets/services/diverseOpportunities.svg";

const Merch = () => {
  return (
    <section className="lg:pt-24 pt-14 text-text">
      <Image
        alt="merchandise"
        width={1060}
        height={318}
        src={collage}
        className="rounded-xl"
      />
      <div
        className="flex flex-col py-2 lg:flex-row justify-between space-x-2 2xl:justify-around"
        id="merch"
      >
        <Image
          alt="merchandise"
          width={546}
          height={296}
          src={collage2}
          className="rounded-xl"
        />
        <Image
          alt="merchandise"
          width={1060}
          height={318}
          src={collage3}
          className="rounded-xl lg:hidden block my-5 lg:my-0"
        />
        <div className=" flex flex-col">
          <h4 className="text-section text-sm font-medium">Merchandising</h4>
          <h1 className="pt-1 font-medium xl:text-4xl md:text-3xl text-2xl lg:max-w-lg">
            Seamless promotional merchandise for brands
          </h1>
          <p className="pt-5 text-base text-justify text-texts lg:max-w-sm xl:max-w-lg">
            We specialize in creating and providing branded merchandise and
            promotional products for technology companies and their communities.
            Our primary focus is to design and produce merchandise that reflects
            tech companies brand identity, values, and culture.
          </p>

          <Link href="/services/merchandise" target="_blank">
            <Button className="my-5">Order Merchandise</Button>
          </Link>
        </div>
      </div>
      <Image
        alt="merchandise"
        width={1060}
        height={318}
        src={collage3}
        className="rounded-xl hidden lg:block"
      />
      <div className="lg:pt-10 pt-5 grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-5">
        <div>
          <Card
            src={design}
            text="Tailored merchandise design to match the unique brand identity of tech companies."
            title="Custom Design"
          />
        </div>
        <div>
          <Card
            src={Workshop}
            text="A diverse selection of promotional items and merchandise."
            title="Wide Range of Products"
          />
        </div>

        <div>
          <Card
            src={IndustryExpertise}
            text="Assurance of high-quality materials and craftsmanship in all products."
            title="Quality Assurance"
          />
        </div>
        <div>
          <Card
            src={ContinousFeedback}
            text="A support to address inquiries, requests, and concerns throughout the ordering process."
            title="Customer Support"
          />
        </div>
        <div>
          <Card
            src={DiverseOpportunities}
            text="Efficient production and delivery times to meet event and campaign deadlines."
            title="Quick Turnaround"
          />
        </div>
        <div>
          <Card
            src={FlexibleHiringModels}
            text="Competitive pricing for bulk orders to accommodate different company sizes."
            title="Bulk Ordering"
          />
        </div>
      </div>
      <hr className="lg:mt-24 mt-14 opacity-10" />
    </section>
  );
};

export default Merch;
