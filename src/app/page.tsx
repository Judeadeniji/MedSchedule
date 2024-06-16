import { Hero } from "@/components/hero";
import { ServicesWeProvide, Solutions } from "@/components/home-screen";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <Solutions />
      <ServicesWeProvide />
    </div>
  );
}
