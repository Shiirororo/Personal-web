'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import {useState, useEffect} from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Image from 'next/image'
import Link from 'next/link'
//Demo discoveries


interface Discovery {
  id: number;
  title: string;
  date: string;
  image: string;
  slug: string;
  description: string;
}




export default function LatestDiscoverySwiper() {
  const [discoveries, setDiscovery] = useState<Discovery[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true);
    fetch("http://localhost:4000/api/discovery", {signal: controller.signal}) //Dieu khien de dung request
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data: unknown) => {

        if (Array.isArray(data)) setDiscovery(data as Discovery[])
        else setDiscovery([])
      })
      .catch ((err) => {
        if (err.name === "AbortError") return;
        console.log("fetch error:", err)
        setDiscovery([])
      })
      .finally(() => setLoading(false))
  }, [])
      if (loading) {
        return <div className="p-8 text-center">Loading...</div>;
      }



  return (
    <section className="py-12 px-6 overflow-hidden">
      <h2 className="text-3xl font-bold mb-8">My Project</h2>
      {discoveries.length === 0 ? (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-muted-foreground">Nothing to display</h3>
        </div>
      ):(
      <Swiper
        loop
        autoplay={{ delay: 3000 }}
        effect="coverflow"
        coverflowEffect={
          {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }
        }
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
          1920: { slidesPerView: 5 }
        }}
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        className="mySwiper"
      >
        {discoveries.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={item.slug}>
              <div className="group cursor-pointer">
                <div className="relative w-full h-[250px] overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    
                    width={400}
                    height={300}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted">{item.date}</p>
                  <h3 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  )}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      )}
    </section>
  )
}
