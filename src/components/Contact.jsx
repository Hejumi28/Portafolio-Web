import { useState } from 'react'
import { Send, Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Ponte en Contacto
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ¿Listo para iniciar tu próximo proyecto? Nos encantaría escucharte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600 dark:text-blue-400" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                  <a
                    href="mailto:info@techpro.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    info@techpro.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-600 dark:text-blue-400" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Teléfono</h3>
                  <a
                    href="tel:+5491234567890"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +549 1234 567890
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Ubicación</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Buenos Aires, Argentina
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg">
                <p className="text-green-700 dark:text-green-200 font-semibold">
                  ¡Mensaje enviado correctamente! Te contactaremos pronto.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors ${
                    errors.name
                      ? 'border-red-500 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500'
                  } focus:outline-none`}
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors ${
                    errors.email
                      ? 'border-red-500 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500'
                  } focus:outline-none`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                  Teléfono (Opcional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="+549 1234 567890"
                />
              </div>

              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors resize-none ${
                    errors.message
                      ? 'border-red-500 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500'
                  } focus:outline-none`}
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Enviar Mensaje
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
