import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px', // Ajustei de 1824px para 1024px (padrão de telas grandes), caso tenha sido erro de digitação.
      xl: '1280px', // Ajustei de 1300px para o padrão Tailwind (1280px) para melhor responsividade.
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Tons neutros para base e textos (Garantem a elegância e modernidade)
        primary: "#101828",   // Excelente para Títulos (Headings) e Fundos escuros
        secondary: '#667085', // Excelente para subtítulos e textos descritivos
        body: '#dedede',      // Cor de fundo ou bordas

        // Cores Exatas da Marca LOKGEO
        brand: {
          red: '#fa1f1f',
          orange: '#ff914d',
        },

        // Destaque Principal (Botões principais, links de ação)
        accent: {
          DEFAULT: '#fa1f1f', // Vermelho da Logo
          hover: '#d91818'    // Tom mais escuro para o efeito de hover
        },

        // Destaque Secundário (Tags, ícones, detalhes visuais)
        highlight: {
          DEFAULT: '#ff914d', // Laranja da Logo
          hover: '#e67c35'    // Tom mais escuro do laranja para hover
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        
        // NOVO: Gradiente moderno com as cores da LOKGEO
        'gradient-brand': 'linear-gradient(to right, #fa1f1f, #ff914d)',
      },
    },
  },
  plugins: [],
}
export default config