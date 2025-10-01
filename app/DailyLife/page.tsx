import * as motion from 'motion/react-client'

export default function DailyLifePage () {
    return (
    <>
    <div className="min-h-screen">
        <main>
            <section className = "min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
         <div className="max-w-7xl mx-auto">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{opacity: 0, y:20}}>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
                         Bonjour <span className="text-primary">Mister </span>
                     </h1>
                 </motion.div>
             </div>
         </div>
     </section>
        </main>
    </div>
    
    </>

)}