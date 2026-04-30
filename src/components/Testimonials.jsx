import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useState } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos García',
      company: 'TechStartup Inc',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      text: 'El equipo de TechPro transformó completamente nuestra presencia digital. Su dedicación y profesionalismo fueron excepcionales.',
      rating: 5,
    },
    {
      id: 2,
      name: 'María López',
      company: 'E-Commerce Solutions',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      text: 'Entregaron un producto de calidad superior en tiempo récord. Recomendamos ampliamente sus servicios.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Juan Rodríguez',
      company: 'Digital Marketing Co',
      role: 'Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      text: 'Profesionales con gran experiencia. Su atención al detalle y comunicación constante fue impecable.',
      rating: 5,
    },
  ]

  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Testimonios de clientes satisfechos con nuestro trabajo
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Testimonials Display */}
          <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 min-h-96 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                "{testimonials[current].text}"
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  {testimonials[current].name}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {testimonials[current].role} en {testimonials[current].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="p-4 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="p-4 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'bg-blue-600 dark:bg-blue-400 w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {current + 1} de {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
