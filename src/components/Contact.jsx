import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-black text-white py-28 scroll-mt-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center tracking-tight">Vamos conversar?</h2>
        <p className="mt-3 text-white/70 text-center">Conte um pouco do seu desafio. Voltamos em breve.</p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-10 grid grid-cols-1 gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Seu nome" required />
            <input type="email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Email" required />
          </div>
          <textarea rows="5" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Mensagem" required />

          <div className="relative">
            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ y: -1 }}
              className="w-full rounded-full bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
            >
              Enviar
            </motion.button>

            {!sent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="pointer-events-none absolute -inset-x-4 -inset-y-3 rounded-full bg-gradient-to-r from-indigo-500/0 via-white/10 to-emerald-400/0 blur-md"
              />
            )}
          </div>

          {sent && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-sm text-center"
            >
              Mensagem enviada! Em breve entraremos em contato.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
