'use client'

import React, { useRef } from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'
import { MdHandshake, MdKey, MdTrendingUp, MdArrowForward } from 'react-icons/md'
import { LuTarget, LuEye, LuShieldCheck } from 'react-icons/lu'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
// IMPORTAÇÕES DO SWIPER
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import type { Swiper as SwiperClass } from 'swiper'

const mvvCards = [
  {
    Icon: LuTarget,
    title: 'Missão',
    text: 'Facilitar a mobilidade cotidiana de pessoas e empresas com automóveis modernos, atendimento acolhedor e transparência total.',
  },
  {
    Icon: LuEye,
    title: 'Visão',
    text: 'Ser reconhecida no Bairro Amazonas e região metropolitana como a locadora parceira número um do cliente, com flexibilidade e sem burocracia.',
  },
  {
    Icon: LuShieldCheck,
    title: 'Valores',
    text: 'Honestidade em cada contrato, valorização da comunidade regional, segurança rigorosa da frota e simplicidade no relacionamento.',
  },
]

const timelineSteps = [
  {
    title: "Escolha",
    desc: "Entre em contato pelos nossos canais rápidos e escolha a melhor categoria.",
    icon: <MdKey className="text-3xl" />
  },
  {
    title: "Cadastro",
    desc: "Envie sua CNH e comprovante via WhatsApp para aprovação simplificada.",
    icon: <MdHandshake className="text-3xl" />
  },
  {
    title: "Retirada",
    desc: "Retire na nossa unidade no Bairro Amazonas de maneira muito dinâmica.",
    icon: <MdKey className="text-3xl" />
  },
  {
    title: "Viagem",
    desc: "Aproveite ao máximo sabendo que tem suporte premium 24 horas por dia.",
    icon: <MdTrendingUp className="text-3xl" />
  }
];

export default function Why() {
  const mvvSwiperRef = useRef<SwiperClass | null>(null)
  const timelineSwiperRef = useRef<SwiperClass | null>(null)

  return (
    <section className="py-16 sm:py-24 xl:py-28 bg-orange-50 overflow-hidden" id="why">
      <div className="container mx-auto px-4">

        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={800}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true,
            el: '.why-pagination',
            bulletClass: 'why-bullet',
            bulletActiveClass: 'why-bullet-active',
          }}
          className="w-full"
        >

          {/* SLIDE 1: MANTIDO ORIGINAL */}
          <SwiperSlide>
            <div className="pb-8">
              <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="text-center mb-12 xl:mb-16"
              >
                <h2 className="text-3xl xl:text-5xl font-bold text-primary mb-6">
                  Por que rodar com a <span className="text-accent">Lokgeo</span>?
                </h2>
                <p className="text-secondary text-base xl:text-lg max-w-[700px] mx-auto leading-relaxed">
                  Mais do que uma locação, entregamos tranquilidade em cada quilômetro. Conte com atendimento especializado, frota revisada e um processo rápido, seguro e sem burocracia.
                </p>
                <div className="mt-8">
                  <a
                    href="https://wa.me/5531995669772"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-[0_12px_32px_-12px_rgba(37,211,102,0.75)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-10px_rgba(37,211,102,0.8)]"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="hidden md:flex justify-center mb-16 xl:mb-20"
              >
                <div className="relative w-full max-w-[1060px] h-[26.25rem] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5">
                  <Image
                    src="https://images.unsplash.com/photo-1650831433364-3bbd0f2d2f01?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fill
                    style={{ objectFit: 'cover' }}
                    alt="Família viajando com tranquilidade"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Mobile: carrossel horizontal com peek */}
                <div className="md:hidden relative">
                  <Swiper
                    onSwiper={(s) => (mvvSwiperRef.current = s)}
                    modules={[Pagination]}
                    slidesPerView={1.1}
                    spaceBetween={16}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="mvv-swiper !pb-12 !px-1"
                  >
                    {mvvCards.map(({ Icon, title, text }) => (
                      <SwiperSlide key={title} className="!h-auto">
                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm h-full">
                          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                            <Icon className="text-4xl text-accent" />
                          </div>
                          <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
                          <p className="text-secondary leading-relaxed">{text}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {/* Setas mobile MVV */}
                  <button
                    onClick={() => mvvSwiperRef.current?.slidePrev()}
                    aria-label="Card anterior"
                    className="absolute left-0 top-[38%] -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-200 bg-white shadow flex items-center justify-center text-gray-700 active:bg-accent active:text-white transition-all"
                  >
                    <FiChevronLeft className="text-xl" />
                  </button>
                  <button
                    onClick={() => mvvSwiperRef.current?.slideNext()}
                    aria-label="Próximo card"
                    className="absolute right-0 top-[38%] -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-200 bg-white shadow flex items-center justify-center text-gray-700 active:bg-accent active:text-white transition-all"
                  >
                    <FiChevronRight className="text-xl" />
                  </button>
                </div>

                {/* Desktop: grid original preservado */}
                <div className="hidden md:grid md:grid-cols-3 gap-6 xl:gap-[30px]">
                  {mvvCards.map(({ Icon, title, text }) => (
                    <div key={title} className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                      <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                        <Icon className="text-4xl text-accent group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
                      <p className="text-secondary leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2: TIMELINE COM DESTAQUE (VIBRANTE) */}
          <SwiperSlide>
            <div className="pb-20 flex flex-col items-center justify-start min-h-[600px] xl:min-h-[800px] w-full">

              <div className="flex flex-col mb-16 xl:mb-24 w-full max-w-6xl text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full mb-8 gap-4">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em]">
                    Passo a Passo
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl xl:text-6xl font-black text-primary leading-tight">
                  Da escolha do veículo à <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF914D] to-[#FA1F1F]">
                    entrega das chaves
                  </span>
                </h2>
              </div>

              {/* TIMELINE DESIGN REFORÇADO */}

              {/* Mobile: carrossel de passos */}
              <div className="md:hidden relative mt-8">
                <Swiper
                  onSwiper={(s) => (timelineSwiperRef.current = s)}
                  modules={[Pagination]}
                  slidesPerView={1.12}
                  spaceBetween={16}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  className="timeline-swiper !pb-12"
                >
                  {timelineSteps.map((step, index) => (
                    <SwiperSlide key={index} className="!h-auto">
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-gray-100 shadow-sm h-full group"
                      >
                        <div className="w-24 h-24 rounded-[2rem] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#FF914D] group-hover:to-[#FA1F1F] transition-all duration-500">
                          <span className="text-4xl font-black text-primary group-hover:text-white transition-colors">0{index + 1}</span>
                        </div>
                        <h4 className="text-2xl font-black text-primary mb-3 group-hover:text-accent transition-colors">{step.title}</h4>
                        <div className="w-10 h-1 bg-accent/20 mb-3 rounded-full" />
                        <p className="text-secondary text-base leading-relaxed">{step.desc}</p>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  onClick={() => timelineSwiperRef.current?.slidePrev()}
                  aria-label="Passo anterior"
                  className="absolute left-0 top-[36%] -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-200 bg-white shadow flex items-center justify-center text-gray-700 active:bg-accent active:text-white transition-all"
                >
                  <FiChevronLeft className="text-xl" />
                </button>
                <button
                  onClick={() => timelineSwiperRef.current?.slideNext()}
                  aria-label="Próximo passo"
                  className="absolute right-0 top-[36%] -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-200 bg-white shadow flex items-center justify-center text-gray-700 active:bg-accent active:text-white transition-all"
                >
                  <FiChevronRight className="text-xl" />
                </button>
              </div>

              {/* Desktop: layout horizontal original */}
              <div className="hidden md:flex relative w-full max-w-6xl mx-auto flex-row justify-between items-start gap-6 mt-12">
                {/* Linha de Conexão Vibrante */}
                <div className="absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#FF914D]/20 via-[#FA1F1F]/40 to-[#FF914D]/20 z-0"></div>

                {timelineSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative z-10 flex flex-col items-start w-1/4 group"
                  >
                    <div className="relative mb-8">
                      <div className="w-24 h-24 rounded-[2rem] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#FF914D] group-hover:to-[#FA1F1F] group-hover:rotate-6 group-hover:shadow-[0_20px_40px_rgba(250,31,31,0.3)]">
                        <span className="text-4xl font-black text-primary group-hover:text-white transition-colors">0{index + 1}</span>
                      </div>
                    </div>
                    <div className="text-left">
                      <h4 className="text-2xl font-black text-primary mb-4 group-hover:text-accent transition-colors">{step.title}</h4>
                      <div className="w-12 h-1 bg-accent/20 mb-4 rounded-full group-hover:w-full group-hover:bg-accent/40 transition-all duration-500" />
                      <p className="text-secondary text-lg leading-relaxed font-medium">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </SwiperSlide>

        </Swiper>

        <div className="why-pagination w-full flex justify-center mt-6"></div>

      </div>

      <style jsx global>{`
        /* Paginação dots da timeline (mobile) */
        .timeline-swiper .swiper-pagination-bullet {
          background-color: #cbd5e1;
          opacity: 1;
        }
        .timeline-swiper .swiper-pagination-bullet-active {
          background-color: #fa1f1f;
          width: 20px;
          border-radius: 4px;
        }
        /* Paginação dots dos cards MVV (mobile) */
        .mvv-swiper .swiper-pagination-bullet {
          background-color: #cbd5e1;
          opacity: 1;
        }
        .mvv-swiper .swiper-pagination-bullet-active {
          background-color: #fa1f1f;
          width: 20px;
          border-radius: 4px;
        }
        .why-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
        }
        .why-bullet {
          width: 12px;
          height: 12px;
          background-color: #e2e8f0;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        .why-bullet-active {
          background-color: #fa1f1f;
          width: 40px;
          border-radius: 20px;
          box-shadow: 0 4px 10px rgba(250, 31, 31, 0.3);
        }
      `}</style>
    </section>
  )
}
