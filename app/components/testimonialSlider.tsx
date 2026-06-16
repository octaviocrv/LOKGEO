'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import { FaQuoteLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients'

const testimonialData = [
  {
    message:
      'Aluguei pra viajar com a família no feriado e foi tudo tranquilo. Carro limpo, revisado e o atendimento pelo WhatsApp foi rápido demais. Recomendo!',
    avatar: '/images/testimonial/avatar.png',
    name: 'Mariana Souza',
    job: 'Contagem, MG',
  },
  {
    message:
      'Preciso de carro com frequência pro trabalho e a Lokgeo nunca me deixou na mão. Preço justo e sem aquela burocracia das locadoras grandes.',
    avatar: '/images/testimonial/avatar.png',
    name: 'Rafael Oliveira',
    job: 'Representante comercial',
  },
  {
    message:
      'Atendimento de verdade, gente que te trata bem. Aluguei pra um fim de semana fora e voltaria a alugar com certeza. Muito conforto e segurança.',
    avatar: '/images/testimonial/avatar.png',
    name: 'Juliana Pereira',
    job: 'Belo Horizonte, MG',
  },
]

export default function TestimonialSlider() {
  return (
    <section
      // CORREÇÃO: Removido o 'mb' e usado apenas 'pb' (Padding Bottom) bem grande. 
      // Isso força o fundo cinza a ir até lá embaixo, separando as bolinhas do Footer escuro.
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#f7f8fa] pt-24 pb-32 xl:pt-32 xl:pb-40"
      id="depoimentos"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-red/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-orange/5 blur-3xl" />

      <div className="container relative mx-auto px-4">
        
        <div className="mb-14 text-center xl:mb-16">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Depoimentos
          </span>

          <h2 className="mb-4 text-3xl font-bold text-primary xl:text-5xl">
            Veja o que dizem nossos{' '}
            <span className="text-brand-gradient">clientes</span>
          </h2>

          <p className="mx-auto max-w-[600px] text-base text-secondary xl:text-lg">
            Experiências reais de quem escolheu a Lokgeo para alugar com
            confiança e rodar com tranquilidade.
          </p>
        </div>

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            // CORREÇÃO 2: Adicionado !pb-16 para garantir que o Swiper tenha espaço interno para as bolinhas não sumirem
            className="testimonial-swiper w-full !pb-16"
          >
            {testimonialData.map((person, index) => {
              const { message, avatar, name, job } = person
              return (
                // Adicionado um pequeno pb-4 aqui para a sombra do card não ser cortada
                <SwiperSlide key={index} className="!h-auto pb-4">
                  <div className="flex h-full items-center justify-center px-1 sm:px-4">
                    <div className="relative flex w-full h-full max-w-[820px] flex-col items-center justify-between rounded-3xl border border-gray-100 bg-white px-6 py-10 text-center shadow-[0_24px_60px_-24px_rgba(16,24,40,0.18)] sm:px-10 xl:px-14 xl:py-12">
                      
                      <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg shadow-accent/20">
                        <FaQuoteLeft className="text-xl" />
                      </div>

                      <p className="mb-9 max-w-[680px] text-lg font-medium leading-relaxed text-primary sm:text-xl xl:text-2xl flex-grow">
                        {message}
                      </p>

                      <div className="mb-7 h-px w-12 bg-gradient-brand opacity-60" />

                      <div className="flex flex-col items-center gap-3">
                        <div className="relative h-[68px] w-[68px]">
                          <Image
                            src={avatar}
                            fill
                            sizes="68px"
                            className="rounded-full object-cover shadow-md ring-4 ring-white"
                            alt={`Foto de ${name}`}
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-primary">
                            {name}
                          </h4>
                          <span className="text-sm font-medium text-secondary">
                            {job}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        /* CORREÇÃO 3: Força as bolinhas de paginação a ficarem exatamente na base do Swiper (que agora tem pb-16) */
        .testimonial-swiper .swiper-pagination {
          bottom: 0px !important; 
        }
        .testimonial-swiper .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          background-color: #d1d5db;
          opacity: 1;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background-color: #fa1f1f;
        }
      `}</style>
    </section>
  )
}