'use client'

import {
    MdOutlineCalendarMonth,
    MdOutlineVerifiedUser,
    MdOutlineDirectionsCar
} from 'react-icons/md'
import CountUp from "react-countup"
import { useInView } from 'react-intersection-observer'
import Image from "next/image"
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { fadeIn } from '../../varients'

const About = () => {
    const [ref, inView] = useInView({ threshold: 0.5 })

    return (
        <section className="py-16 sm:py-24 xl:py-28 bg-gray-50 overflow-hidden" id="about" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12 lg:gap-16 xl:gap-24">

                    {/* COLUNA DA IMAGEM */}
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                        className="flex-1 w-full relative"
                    >
                        <div className="absolute -inset-2 bg-gradient-brand opacity-20 rounded-3xl blur-md"></div>

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5">
                            <Image
                                className="object-cover w-full h-auto"
                                src={'/images/about/pessoaalugandocarro.jpg'}
                                width={800}
                                height={500}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                alt="Cliente feliz alugando veículo na Lokgeo"
                            />
                        </div>
                    </motion.div>

                    {/* COLUNA DE TEXTOS E ESTATÍSTICAS */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.div
                            variants={fadeIn('left', 0.4)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.4 }}
                            className="w-full max-w-[550px]"
                        >
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6 leading-tight">
                                Locação de veículos <br />
                                <span className="text-brand-gradient">sem complicação</span>
                            </h2>

                            <p className="text-secondary text-base xl:text-lg mb-8 sm:mb-10 leading-relaxed">
                                Escolha, alugue e dirija com tranquilidade. Frota revisada,
                                quilometragem livre em todo o território nacional e atendimento
                                direto, sem call center. Aqui você fala com quem resolve.
                            </p>

                            <div className="grid grid-cols-3 gap-2 xl:gap-4 mb-8 sm:mb-10 w-full">

                                {/* Item 1 */}
                                <div className="flex flex-col items-center lg:items-start">
                                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                                        <MdOutlineDirectionsCar className="text-xl sm:text-2xl text-accent" />
                                    </div>
                                    <div className="text-2xl sm:text-3xl xl:text-4xl font-black text-primary mb-1">
                                        {inView ? <CountUp start={0} end={3} duration={2} delay={0.2} /> : "0"}
                                    </div>
                                    <div className="text-[10px] sm:text-[11px] xl:text-xs font-bold text-secondary uppercase tracking-wider">
                                        Categorias <br className="hidden lg:block" /> de veículos
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="flex flex-col items-center lg:items-start border-l border-gray-200 pl-2 xl:pl-8">
                                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                                        <MdOutlineCalendarMonth className="text-xl sm:text-2xl text-accent" />
                                    </div>
                                    <div className="text-2xl sm:text-3xl xl:text-4xl font-black text-primary mb-1">
                                        {inView ? <CountUp start={0} end={3} duration={2} delay={0.4} /> : "0"}+
                                    </div>
                                    <div className="text-[10px] sm:text-[11px] xl:text-xs font-bold text-secondary uppercase tracking-wider">
                                        Anos no <br className="hidden lg:block" /> mercado
                                    </div>
                                </div>

                                {/* Item 3 */}
                                <div className="flex flex-col items-center lg:items-start border-l border-gray-200 pl-2 xl:pl-8">
                                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                                        <MdOutlineVerifiedUser className="text-xl sm:text-2xl text-accent" />
                                    </div>
                                    <div className="text-2xl sm:text-3xl xl:text-4xl font-black text-primary mb-1">
                                        {inView ? <CountUp start={0} end={100} duration={2} delay={0.6} /> : "0"}%
                                    </div>
                                    <div className="text-[10px] sm:text-[11px] xl:text-xs font-bold text-secondary uppercase tracking-wider">
                                        Frota <br className="hidden lg:block" /> revisada
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/5531995669772"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-brand-gradient w-full md:w-auto px-10 py-4 h-auto text-base inline-flex items-center justify-center gap-2 rounded-xl uppercase font-bold text-white tracking-widest shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                            >
                                <FaWhatsapp className="text-lg" />
                                Solicitar cotação
                            </a>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About