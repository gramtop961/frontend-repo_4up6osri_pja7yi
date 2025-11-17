import { motion } from 'framer-motion'

export default function Purpose() {
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
  }

  return (
    <section id="purpose" className="relative bg-black text-white py-28 scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Nosso propósito</h2>
        <p className="mt-4 text-white/70 text-lg leading-relaxed">Transformar desafios em experiências memoráveis. Unimos estratégia, design e engenharia para criar valor real, com transparência e colaboração.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            {
              title: 'Estratégia guiada por dados',
              text: 'Decisões baseadas em evidências, sem achismos. Métricas, hipóteses e validação contínua.'
            },
            {
              title: 'Design centrado nas pessoas',
              text: 'Produtos e experiências que respeitam o tempo, a atenção e as necessidades das pessoas.'
            },
            {
              title: 'Tecnologia como meio',
              text: 'Construímos com qualidade e escalabilidade, escolhendo a ferramenta certa para cada problema.'
            }
          ].map((card, i) => (
            <motion.div
              key={card.title}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <h3 className="font-semibold tracking-tight">{card.title}</h3>
              <p className="mt-2 text-white/70 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
