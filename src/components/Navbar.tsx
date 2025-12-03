import Logo from "../constant/icons";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0A0A0A] py-[16px]">
      <div className="max-w-[1440px] mx-auto px-[120px] flex items-center justify-between relative">
        {/* LEFT NAV */}
        <ul className="hidden lg:flex items-center gap-[40px] text-white text-[24px] font-bebas">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">PROJECTS</a>
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            SERVICES <span>▼</span>
          </li>
        </ul>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
          <Logo />
          <span className="text-white text-[24px] font-bebas">folkware</span>
        </div>

        {/* RIGHT NAV */}
        <div className="hidden lg:flex items-center gap-[40px] text-[24px] font-bebas text-white">
          <a href="#">STORIES</a>
          <a href="#">ABOUT US</a>
          <button className="px-4 py-1 bg-white text-black text-[16px] font-semibold">
            SAY HI!
          </button>
        </div>
      </div>
    </nav>
  );
}
