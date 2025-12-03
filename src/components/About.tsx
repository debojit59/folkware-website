// src/components/About.tsx
import Card from "./Card";

export default function About() {
  return (
    <section className="w-full bg-[white]">
      <div className="w-full mx-auto pl-[79px] pt-[120px] pb-40 pr-[113px]">
        {/* TOP ROW: HEADING + PARAGRAPH */}
        <div className="flex items-start gap-6 mb-24">
          {/* LEFT: BEHIND THE CODE */}
          <p
            className="uppercase text-[#FF7562] "
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontWeight: 400,
              fontSize: "160px",
              lineHeight: "160px",
              // ~ -5%
            }}
          >
            BEHIND THE CODE
          </p>

          {/* RIGHT: DESCRIPTION TEXT */}
          <p className="text-#37344B font-poppins font-semibold text-[20px] mt-2 ">
            At Folkware, every line of code carries more than <br />
            logic — it carries collaboration. As a co-operative <br /> team, we
            share ideas, make collective decisions,
            <br /> and build solutions with people in mind.
          </p>
        </div>

        {/* BOTTOM ROW: TILTED CARDS */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-12 mt-10">
          {/* LEFT CARD – cooperative */}
          <Card
            variant="cooperative"
            title="Worker-Owned Cooperative"
            description="Built and run by the people who power it. Together, we share responsibility, decisions, and success."
          />

          <Card
            variant="digital"
            title="Digital Solutions That Empower"
            description="Websites, apps, and tools crafted for organizations of all sizes. Every solution is designed to be reliable, scalable & user-friendly."
          />

          <Card
            variant="impact"
            title="Driven by Social Impact"
            description="Technology that creates value for both communities & companies. Our work is guided by ethics, inclusivity, and long-term benefit."
          />
        </div>
      </div>
    </section>
  );
}
