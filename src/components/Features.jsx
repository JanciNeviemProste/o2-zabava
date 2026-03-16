const cards = [
  {
    icon: '🦫',
    title: 'Najväčší hlodavec',
    description:
      'Capybara je najväčší hlodavec na svete. Dospelý jedinec môže vážiť až 65 kilogramov a dorásť do dĺžky 130 centimetrov. Napriek svojej veľkosti sú to mimoriadne pokojné a neagresívne zvieratá.',
  },
  {
    icon: '🌊',
    title: 'Milujú vodu',
    description:
      'Capybary sú výborní plavci a potápači. Dokážu sa ponoriť a zostať pod vodou až 5 minút. Voda im slúži ako útočisko pred predátormi, ale aj ako miesto na chladenie v horúcich letných dňoch.',
  },
  {
    icon: '👥',
    title: 'Spoločenské zvieratá',
    description:
      'Capybary žijú v skupinách od 10 do 30 jedincov. Sú známe tým, že sa priateľsky správajú nielen k svojim druhom, ale aj k iným zvieratám – opiciam, vtákom, kačiciam a dokonca aj mačkám.',
  },
]

const images = [
  'https://loremflickr.com/800/600/capybara?random=2',
  'https://loremflickr.com/800/600/capybara?random=3',
  'https://loremflickr.com/800/600/capybara?random=4',
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-900 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Zaujímavé Fakty o Capybarách
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Objavte fascinujúce fakty o týchto úžasných zvieratách, ktoré si
            zamiluje každý.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 md:p-8 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="aspect-video rounded-xl overflow-hidden">
              <img
                src={src}
                alt={`Capybara ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
