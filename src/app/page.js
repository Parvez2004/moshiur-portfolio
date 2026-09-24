import About from "@/Component/About";
import Certification from "@/Component/Certification";
import Gallery from "@/Component/Gallery";
import Hero from "@/Component/Hero";
import Resume from "@/Component/Resume";
import Services from "@/Component/Services";
import Sidebar from "@/Component/Sidebar";
import Video from "@/Component/Video";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gray-100">
      <Sidebar />

      <div className="min-h-screen lg:ml-[250px]">
        <Hero />

        <About />
        <Services />
        <Resume />
        <Gallery />
        <Video />
        <Certification />
      </div>
    </main>
  );
}