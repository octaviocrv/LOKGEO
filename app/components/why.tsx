'use client'

import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'
import { MdHandshake, MdKey, MdTrendingUp } from 'react-icons/md'

export default function Why() {
  return (
    // Espaçamento padronizado para dar respiro à página
    <section className="py-16 sm:py-24 xl:py-28 bg-white" id="why">
      <div className="container mx-auto px-4">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }} // once: true evita que fique piscando ao rolar a página
          className="text-center mb-12 xl:mb-16"
        >
          <h2 className="text-3xl xl:text-5xl font-bold text-primary mb-6">
            Segurança e conforto para a sua <span className="text-accent">família</span>
          </h2>
          <p className="text-secondary text-base xl:text-lg max-w-[700px] mx-auto leading-relaxed">
            Carros revisados, limpos e prontos para a estrada. Aqui você aluga com
            tranquilidade e leva quem você ama com toda a segurança que sua viagem merece.
          </p>
        </motion.div>

        {/* IMAGEM DE DESTAQUE */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="hidden md:flex justify-center mb-16 xl:mb-20"
        >
          <div className="relative w-full max-w-[1060px] h-[420px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5">
            <Image
              src={'/images/why/familiafeliz.jpg'}
              fill
              style={{ objectFit: 'cover' }}
              alt="Família viajando com tranquilidade em carro alugado na Lokgeo"
            />
          </div>
        </motion.div>

        {/* GRID DE DIFERENCIAIS (Transformados em Cards Modernos) */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          // Ajustado para grid verdadeiro ao invés de flex, mantendo os cards todos com a mesma altura
          className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-[30px]"
        >
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
            {/* Ícone com fundo suave */}
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
              <MdKey className="text-4xl text-accent group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Aluguel simples e rápido</h3>
            {/* Texto agora sempre visível */}
            <p className="text-secondary leading-relaxed">
              Reserva descomplicada pelo WhatsApp e retirada ágil. Menos burocracia,
              mais tempo com a sua família.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
              <MdTrendingUp className="text-4xl text-accent group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Veículos novos e revisados</h3>
            <p className="text-secondary leading-relaxed">
              Frota moderna e com manutenção em dia, para você viajar com a
              segurança e o conforto que a sua família precisa.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
              <MdHandshake className="text-4xl text-accent group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Atendimento flexível</h3>
            <p className="text-secondary leading-relaxed">
              Você fala direto com a gente, sem call center. Atendimento humano
              para resolver o que você precisar, na hora.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}