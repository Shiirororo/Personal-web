import AboutPage from "./About/page";
import Post from "@/components/Post";
export default function Home() {
  return (
    <>
      <>
        <div className="min-h-screen">
          <main className="space-y-12 p-6 pt-10">
            <div className="min-h-screen w-full rounded-md relative flex flex-col items-start justify-center antialiased hidden sm:flex">
              <div className="max-w-5xl p-4">
                <h1 className="relative z-10 text-lg md:text-7xl sM:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold text-left">
                  Welcome to my website
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm relative z-10">
                  Hiii, I'm <span className="font-semibold">Nhân</span>, sophomore <span className="font-semibold">Hanoi University of science and technologies</span>.
                </p>
              </div>

            </div>
            <AboutPage />
            <Post />

          </main>
        </div>
      </>

    </>
  );
}