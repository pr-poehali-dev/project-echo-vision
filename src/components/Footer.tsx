import Icon from "@/components/ui/icon"

export function Footer() {
  const footerLinks = {
    "Услуги": ["Приключенческие карты", "PvP-арены", "RPG-миры", "Серверные лобби", "Bedrock Edition", "Паркур"],
    "Портфолио": ["Все работы", "Мини-игры", "RPG-проекты", "Арены", "Лобби"],
    "Информация": ["О маппере", "Процесс работы", "Цены", "Отзывы", "FAQ"],
    "Контакты": ["Telegram", "Discord", "Email", "VK", "YouTube"],
  }

  return (
    <footer className="border-t py-16 px-6" style={{ backgroundColor: "#08040F", borderColor: "rgba(139,92,246,0.2)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Map" className="w-5 h-5 text-purple-400" />
              <span className="text-white font-semibold text-lg">BlockMapper</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-4">
              Профессиональный строитель карт Minecraft. Создаю уникальные миры для серверов и одиночной игры.
            </p>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
              <span className="text-zinc-500 text-xs ml-2">Более 50 проектов</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 hover:text-purple-300 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(139,92,246,0.15)" }}>
          <p className="text-zinc-600 text-sm">© 2024 BlockMapper. Все права защищены.</p>
          <p className="text-zinc-600 text-sm">Не является официальным продуктом Mojang / Microsoft</p>
        </div>
      </div>
    </footer>
  )
}
