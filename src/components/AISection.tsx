import { motion } from "framer-motion"
import { ChevronRight, Check } from "lucide-react"

const mapTypes = [
  { name: "Приключение / Story", isPremium: true, selected: true, icon: "◇" },
  { name: "SkyWars / PvP", isPremium: true, selected: false, icon: "◉" },
  { name: "Паркур / Прыжки", isPremium: false, selected: false, icon: "◈" },
  { name: "RPG-мир", isPremium: true, selected: false, icon: "◎" },
  { name: "Хаб / Лобби", isPremium: false, selected: false, icon: "○" },
  { name: "Bedrock Edition", isPremium: true, selected: false, icon: "○" },
]

export function AISection() {
  return (
    <div className="relative z-20 py-40" style={{ backgroundColor: "#08040F" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(139,92,246,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-zinc-400 text-sm">Типы карт</span>
            <ChevronRight className="w-4 h-4 text-zinc-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-3xl mb-8"
            style={{
              letterSpacing: "-0.0325em",
              fontVariationSettings: '"opsz" 28',
              fontWeight: 538,
              lineHeight: 1.1,
            }}
          >
            Выбери формат своей карты
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 max-w-md mb-8"
          >
            <span className="text-white font-medium">Под любой проект.</span> Расскажи идею — я предложу
            оптимальный формат, механику и бюджет.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-5 py-2.5 bg-purple-900/50 text-purple-300 rounded-lg border border-purple-700 hover:bg-purple-800/50 transition-colors text-sm flex items-center gap-2 mb-16"
          >
            Обсудить проект
            <ChevronRight className="w-4 h-4" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-24"
          >
            <div
              style={{
                perspective: "900px",
                userSelect: "none",
                WebkitUserSelect: "none",
                width: "100%",
                maxWidth: "720px",
                position: "relative",
              }}
            >
              <div
                style={{
                  transformOrigin: "top",
                  willChange: "transform",
                  transform: "translateY(0%) rotateX(30deg) scale(1.15)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    border: "1px solid rgba(139,92,246,0.3)",
                    background: "linear-gradient(rgba(139,92,246,0.08) 40%, rgba(8,4,15,0.1) 100%)",
                    borderRadius: "8px",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    boxShadow:
                      "inset 0 1.503px 5.261px rgba(139,92,246,0.08), inset 0 -0.752px 0.752px rgba(255, 255, 255, 0.05)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />

                <div
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, #08040F 100%)",
                    height: "80%",
                    position: "absolute",
                    bottom: "-2px",
                    left: "-180px",
                    right: "-180px",
                    pointerEvents: "none",
                    zIndex: 11,
                  }}
                />

                <div className="bg-purple-950/30 border border-purple-900/50 rounded-t-xl px-5 py-4">
                  <span className="text-zinc-500 italic">Выбрать тип карты...</span>
                </div>

                <div className="bg-zinc-900/80 border border-t-0 border-purple-900/40 rounded-b-xl py-1">
                  {mapTypes.map((type, index) => (
                    <div
                      key={type.name}
                      style={
                        type.selected
                          ? {
                              transform: "scale(1.04) rotateX(17deg)",
                              background: "linear-gradient(#2d1554 0%, #1e0d3a 100%)",
                              borderRadius: "6px",
                              height: "48px",
                              position: "relative",
                              boxShadow:
                                "inset 0 -2.75px 4.75px rgba(139,92,246,0.2), 0 54px 73px 3px rgba(0, 0, 0, 0.5)",
                              zIndex: 20,
                              marginLeft: "-12px",
                              marginRight: "-12px",
                            }
                          : {
                              opacity: 1 - index * 0.15,
                              height: "42px",
                            }
                      }
                    >
                      <div
                        className="flex items-center justify-between h-full"
                        style={{ paddingLeft: "24px", paddingRight: "24px", gap: "12px" }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-purple-400 text-lg">{type.icon}</span>
                          <span className={type.selected ? "text-white font-medium" : "text-zinc-300"}>
                            {type.name}
                          </span>
                          {type.isPremium && (
                            <span className="text-xs bg-purple-900/60 text-purple-300 px-2 py-0.5 rounded border border-purple-800">
                              Премиум
                            </span>
                          )}
                        </div>
                        {type.selected && <Check className="w-4 h-4 text-purple-400" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-t border-r border-b border-purple-900/40 pt-12 pr-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Индивидуальный подход</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Каждый проект начинается с обсуждения идеи. Я подберу стиль, биомы и механики под вашу концепцию.
                </p>

                <div className="bg-purple-950/20 border border-purple-900/40 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <svg className="w-4 h-4 text-purple-500" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0L9.5 5.5L15 7L9.5 8.5L8 14L6.5 8.5L1 7L6.5 5.5L8 0Z" />
                    </svg>
                    <span className="text-zinc-500 text-sm">
                      Этапы работы{" "}
                      <span className="text-zinc-300">по карте</span>
                    </span>
                  </div>

                  <div className="space-y-3">
                    {["Обсуждение идеи", "Концепт и план", "Строительство", "Тест и финал"].map((step, i) => (
                      <div key={step} className="flex items-center gap-3">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{ backgroundColor: i === 0 ? "#7e22ce" : "rgba(126,34,206,0.2)", color: i === 0 ? "white" : "#a78bfa" }}
                        >
                          {i + 1}
                        </div>
                        <span className={`text-sm ${i === 0 ? "text-white" : "text-zinc-500"}`}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-b border-purple-900/40 pt-12 pl-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Гарантия качества</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Финальная карта тестируется на производительность и геймплей перед передачей.
                </p>

                <div className="space-y-3">
                  {[
                    "Оптимизирована для серверов",
                    "Поддержка Java и Bedrock",
                    "Правки после сдачи",
                    "Документация по установке",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="text-zinc-400 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
