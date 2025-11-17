import { Building2, Rocket, Sparkles, LineChart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Companies() {
  const companies = [
    {
      icon: Rocket,
      name: 'Repolho Studio',
      desc: 'Criação e produção de experiências digitais, sites e produtos interativos que encantam e performam.',
      tags: ['UX/UI', 'Web', 'Interativo']
    },
    {
      icon: LineChart,
      name: 'Repolho Data',
      desc: 'Estratégia orientada a dados para decisões mais inteligentes, previsões e otimização contínua.',
      tags: ['Analytics', 'BI', 'Crescimento']
    },
    {
      icon: Building2,
      name: 'Repolho Lab',
      desc: 'Pesquisa, prototipagem e inovação aplicada com foco em novas tecnologias e validação rápida.',
      tags: ['P&D', 'Prototipagem', 'IA']
    },
    {
      icon: Sparkles,
      name: 'Repolho Brand',
      desc: 'Posicionamento de marca, identidade visual e conteúdo que aproximam pessoas e negócios.',
      tags: ['Branding', 'Conteúdo', 'Campanhas']
    },
  ]

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <section id="companies" className="bg-black text-white py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">As 4 empresas do grupo</h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-white/70">Somos um grupo com quatro frentes que se complementam e trabalham integradas, do planejamento à execução.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {companies.map((c) => (
            <motion.div
              key={c.name}
              variants={item}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/5 to-transparent" />
              <div className="flex items-center gap-3">
                <c.icon className="w-6 h-6 text-white/90" />
                <h3 className="text-lg font-semibold tracking-tight">{c.name}</h3>
              </div>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/70">{c.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
