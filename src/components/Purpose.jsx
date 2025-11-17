import { motion } from 'framer-motion'

export default function Purpose() {
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
  }

  const features = [
    {
      title: 'Estratégia guiada por dados',
      text: 'Decisões baseadas em evidências, sem achismos. Métricas, hipóteses e validação contínua.',
      image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Design centrado nas pessoas',
      text: 'Produtos e experiências que respeitam o tempo, a atenção e as necessidades das pessoas.',
      image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Tecnologia como meio',
      text: 'Construímos com qualidade e escalabilidade, escolhendo a ferramenta certa para cada problema.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  return (
    <section id="purpose" className="relative bg-black text-white py-28 scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Nosso propósito</h2>
        <p className="mt-4 text-white/70 text-lg leading-relaxed">Transformar desafios em experiências memoráveis. Unimos estratégia, design e engenharia para criar valor real, com transparência e colaboração.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {features.map((card, i) => (
            <motion.div
              key={card.title}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.06, filter: 'grayscale(40%)' }}
                  whileInView={{ scale: 1.02, filter: 'grayscale(0%)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold tracking-tight">{card.title}</h3>
                <p className="mt-2 text-white/70 leading-relaxed">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
