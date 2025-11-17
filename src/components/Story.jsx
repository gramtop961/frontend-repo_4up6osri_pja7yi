import { motion } from 'framer-motion'

export default function Story() {
  const timeline = [
    {
      year: '2012',
      title: 'O início',
      text: 'Nasce o primeiro projeto que daria origem ao Grupo Repolho: uma iniciativa que unia criatividade e tecnologia para resolver problemas reais.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      year: '2016',
      title: 'Expansão',
      text: 'Com novos talentos e clientes, ampliamos nossa atuação e começamos a estruturar áreas especializadas.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop'
    },
    {
      year: '2019',
      title: 'O Grupo',
      text: 'Quatro empresas complementares se consolidam sob a mesma visão: criar impacto através de experiências, dados e tecnologia.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop'
    },
    {
      year: '2024',
      title: 'Agora',
      text: 'Seguimos inovando com projetos que combinam estratégia, design e desenvolvimento de ponta, sempre focados em resultado.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop'
    },
  ]

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <section id="story" className="relative bg-black text-white py-28 scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Nossa história</h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-white/70">Do laboratório de ideias ao ecossistema de marcas. Uma jornada que evoluiu com o mercado e com as necessidades dos nossos clientes.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {timeline.map((itemData, idx) => (
            <motion.div key={itemData.year} variants={item} className="group overflow-hidden rounded-2xl border border-white/10 p-0 bg-white/5 hover:bg-white/10 transition">
              <div className="relative aspect-[16/9] overflow-hidden">
                <motion.img
                  src={itemData.image}
                  alt={itemData.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.06, filter: 'grayscale(40%)' }}
                  whileInView={{ scale: 1.02, filter: 'grayscale(0%)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-black/60 border border-white/10">{itemData.year}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight">{itemData.title}</h3>
                <p className="mt-2 text-white/70 leading-relaxed">{itemData.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
