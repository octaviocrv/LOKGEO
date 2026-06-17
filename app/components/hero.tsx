'use client'

import Search from "./search"
import { SearchContext } from "../context/search"
import { useContext, useState, useEffect } from "react"
import { motion } from 'framer-motion'
import { FaWhatsapp, FaCheck, FaMapMarkerAlt } from 'react-icons/fa'
import { fadeIn } from "../../varients"

// ===== DADOS DO CARROSSEL =====
const carouselBanners = [
  {
    link: "https://wa.me/5531995669772?text=Ol%C3%A1!+Quero+alugar+um+carro+para+viajar+com+minha+fam%C3%ADlia",
    img: "https://images.unsplash.com/photo-1689866499892-53e5e619c3fc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Família viajando de carro"
  },
  {
    link: "https://wa.me/5531995669772?text=Ol%C3%A1!+Gostaria+de+saber+mais+sobre+as+proteções+dos+carros",
    img: "https://images.unsplash.com/photo-1560724258-79faddbbd0f0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pessoa planejando viagem"
  },
  {
    link: "https://wa.me/5531995669772?text=Ol%C3%A1!+Quero+fazer+uma+cota%C3%A7%C3%A3o",
    img: "https://images.unsplash.com/photo-1499062918700-389fa905494e?q=80&w=1000&h=1200&fit=crop&auto=format",
    alt: "Chave de carro"
  }
];

export default function Hero() {
  const searchActive = useContext(SearchContext)

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (carouselBanners.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselBanners.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative isolate overflow-hidden bg-[#050810]" id="home">

      {/* ===== BACKGROUND DINÂMICO E VIVO ===== */}
      <div className="absolute inset-0 -z-30 bg-[#050810]" />

      {/* Orbs de Luz Animados para dar vida ao fundo */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -right-[5%] w-[60vw] h-[60vw] rounded-full blur-[120px] pointer-events-none -z-20"
        style={{ background: 'radial-gradient(circle, rgba(250,31,31,0.25) 0%, rgba(255,145,77,0.1) 50%, transparent 70%)' }}
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full blur-[100px] pointer-events-none -z-20"
        style={{ background: 'radial-gradient(circle, rgba(64,123,255,0.15) 0%, transparent 70%)' }}
      />

      {/* Grid sutil de fundo para textura */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at 70% 30%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 70% 30%, black, transparent 80%)',
        }}
      />

      <div className="flex flex-col xl:flex-row w-full min-h-screen">

        {/* ==========================================
            ESQUERDA: CARROSSEL (mantido igual ao original — estático, sem cantos arredondados, sem AnimatePresence)
            ========================================== */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative w-full xl:w-1/2 h-[50vh] xl:h-auto order-2 xl:order-1"
        >
          {/* Container do carrossel ocupando todo o espaço absoluto da sua metade */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            {carouselBanners.map((banner, index) => (
              <a
                key={index}
                href={banner.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {/* object-cover garante que a imagem preencha o espaço sem distorcer */}
                <img
                  src={banner.img}
                  alt={banner.alt}
                  className="w-full h-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {/* Gradiente sutil em cima da imagem para garantir contraste, se necessário */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent xl:hidden z-11"></div>
              </a>
            ))}

            {/* Controles de Navegação (Bolinhas) */}
            {carouselBanners.length > 1 && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {carouselBanners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Ir para o banner ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-8 bg-brand-gradient shadow-[0_0_8px_rgba(255,145,77,0.8)]"
                        : "w-2.5 bg-white/50 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* ==========================================
            DIREITA: CONTEÚDO REFINADO
            ========================================== */}
        <div className="w-full xl:w-1/2 flex flex-col justify-center px-6 sm:px-12 xl:px-20 2xl:px-32 pt-32 pb-20 xl:py-0 order-1 xl:order-2 relative z-10">

          <div className="text-center xl:text-left flex flex-col items-center xl:items-start w-full">
            <motion.div
              variants={fadeIn('down', 0.1)}
              initial="hidden"
              whileInView="show"
              className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[#FF914D] text-xs md:text-sm font-bold uppercase tracking-[0.2em] shadow-xl"
            >
              <FaMapMarkerAlt className="animate-bounce" />
              Contagem & Belo Horizonte
            </motion.div>

            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              whileInView="show"
              className="text-5xl md:text-6xl xl:text-[4rem] 2xl:text-[4.5rem] font-black text-white leading-[1.1] mb-8"
            >
              Alugue com <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">confiança,</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF914D] via-[#FA1F1F] to-[#FF914D] bg-[length:200%_auto] animate-gradient-x">
                dirija com tranquilidade
              </span>
            </motion.h1>

            <motion.div
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView="show"
              className="max-w-[32rem] xl:max-w-none mb-12"
            >
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                Carros de passeio, picapes e caminhonetes para{' '}
                <span className="text-white font-medium border-b border-[#FF914D]/30">locação mensal</span>,
                com <span className="text-white font-medium">quilometragem livre</span>{' '}
                e atendimento personalizado.
              </p>

              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#FF914D]/10 backdrop-blur-sm border border-[#FF914D]/20 rounded-2xl">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[#FF914D] to-[#FA1F1F] shadow-lg shadow-orange-500/20">
                  <FaCheck className="text-[10px] text-white" />
                </div>
                <span className="font-bold text-white text-xs uppercase tracking-widest opacity-90">
                  100% Sem burocracia
                </span>
              </div>
            </motion.div>

            {/* BOTÕES COM EFEITO GLOW */}
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              whileInView="show"
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/5531995669772"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden px-10 h-16 rounded-2xl bg-gradient-to-r from-[#FF914D] to-[#FA1F1F] text-white font-bold flex items-center justify-center gap-3 shadow-[0_10px_30px_-10px_rgba(250,31,31,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(250,31,31,0.7)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]" />
                <FaWhatsapp className="text-2xl" />
                <span>Solicitar cotação</span>
              </a>

              <a
                href="#cars"
                className="px-10 h-16 rounded-2xl text-white font-bold bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center"
              >
                Ver categorias
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* COMPONENTE DE PESQUISA COM ELEVAÇÃO */}
      <div className={`relative z-30 transition-all duration-500 ${searchActive ? 'mt-0' : '-mt-16'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#0b0f1a]/80 backdrop-blur-2xl p-1 rounded-[2.5rem] shadow-2xl border border-white/5">
            <Search />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </section>
  )
}