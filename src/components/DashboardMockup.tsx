import type React from "react"
import { motion } from "framer-motion"
import {
  Inbox,
  CircleUser,
  Layers,
  FolderKanban,
  LayoutGrid,
  Users,
  Smartphone,
  Map,
  FileText,
  ChevronDown,
  ChevronRight,
  CirclePower,
  Search,
  Plus,
  Link2,
  MoreHorizontal,
  Sparkles,
  Settings,
  HelpCircle,
} from "lucide-react"

export function DashboardMockup() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const panelVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      y: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      className="w-full h-full flex overflow-hidden"
      style={{ backgroundColor: "#0d0618" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Sidebar */}
      <motion.div
        className="w-[220px] h-full flex flex-col shrink-0"
        style={{ backgroundColor: "rgba(26,5,51,0.8)", borderRight: "1px solid rgba(139,92,246,0.2)" }}
        variants={panelVariants}
      >
        {/* Logo */}
        <div className="p-3" style={{ borderBottom: "1px solid rgba(139,92,246,0.2)" }}>
          <div className="flex items-center gap-2 px-2 py-1.5">
            <Map className="w-5 h-5 text-purple-400" />
            <span className="text-white font-semibold text-sm">BlockMapper</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-500 ml-auto" />
          </div>
        </div>

        {/* Search */}
        <div className="p-3">
          <div className="flex items-center gap-2 px-2.5 py-1.5 bg-zinc-800/50 rounded-md text-zinc-500 text-xs">
            <Search className="w-3.5 h-3.5" />
            <span>Поиск...</span>
            <span className="ml-auto text-[10px] bg-zinc-700/50 px-1.5 py-0.5 rounded">⌘K</span>
          </div>
        </div>

        {/* Main nav */}
        <div className="px-3 space-y-0.5">
          <NavItem icon={Inbox} label="Входящие" badge={2} active />
          <NavItem icon={CircleUser} label="Мои заказы" />
        </div>

        {/* Workspace section */}
        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            Пространство
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Layers} label="Все карты" hasSubmenu />
            <NavItem icon={FolderKanban} label="В работе" hasSubmenu />
            <NavItem icon={LayoutGrid} label="Портфолио" hasSubmenu />
            <NavItem icon={Users} label="Клиенты" hasSubmenu />
          </div>
        </div>

        {/* Favorites section */}
        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            Избранное
          </div>
          <div className="space-y-0.5 mt-1">
          <NavItem icon={Smartphone} label="Dragon Quest RPG" color="text-purple-400" />
            <NavItem icon={Map} label="SkyWars Arena" color="text-orange-400" />
            <NavItem icon={FileText} label="Ocean Lobby Hub" color="text-emerald-400" />
          </div>
        </div>

        {/* Teams section */}
        <div className="mt-5 px-3 flex-1">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            Ваши команды
          </div>
          <div className="space-y-0.5 mt-1">
          <NavItem icon={Sparkles} label="Приключения" hasSubmenu />
            <NavItem icon={Settings} label="PvP-карты" hasSubmenu />
          </div>
        </div>

        {/* Bottom */}
        <div className="p-3 border-t border-zinc-800/50">
          <NavItem icon={HelpCircle} label="Помощь" />
        </div>
      </motion.div>

      {/* Inbox List */}
      <motion.div
        className="w-[320px] h-full flex flex-col shrink-0"
        style={{ backgroundColor: "rgba(13,6,24,0.8)", borderRight: "1px solid rgba(139,92,246,0.15)" }}
        variants={panelVariants}
      >
        <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(139,92,246,0.15)" }}>
          <h3 className="text-white font-semibold text-sm">Заказы</h3>
          <div className="flex items-center gap-2">
            <button className="text-zinc-500 hover:text-white transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto scrollbar-hide">
          <InboxItem
            id="MAP-001"
            title="Dragon Quest RPG — финальный этап"
            subtitle="Клиент ожидает сдачу"
            time="2ч"
            avatar="https://i.pravatar.cc/32?img=1"
            status="in-progress"
            active
          />
          <InboxItem
            id="MAP-002"
            title="SkyWars Arena 1v1"
            subtitle="В работе — детализация"
            time="1д"
            avatar="https://i.pravatar.cc/32?img=2"
            status="todo"
            isProject
          />
          <InboxItem
            id="MAP-003"
            title="Ocean Lobby Hub"
            subtitle="Ждёт правок от клиента"
            time="2д"
            avatar="https://i.pravatar.cc/32?img=3"
            status="done"
          />
          <InboxItem
            id="MAP-004"
            title="Nether Gates PvP"
            subtitle="Новый заказ поступил"
            time="4ч"
            avatar="https://i.pravatar.cc/32?img=4"
            status="todo"
          />
          <InboxItem
            id="MAP-005"
            title="Crystal Caves Parkour"
            subtitle="Тестирование завершено"
            time="1н"
            avatar="https://i.pravatar.cc/32?img=5"
            status="done"
          />
        </div>
      </motion.div>

      {/* Detail Panel */}
      <motion.div className="flex-1 h-full flex flex-col overflow-hidden" style={{ backgroundColor: "#0d0618" }} variants={panelVariants}>
        {/* Header breadcrumb */}
        <div className="px-5 py-3 flex items-center justify-between shrink-0" style={{ borderBottom: "1px solid rgba(139,92,246,0.15)" }}>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-500">Карты</span>
            <span className="text-zinc-600">›</span>
            <span className="text-purple-400">RPG-миры</span>
            <span className="text-zinc-600">›</span>
            <span className="text-zinc-300">MAP-001</span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-zinc-500" />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 overflow-auto scrollbar-hide">
          <h2 className="text-white text-xl font-semibold mb-5">Dragon Quest RPG — финальный этап</h2>

          <div className="rounded-lg p-4 text-[11px] font-mono mb-5 border" style={{ backgroundColor: "rgba(26,5,51,0.5)", borderColor: "rgba(139,92,246,0.2)" }}>
            <div className="space-y-2">
              <div>
                <span className="text-zinc-500">Заметка клиента:</span>
                <span className="text-amber-300"> добавить тайный данж</span>
                <span className="text-zinc-400"> в северо-западной части карты.</span>
              </div>
              <div className="mt-3">
                <span className="text-purple-400">Биомы:</span>
                <span className="text-zinc-400"> тёмный лес, вулканическая зона, </span>
                <span className="text-cyan-300">frozen_peaks</span>
              </div>
              <div>
                <span className="text-blue-400">Размер: </span>
                <span className="text-amber-300">3000x3000</span>
                <span className="text-zinc-400"> блоков</span>
              </div>
              <div>
                <span className="text-emerald-400">Готовность: </span>
                <span className="text-orange-300">85%</span>
                <span className="text-zinc-400"> — осталось финальное тестирование</span>
              </div>
            </div>
          </div>

          {/* Meta actions */}
          <div className="space-y-2 text-sm mb-5">
            <div className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors">
              <Plus className="w-4 h-4" />
              <span>Добавить подзадачи</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors">
              <Link2 className="w-4 h-4" />
              <span>Ссылки</span>
            </div>
          </div>

          <div className="text-xs text-zinc-500 mb-5">
            <span className="text-purple-700">#MAP-001</span>
            <span> Dragon Quest RPG · 3000×3000 блоков · Java Edition</span>
          </div>

          {/* Activity */}
          <div className="pt-4" style={{ borderTop: "1px solid rgba(139,92,246,0.15)" }}>
            <div className="text-xs text-zinc-500 font-medium mb-3 uppercase tracking-wider">Активность</div>
            <div className="space-y-3">
              <ActivityItem
                avatar="https://i.pravatar.cc/24?img=1"
                name="BlockMapper"
                action="завершил этап"
                from="Детализация"
                to="Тестирование"
                time="2 часа назад"
              />
              <ActivityItem
                avatar="https://i.pravatar.cc/24?img=2"
                name="Клиент"
                action="оставил комментарий про"
                from="тайный данж"
                time="5 часов назад"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function NavItem({
  icon: Icon,
  label,
  badge,
  active,
  hasSubmenu,
  color,
}: {
  icon: React.ElementType
  label: string
  badge?: number
  active?: boolean
  hasSubmenu?: boolean
  color?: string
}) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors ${
        active ? "text-white" : "text-zinc-400 hover:text-zinc-300"
      }`}
      style={active ? { backgroundColor: "rgba(126,34,206,0.3)" } : {}}
    >
      <Icon className={`w-4 h-4 ${color || ""}`} />
      <span className="flex-1 text-xs">{label}</span>
      {badge && (
        <span className="text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full font-medium px-1" style={{ backgroundColor: "rgba(126,34,206,0.8)" }}>
          {badge}
        </span>
      )}
      {hasSubmenu && <ChevronRight className="w-3 h-3 text-zinc-600" />}
    </div>
  )
}

function InboxItem({
  id,
  title,
  subtitle,
  time,
  avatar,
  status,
  isProject,
  active,
}: {
  id?: string
  title: string
  subtitle?: string
  time?: string
  avatar: string
  status: string
  isProject?: boolean
  active?: boolean
}) {
  const statusColors: Record<string, string> = {
    "in-progress": "bg-yellow-500",
    todo: "bg-zinc-600",
    bug: "bg-red-500",
    done: "bg-emerald-500",
  }

  return (
    <div
      className="px-4 py-3 cursor-pointer transition-colors"
      style={{
        borderBottom: "1px solid rgba(139,92,246,0.1)",
        backgroundColor: active ? "rgba(126,34,206,0.15)" : undefined
      }}
    >
      <div className="flex items-start gap-3">
        <img src={avatar || "/placeholder.svg"} alt="" className="w-8 h-8 rounded-full shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            {id && <span className="text-zinc-500 text-[10px]">{id}</span>}
            {isProject && <span className="text-violet-400 text-[10px]">Проект</span>}
            <div className={`w-2 h-2 rounded-full ${statusColors[status] || "bg-zinc-500"}`} />
          </div>
          <p className="text-white text-xs truncate leading-tight">{title}</p>
          {subtitle && <p className="text-zinc-500 text-[10px] mt-0.5 truncate">{subtitle}</p>}
        </div>
        {time && <span className="text-zinc-600 text-[10px] shrink-0">{time}</span>}
      </div>
    </div>
  )
}

function ActivityItem({
  avatar,
  name,
  action,
  from,
  to,
  time,
}: {
  avatar: string
  name: string
  action: string
  from: string
  to?: string
  time: string
}) {
  return (
    <div className="flex items-start gap-2">
      <img src={avatar || "/placeholder.svg"} alt="" className="w-5 h-5 rounded-full" />
      <div className="flex-1">
        <p className="text-zinc-400 text-xs">
          <span className="text-white">{name}</span>
          <span className="text-zinc-500"> {action} </span>
          <span className="text-zinc-300">{from}</span>
          {to && (
            <>
              <span className="text-zinc-500"> в </span>
              <span className="text-zinc-300">{to}</span>
            </>
          )}
        </p>
        <p className="text-zinc-600 text-[10px] mt-0.5">{time}</p>
      </div>
    </div>
  )
}