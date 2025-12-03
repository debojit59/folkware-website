import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HeroDivider from "./constant/HeroDivider";
import About from "./components/About";

export default function App() {
  return (
    <div className="w-full bg-black">
      <Navbar />
      <Hero />
      <HeroDivider />
      <About />
    </div>
  );
}
