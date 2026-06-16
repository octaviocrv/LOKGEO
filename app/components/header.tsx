'use client'

import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import SearchMobile from './searchMobile'
import { useMediaQuery } from 'react-responsive'
import { BiMenuAltRight, BiX } from 'react-icons/bi'
import { FaWhatsapp } from 'react-icons/fa' // Importado o ícone do WhatsApp
import { SearchContext } from '../context/search'

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
      className={`${
        header ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent shadow-none py-5'
      } fixed w-full max-w-[1920px] left-1/2 -translate-x-1/2 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 xl:px-0 flex flex-col xl:flex-row xl:items-center xl:justify-between">
        
        <div className="flex justify-between items-center w-full xl:w-auto">
          <Link to="home" smooth={desktopMode} spy={true} className="cursor-pointer">
            <Image 
              src="/icons/logo lokgeo 1 (1).svg" 
              width={88} 
              height={56} 
              alt="Lokgeo Locação de Veículos" 
              className="hover:opacity-90 transition-opacity"
            />
          </Link>

          <div onClick={() => setNav(!nav)} className="cursor-pointer xl:hidden text-primary hover:text-accent transition-colors">
            {nav ? <BiX className="text-4xl" /> : <BiMenuAltRight className="text-4xl" />}
          </div>
        </div>

        <nav
          className={`${
            nav ? 'max-h-[500px] py-8 opacity-100 shadow-inner mt-4 xl:shadow-none xl:mt-0' : 'max-h-0 opacity-0 xl:opacity-100 xl:max-h-max'
          } flex flex-col bg-white w-full gap-y-6 overflow-hidden xl:font-medium xl:flex-row xl:items-center xl:w-max xl:gap-x-8 xl:bg-transparent transition-all duration-300 text-center xl:text-left text-sm xl:text-base font-bold text-primary rounded-b-2xl xl:rounded-none`}
        >
          <Link to="home" activeClass="text-accent" className="cursor-pointer hover:text-accent transition-colors duration-200" smooth={desktopMode} spy={true} onClick={() => setNav(false)}>Início</Link>
          <Link to="cars" activeClass="text-accent" className="cursor-pointer hover:text-accent transition-colors duration-200" smooth={desktopMode} spy={true} onClick={() => setNav(false)}>Frota</Link>
          <Link to="about" activeClass="text-accent" className="cursor-pointer hover:text-accent transition-colors duration-200" smooth={desktopMode} spy={true} onClick={() => setNav(false)}>Sobre</Link>
          <Link to="why" activeClass="text-accent" className="cursor-pointer hover:text-accent transition-colors duration-200" smooth={desktopMode} spy={true} onClick={() => setNav(false)}>Diferenciais</Link>
          <Link to="depoimentos" activeClass="text-accent" className="cursor-pointer hover:text-accent transition-colors duration-200" smooth={desktopMode} spy={true} onClick={() => setNav(false)}>Depoimentos</Link>
          <Link to="contact" activeClass="text-accent" className="cursor-pointer hover:text-accent transition-colors duration-200" smooth={desktopMode} spy={true} onClick={() => setNav(false)}>Contato</Link>

          {/* CTA DESKTOP: Mantém as cores da Lokgeo, mas adiciona o ícone do WhatsApp para guiar a expectativa do usuário */}
          <a
            href="https://wa.me/5531995669772?text=Olá,%20gostaria%20de%20solicitar%20uma%20reserva!"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center justify-center gap-2 btn btn-brand-gradient rounded-xl px-7 h-12 text-sm font-bold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all text-white"
          >
            <FaWhatsapp className="text-xl" />
            Reservar agora
          </a>

          {/* CTA MOBILE */}
          <a
            href="https://wa.me/5531995669772?text=Olá,%20gostaria%20de%20solicitar%20uma%20reserva!"
            target="_blank"
            rel="noopener noreferrer"
            className="xl:hidden btn btn-brand-gradient rounded-xl px-8 h-14 text-sm font-bold shadow-md mx-auto w-full max-w-[250px] flex items-center justify-center gap-2 text-white"
            onClick={() => setNav(false)}
          >
            <FaWhatsapp className="text-2xl" />
            Reservar agora
          </a>

          <div className="xl:hidden w-full flex justify-center mt-2">
            <SearchMobile />
          </div>
        </nav>
      </div>
    </header>
  )
}