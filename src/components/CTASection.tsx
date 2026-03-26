export function CTASection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#08040F" }}>
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 border"
          style={{
            background: "linear-gradient(135deg, rgba(59,7,100,0.6) 0%, rgba(8,4,15,0.9) 100%)",
            borderColor: "rgba(139,92,246,0.3)",
            boxShadow: "0 0 80px rgba(139,92,246,0.1)",
          }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white tracking-tight mb-3">
              Готов построить что-то эпичное?
            </h2>
            <p className="text-zinc-400 text-lg">Расскажи идею — обсудим детали и цену бесплатно.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button className="px-5 py-2.5 border border-purple-700 text-purple-300 font-medium rounded-lg hover:bg-purple-900/30 transition-colors text-sm">
              Смотреть работы
            </button>
            <button
              className="px-5 py-2.5 font-medium rounded-lg transition-colors text-sm text-white"
              style={{ backgroundColor: "#7e22ce" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#9333ea")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7e22ce")}
            >
              Заказать карту →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
