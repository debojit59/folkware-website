import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="w-full bg-black">
      <Navbar />
      <Hero />
    </div>
  );
}
