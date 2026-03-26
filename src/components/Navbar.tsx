import Icon from "@/components/ui/icon"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-purple-900/40 bg-[#08040F]/80 backdrop-blur-md">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Map" className="w-5 h-5 text-purple-400" />
            <span className="text-white font-semibold tracking-wide">BlockMapper</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-zinc-400 hover:text-purple-300 transition-colors">
              Услуги
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-purple-300 transition-colors">
              Портфолио
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-purple-300 transition-colors">
              Цены
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-purple-300 transition-colors">
              Отзывы
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-purple-300 transition-colors">
              Контакты
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-white bg-purple-700 hover:bg-purple-600 px-3.5 py-1.5 rounded-md border border-purple-500 transition-colors"
            >
              Заказать карту
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
