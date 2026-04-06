import Image from "next/image";

interface TextCardProps {
  avatar: string;
  text: string;
  name: string;
  role: string;
}

const TextCard = ({ avatar, text, name, role }: TextCardProps) => (
  <div className="relative w-[260px] sm:w-[300px] md:w-[340px] h-auto sm:h-96 md:h-110 rounded-4xl shrink-0">
    {/* Gradient border overlay */}
    <div
      className="absolute inset-0 rounded-4xl pointer-events-none z-20"
      style={{
        padding: "1px",
        background:
          "radial-gradient(61.03% 66.18% at 50% 50%, #2466F2 0%, rgba(36, 102, 242, 0) 100%)",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    ></div>
    <div className="relative z-10 w-full h-full bg-[#0E1014] rounded-4xl p-4 sm:p-6 md:p-8 flex flex-col justify-between">
      <div>
        <Image
          src={avatar}
          width={40}
          height={40}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover mb-4 md:mb-8"
          alt={name}
        />
        <p className="text-[#A1A1A1] leading-relaxed text-sm md:text-[17px]">{text}</p>
      </div>
      <div>
        <h4 className="text-base sm:text-lg md:text-xl font-semibold">{name}</h4>
        <p className="text-[#6B6D71] text-xs sm:text-sm mt-1">{role}</p>
      </div>
    </div>
  </div>
);

export default TextCard;
