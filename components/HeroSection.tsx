import * as motion from "motion/react-client";

export default function HeroSection () {
    return (
    // <section className = "min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
    //     <div className="max-w-7xl mx-auto">
    //         <div className="grid lg:grid-cols-2 gap-12 items-center">
    //             <motion.div initial={{opacity: 0, y:20}}>
    //                 <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
    //                     Bonjour <span className="text-primary">Mister </span>
    //                 </h1>
    //             </motion.div>
    //         </div>
    //     </div>
    // </section>
    <>
    <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-start justify-center antialiased">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl sM:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold text-left">
          Welcome to my website
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Hiii, I'm <span className="font-semibold">Nhân</span>, sophomore <span className="font-semibold">Hanoi University of science and technologies</span>.
        </p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        </p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        </p>
        {/* <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 text-white"
        /> */}
      </div>
      
    </div>
    </>
)}