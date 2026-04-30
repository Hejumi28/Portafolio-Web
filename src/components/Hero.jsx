import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen pt-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeIn">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Soluciones Tecnológicas Modernas para tu Negocio
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Transformamos tus ideas en aplicaciones web y móviles de alta calidad. Con experiencia en React, Node.js y tecnologías en la nube.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Empezar Ahora
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Ver Proyectos
              </button>
            </div>
            <div className="pt-8 flex gap-8">
              <div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</p>
                <p className="text-gray-600 dark:text-gray-400">Proyectos Completados</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">30+</p>
                <p className="text-gray-600 dark:text-gray-400">Clientes Satisfechos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">8+</p>
                <p className="text-gray-600 dark:text-gray-400">Años de Experiencia</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">💻</div>
                  <p className="text-xl font-semibold">Desarrollo Profesional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
