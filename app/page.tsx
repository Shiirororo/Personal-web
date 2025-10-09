import HeroSection from "@/components/HeroSection";
import AboutPage from "./About/page";
export default function Home() {
  return (
    <>
      <>
        <div className="min-h-screen">
          <main className="space-y-12 p-6 pt-10">
            <HeroSection />
            <AboutPage />

          </main>
        </div>
      </>

    </>
  );
}