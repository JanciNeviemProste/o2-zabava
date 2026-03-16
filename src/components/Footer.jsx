export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: logo + description */}
          <div>
            <div className="text-white font-bold text-xl mb-4">🦫 Capybara</div>
            <p className="text-gray-400 leading-relaxed">
              Capybary sú najväčšie hlodavce na svete a zároveň jedny z
              najpriateľskejších zvierat. Pochádzajú z Južnej Ameriky a sú
              známe svojou pokojnou povahou a schopnosťou vychádzať s takmer
              každým iným druhom zvieraťa.
            </p>
          </div>

          {/* Right: quick links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Rýchle odkazy</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  Domov
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  Zaujímavosti
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {currentYear} Capybara. Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  )
}
