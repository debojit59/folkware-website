import Logo from "../constant/icons";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0F0F0F] py-4">
      <div className=" mx-auto px-[65px] pt-10 flex items-center justify-between relative ">
        {/* LEFT NAV */}
        <ul
          className="hidden lg:flex items-center gap-10 text-white text-[24px] "
          style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
        >
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
          <span
            className="text-white text-[24px] "
            style={{ fontFamily: '"popings", sans-serif', fontWeight: 700 }}
          >
            folkware
          </span>
        </div>

        {/* RIGHT NAV */}
        <div
          className="hidden lg:flex items-center gap-10 text-[24px] font-bebas text-white"
          style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
        >
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
