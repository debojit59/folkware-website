interface CardProps {
  title: string;
  description: string;
  variant: "cooperative" | "digital" | "impact";
}

export default function Card({ title, description, variant }: CardProps) {
  const rotation =
    variant === "cooperative"
      ? "rotate-[3deg]"
      : variant === "impact"
      ? "-rotate-[3deg]"
      : "rotate-0";

  return (
    <div className={`relative ${rotation}`}>
      <div
        className="
        bg-[#E4F4FA]
        border border-[#4BA3C3]
        rounded-lg
        shadow-[0_12px_40px_rgba(0,0,0,0.12)]
        w-[360px] h-[280px]
        px-6 py-6
      "
      >
        {/* VARIANT 1 – IMAGE AT BOTTOM */}
        {variant === "cooperative" && (
          <>
            <h3 className="text-[#37344B] uppercase font-bebas text-[28px] tracking-[0.08em] mb-2">
              {title}
            </h3>

            <p className="font-poppins text-[14px] leading-normal text-[#37344B]">
              {description}
            </p>

            <div className="mt-auto">
              {/* place cooperative illustration */}
              <img src="/cards/cooperative.png" className="w-full" />
            </div>
          </>
        )}

        {/* VARIANT 2 – IMAGE IN MIDDLE */}
        {variant === "digital" && (
          <>
            <div className="mb-3">
              <img src="/cards/digital.png" className="w-full" />
            </div>

            <h3 className="text-[#37344B] uppercase font-bebas text-[28px] tracking-[0.08em] mb-2">
              {title}
            </h3>

            <p className="font-poppins text-[14px] leading-normal text-[#37344B]">
              {description}
            </p>
          </>
        )}

        {/* VARIANT 3 – IMAGE AT TOP */}
        {variant === "impact" && (
          <>
            <img src="/cards/impact.png" className="w-full mb-4" />

            <h3 className="text-[#37344B] uppercase font-bebas text-[28px] tracking-[0.08em] mb-2">
              {title}
            </h3>

            <p className="font-poppins text-[14px] leading-normal text-[#37344B]">
              {description}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
