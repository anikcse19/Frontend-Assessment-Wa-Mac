import { Play } from "lucide-react";

interface LessonRowProps {
  title: string;
  time: string;
  active?: boolean;
  showPreview?: boolean;
}

const LessonRow = ({
  title,
  time,
  active = false,
  showPreview = false,
}: LessonRowProps) => (
  <div className="flex items-center justify-between py-5 group cursor-pointer hover:bg-gray-50/50 transition-colors">
    <div className="flex items-center gap-4">
      <Play
        size={14}
        className={
          active
            ? "text-[#2463EB] fill-[#2463EB]"
            : "text-[#C2C7D0] fill-[#C2C7D0]"
        }
      />
      <span
        className={`text-base font-medium ${active ? "text-[#7D8590]" : "text-[#C2C7D0]"}`}
      >
        {title}
      </span>
    </div>

    <div className="flex items-center gap-4">
      {showPreview && (
        <span className="bg-[#0F172A] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Preview
        </span>
      )}
      <span className="text-[#C2C7D0] text-sm font-medium tabular-nums">
        {time}
      </span>
    </div>
  </div>
);

export default LessonRow;
