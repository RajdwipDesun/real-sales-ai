import Image from "next/image";
import React from "react";
import RealSales_backgrounds from "../../../public/assets/images/RealSales-backgrounds/bg-5.png";
import ArrowRight from "../../../public/assets/icons/arrowRight";
import persona_plant_new from "../../../public/assets/images/RealSales-user-images/persona-plant-new.png";


const QuickSearch = () => {
  return (
    <div className="relative">
      <Image
        src={RealSales_backgrounds}
        alt="RealSales-backgrounds"
        className="h-full w-full"
      />
      <div className="absolute top-0 bg-[#06060666] w-full h-full">
        <div className="page-container mx-auto px-4 py-8 container flex flex-col items-center gap-4">
            <div className="w-[60%]">
          <h1 className="text-[50px] text-center m-plus-rounded-1c-light text-white">
            Quick Search Feature&nbsp;<span className="m-plus-rounded-1c-regular text-[#FFDE5A]">for Persona</span>
          </h1>
          <p className="text-[14px] text-center sora-light text-white pb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="bg-[#FFFFFF66] p-2 pl-2 rounded-full flex justify-between items-center w-[90%]">
            <input
              placeholder="Search personas by their name, id, score etc.."
              className="border-0 outline-0 !py-1.5 !px-4 w-full text-white m-plus-rounded-1c-regular"
            />
            <div className="flex items-center gap-2 !text-[#060606] !bg-[#FFE942] m-plus-rounded-1c-medium !capitalize !py-1.5 !px-4 !rounded-full">
              Proceed&nbsp;Now <ArrowRight width={19} height={13} />
            </div>
          </div>
        </div>
          <div className="flex">
            <div className="perspective-[270px] h-[270px] w-1/4 rotate-x-12"><Image src={persona_plant_new} alt="persona-plant-new" className="h-full w-full" /></div>
            <div><Image src={persona_plant_new} alt="persona-plant-new" className="h-[270px] w-full" /></div>
            <div><Image src={persona_plant_new} alt="persona-plant-new" className="h-[270px] w-full" /></div>
            <div><Image src={persona_plant_new} alt="persona-plant-new" className="h-[270px] w-full" /></div>
            <div><Image src={persona_plant_new} alt="persona-plant-new" className="h-[270px] w-full" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
