import "swiper/css";
import Link from "next/link";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import IndustryExpertise from "../../../../public/assets/services/industryExpertise.svg";
import design from "../../../../public/assets/services/design.svg";
import ContinousFeedback from "../../../../public/assets/services/continousFeedback.svg";
import FlexibleHiringModels from "../../../../public/assets/services/flexibleHiringModels.svg";
import Workshop from "../../../../public/assets/services/workshop.svg";
import DiverseOpportunities from "../../../../public/assets/services/diverseOpportunities.svg";
import Button from "@/components/micro/button";
import Card from "@/components/micro/services/card";

const Merch = () => {
  const data = [
    {
      image: "../../../../assets/services/merch1.svg",
      image2: "../../../../assets/services/merch2.svg",
    },
    {
      image: "../../../../assets/services/merch4.svg",
      image2: "../../../../assets/services/merch3.svg",
    },
  ];
  const mobileData = [
    {
      image: "../../../../assets/services/merch1.svg",
    },
    {
      image: "../../../../assets/services/merch3.svg",
    },
    {
      image: "../../../../assets/services/merch4.svg",
    },
    {
      image: "../../../../assets/services/merch2.svg",
    },
  ];
  return (
    <section className="lg:pt-24 pt-14 text-text">
      <div className="flex flex-col lg:space-x-5" id="merch">
        <div className=" flex flex-col">
          <h4 className="text-section font-medium">Merchandising</h4>
          <h1 className="pt-1 font-medium xl:text-4xl md:text-3xl text-2xl lg:max-w-lg">
            Seamless promotional merchandise for brands
          </h1>
          <p className="pt-5 text-base text-justify text-texts lg:max-w-3xl">
            We specialize in creating and providing branded merchandise and
            promotional products for technology companies and their communities.
            Our primary focus is to design and produce merchandise that reflects
            tech companies brand identity, values, and culture.
          </p>

          <Link href="/services/merchandise" target="_blank">
            <Button className="my-5">Order Merchandise</Button>
          </Link>
        </div>

        <div className="flex flex-col py-10">
          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="max-w-[100%] lg:max-w-[100%]"
          >
            {data.map((client) => (
              <SwiperSlide key={client.image}>
                <div className="md:mx-20 mx-7 xl:text-start text-center">
                  <div className="md:flex hidden space-x-3 justify-between items-center">
                    <img
                      src={client.image}
                      className="rounded-md xl:w-[580px] xl:h-[390px] lg:w-[500px] lg:h-[312px] md:w-[380px] md:h-[212px]"
                    />
                    <img
                      src={client.image2}
                      className="rounded-md xl:w-[650px] xl:h-[500px] lg:w-[500px] lg:h-[312px] md:w-[380px] md:h-[212px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="max-w-[100%] lg:max-w-[100%]"
          >
            {mobileData.map((client) => (
              <SwiperSlide key={client.image}>
                <div className="mx-10 xl:text-start text-center">
                  <div className="md:hidden block">
                    <img
                      src={client.image}
                      className="rounded-md w-[380px] h-[212px] "
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
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
