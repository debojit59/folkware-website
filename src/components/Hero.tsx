import HeroDivider from "../constant/HeroDivider";
import { useMobile } from "../hooks/useMobile";

export default function Hero() {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <section className="w-full bg-[#0F0F0F]">
        <div className="mx-auto px-4 py-16 sm:py-20">
          {/* MOBILE LAYOUT */}
          <div>
            <p
              className="text-[32px] sm:text-[40px] leading-[1.1] tracking-[-0.02em] text-[#FF7562] uppercase mb-4"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontWeight: 400,
              }}
            >
              SOFTWARE FOR THE PEOPLE,
            </p>
            <p
              className="text-[32px] sm:text-[40px] leading-[1.1] tracking-[-0.02em] text-[#FF7562] uppercase mb-8"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontWeight: 400,
              }}
            >
              BY THE PEOPLE
            </p>
            <p className="text-white font-poppins font-medium text-base sm:text-lg leading-relaxed">
              From design to support, we craft technology with care. Because
              great software starts with people. Built in collaboration, guided
              by trust. Delivering solutions that grow with you.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP LAYOUT
  return (
    <section className="relative w-full bg-[#0F0F0F]">
      <div className=" mx-auto px-[120px] py-[203px]">
        {/* MAIN GRID: headline on left, text on right */}
        <div className="grid items-start justify-center">
          {/* LEFT SECTION - MAIN HEADLINE */}
          <div>
            <p
              className="
              grid-cols-1 grid-rows-2
                text-[160px]
                leading-[1.1]
                tracking-[-0.02em]
                text-[#FF7562]
                uppercase
              "
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontWeight: 400,
              }}
            >
              SOFTWARE FOR THE PEOPLE,
            </p>
          </div>
          <div className="flex gap-10">
            <p
              className="

                text-[160px]
                leading-[1.1]
                tracking-[-0.02em]
                text-[#FF7562]
                uppercase
              "
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontWeight: 400,
              }}
            >
              BY THE PEOPLE
            </p>
            <p className="text-white font-poppins font-medium text-2xl mt-3 ">
              From design to support, we craft technology with <br /> care.
              Because great software starts with people.
              <br /> Built in collaboration, guided by trust. Delivering <br />
              solutions that grow with you.
            </p>
          </div>

          {/* RIGHT SECTION - SUPPORTING TEXT */}
          {/* <div className="pt-[16px]">
            <p className="text-white font-poppins font-normal text-[16px] leading-[160%] tracking-[-0.01em]">
              From design to support, we craft technology with care. Because
              great software starts with people. Built in collaboration, guided
              by trust. Delivering solutions that grow with you.
            </p>
          </div> */}
        </div>
      </div>
      <HeroDivider />
    </section>
  );
}
