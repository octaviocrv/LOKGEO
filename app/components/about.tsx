'use client'

import {
    MdOutlineCalendarMonth,
    MdOutlineVerifiedUser,
    MdOutlineDirectionsCar,
    MdArrowForward
} from 'react-icons/md'
import CountUp from "react-countup"
import { useInView } from 'react-intersection-observer'
import Image from "next/image"
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { fadeIn } from '../../varients'

const About = () => {
    const [ref, inView] = useInView({ threshold: 0.3 })

    return (
        <section className="relative py-24 sm:py-32 bg-[#050810] overflow-hidden" id="about" ref={ref}>
            
            {/* Elementos de Fundo */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF914D]/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">

                    {/* COLUNA DA IMAGEM COM MOLDURA MODERNA */}
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex-1 w-full relative"
                    >
                        {/* Decoração atrás da imagem */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-[#FF914D]/30 rounded-tl-3xl" />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-[#FF914D]/30 rounded-br-3xl" />
                        
                        <div className="relative group rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                            <Image
                                className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-110"
                                src={'/images/about/pessoaalugandocarro.jpg'}
                                width={800}
                                height={600}
                                alt="Cliente feliz alugando veículo na Lokgeo"
                            />
                            {/* Overlay Gradiente na Imagem */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/80 via-transparent to-transparent opacity-60" />

                        </div>
                    </motion.div>

                    {/* COLUNA DE TEXTOS E ESTATÍSTICAS */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.div
                            variants={fadeIn('left', 0.4)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="w-full"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF914D]/10 border border-[#FF914D]/20 text-[#FF914D] text-xs font-bold uppercase tracking-[0.2em] mb-6">
                                Por que nos escolher ?
                            </span>
                            
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-8 leading-[1.1]">
                                Locação de veículos <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF914D] to-[#FA1F1F]">
                                    sem complicação
                                </span>
                            </h2>

                            <p className="text-gray-400 text-lg xl:text-xl mb-12 leading-relaxed max-w-2xl">
                                Escolha, alugue e dirija com tranquilidade. Oferecemos uma experiência premium com <span className="text-white font-semibold">quilometragem livre</span> e atendimento humanizado.
                            </p>

                            {/* ESTATÍSTICAS ESTILIZADAS */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 w-full">
                                {[
                                    { icon: MdOutlineDirectionsCar, end: 3, label: "Categorias", suffix: "" },
                                    { icon: MdOutlineCalendarMonth, end: 3, label: "Anos de Mercado", suffix: "+" },
                                    { icon: MdOutlineVerifiedUser, end: 100, label: "Frota Revisada", suffix: "%" }
                                ].map((stat, idx) => (
                                    <div key={idx} className="relative group p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-[#FF914D]/30 transition-all duration-300">
                                        <div className="w-12 h-12 bg-[#FF914D]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <stat.icon className="text-2xl text-[#FF914D]" />
                                        </div>
                                        <div className="text-4xl font-black text-white mb-1">
                                            {inView ? <CountUp start={0} end={stat.end} duration={2.5} delay={0.2 * idx} /> : "0"}{stat.suffix}
                                        </div>
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <a
                                    href="https://wa.me/5531995669772"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative overflow-hidden px-10 py-5 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold flex items-center justify-center gap-3 shadow-[0_12px_32px_-12px_rgba(37,211,102,0.7)] hover:shadow-[0_16px_40px_-10px_rgba(37,211,102,0.8)] transition-all duration-300 hover:-translate-y-1"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 skew-x-[-20deg]" />
                                    <span className="relative flex items-center gap-2">
                                        <FaWhatsapp className="text-2xl" />
                                        <span>Falar no WhatsApp</span>
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
