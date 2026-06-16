'use client'

import Image from 'next/image'
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    // Reduzido o padding vertical (de pt-20 pb-10 para pt-12 pb-6)
    <footer id="contact" className="bg-primary text-white pt-12 pb-6 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-brand"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Reduzido o gap no mobile e o padding bottom antes da linha divisória (pb-8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          
          {/* COLUNA 1: Logo e Descrição */}
          <div className="flex flex-col">
            <Image
              src="/icons/logo lokgeo 1 (1).svg"
              width={120} // Logo levemente menor para acompanhar o novo tamanho
              height={68}
              alt="Lokgeo Locação de Veículos"
              className="mb-3"
            />
            <p className="text-white/75 text-sm leading-relaxed max-w-[320px]">
              <span className="block text-white font-semibold mb-1">
                Alugue com confiança, dirija com tranquilidade.
              </span>
              Locação mensal de carros, picapes e caminhonetes com quilometragem livre em todo o Brasil, para empresas e famílias.
            </p>
          </div>

          {/* COLUNA 2: Navegação */}
          <div>
            {/* Margem inferior do título reduzida (mb-4) */}
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Navegação</h3>
            {/* Gap entre links reduzido (gap-2) */}
            <div className="flex flex-col gap-2 text-white/70 text-sm font-medium">
              <a href="#home" className="hover:text-white hover:translate-x-1 transition-all w-max">Início</a>
              <a href="#cars" className="hover:text-white hover:translate-x-1 transition-all w-max">Frota</a>
              <a href="#about" className="hover:text-white hover:translate-x-1 transition-all w-max">Sobre</a>
              <a href="#why" className="hover:text-white hover:translate-x-1 transition-all w-max">Diferenciais</a>
              <a href="#depoimentos" className="hover:text-white hover:translate-x-1 transition-all w-max">Depoimentos</a>
            </div>
          </div>

          {/* COLUNA 3: Contato */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contato</h3>
            {/* Gap reduzido (gap-3) */}
            <div className="flex flex-col gap-3 text-white/70 text-sm">
              <a
                href="https://wa.me/5531995669772"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                  <FaWhatsapp className="text-accent text-base" />
                </div>
                (31) 99566-9772
              </a>
              <a
                href="tel:+5531995669772"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                  <FaPhoneAlt className="text-accent text-sm" />
                </div>
                Ligar agora
              </a>
              <div className="flex items-start gap-3 mt-1">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-accent text-sm" />
                </div>
                <span className="mt-1.5 leading-relaxed">Atendimento em MG e locação para todo o Brasil</span>
              </div>
            </div>
          </div>

          {/* COLUNA 4: Call to Action Final */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Fale com a Lokgeo</h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Receba sua cotação no WhatsApp com atendimento rápido, humano e sem burocracia.
            </p>
            <a
              href="https://wa.me/5531995669772"
              target="_blank"
              rel="noopener noreferrer"
              // Botão ligeiramente mais fino (h-12 em vez de h-14) para acompanhar o layout compacto
              className="btn btn-brand-gradient w-full h-12 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all text-sm uppercase tracking-wider text-white"
            >
              <FaWhatsapp className="text-xl" />
              Solicitar Cotação
            </a>
          </div>
        </div>

        {/* BASE DO FOOTER: Espaçamento superior reduzido (pt-6) */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-xs font-medium">
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