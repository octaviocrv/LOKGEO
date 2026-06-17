'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { fadeIn } from '../../varients'

export default function ContactCards() {
//   return (
//     <section className="relative isolate overflow-hidden py-20 xl:py-24" aria-label="Canais de contato">
//       <div
//         className="absolute inset-0 -z-20"
//         style={{ background: 'linear-gradient(180deg, #0c111c 0%, #101828 55%, #0b0f1a 100%)' }}
//       />

//       <div
//         className="absolute -left-[8%] top-[8%] w-[45vw] max-w-[30rem] aspect-square -z-10 rounded-full pointer-events-none"
//         style={{ background: 'radial-gradient(circle, rgba(255,145,77,0.14) 0%, rgba(255,145,77,0) 68%)' }}
//       />

//       <div className="container mx-auto px-4 xl:px-0">
//         <motion.div
//           variants={fadeIn('up', 0.2)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           className="w-full flex flex-col items-center"
//         >
//           <div className="text-center mb-10">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
//               Prontos para rodar com tranquilidade?
//             </h2>
//             <p className="text-gray-400 text-base md:text-lg">
//               Escolha o seu canal preferido e solicite a sua reserva agora mesmo.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[68.75rem]">
//             <div className="group relative bg-white/[0.04] backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-white/10 hover:border-accent/40 hover:bg-white/[0.06] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
//               <div className="absolute top-0 inset-x-0 h-1 bg-gradient-brand opacity-90" />
//               <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
//                 <FaPhoneAlt className="text-accent text-2xl" />
//               </div>
//               <h3 className="text-white font-bold text-lg mb-1.5">Telefone Fixo</h3>
//               <p className="text-gray-400 text-sm md:text-base">(31) 2567-0029</p>
//             </div>

//             <div className="group relative bg-white/[0.04] backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-white/10 hover:border-[#25D366]/40 hover:bg-white/[0.06] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
//               <div className="absolute top-0 inset-x-0 h-1 bg-gradient-brand opacity-90" />
//               <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#25D366]/10 mb-4 group-hover:bg-[#25D366]/20 transition-colors">
//                 <FaWhatsapp className="text-[#25D366] text-3xl" />
//               </div>
//               <h3 className="text-white font-bold text-lg mb-1.5">WhatsApp / Celular</h3>
//               <p className="text-gray-400 text-sm md:text-base">(31) 99566-9772</p>
//             </div>

//             <div className="group relative bg-white/[0.04] backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-white/10 hover:border-accent/40 hover:bg-white/[0.06] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
//               <div className="absolute top-0 inset-x-0 h-1 bg-gradient-brand opacity-90" />
//               <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
//                 <FaMapMarkerAlt className="text-accent text-2xl" />
//               </div>
//               <h3 className="text-white font-bold text-lg mb-1.5">Endereço Físico</h3>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 Rua Amapa, 163<br />
//                 Bairro Amazonas
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
}
