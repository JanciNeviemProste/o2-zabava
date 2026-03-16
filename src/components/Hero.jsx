export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 overflow-hidden"
    >
      {/* Decorative background image */}
      <img
        src="https://loremflickr.com/1200/800/capybara?random=1"
        alt=""
        aria-hidden="true"
        className="opacity-20 absolute inset-0 object-cover w-full h-full"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Vitajte v Svete Capybár
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Capybary sú najpriateľskejšie zvieratá na svete. Spoznajte ich
          fascinujúci svet plný harmónie, pokoja a nečakaných priateľstiev.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#features"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 text-lg"
          >
            Zistiť viac
          </a>
          <a
            href="#features"
            className="px-8 py-3 border border-gray-400 hover:border-blue-400 text-gray-300 hover:text-blue-400 font-semibold rounded-lg transition-all duration-300 text-lg"
          >
            Pozrieť fakty
          </a>
        </div>
      </div>
    </section>
  )
}
