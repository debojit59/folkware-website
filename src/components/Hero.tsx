export default function Hero() {
  return (
    <section className="w-full bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-[120px] py-[120px]">
        {/* MAIN GRID: headline on left, text on right */}
        <div className="grid grid-cols-[1fr_1fr] gap-[60px] items-start">
          {/* LEFT SECTION - MAIN HEADLINE */}
          <div className="pt-[40px]">
            <h1
              className="
                text-[160px]
                leading-[160px]
                font-bebas
                font-normal
                tracking-[-0.04em]
                text-[#FF7562]
                uppercase
              "
            >
              SOFTWARE FOR THE PEOPLE,<br />BY THE PEOPLE
            </h1>
          </div>

          {/* RIGHT SECTION - SUPPORTING TEXT */}
          <div className="pt-[40px]">
            <p className="text-white font-poppins font-medium text-[20px] leading-[100%]">
              From design to support, we craft technology with care. Because great
              software starts with people. Built in collaboration, guided by
              trust. Delivering solutions that grow with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
