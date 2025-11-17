export default function Purpose() {
  return (
    <section id="purpose" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">Nosso propósito</h2>
        <p className="mt-4 text-white/70 text-lg">Transformar desafios em experiências memoráveis. Unimos estratégia, design e engenharia para criar valor real, com transparência e colaboração.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Estratégia guiada por dados</h3>
            <p className="mt-2 text-white/70">Decisões baseadas em evidências, sem achismos. Métricas, hipóteses e validação contínua.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Design centrado nas pessoas</h3>
            <p className="mt-2 text-white/70">Produtos e experiências que respeitam o tempo, a atenção e as necessidades das pessoas.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Tecnologia como meio</h3>
            <p className="mt-2 text-white/70">Construímos com qualidade e escalabilidade, escolhendo a ferramenta certa para cada problema.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
