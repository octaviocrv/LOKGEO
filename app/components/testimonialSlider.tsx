'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'
import { useRef } from 'react'
import type { Swiper as SwiperClass } from 'swiper'

const testimonialData = [
  {
    message:
      'Aluguei pra viajar com a família no feriado e foi tudo tranquilo. Carro limpo, revisado e o atendimento pelo WhatsApp foi rápido demais. Recomendo!',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXgpMmiXyJ3GCQNboTrAflxkCIOEOXHfnHw&s',
    name: 'Mariana Souza',
    job: 'Contagem, MG',
  },
  {
    message:
      'Preciso de carro com frequência pro trabalho e a Lokgeo nunca me deixou na mão. Preço justo e sem aquela burocracia das locadoras grandes.',
    avatar: 'https://i.pinimg.com/474x/84/ff/5d/84ff5d4969b1b130975ee331269614c6.jpg',
    name: 'Rafael Oliveira',
    job: 'Representante comercial',
  },
  {
    message:
      'Atendimento de verdade, gente que te trata bem. Aluguei pra um fim de semana fora e voltaria a alugar com certeza. Muito conforto e segurança.',
    avatar: 'https://i.pinimg.com/236x/a1/34/11/a13411877eda35b6d06d893c1a769455.jpg',
    name: 'Athos Silva',
    job: 'Belo Horizonte, MG',
  },
]

export default function TestimonialSlider() {
  const swiperRef = useRef<SwiperClass | null>(null)

  return (
    <section
      className="relative overflow-hidden bg-[#050810] pt-20 pb-20 sm:pt-24 sm:pb-32 xl:pt-32 xl:pb-40"
      id="depoimentos"
    >
      {/* Elementos de Design de Fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#FF914D]/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#FA1F1F]/5 blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto px-6">
        
        <div className="mb-16 text-center xl:mb-24">
          <motion.span 
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            whileInView="show"
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF914D]"
          >
            Nossa Reputação
          </motion.span>

          <motion.h2 
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            whileInView="show"
            className="mb-6 text-4xl font-black text-white xl:text-6xl leading-tight"
          >
            A confiança de quem <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF914D] to-[#FA1F1F]">
              dirige com a Lokgeo
            </span>
          </motion.h2>

          <motion.p 
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            whileInView="show"
            className="mx-auto max-w-[650px] text-lg text-gray-400 xl:text-xl leading-relaxed"
          >
            Experiências reais de clientes que buscam segurança, agilidade e um atendimento que realmente resolve.
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative max-w-[1000px] mx-auto"
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop
            modules={[Pagination, Navigation, Autoplay]}
            className="testimonial-swiper w-full !pb-20"
          >
            {testimonialData.map((person, index) => {
              const { message, avatar, name, job } = person
              return (
                <SwiperSlide key={index} className="!h-auto">
                  <div className="flex h-full items-center justify-center px-4">
                    <div className="relative flex w-full flex-col items-center rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-12 text-center shadow-2xl sm:px-12 xl:px-20 xl:py-16 overflow-hidden">
                      
                      {/* Estrelas de Avaliação */}
                      <div className="flex gap-1 mb-8">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-[#FF914D] text-lg" />
                        ))}
                      </div>

                      <div className="absolute top-10 left-10 opacity-10">
                        <FaQuoteLeft className="text-7xl text-white" />
                      </div>

                      <p className="relative z-10 mb-10 text-xl font-medium leading-relaxed text-white sm:text-2xl xl:text-3xl italic">
                        "{message}"
                      </p>

                      <div className="flex flex-col items-center gap-4">
                        <div className="relative h-20 w-20">
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF914D] to-[#FA1F1F] rounded-full blur-md opacity-50 animate-pulse" />
                          <Image
                            src={avatar}
                            fill
                            sizes="80px"
                            className="relative rounded-full object-cover border-2 border-white/20"
                            alt={`Foto de ${name}`}
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-white tracking-wide">
                            {name}
                          </h4>
                          <span className="text-[#FF914D] font-bold text-sm uppercase tracking-widest">
                            {job}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          {/* Setas mobile */}
          <div className="flex md:hidden justify-center gap-4 mt-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Depoimento anterior"
              className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white active:bg-[#FF914D] active:border-[#FF914D] transition-all duration-200"
            >
              <FiChevronLeft className="text-2xl" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Próximo depoimento"
              className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white active:bg-[#FF914D] active:border-[#FF914D] transition-all duration-200"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          </div>

          {/* Setas desktop */}
          <div className="hidden md:block">
            <button className="testimonial-prev absolute -left-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#FF914D] hover:border-[#FF914D] transition-all duration-300 z-20">
              <FiChevronLeft className="text-3xl" />
            </button>
            <button className="testimonial-next absolute -right-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#FF914D] hover:border-[#FF914D] transition-all duration-300 z-20">
              <FiChevronRight className="text-3xl" />
            </button>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 6px;
          border-radius: 3px;
          background-color: rgba(255, 255, 255, 0.2);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          width: 30px;
          background-color: #FF914D;
          shadow: 0 0 10px rgba(255, 145, 77, 0.5);
        }
      `}</style>
    </section>
  )
}
