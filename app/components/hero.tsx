'use client'

import Search from "./search"
import Image from "next/image"
import { SearchContext } from "../context/search"
import { useContext } from "react"
import { motion } from 'framer-motion'
import { FaWhatsapp, FaCheck } from 'react-icons/fa' // Adicionado o FaCheck
import { fadeIn } from "../../varients"

export default function Hero() {
  const searchActive = useContext(SearchContext)
  
  return (
    <section className="min-h-screen xl:min-h-[90vh] bg-white pt-[100px] xl:pt-[140px] pb-16 xl:pb-0 relative overflow-hidden" id="home">
      
      {/* EFEITO DECORATIVO DE FUNDO */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] xl:w-[700px] h-[300px] xl:h-[700px] bg-gradient-brand opacity-[0.03] rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto h-full relative z-10">
        <div className="flex flex-col xl:flex-row justify-between items-center h-full">
          
          {/* LADO ESQUERDO: Textos e Botões */}
          <div className="text-center xl:max-w-xl xl:text-left w-full xl:w-auto mt-8 xl:mt-0 z-10">
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="text-4xl md:text-5xl xl:text-[4rem] font-extrabold text-primary leading-tight xl:leading-[4.5rem] mb-6"
            >
              Alugue com confiança,<br />
              <span className="text-brand-gradient">dirija com tranquilidade</span>
            </motion.h1>

            {/* TEXTO DESCritIVO MODERNIZADO */}
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-[500px] mx-auto xl:mx-0 mb-10 flex flex-col items-center xl:items-start"
            >
              <p className="text-base md:text-lg xl:text-xl text-secondary leading-relaxed mb-5">
                Carros de passeio, picapes e caminhonetes para <span className="font-semibold text-primary">locação mensal</span>, 
                com <span className="font-semibold text-primary">quilometragem livre</span> em todo o Brasil e atendimento direto pelo WhatsApp.
              </p>
              
              {/* Badge "Sem Burocracia" */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/10">
                  <FaCheck className="text-[10px] text-accent" />
                </div>
                <span className="font-bold text-primary text-sm uppercase tracking-wider">
                  100% Sem burocracia
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start"
            >
              <a
                href="https://wa.me/5531995669772"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brand-gradient px-8 py-4 h-14 rounded-xl text-sm md:text-base font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <FaWhatsapp className="text-lg" />
                Solicitar cotação
              </a>

              <a
                href="#cars"
                className="btn px-8 py-4 h-14 rounded-xl text-sm md:text-base font-bold text-primary bg-white border-2 border-gray-200 hover:border-accent hover:text-accent shadow-sm hover:shadow-md transition-all flex items-center justify-center whitespace-nowrap"
              >
                Ver categorias
              </a>
            </motion.div>
          </div>

          {/* LADO DIREITO: Imagem do Carro */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full xl:w-[55%] h-[350px] md:h-[31.25rem] xl:h-[43.75rem] mt-10 xl:mt-0 flex justify-center items-center z-0"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] xl:w-[550px] h-[250px] md:h-[400px] xl:h-[550px] bg-accent/5 rounded-full blur-3xl -z-10"></div>

            <Image
              src={'/images/hero/Fiat.svg'}
              fill
              priority
              style={{ objectFit: "contain", objectPosition: "center" }}
              className="xl:scale-110 drop-shadow-2xl" 
              alt="Veículo disponível para locação"
            />
          </motion.div>

        </div>
      </div>

      {/* COMPONENTE DE PESQUISA */}
      {searchActive ? (
        <div className="absolute top-[80px] z-20 w-full max-w-[1920px]">
          <Search />
        </div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto relative z-20 px-4 xl:px-0">
          <Search />
        </div>
      )}
    </section>
  )
}