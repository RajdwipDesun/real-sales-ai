import Image from "next/image";
import bgImage from "../../public/assets/images/RealSales-backgrounds/bg-3.png";
import bannerImg from "../../public/assets/images/banner/BANNER-IMG.png";
const Banner = () => {
  return (
    <div className="relative">
      <Image
        src={bgImage}
        alt="bgImage"
        width={1920}
        height={1080}
        className="w-full h-full"
      />
      <div className="absolute top-0 w-full">
        <div className="page-container mx-auto px-4 container flex justify-between">
          <div className="w-1/2">
            <div>
              <p className="text-[22px] font-normal">RealSales accelerate your sales team performance</p>
              <h1 className="text-[50px] font-normal">
                Welcome to <span className="text-[100px]">REALSALES AI</span>
              </h1>
              <p>Supercharging your sales teams with AI-Driven Selling</p>
            </div>
            <div></div>
          </div>
          <div className="w-1/2">
            <Image src={bannerImg} alt="bannerImg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
