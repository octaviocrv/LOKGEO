'use client'

import Image from "next/image"
import CountUp from "react-countup"
import type { CSSProperties } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import {
  MdOutlineCalendarMonth,
  MdOutlineVerifiedUser,
  MdOutlineDirectionsCar,
  MdArrowForward,
  MdLocationOn
} from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { fadeIn } from '../../varients'

const UNIT = {
  mapsQuery: 'Rua Japurá, 511, Contagem - MG',
}

const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(UNIT.mapsQuery)}&z=16&output=embed`
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(UNIT.mapsQuery)}`

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <section className="relative py-24 sm:py-32 bg-[#050810] overflow-hidden" id="about" ref={ref}>
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF914D]/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
          
          {/* Lado Esquerdo: Carrossel */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 w-full relative max-w-3xl mx-auto lg:mx-0"
          >
            {/* Decorações das Bordas */}
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-20 sm:w-32 h-20 sm:h-32 border-t-4 border-l-4 border-[#FF914D]/30 rounded-tl-3xl pointer-events-none transition-all duration-500 hover:border-[#FF914D]" />
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 border-b-4 border-r-4 border-[#FF914D]/30 rounded-br-3xl pointer-events-none transition-all duration-500 hover:border-[#FF914D]" />

            <div className="relative group rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 ring-1 ring-white/5">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 6500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                speed={900}
                loop
                style={{
                  "--swiper-pagination-color": "#FF914D",
                  "--swiper-navigation-color": "#FF914D",
                  "--swiper-navigation-size": "24px",
                  "--swiper-pagination-bottom": "24px"
                } as CSSProperties}
                className="w-full about-swiper"
              >
                {/* Slide 1: Imagem */}
                <SwiperSlide>
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-[#050810] overflow-hidden">
                    <Image
                      className="object-cover transition-transform duration-[10000ms] ease-linear group-hover:scale-110"
                      src="/images/about/pessoaalugandocarro.jpg"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      alt="Cliente feliz alugando veículo na Lokgeo"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/20 to-transparent opacity-80" />
                  </div>
                </SwiperSlide>

                {/* Slide 2: Mapa */}
                <SwiperSlide>
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-[#050810] overflow-hidden flex flex-col justify-center sm:justify-end p-6 sm:p-8 pb-16">
                    {/* Iframe com filtro Dark Mode */}
                    <iframe
                      src={MAP_EMBED}
                      title="Localização da unidade Lokgeo em Contagem"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full border-0 pointer-events-none [filter:invert(95%)_hue-rotate(200deg)_saturate(0.3)_brightness(0.85)_contrast(1.2)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/60 to-transparent pointer-events-none" />

                    {/* Card de Informações da Unidade */}
                    <div className="relative z-20 w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-7 shadow-2xl transform transition-transform duration-500 hover:-translate-y-2">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-start gap-4">
  <div className="w-12 h-12 rounded-2xl bg-[#FF914D]/20 border border-[#FF914D]/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(255,145,77,0.2)]">
    <MdLocationOn className="text-[#FF914D] text-2xl animate-pulse" />
  </div>

  <div>
    <h3 className="text-white font-bold text-xl mb-1 flex items-center gap-2">
      Nossa Unidade <span className="w-2 h-2 rounded-full bg-green-500" />
    </h3>

    <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] sm:max-w-xs">
      {UNIT.mapsQuery}
    </p>

    <p className="text-[#FF914D] text-sm font-medium mt-2">
       Segunda a Sexta, das 08h às 17h
    </p>
  </div>
</div>

                        <a
                          href={MAPS_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Abrir localização no Google Maps"
                          className="group/btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-[#FF914D] border border-white/10 hover:border-[#FF914D] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg"
                        >
                          <FaMapMarkerAlt className="group-hover/btn:-translate-y-1 transition-transform" />
                          Traçar Rota
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </motion.div>

          {/* Lado Direito: Textos */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <motion.div
              variants={fadeIn('left', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full"
            >
              {/* Badge Moderno */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF914D]/10 border border-[#FF914D]/20 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#FF914D] animate-pulse" />
                <span className="text-[#FF914D] text-xs font-bold uppercase tracking-[0.2em]">
                  Por que nos escolher?
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 leading-[1.15] tracking-tight">
                Locação de veículos <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF914D] to-[#FA1F1F]">
                  sem complicação
                </span>
              </h2>

              <p className="text-gray-400 text-lg xl:text-xl mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Escolha, alugue e dirija com total tranquilidade. Oferecemos uma experiência de alto padrão com <span className="text-white font-semibold border-b border-white/30 pb-0.5">quilometragem livre</span> e um atendimento focado em você.
              </p>

              {/* Grid de Estatísticas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 w-full">
                {[
                  { icon: MdOutlineDirectionsCar, end: 3, label: "Categorias", suffix: "" },
                  { icon: MdOutlineCalendarMonth, end: 3, label: "Anos no Mercado", suffix: "+" },
                  { icon: MdOutlineVerifiedUser, end: 100, label: "Frota Revisada", suffix: "%" }
                ].map((stat, idx) => (
                  <div key={idx} className="relative group p-6 rounded-[2rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#FF914D]/50 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FF914D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-[#FF914D]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <stat.icon className="text-2xl text-[#FF914D]" />
                      </div>
                      <div className="flex items-baseline gap-1 mb-1">
                        <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                          {inView ? <CountUp start={0} end={stat.end} duration={2.5} delay={0.2 * idx} /> : "0"}
                        </div>
                        <span className="text-2xl font-bold text-[#FF914D]">{stat.suffix}</span>
                      </div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botão WhatsApp */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                  href="https://wa.me/5531995669772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold flex items-center justify-center gap-3 shadow-[0_0_40px_-10px_rgba(37,211,102,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,211,102,0.7)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 skew-x-[-20deg]" />
                  <span className="relative flex items-center gap-3">
                    <FaWhatsapp className="text-2xl sm:text-3xl" />
                    <span className="text-base sm:text-lg">Falar no WhatsApp</span>
                    <MdArrowForward className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About