import AboutPage from "./About/page";
import Hero from "@/components/Hero";
import LatestDiscoverySwiper from "@/components/Lastest";
export default function Home() {
  return (
    <>
      <>
        <div className="min-h-screen">
          <main className="space-y-12 p-6 pt-24">
            <Hero />
            <LatestDiscoverySwiper />
            <AboutPage />
          </main>
        </div>
      </>

    </>
  );
}