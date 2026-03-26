import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Map, Sword, Mountain, Castle, Layers, Cpu, Globe } from "lucide-react"

const carouselCards = [
  {
    id: 1,
    category: "Ландшафт и биомы",
    title: "Уникальный рельеф под ваш проект",
    icon: ArrowRight,
    mockup: "terrain",
  },
  {
    id: 2,
    category: "PvP и арены",
    title: "Сбалансированные бои и честный геймплей",
    icon: ArrowRight,
    mockup: "pvp",
  },
  {
    id: 3,
    category: "RPG и квесты",
    title: "Истории, NPC и проработанный лор",
    icon: ArrowRight,
    mockup: "rpg",
  },
  {
    id: 4,
    category: "Редстоун-механики",
    title: "Сложные механизмы и автоматика",
    icon: ArrowRight,
    mockup: "redstone",
  },
  {
    id: 5,
    category: "Серверные лобби",
    title: "Стильный хаб, который впечатляет с первой секунды",
    icon: ArrowRight,
    mockup: "lobby",
  },
  {
    id: 6,
    category: "Bedrock Edition",
    title: "Карты для мобильных и консолей",
    icon: ArrowRight,
    mockup: "bedrock",
  },
  {
    id: 7,
    category: "Оптимизация",
    title: "Карты без лагов даже на слабых серверах",
    icon: ArrowRight,
    mockup: "optimization",
  },
]

function TerrainMockup() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <Mountain className="w-3.5 h-3.5" />
        <span>Ландшафт</span>
      </div>
      <div className="grid grid-cols-4 gap-1">
        {["#1a0533","#2d1054","#3b1a6e","#1a0533","#4c1d95","#2d1054","#1a0533","#3b1a6e",
          "#2d1054","#1a0533","#4c1d95","#3b1a6e","#1a0533","#2d1054","#1a0533","#4c1d95"].map((c, i) => (
          <div key={i} className="h-6 rounded-sm" style={{ backgroundColor: c }} />
        ))}
      </div>
      <p className="text-xs text-zinc-500">Горы · Пещеры · Долины · Острова</p>
    </div>
  )
}

function PvpMockup() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex items-center gap-2 text-xs">
        <Sword className="w-3.5 h-3.5 text-purple-400" />
        <span className="text-zinc-400">Арена 1v1</span>
        <span className="text-purple-400/70 ml-auto">Симметрия ✓</span>
      </div>
      <div className="mt-2 space-y-2">
        {["Центральная платформа", "Чест-споты", "Укрытия", "Спавны"].map((s) => (
          <div key={s} className="flex items-center gap-2 text-xs">
            <span style={{ color: "#a855f7" }}>▸</span>
            <span className="text-zinc-400">{s}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function RpgMockup() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex items-center gap-2 text-xs text-purple-300">
        <Castle className="w-3.5 h-3.5" />
        <span>Королевство Эндора</span>
      </div>
      <div className="space-y-2 mt-2">
        {["⚔ Главный квест", "🗺 Боковые задания", "🏰 3 данжа", "👥 12 NPC"].map((s) => (
          <div key={s} className="text-xs text-zinc-400">{s}</div>
        ))}
      </div>
    </div>
  )
}

function RedstoneMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-3 gap-2">
        {[1,2,3,4,5,6,7,8,9].map((i) => (
          <div
            key={i}
            className="w-8 h-8 rounded"
            style={{ backgroundColor: i % 3 === 0 ? "rgba(220,38,38,0.4)" : "rgba(126,34,206,0.2)", border: "1px solid rgba(139,92,246,0.3)" }}
          />
        ))}
      </div>
    </div>
  )
}

function LobbyMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-32 h-32 rounded-full border-2 border-purple-700/50 flex items-center justify-center">
        <Map className="w-10 h-10 text-purple-400" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full" />
      </div>
    </div>
  )
}

function BedrockMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-24 h-40 bg-zinc-900 rounded-2xl border border-purple-900/50 overflow-hidden flex flex-col items-center pt-4">
        <Globe className="w-8 h-8 text-purple-400" />
        <div className="mt-3 px-3 w-full">
          <div className="space-y-1.5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 rounded" style={{ backgroundColor: "rgba(126,34,206,0.2)" }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function OptimizationMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="space-y-3 w-full px-4">
        {[{ label: "FPS", val: 95 }, { label: "TPS", val: 20 }, { label: "Chunk lag", val: 5 }].map((m) => (
          <div key={m.label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-zinc-500">{m.label}</span>
              <span className="text-purple-400">{m.val}{m.label === "Chunk lag" ? "ms" : ""}</span>
            </div>
            <div className="h-1.5 rounded-full bg-purple-900/40">
              <div
                className="h-full rounded-full"
                style={{ width: `${m.label === "Chunk lag" ? 5 : m.val}%`, backgroundColor: "#7e22ce" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CardMockup({ type }: { type: string }) {
  switch (type) {
    case "terrain": return <TerrainMockup />
    case "pvp": return <PvpMockup />
    case "rpg": return <RpgMockup />
    case "redstone": return <RedstoneMockup />
    case "lobby": return <LobbyMockup />
    case "bedrock": return <BedrockMockup />
    case "optimization": return <OptimizationMockup />
    default: return null
  }
}

export function WorkflowsSection() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollLeft = () => setScrollPosition(Math.max(0, scrollPosition - 1))
  const scrollRight = () => setScrollPosition(Math.min(carouselCards.length - 4, scrollPosition + 1))

  return (
    <section className="relative py-24" style={{ backgroundColor: "#08040F" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(139,92,246,0.05), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm text-zinc-400">Что я умею делать</span>
              <ChevronRight className="w-4 h-4 text-zinc-600" />
            </div>

            <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.1]">
              Весь инструментарий
              <br />
              <span style={{ color: "#a855f7" }}>мастера карт</span>
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-zinc-400 leading-relaxed mb-6">
              От ландшафта до редстоун-механик — я закрываю весь цикл создания карты самостоятельно.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={scrollLeft}
                disabled={scrollPosition === 0}
                className="w-8 h-8 rounded-full border border-purple-900/50 flex items-center justify-center text-zinc-400 hover:border-purple-700 hover:text-purple-300 disabled:opacity-30 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                disabled={scrollPosition >= carouselCards.length - 4}
                className="w-8 h-8 rounded-full border border-purple-900/50 flex items-center justify-center text-zinc-400 hover:border-purple-700 hover:text-purple-300 disabled:opacity-30 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300"
            style={{ transform: `translateX(-${scrollPosition * 280}px)` }}
          >
            {carouselCards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 border border-purple-900/40 rounded-2xl overflow-hidden cursor-pointer hover:border-purple-700/60 transition-colors"
                style={{ width: "260px", height: "280px", backgroundColor: "rgba(59,7,100,0.1)" }}
              >
                <div className="h-36 border-b border-purple-900/30 overflow-hidden">
                  <CardMockup type={card.mockup} />
                </div>
                <div className="p-5">
                  <p className="text-xs text-purple-400 mb-2">{card.category}</p>
                  <h3 className="text-sm font-medium text-white leading-tight">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-purple-900/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Layers className="w-5 h-5 text-purple-400" />, title: "WorldEdit & VoxelSniper", desc: "Профессиональные инструменты для скоростного строительства" },
              { icon: <Cpu className="w-5 h-5 text-purple-400" />, title: "Оптимизация", desc: "Карты работают плавно даже при большом онлайне" },
              { icon: <Map className="w-5 h-5 text-purple-400" />, title: "Исходники в подарок", desc: "Получаешь все файлы карты с правами на использование" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg border border-purple-900/50 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(59,7,100,0.3)" }}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                  <p className="text-zinc-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
