'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { fadeIn } from '../../varients'
import Image from "next/image"

// Array de marcas: Facilita a manutenção e deixa o código limpo (Padrão Expert)
const brands = [
  { src: '/icons/brands/opt/1.png', alt: 'Marca 1' },
  { src: '/icons/brands/2.svg', alt: 'Marca 2' },
  { src: '/icons/brands/opt/3.png', alt: 'Marca 3' },
  { src: '/icons/brands/opt/4.png', alt: 'Marca 4' },
  { src: '/icons/brands/opt/5.png', alt: 'Marca 5' },
  { src: '/icons/brands/opt/6.png', alt: 'Marca 6' },
]

export default function Brands() {
  return (
    // Adicionado border-y e um padding responsivo para dar um respiro elegante
    <section className='py-12 xl:py-16 bg-orange-50 border-y border-gray-100 flex flex-col justify-center overflow-hidden'>
      <div className="container mx-auto px-4">
        
        {/* Título sutil para ancorar a seção */}
        <motion.p
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center text-xs md:text-sm font-bold text-gray-400 uppercase tracking-[4px] mb-8 xl:mb-10"
        >
          Trabalhamos com as melhores marcas
        </motion.p>

        {/* Grid de Marcas com animação */}
        <motion.div 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          // Ajustado para grid-cols-2 no mobile (para não esmagar os logos) e flex no desktop
          className='grid grid-cols-2 md:grid-cols-3 xl:flex xl:flex-wrap gap-8 xl:gap-16 justify-center items-center'
        >
          {brands.map((brand, index) => (
            <div 
              key={index} 
              // EFEITO PREMIUM: Opacidade reduzida + escala de cinza que volta ao normal no hover
              className="flex justify-center items-center opacity-50 hover:opacity-100 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <Image 
                src={brand.src} 
                width={80} // Tamanho levemente aumentado para melhor leitura
                height={80} 
                alt={brand.alt} 
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://wa.me/5531995669772"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-brand-gradient w-full max-w-[280px] h-14 rounded-xl text-sm shadow-md hover:shadow-lg flex justify-center items-center gap-2 font-bold text-white uppercase tracking-wider"
          >
            <FaWhatsapp className="text-lg" />
            Solicitar cotação
          </a>
        </motion.div>

      </div>
    </section>
  )
}