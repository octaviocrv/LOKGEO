'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade' // NOVO IMPORT: Efeito de transição suave

// NOVOS MÓDULOS: Autoplay e EffectFade adicionados
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'
import { useRef } from 'react'
import type { Swiper as SwiperClass } from 'swiper'

const fleetCategories = [
  {
    category: 'Passeio & Dia a Dia',
    name: 'Compactos Econômicos',
    image: '/images/carSlider/vw-gol-semFundo.svg',
    description: 'A liberdade de rodar pela cidade com máxima economia e agilidade. A escolha inteligente para o seu deslocamento diário, sem dores de cabeça com manutenção.',
    ctaText: 'Quero facilidade'
  },
  {
    category: 'Trabalho & Força',
    name: 'Picapes Leves',
    image: '/images/carSlider/fiat-strada-semFundo.svg',
    description: 'A versatilidade que o seu negócio precisa. Transporte equipamentos e mercadorias com segurança, otimizando a logística da sua empresa sem imobilizar capital.',
    ctaText: 'Quero para meu negócio'
  },
  {
    category: 'Potência & Off-Road',
    name: 'Caminhonetes 4x4',
    image: '/images/carSlider/nissas-semFundo.svg',
    description: 'Robustez extrema para encarar qualquer terreno. Ideal para operações pesadas no campo, mineração ou engenharia, garantindo que o trabalho nunca pare.',
    ctaText: 'Quero potência máxima'
  },
]

export default function CarSlider() {
  // Referência apenas para o carrossel INTERNO (dos carros)
  const carsSwiperRef = useRef<SwiperClass | null>(null)

  return (
    <motion.div
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0.2 }}
      className='container relative mx-auto px-4 pt-16 sm:pt-24 pb-20 sm:pb-24'
      id="cars"
    >
      {/* ==========================================
          CARROSSEL GLOBAL (PAI) - Alterna entre Frota e Modelos (PF/PJ)
          ========================================== */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000} // Transição suave de 1 segundo
        autoplay={{ 
          delay: 8000, // Tempo configurável: 8 segundos por slide
          disableOnInteraction: false 
        }}
        allowTouchMove={false} // Evita que o arrastar no pai atrapalhe o filho
        pagination={{
          clickable: true,
          el: '.global-section-pagination', // Bolinhas separadas do carrossel de carros
          bulletClass: 'global-bullet',
          bulletActiveClass: 'global-bullet-active',
        }}
        className="w-full h-full"
      >
        {/* ==========================================
            SLIDE 1: A APRESENTAÇÃO DOS CARROS (Seu código original mantido)
            ========================================== */}
        <SwiperSlide>
          <div className="relative w-full h-full pb-8">
            {/* CABEÇALHO CARROS */}
            <div className="flex flex-col mb-12 xl:mb-16">
              <div className="flex justify-between items-start w-full mb-6">
                <span className="text-[#fa1f1f] font-bold tracking-wider uppercase text-sm">Nossa Frota</span>
                <span className="bg-[#FFF5ED] text-[#fa1f1f] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Veiculos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 md:h-10 bg-[#fa1f1f] rounded-full"></div>
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-[#111827] tracking-tight">
                  O carro certo para cada necessidade
                </h2>
              </div>
            </div>

            {/* CARROSSEL DE CARROS (FILHO) */}
            <Swiper
              onSwiper={(swiper) => (carsSwiperRef.current = swiper)}
              nested={true} // Permite que rode liso dentro do Swiper Pai
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true, dynamicBullets: true }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1268: { slidesPerView: 3, spaceBetween: 32 },
              }}
              className="car-swiper !pb-14 pt-4 !px-2 md:!px-8"
            >
              {fleetCategories.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="!h-auto flex">
                    <div className='bg-[#FCF9F6] rounded-3xl p-6 sm:p-8 flex flex-col h-full group hover:-translate-y-1 transition-all duration-300'>
                      <div className="flex items-center gap-2.5 mb-6">
                        <div className="w-3 h-3 rounded-full bg-[#fa1f1f]"></div>
                        <span className="text-[#fa1f1f] font-bold text-sm">{item.category}</span>
                      </div>
                      <h3 className='text-2xl sm:text-3xl font-extrabold text-[#111827] mb-6'>{item.name}</h3>
                      <div className='w-full h-[230px] sm:h-[280px] relative mb-6'>
                        <Image
                          src={item.image}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1268px) 50vw, 33vw"
                          style={{ objectFit: 'contain' }}
                          className="object-center drop-shadow-2xl scale-110 group-hover:scale-[1.16] transition-transform duration-500 ease-out"
                          alt={`Categoria: ${item.name}`}
                        />
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                        {item.description}
                      </p>
                      <div className="mt-auto pt-4 border-t border-orange-900/5">
                        <a
                          href={`https://wa.me/5531995669772?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20categoria%20${encodeURIComponent(item.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='flex items-center gap-2.5 text-[#fa1f1f] font-bold hover:text-orange-700 transition-colors group/btn'
                        >
                          <FaWhatsapp className="text-2xl" />
                          <span className="group-hover/btn:underline underline-offset-4">{item.ctaText}</span>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>

            {/* Setas do Carrossel de Carros */}
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => carsSwiperRef.current?.slidePrev()}
              className="group absolute left-0 top-[60%] z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-md transition-all duration-300 hover:border-transparent hover:bg-[#fa1f1f] hover:text-white md:hidden"
            >
              <FiChevronLeft className="text-3xl transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <button
              type="button"
              aria-label="Próximo"
              onClick={() => carsSwiperRef.current?.slideNext()}
              className="group absolute right-0 top-[60%] z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-md transition-all duration-300 hover:border-transparent hover:bg-[#fa1f1f] hover:text-white md:hidden"
            >
              <FiChevronRight className="text-3xl transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </SwiperSlide>


        {/* ==========================================
            SLIDE 2: MODELOS FLEXÍVEIS (NOVO)
            ========================================== */}
        <SwiperSlide>
          <div className="w-full h-full pb-8 flex flex-col justify-center">
            
            {/* CABEÇALHO PF/PJ */}
            <div className="flex flex-col mb-12 xl:mb-16">
              <div className="flex justify-between items-start w-full mb-6">
                <span className="text-[#fa1f1f] font-bold tracking-wider uppercase text-sm">Lokgeo</span>
                <span className="bg-[#FFF5ED] text-[#fa1f1f] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Serviços</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 md:h-10 bg-[#fa1f1f] rounded-full"></div>
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-[#111827] tracking-tight">
                  Modelos flexíveis de locação
                </h2>
              </div>
            </div>

            {/* CARDS PF / PJ */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full">
              
              {/* Card Pessoa Física */}
              <div className='flex-1 bg-[#FCF9F6] border border-[#f3ede8] rounded-3xl p-8 sm:p-12 flex flex-col justify-center group hover:-translate-y-1 transition-all duration-300 min-h-[300px]'>
                <div className="flex items-center mb-6">
                  <h3 className='text-2xl sm:text-3xl font-extrabold text-[#fa1f1f]'>Diário e Mensal Flex (PF)</h3>
                </div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed flex-grow">
                  A liberdade de ter um carro pelo tempo que precisar, sem as dores de cabeça ligadas a financiamentos, impostos (IPVA), taxas de licenciamento ou revisões mecânicas pesadas.
                </p>
                <div className="mt-6 w-full h-[240px] sm:h-[300px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1632923945807-8657cb4888e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Imagem aleatória de locação para pessoa física"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Card Pessoa Jurídica */}
              <div className='flex-1 bg-[#FCF9F6] border border-[#f3ede8] rounded-3xl p-8 sm:p-12 flex flex-col justify-center group hover:-translate-y-1 transition-all duration-300 min-h-[300px]'>
                <div className="flex items-center mb-6">
                  <h3 className='text-2xl sm:text-3xl font-extrabold text-[#fa1f1f]'>Terceirização de Frotas (PJ)</h3>
                </div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed flex-grow">
                  Aumente a liquidez da sua empresa otimizando seus ativos fixos. Deixe a logística, manutenção periódica e gestão de multas diretamente com a assessoria da LOKGEO.
                </p>
                <div className="mt-6 w-full h-[240px] sm:h-[300px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1711119114815-af4822a5fa4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Imagem aleatória de gestão de frotas para pessoa jurídica"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      {/* CONTAINER DAS BOLINHAS DO CARROSSEL PAI (Slide 1 vs Slide 2) */}
      <div className="global-section-pagination w-full flex justify-center mt-4"></div>

      {/* ESTILIZAÇÃO DO SWIPER */}
      <style jsx global>{`
        /* ====================================
           Paginação dos CARROS (Filho) 
           ==================================== */
        .car-swiper .swiper-pagination {
          bottom: 0px !important;
        }
        .car-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .car-swiper .swiper-pagination-bullet-active {
          background-color: #fa1f1f;
          width: 24px;
          border-radius: 4px;
        }

        /* ====================================
           Paginação GLOBAL (Pai - Slide 1 e 2) 
           ==================================== */
        .global-section-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
        }
        .global-bullet {
          width: 10px;
          height: 10px;
          background-color: #e2e8f0;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        .global-bullet:hover {
          background-color: #cbd5e1;
        }
        .global-bullet-active {
          background-color: #fa1f1f;
          width: 36px;
          border-radius: 8px;
        }
      `}</style>
    </motion.div>
  )
}