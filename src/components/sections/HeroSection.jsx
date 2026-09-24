import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import ScreenImage from "../ui/ScreenImage.jsx";
import { scrollToSection } from "../../scrollToSection.js";

const STATS = [
  ["15+", "Módulos integrados"],
  ["100%", "Web e responsivo"],
  ["24/7", "Suporte e atualizações"],
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#7C3AED]/6 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand/10 border border-brand/20 rounded-full text-sm text-[#3B82F6] mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            Sistema completo de gestão
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-6xl lg:text-7xl font-extrabold leading-none mb-5 text-slate-900 dark:text-white"
          >
            Smart<span className="text-[#3B82F6]">Flow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-xl font-medium mb-4 leading-snug text-slate-800 dark:text-slate-200"
          >
            Sistema completo para gestão de bares, restaurantes e estabelecimentos comerciais.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="text-base mb-10 leading-relaxed text-slate-500"
          >
            Gerencie vendas, estoque, comandas, financeiro e muito mais em uma única plataforma
            inteligente, moderna e fácil de usar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollToSection("#funcionalidades")}
              className="flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-hover text-white rounded-xl font-medium transition-colors group shadow-lg shadow-blue-600/25"
            >
              Explorar funcionalidades
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("#sobre")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all border bg-black/5 hover:bg-black/8 text-slate-700 border-black/10 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-300 dark:border-white/10 dark:hover:border-white/20"
            >
              Conheça o projeto
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="flex gap-8 mt-12 pt-8 border-t border-black/6 dark:border-white/5"
          >
            {STATS.map(([n, l]) => (
              <div key={l}>
                <div
                    className="font-display text-2xl font-bold text-slate-900 dark:text-white"
                >
                  {n}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-brand/6 rounded-3xl blur-3xl pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/80 dark:border-white/10 dark:shadow-black/60">
            <div className="flex items-center gap-2 px-4 py-3 border-b bg-white border-slate-200 dark:bg-[#060D1C] dark:border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 mx-4 rounded text-xs px-3 py-1 text-center bg-slate-100 text-slate-500 dark:bg-[#0F172A]">
                app.smartflow.com.br
              </div>
            </div>
            <div className="aspect-[1920/945]">
              <ScreenImage name="dashboard1" fit="contain" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}