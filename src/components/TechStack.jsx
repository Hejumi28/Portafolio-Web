import React from 'react'

export default function TechStack() {
  const technologies = [
    { name: 'React', logo: '⚛️' },
    { name: 'Vue.js', logo: '💚' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'Python', logo: '🐍' },
    { name: 'TypeScript', logo: '📘' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Git', logo: '📚' },
    { name: 'Tailwind CSS', logo: '🎨' },
    { name: 'GraphQL', logo: '◇' },
  ]

  return (
    <section id="tech" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tecnologías que Usamos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Trabajamos con las herramientas y frameworks más modernos del mercado
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.logo}
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold text-center text-sm">
                {tech.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 dark:bg-blue-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            ¿No ves tu tecnología favorita?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Trabajamos constantemente con nuevas tecnologías. Contáctanos para discutir tus necesidades específicas.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Consultar Disponibilidad
          </button>
        </div>
      </div>
    </section>
  )
}
