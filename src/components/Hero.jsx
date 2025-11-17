import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  // Simple check to avoid heavy effects for users who prefer reduced motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const handler = (e) => setPrefersReducedMotion(e.matches)
    mq.addEventListener?.('change', handler)
    return () => mq.removeEventListener?.('change', handler)
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
        {!prefersReducedMotion && (
          <div className="absolute inset-0 opacity-40 animate-pulse bg-[conic-gradient(from_180deg_at_50%_50%,#ffffff0f_0deg,#ffffff00_120deg,#ffffff12_240deg,#ffffff00_360deg)]" />
        )}
        {/* soft noise */}
        <div className="absolute inset-0 opacity-[0.035] mix-blend-soft-light" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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

          {/* Floating collage */}
          <div className="relative hidden lg:block">
            {!prefersReducedMotion && (
              <>
                <motion.img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
                  alt="Equipe criando"
                  className="absolute right-6 top-2 w-56 h-72 object-cover rounded-3xl border border-white/10 shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: [0, -12, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  loading="lazy"
                />
                <motion.img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                  alt="Colaboração"
                  className="absolute left-10 top-20 w-56 h-72 object-cover rounded-3xl border border-white/10 shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: [0, 10, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  loading="lazy"
                />
                <motion.img
                  src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop"
                  alt="Tecnologia"
                  className="absolute right-40 bottom-4 w-60 h-40 object-cover rounded-3xl border border-white/10 shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: [0, -8, 0] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                  loading="lazy"
                />
              </>
            )}
            {/* gradient blob */}
            <div className="absolute -right-10 -bottom-10 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-indigo-500/30 via-sky-400/30 to-emerald-400/30" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
