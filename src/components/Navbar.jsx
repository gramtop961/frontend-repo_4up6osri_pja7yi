import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'História', href: '#story' },
    { name: 'Empresas', href: '#companies' },
    { name: 'Propósito', href: '#purpose' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#" className="text-white font-semibold tracking-wide text-lg">Grupo Repolho</a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {item.name}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition">Fale conosco</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="block text-white/80 hover:text-white" onClick={() => setOpen(false)}>
                {item.name}
              </a>
            ))}
            <a href="#contact" className="block text-center rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90" onClick={() => setOpen(false)}>Fale conosco</a>
          </div>
        </div>
      )}
    </header>
  )
}
