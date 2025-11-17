export default function Story() {
  const timeline = [
    {
      year: '2012',
      title: 'O início',
      text: 'Nasce o primeiro projeto que daria origem ao Grupo Repolho: uma iniciativa que unia criatividade e tecnologia para resolver problemas reais.',
    },
    {
      year: '2016',
      title: 'Expansão',
      text: 'Com novos talentos e clientes, ampliamos nossa atuação e começamos a estruturar áreas especializadas.',
    },
    {
      year: '2019',
      title: 'O Grupo',
      text: 'Quatro empresas complementares se consolidam sob a mesma visão: criar impacto através de experiências, dados e tecnologia.',
    },
    {
      year: '2024',
      title: 'Agora',
      text: 'Seguimos inovando com projetos que combinam estratégia, design e desenvolvimento de ponta, sempre focados em resultado.',
    },
  ]

  return (
    <section id="story" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">Nossa história</h2>
          <p className="mt-3 text-white/70">Do laboratório de ideias ao ecossistema de marcas. Uma jornada que evoluiu com o mercado e com as necessidades dos nossos clientes.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {timeline.map((item) => (
            <div key={item.year} className="group rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition">
              <div className="text-sm text-white/60">{item.year}</div>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
