const ModuleHeader = ({ title, sub }: { title: string; sub: string }) => (
  <div className="border-t border-[#E5E9F0] pt-6">
    <h2 className="text-[#C2C7D0] text-xl font-medium tracking-tight">
      {title}
    </h2>
    <p className="text-[#C2C7D0] text-sm mt-1">{sub}</p>
  </div>
);

export default ModuleHeader;
