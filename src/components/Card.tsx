// src/components/Card.tsx
import Impact from "../assets/Impact.png";
import Solution from "../assets/Solution.png";
import WorkersOwned from "../assets/WorkersOwned.png";

interface CardProps {
  title: string;
  description: string;
  variant: "cooperative" | "digital" | "impact";
}

export default function Card({ title, description, variant }: CardProps) {
  // match Figma tilt: ~ +6°, 0°, -6°
  const rotationClass =
    variant === "cooperative"
      ? "rotate-[-4deg]" // Figma correct angle
      : variant === "impact"
      ? "-rotate-[4deg]" // Figma correct angle
      : "rotate-[-4deg]";

  const imageMap = {
    cooperative: WorkersOwned,
    digital: Solution,
    impact: Impact,
  } as const;

  const image = imageMap[variant];

  return (
    <div className={`relative ${rotationClass}`}>
      <div
        className="
          bg-[#E4F4FA]
          border border-[#4BA3C3]
          rounded-2xl
          shadow-[0_12px_40px_rgba(0,0,0,0.12)]
          w-[344px] h-[510px]
          px-8 pt-10 pb-8
          overflow-hidden
          flex flex-col
        "
      >
        {/* ---- COOPERATIVE: text on top, image at bottom ---- */}
        {variant === "cooperative" && (
          <>
            <h3
              className="uppercase mb-4"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontWeight: 400,
                fontSize: "36px",
                lineHeight: "36px",
                letterSpacing: "0",
                color: "#37344B",
              }}
            >
              {title}
            </h3>

            <p
              className="mb-6"
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "1",
                color: "#37344B",
              }}
            >
              {description}
            </p>

            <div className="mt-auto">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-contain"
              />
            </div>
          </>
        )}

        {/* ---- DIGITAL: big image on top, then text ---- */}
        {variant === "digital" && (
          <>
            <div className="mb-6 flex-1 flex items-center justify-center">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-contain"
              />
            </div>

            <h3
              className="uppercase mb-3"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontWeight: 400,
                fontSize: "36px",
                lineHeight: "36px",
                letterSpacing: "0",
                color: "#37344B",
              }}
            >
              {title}
            </h3>

            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "1",
                color: "#37344B",
              }}
            >
              {description}
            </p>
          </>
        )}

        {/* ---- IMPACT: title, description, image at bottom ---- */}
        {variant === "impact" && (
          <>
            <h3
              className="uppercase mb-3"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontWeight: 400,
                fontSize: "36px",
                lineHeight: "36px",
                letterSpacing: "0",
                color: "#37344B",
              }}
            >
              {title}
            </h3>

            <p
              className="mb-6"
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "1",
                color: "#37344B",
              }}
            >
              {description}
            </p>

            <div className="mt-auto">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-contain"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
