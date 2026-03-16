import { useState } from 'react'

const contactInfo = [
  { icon: '📧', text: 'capybara@priklad.sk' },
  { icon: '📍', text: 'Bratislava, Slovensko' },
  { icon: '⏰', text: 'Pondelok - Piatok: 9:00 - 17:00' },
  { icon: '💬', text: 'Radi odpovieme na všetky otázky o capybarách' },
]

const inputClass =
  'bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full'

export default function Contact() {
  const [form, setForm] = useState({
    meno: '',
    email: '',
    predmet: '',
    sprava: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Ďakujeme za vašu správu! Ozveme sa vám čo najskôr.')
    setForm({ meno: '', email: '', predmet: '', sprava: '' })
  }

  return (
    <section id="contact" className="bg-gray-950 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kontaktujte Nás
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Máte otázky o capybarách? Neváhajte nás kontaktovať – radi vám
            pomôžeme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-gray-300 font-medium mb-2" htmlFor="meno">
                Meno
              </label>
              <input
                id="meno"
                name="meno"
                type="text"
                value={form.meno}
                onChange={handleChange}
                placeholder="Vaše meno"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-gray-300 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="vas@email.sk"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label
                className="block text-gray-300 font-medium mb-2"
                htmlFor="predmet"
              >
                Predmet
              </label>
              <input
                id="predmet"
                name="predmet"
                type="text"
                value={form.predmet}
                onChange={handleChange}
                placeholder="Predmet správy"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label
                className="block text-gray-300 font-medium mb-2"
                htmlFor="sprava"
              >
                Správa
              </label>
              <textarea
                id="sprava"
                name="sprava"
                value={form.sprava}
                onChange={handleChange}
                placeholder="Napíšte vašu správu..."
                required
                rows={5}
                className={inputClass + ' resize-none'}
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              Odoslať správu
            </button>
          </form>

          {/* Contact info */}
          <div className="flex flex-col gap-6 justify-center">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <p className="text-gray-300 text-lg leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
