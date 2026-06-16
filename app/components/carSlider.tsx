'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'

import { FaStar } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'

const cars = [
  {
    type: 'Carro de passeio',
    name: 'VW Gol',
    price: '3.000',
    stars: 5,
    image: '/images/carSlider/vw-gol-semFundo.svg',
    info: [
      { icon: '/icons/carSlider/gearshift.svg', text: "Manual" },
      { icon: '/icons/carSlider/seat.svg', text: "5 Lug." },
      { icon: '/icons/carSlider/gas.svg', text: "Flex" },
      { icon: '/icons/carSlider/engine.svg', text: "1.0" },
      { icon: '/icons/carSlider/wheel.svg', text: "Diant." },
    ]
  },
  {
    type: 'Picape',
    name: 'Fiat Strada',
    price: '4.000',
    stars: 5,
    image: '/images/carSlider/fiat-strada-semFundo.svg',
    info: [
      { icon: '/icons/carSlider/gearshift.svg', text: "Manual" },
      { icon: '/icons/carSlider/seat.svg', text: "5 Lug." },
      { icon: '/icons/carSlider/gas.svg', text: "Flex" },
      { icon: '/icons/carSlider/engine.svg', text: "1.4" },
      { icon: '/icons/carSlider/wheel.svg', text: "Diant." },
    ]
  },
  {
    type: 'Caminhonete',
    name: 'Nissan Frontier',
    price: '6.000',
    stars: 5,
    image: '/images/carSlider/nissas-semFundo.svg',
    info: [
      { icon: '/icons/carSlider/gearshift.svg', text: "Autom." },
      { icon: '/icons/carSlider/seat.svg', text: "5 Lug." },
      { icon: '/icons/carSlider/gas.svg', text: "Diesel" },
      { icon: '/icons/carSlider/engine.svg', text: "2.3" },
      { icon: '/icons/carSlider/wheel.svg', text: "4x4" },
    ]
  }
]

export default function CarSlider() {
  return (
    <motion.div
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0.2 }}
      className='container mx-auto px-4 pt-10 sm:pt-14 pb-24 sm:pb-32'
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 24 },
          1268: { slidesPerView: 3, spaceBetween: 32 },
        }}
        // CORREÇÃO 1: Adicionando !pb-20 e !px-4 para forçar o Swiper a não cortar o conteúdo
        className="!pb-20 pt-4 !px-4"
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index} className="!h-auto">
              <div className='bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full group'>

                {/* ÁREA DA IMAGEM */}
                <div className='w-full h-[220px] sm:h-[260px] md:h-[18.75rem] lg:h-[21.25rem] xl:h-[23.75rem] bg-gray-50 flex justify-center items-center relative overflow-hidden'>
                  <Image
                    src={car.image}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1268px) 50vw, 33vw"
                    style={{ objectFit: 'contain' }}
                    className="object-center scale-110 group-hover:scale-[1.22] transition-transform duration-500"
                    alt={`Foto de locação do ${car.name}`}
                  />
                </div>

                {/* ÁREA DE CONTEÚDO */}
                {/* CORREÇÃO 2: Adicionando explícito pb-6 sm:pb-8 para afastar o botão da borda do card */}
                <div className='p-4 sm:p-6 pb-6 sm:pb-8 flex flex-col flex-grow'>

                  <div className='flex justify-between items-center gap-2 mb-2'>
                    <div className='text-[10px] sm:text-xs font-bold text-secondary uppercase tracking-wider bg-gray-100 px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap'>
                      {car.type}
                    </div>
                    <div className='flex gap-x-0.5 sm:gap-x-1 text-accent text-xs sm:text-sm shrink-0'>
                      {[...Array(car.stars)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>

                  <h3 className='text-xl sm:text-2xl font-bold text-primary mb-1'>{car.name}</h3>
                  <div className='mb-4 sm:mb-6' />

                  <div className='flex justify-between items-start gap-1 sm:gap-2 mb-6 sm:mb-8'>
                    {car.info.map((item, i) => {
                      return (
                        <div key={i} className='flex flex-col items-center flex-1 min-w-0'>
                          <div className='bg-primary border border-primary w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center mb-1.5 sm:mb-2'>
                            <Image src={item.icon} width={18} height={18} alt={item.text} />
                          </div>
                          <div className='text-[9px] sm:text-[10px] font-bold text-secondary uppercase text-center leading-tight'>
                            {item.text}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-auto">
                    <a
                      href="https://wa.me/5531995669772"
                      target="_blank"
                      rel="noopener noreferrer"
                      className='btn btn-brand-gradient w-full h-12 sm:h-14 rounded-xl text-sm shadow-md hover:shadow-lg flex justify-center items-center gap-2 font-bold text-white uppercase tracking-wider'
                    >
                      <FaWhatsapp className='text-lg' />
                      Reservar agora
                    </a>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </motion.div>
  )
}