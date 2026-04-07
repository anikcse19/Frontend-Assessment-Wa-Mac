import { Play } from "lucide-react";
import Image from "next/image";

interface VideoCardProps {
  avatar: string;
  bgImage: string;
  name: string;
  role: string;
}

const VideoCard = ({ avatar, bgImage, name, role }: VideoCardProps) => (
  <div className="relative w-[75vw] sm:w-75 md:w-85 h-96 sm:h-100 md:h-110 rounded-4xl overflow-hidden group cursor-pointer shrink-0 snap-center">
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
    <div
      className="relative z-10 w-full h-full rounded-4xl overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <Image
          src={avatar}
          width={40}
          height={40}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/20 object-cover"
          alt={name}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center pl-1 shadow-xl transform transition-transform group-hover:scale-110">
          <Play
            fill="#2563eb"
            className="text-[#2563eb] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
          />
        </div>
      </div>

      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
        <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white">
          {name}
        </h4>
        <p className="text-white/70 text-xs sm:text-sm mt-1">{role}</p>
      </div>
    </div>
  </div>
);

export default VideoCard;
