import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Companies from './components/Companies'
import Purpose from './components/Purpose'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Companies />
        <Purpose />
        <Contact />
        <footer className="border-t border-white/10 py-10 text-center text-white/60">© {new Date().getFullYear()} Grupo Repolho — Todos os direitos reservados</footer>
      </main>
    </div>
  )
}

export default App
