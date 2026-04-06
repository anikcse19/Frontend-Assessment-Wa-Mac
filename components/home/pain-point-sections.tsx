import Image from "next/image";
import Badge from "../shared/Badge";

const PainPointsSection = () => {
  return (
    <div>
      {/* pain points section */}
      <div className="py-50 px-10">
        {/* badge */}
        <Badge text="Are Distractions Holding You Back?" />
        {/* heading */}
        <p className="tracking-tight text-[#E0E3E5] max-w-5xl md:max-w-6xl lg:max-w-250 mx-auto text-2xl md:text-3xl lg:text-[52px] text-center 2xl:text-left leading-[120%] font-medium mb-6">
          If you struggle to focus, feel overwhelmed by endl
          <p className="inline text-[#484A4C]">
            ess tasks, or procrastinate instead of making progress, you’re not
            alone.
          </p>
        </p>
        {/* images */}
        <div className="flex justify-center space-x-2">
          <Image
            src="/images/pain-points-section/Image1.png"
            alt="Pain Points"
            width={118}
            height={120}
          />
          <Image
            src="/images/pain-points-section/Image2.png"
            alt="Pain Points"
            width={118}
            height={120}
          />
          <Image
            src="/images/pain-points-section/Image3.png"
            alt="Pain Points"
            width={118}
            height={120}
          />
        </div>
      </div>
      {/* Wrapper section */}
      <div className="flex gap-4">
        <Image
          src="/images/pain-points-section/image4.png"
          alt="Pain Points"
          width={526}
          height={642}
          className="hidden xl:block"
        />
        {/*  */}
        <div className="flex flex-col p-10 justify-between rounded-3xl w-full gap-[117px] bg-[#111214]">
          {/* header */}
          <div className="flex flex-col items-start md:flex-row justify-between w-full">
            <Badge text="No Worries" />
            <div className="flex flex-col items-start md:items-end">
              <Image
                src="/images/pain-points-section/Avatar-Grp.png"
                alt="Pain Points"
                width={104}
                height={24}
              />
              <p className="text-white">Join with 5K other students</p>
            </div>
          </div>
          {/* content */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
            {/* text */}
            <div className="flex flex-col gap-8.5">
              <p className="text-[#AAAEB2] text-[17px] max-w-50 leading-[135%] tracking-normal font-[400px]">
                The ability to concentrate deeply is the ultimate productivity
                hack
              </p>
              <p className="text-[#D0D5D9] text-[28px] max-w-60 leading-[115%] tracking-normal font-[500px]">
                And fortunately it’s a skill you can train & develop.
              </p>
            </div>
            <div className="flex flex-row md:flex-col gap-2">
              <Image
                src="/images/pain-points-section/Image5.png"
                alt="Pain Points"
                width={118}
                height={120}
              />
              <Image
                src="/images/pain-points-section/Image6.png"
                alt="Pain Points"
                width={118}
                height={120}
              />
              <Image
                src="/images/pain-points-section/Image7.png"
                alt="Pain Points"
                width={118}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainPointsSection;
