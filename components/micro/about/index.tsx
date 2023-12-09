import { aboutCardProps } from "@/models/declaration";
import Image from "next/image";

const Values = ({ text, title, icon }: aboutCardProps) => {
  return (
    <div
      className="space-y-5 p-5 lg:h-[215px] rounded-[20px] bg-hover"
      data-aos="zoom-out"
    >
      <div className="flex flex-col items-start space-y-3 font-medium">
        <Image src={icon} alt="Careers" />
        <h3 className="text-base lg:text-2xl text-justify leading-6 text-text">
          {title}
        </h3>
      </div>
      <p className="text-base xl:text-lg text-justify leading-6 text-texts">
        {text}
      </p>
    </div>
  );
};

export default Values;
