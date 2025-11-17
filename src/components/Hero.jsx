import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

export default function Hero() {
  // Reduced motion support
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const handler = (e) => setPrefersReducedMotion(e.matches)
    mq.addEventListener?.('change', handler)
    return () => mq.removeEventListener?.('change', handler)
  }, [])

  // Interactive parallax following the cursor
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [ -0.5, 0.5 ], [ 8, -8 ])
  const rotateY = useTransform(mx, [ -0.5, 0.5 ], [ -8, 8 ])

  const handleMouseMove = (e) => {
    if (!ref.current || prefersReducedMotion) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mx.set(x - 0.5)
    my.set(y - 0.5)
  }

  const images = useMemo(() => ([
    {
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
      alt: 'Canteiro de obras',
      className: 'absolute right-6 top-2 w-56 h-72 object-cover rounded-3xl border border-white/10 shadow-2xl'
    },
    {
      src: 'https://images.unsplash.com/photo-1487546331507-3e88a8b9018f?q=80&w=1200&auto=format&fit=crop',
      alt: 'Engenheiro analisando plantas',
      className: 'absolute left-10 top-20 w-56 h-72 object-cover rounded-3xl border border-white/10 shadow-2xl'
    },
    {
      src: 'https://images.unsplash.com/photo-1621400795170-7216aec1ec05?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbmdlbmhlaXJvJTIwYW5hbGlzYW5kbyUyMHBsYW50YXN8ZW58MHwwfHx8MTc2MzM5NzcwMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      alt: 'Estrutura metálica',
      className: 'absolute right-40 bottom-4 w-60 h-40 object-cover rounded-3xl border border-white/10 shadow-2xl'
    },
  ]), [])

  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
        {!prefersReducedMotion && (
          <div className="absolute inset-0 opacity-40 animate-pulse bg-[conic-gradient(from_180deg_at_50%_50%,#ffffff0f_0deg,#ffffff00_120deg,#ffffff12_240deg,#ffffff00_360deg)]" />
        )}
        {/* soft noise with construction vibe */}
        <div className="absolute inset-0 opacity-[0.045] mix-blend-soft-light" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
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
            <span className="inline-flex items-center text-xs uppercase tracking-widest text-white/70 bg-white/10 ring-1 ring-white/10 px-3 py-1 rounded-full">Construção • Engenharia • Qualidade</span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
              Construímos espaços e experiências com precisão e inovação
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-2xl leading-relaxed">
              Do projeto à entrega, unimos engenharia, planejamento e execução para obras seguras, eficientes e sustentáveis.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#companies" className="inline-flex items-center rounded-full bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition">Nossas frentes</a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">Orçar projeto</a>
            </div>
          </motion.div>

          {/* Floating collage with interactive tilt */}
          <div className="relative hidden lg:block will-change-transform" ref={ref} onMouseMove={handleMouseMove}>
            {!prefersReducedMotion && (
              <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} transition={{ type: 'spring', stiffness: 60, damping: 20 }} className="relative h-[28rem] [perspective:1000px]">
                {images.map((img, i) => (
                  <motion.img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className={img.className}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 + i * 0.1, ease: 'easeOut' }}
                    loading="lazy"
                    style={{ transform: 'translateZ(30px)' }}
                  />
                ))}
                {/* gradient blob */}
                <div className="absolute -right-10 -bottom-10 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-amber-500/30 via-emerald-400/30 to-yellow-400/30" />
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
