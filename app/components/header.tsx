'use client'

import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import SearchMobile from './searchMobile'
import { useMediaQuery } from 'react-responsive'
import { BiMenuAltRight, BiX } from 'react-icons/bi'
import { FaWhatsapp } from 'react-icons/fa'
import { SearchContext } from '../context/search'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const { setSearchActive } = useContext(SearchContext)
  const [header, setHeader] = useState(false)
  const [nav, setNav] = useState(false)

  const desktopMode = useMediaQuery({ query: '(min-width: 1388px)' })

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 40)
      setSearchActive(window.scrollY > 800)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setSearchActive])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
        ${
          header
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] py-3' 
            : 'bg-transparent py-6'
        }
      `}
    >
      <div className="container mx-auto px-6 xl:px-12 flex justify-between items-center w-full max-w-[1920px]">
        
        {/* LADO ESQUERDO: LOGO COM EFEITO DE ESCALA */}
        <Link to="home" smooth={desktopMode} spy={true} className="cursor-pointer flex-shrink-0 group">
          <div className="relative">
            <Image
              src="/icons/logo lokgeo 1 (1).svg"
              width={100}
              height={64}
              alt="Lokgeo Locação de Veículos"
              priority
              className={`transition-all duration-500 group-hover:scale-110 ${header ? 'brightness-0' : 'brightness-100'}`}
            />
            {/* Brilho sutil atrás da logo quando no topo */}
            {!header && (
              <div className="absolute inset-0 bg-white/20 blur-2xl -z-10 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}
          </div>
        </Link>

        {/* CENTRO: NAVEGAÇÃO DESKTOP REFINADA */}
        <nav className="hidden xl:flex items-center gap-x-10">
          {[
            { to: 'home', label: 'Início' },
            { to: 'cars', label: 'Frota' },
            { to: 'about', label: 'Sobre' },
            { to: 'why', label: 'Diferenciais' },
            { to: 'depoimentos', label: 'Depoimentos' },
            { to: 'contact', label: 'Contato' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeClass="active-link"
              className={`cursor-pointer font-semibold text-[14px] uppercase tracking-widest transition-all duration-300 relative group
                ${header ? 'text-gray-800 hover:text-black' : 'text-white/80 hover:text-white'}
              `}
              smooth={desktopMode}
              spy={true}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-0 w-0 h-[2px] rounded-full transition-all duration-500 group-hover:w-full
                ${header ? 'bg-gradient-to-r from-[#FF914D] to-[#FA1F1F]' : 'bg-white'}
              `}></span>
            </Link>
          ))}
        </nav>

        {/* LADO DIREITO: BOTÃO DE RESERVA PREMIUM */}
        <div className="flex items-center gap-6">
          
          <a
            href="https://wa.me/5531995669772?text=Olá,%20gostaria%20de%20solicitar%20uma%20reserva!"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex group relative items-center justify-center gap-3 overflow-hidden px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF914D] to-[#FA1F1F] text-white font-bold text-sm uppercase tracking-widest shadow-[0_10px_20px_-5px_rgba(250,31,31,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(250,31,31,0.6)] transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            {/* Efeito de brilho que percorre o botão */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
            
            <FaWhatsapp className="text-xl animate-pulse" />
            <span className="relative z-10">Reservar Agora</span>
          </a>

          {/* ÍCONE HAMBÚRGUER (MOBILE) COM ANIMAÇÃO */}
          <div
            onClick={() => setNav(!nav)}
            className={`cursor-pointer xl:hidden transition-all duration-300 p-2 rounded-xl
              ${header ? 'bg-gray-100 text-gray-900' : 'bg-white/10 text-white backdrop-blur-md border border-white/10'}
            `}
          >
            {nav ? <BiX className="text-3xl" /> : <BiMenuAltRight className="text-3xl" />}
          </div>
        </div>
      </div>

      {/* MENU MOBILE COM DESIGN DE CARTÃO FLUTUANTE MODERNO */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full px-4 mt-4 xl:hidden"
          >
            <div className="bg-white/95 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[2.5rem] overflow-hidden p-8 flex flex-col gap-8">
              <nav className="flex flex-col gap-2">
                {[
                  { to: 'home', label: 'Início' },
                  { to: 'cars', label: 'Frota' },
                  { to: 'about', label: 'Sobre' },
                  { to: 'why', label: 'Diferenciais' },
                  { to: 'depoimentos', label: 'Depoimentos' },
                  { to: 'contact', label: 'Contato' },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="cursor-pointer text-gray-500 font-bold text-xl py-3 px-4 rounded-2xl hover:bg-gray-50 hover:text-black transition-all flex justify-between items-center group"
                    smooth={desktopMode}
                    spy={true}
                    onClick={() => setNav(false)}
                  >
                    {item.label}
                    <div className="w-2 h-2 rounded-full bg-[#FF914D] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </nav>

              <div className="h-[1px] w-full bg-gray-100"></div>

              <a
                href="https://wa.me/5531995669772?text=Olá,%20gostaria%20de%20solicitar%20uma%20reserva!"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-gradient-to-r from-[#FF914D] to-[#FA1F1F] rounded-[1.5rem] py-5 text-white font-black text-lg shadow-xl shadow-orange-500/30 flex items-center justify-center gap-3 active:scale-95 transition-all"
                onClick={() => setNav(false)}
              >
                <FaWhatsapp className="text-2xl" />
                RESERVAR AGORA
              </a>

              <div className="w-full">
                <SearchMobile />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .active-link {
          color: #FF914D !important;
        }
      `}</style>
    </header>
  )
}
