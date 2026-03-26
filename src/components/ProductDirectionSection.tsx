import { ChevronRight } from "lucide-react"

export function ProductDirectionSection() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#08040F" }}>
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(139,92,246,0.05), transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-zinc-400 text-sm">Этапы и сроки</span>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-8 max-w-3xl"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          От идеи до готовой карты
        </h2>

        <p className="text-zinc-400 text-lg max-w-md mb-16">
          <span className="text-white font-medium">Прозрачный процесс работы.</span> Ты всегда знаешь,
          на каком этапе находится твоя карта и когда она будет готова.
        </p>

        <div
          className="relative w-full mb-16"
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative"
            style={{
              transform: "rotateX(50deg) rotateZ(-35deg)",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            <div className="relative h-[400px]">
              <div
                className="absolute w-[1px]"
                style={{
                  height: "600px",
                  left: "55%",
                  top: "-100px",
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(139,92,246,0.4) 4px, rgba(139,92,246,0.4) 8px)",
                }}
              />

              <div className="absolute top-0 left-0 right-0 flex items-end">
                <div className="flex items-end gap-[3px] absolute bottom-0 left-[5%] right-0">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-purple-700/60"
                      style={{ width: "1px", height: i % 7 === 0 ? "16px" : "8px" }}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute text-zinc-500 text-sm" style={{ left: "8%", top: "80px" }}>1 нед</div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "18%", top: "55px" }}>2 нед</div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "32%", top: "35px" }}>3 нед</div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "48%", top: "15px" }}>4 нед</div>
              <div
                className="absolute px-3 py-1 rounded-md border text-sm font-medium"
                style={{ left: "58%", top: "-10px", backgroundColor: "rgba(126,34,206,0.4)", borderColor: "#7e22ce", color: "#d8b4fe" }}
              >
                Сдача
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "70%", top: "-5px" }}>5 нед</div>
              <div className="absolute text-zinc-500/50 text-sm" style={{ left: "88%", top: "-25px" }}>6 нед</div>

              <div
                className="absolute rounded-lg border px-4 py-3 flex items-center gap-3"
                style={{ left: "5%", top: "100px", width: "45%", height: "48px", backgroundColor: "rgba(59,7,100,0.5)", borderColor: "rgba(126,34,206,0.4)" }}
              >
                <div className="w-4 h-4 rotate-45 bg-purple-600/60" />
                <span className="text-zinc-300 text-sm font-medium">Концепт и планирование</span>
                <div
                  className="absolute w-5 h-5 rotate-45 border-2 border-green-500 bg-transparent"
                  style={{ right: "15%", top: "50%", transform: "translateY(-50%) rotate(45deg)" }}
                />
              </div>

              <div
                className="absolute rounded-lg border px-4 py-3 flex items-center gap-3"
                style={{ left: "15%", top: "155px", width: "25%", height: "44px", backgroundColor: "rgba(59,7,100,0.3)", borderColor: "rgba(126,34,206,0.3)" }}
              >
                <div className="w-3 h-3 rotate-45 bg-purple-700/60" />
                <span className="text-zinc-500 text-sm">Ландшафт</span>
              </div>

              <div
                className="absolute rounded-lg border px-4 py-3 flex items-center justify-between"
                style={{ left: "45%", top: "155px", width: "45%", height: "48px", backgroundColor: "rgba(59,7,100,0.5)", borderColor: "rgba(126,34,206,0.4)" }}
              >
                <span className="text-zinc-400 text-sm">Детализация</span>
                <div className="flex gap-0.5">
                  {[1,2,3].map(i => <div key={i} className="w-2.5 h-2.5 rotate-45 bg-purple-600/60" />)}
                </div>
              </div>

              <div
                className="absolute rounded-lg border px-4 py-3 flex items-center justify-between"
                style={{ left: "35%", top: "240px", width: "28%", height: "48px", backgroundColor: "rgba(59,7,100,0.3)", borderColor: "rgba(126,34,206,0.3)" }}
              >
                <span className="text-zinc-400 text-sm">Тестирование</span>
                <div className="flex gap-0.5">
                  {[1,2].map(i => <div key={i} className="w-2.5 h-2.5 rotate-45 bg-purple-700/60" />)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border-t border-r border-b border-purple-900/40 pt-10 pr-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Полный цикл разработки</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              От первого звонка до файлов карты у тебя на сервере.
            </p>

            <div className="rounded-xl border border-purple-900/40 p-5" style={{ backgroundColor: "rgba(59,7,100,0.1)" }}>
              <h4 className="text-lg font-medium text-zinc-200 mb-5">Статус заказа</h4>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-zinc-500 text-sm w-20">Этап</span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded text-xs" style={{ backgroundColor: "rgba(126,34,206,0.3)", color: "#d8b4fe" }}>
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    В работе
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {[
                  { label: "Ландшафт", done: true },
                  { label: "Строения", done: true },
                  { label: "Геймплей", done: false },
                  { label: "Тест", done: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: item.done ? "#7e22ce" : "rgba(126,34,206,0.2)", borderWidth: 1, borderColor: item.done ? "#a855f7" : "#581c87" }}
                    >
                      {item.done && <span className="text-white text-[10px]">✓</span>}
                    </div>
                    <span className={`text-sm ${item.done ? "text-zinc-300" : "text-zinc-600"}`}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-b border-purple-900/40 pt-10 pl-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Сроки по типам карт</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Ориентировочные сроки зависят от сложности и размера карты.
            </p>

            <div className="space-y-3">
              {[
                { name: "Мини-игра / PvP-арена", time: "1–2 недели" },
                { name: "Паркур / Пазл", time: "3–7 дней" },
                { name: "Приключение / Story", time: "2–4 недели" },
                { name: "RPG-мир / Лобби сервера", time: "4–8 недель" },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between py-2 border-b border-purple-900/20">
                  <span className="text-zinc-400 text-sm">{item.name}</span>
                  <span className="text-purple-400 text-sm font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
