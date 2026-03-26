import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const projects = [
  { name: "SkyWars Hub", icon: "Sword" },
  { name: "Dragon Quest", icon: "Flame" },
  { name: "Ocean's End", icon: "Waves" },
  { name: "Nether Gates", icon: "Zap" },
  { name: "Crystal Caves", icon: "Gem" },
  { name: "Sky Islands", icon: "Cloud" },
  { name: "Pixel Arena", icon: "Target" },
  { name: "The Void", icon: "Moon" },
]

export function LogoCloud() {
  return (
    <div className="relative z-20 pb-24 pt-8" style={{ backgroundColor: "#08040F" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-zinc-300 mb-2"
          >
            Уже построено и запущено на серверах.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-zinc-500 mb-16"
          >
            От мини-проектов до крупных серверных карт.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group cursor-pointer"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-10 items-center justify-items-center transition-all duration-300 group-hover:blur-[2.5px] group-hover:opacity-50">
              {projects.map((project) => (
                <div key={project.name} className="text-purple-300 font-semibold text-base flex items-center gap-2">
                  <Icon name={project.icon} className="w-4 h-4 text-purple-500" />
                  {project.name}
                </div>
              ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="px-5 py-2.5 bg-purple-900/80 backdrop-blur-sm border border-purple-700 rounded-full text-sm text-purple-200 flex items-center gap-2">
                Смотреть портфолио
                <span aria-hidden="true">&gt;</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}