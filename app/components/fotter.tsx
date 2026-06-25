'use client'

import Image from 'next/image'
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const CONTACT = {
  whatsapp: '5531995669772',
  phones: ['+5531995669772', '+553125670069'],
  labels: ['(31) 99566-9772', '(31) 2567-0069'],
  address: 'Rua Japurá, 511, Contagem - MG',
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-primary text-white pt-8 pb-4 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-brand"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Grade: 2 colunas no mobile (logo ocupa faixa inteira), 4 no xl */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-5 pb-5 border-b border-white/10">

          {/* COLUNA 1: Logo e Descrição — full width no mobile */}
          <div className="col-span-2 xl:col-span-1 flex flex-col">
            <Image
              src="/icons/logo lokgeo 1 (1).svg"
              width={90}
              height={52}
              alt="Lokgeo Locação de Veículos"
              className="mb-2"
            />
            <p className="text-white/75 text-xs leading-relaxed max-w-[320px]">
              <span className="block text-white font-semibold mb-0.5">
                Alugue com confiança, dirija com tranquilidade.
              </span>
              Locação mensal de carros, picapes e caminhonetes com quilometragem livre, para empresas e famílias.
            </p>
          </div>

          {/* COLUNA 2: Navegação */}
          <div>
            <h3 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Navegação</h3>
            <div className="flex flex-col gap-1.5 text-white/70 text-xs font-medium">
              <a href="#home" className="hover:text-white hover:translate-x-1 transition-all w-max">Início</a>
              <a href="#cars" className="hover:text-white hover:translate-x-1 transition-all w-max">Frota</a>
              <a href="#about" className="hover:text-white hover:translate-x-1 transition-all w-max">Sobre</a>
              <a href="#why" className="hover:text-white hover:translate-x-1 transition-all w-max">Diferenciais</a>
              <a href="#depoimentos" className="hover:text-white hover:translate-x-1 transition-all w-max">Depoimentos</a>
            </div>
          </div>

          {/* COLUNA 3: Contato */}
          <div>
            <h3 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Contato</h3>
            <div className="flex flex-col gap-2 text-white/70 text-xs">
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                  <FaWhatsapp className="text-accent text-sm" />
                </div>
                {CONTACT.labels[0]}
              </a>
              <a
                href={`tel:${CONTACT.phones[0]}`}
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                  <FaPhoneAlt className="text-accent text-xs" />
                </div>
                {CONTACT.labels[0]}
              </a>
              <a
                href={`tel:${CONTACT.phones[1]}`}
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                  <FaPhoneAlt className="text-accent text-xs" />
                </div>
                {CONTACT.labels[1]}
              </a>
              <div className="flex items-start gap-2 mt-0.5">
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-accent text-xs" />
                </div>
                <span className="mt-1.5 leading-relaxed">{CONTACT.address}</span>
              </div>
            </div>
          </div>

          {/* COLUNA 4: Call to Action — visível apenas em xl */}
          <div className="hidden xl:block">
            <h3 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Fale com a Lokgeo</h3>
            <p className="text-white/70 text-xs mb-3 leading-relaxed">
              Receba sua cotação no WhatsApp com atendimento rápido, humano e sem burocracia.
            </p>
          </div>
        </div>

        {/* BASE DO FOOTER */}
        <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-white/50 text-[11px] font-medium">
          <div className="text-center md:text-left">
            © {year} Lokgeo Locação de Veículos. Todos os direitos reservados.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
