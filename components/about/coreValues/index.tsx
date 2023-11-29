import React from "react";
import Innovation from "../../../public/assets/about/innovation.svg";
import Collaboration from "../../../public/assets/about/collaboration.svg";
import Education from "../../../public/assets/about/education.svg";
import CustomerCentric from "../../../public/assets/about/customer-centric.svg";
import Quality from "../../../public/assets/about/quality.svg";
import Integrity from "../../../public/assets/about/integrity.svg";
import Values from "@/components/micro/about";

const CoreValues = () => {
  return (
    <div className="pt-14 lg:pt-24">
      <div>
        <p className="text-section font-medium text-sm">Values</p>
        <h1 className="pt-2 lg:text-4xl md:text-3xl text-2xl xl:text-[44px] font-medium text-text">
          Our Core Values
        </h1>
        <div className="text-texts lg:text-lg text-base text-justify md:max-w-xl font-light pt-5">
          <p>
            Our core values serve as a foundation for Innovotio&apos;s culture,
            decisions and actions to meet client needs.
          </p>
        </div>
      </div>
      <div className="lg:pt-10 pt-5 grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <Values
            title="Innovation"
            text="At Innovotio, we encourage and foster a culture of innovation to stay at the forefront of technology and provide cutting-edge solutions."
            icon={Innovation}
          />
        </div>
        <div className="lg:col-span-3">
          <Values
            title="Collaboration"
            text="We emphasize the importance of working together both internally and externally, to help clients achieve their goals."
            icon={Collaboration}
          />
        </div>
      </div>
      <div className="pt-4 grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div>
          <Values
            title="Education"
            text="We prioritize continuous learning and development by offering training programs, which highlights a commitment to knowledge sharing and skill enhancement."
            icon={Education}
          />
        </div>
        <div>
          <Values
            title="Customer-Centric"
            text="We place the needs and goals of clients at the center of all services, ensuring they receive value and support tailored to their unique requirements."
            icon={CustomerCentric}
          />
        </div>
      </div>
      <div className="pt-4 grid grid-cols-1 lg:grid-cols-5 gap-3">
        <div className="lg:col-span-3">
          <Values
            title="Quality"
            text="We strive for excellence in all services, from training programs to consultancy, event management, or merchandise curation, to consistently deliver high-quality solutions and experiences."
            icon={Quality}
          />
        </div>
        <div className="lg:col-span-2">
          <Values
            title="Integrity"
            text="We conduct business with honesty, transparency, and ethical standards, building trust with clients, partners, and the tech community."
            icon={Integrity}
          />
        </div>
      </div>
      <hr className="lg:mt-24 mt-14 opacity-10" />
    </div>
  );
};

export default CoreValues;
