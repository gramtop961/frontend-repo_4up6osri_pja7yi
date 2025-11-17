import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      {/* Background fallback gradient/pattern so it never looks empty */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />

      {/* Spline (3D) - hidden until loaded, gracefully fails */}
      {!failed && (
        <div className={`absolute inset-0 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <Spline
            scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
          />
        </div>
      )}

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center text-xs uppercase tracking-widest text-white/70 bg-white/10 ring-1 ring-white/10 px-3 py-1 rounded-full">Tecnologia • Inovação • Impacto</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
            O Grupo Repolho cria experiências e soluções que conectam marcas e pessoas
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl leading-relaxed">
            Somos um ecossistema de quatro empresas complementares que unem estratégia, criatividade e tecnologia para entregar valor real em cada ponto de contato.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#story" className="inline-flex items-center rounded-full bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition">Conheça nossa história</a>
            <a href="#companies" className="inline-flex items-center rounded-full border border-white/20 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">Nossas empresas</a>
          </div>
        </motion.div>

        {/* Loading hint if Spline is still fetching */}
        {!loaded && !failed && (
          <div className="mt-6 text-white/60 text-sm">Carregando cena 3D…</div>
        )}
        {failed && (
          <div className="mt-6 text-white/60 text-sm">Não foi possível carregar o 3D agora. O conteúdo segue disponível normalmente.</div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
