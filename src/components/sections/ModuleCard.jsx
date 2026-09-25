import { motion } from "motion/react";
import ScreenFrame from "../ui/ScreenFrame.jsx";

export default function ModuleCard({ feature, index }) {
  const Icon = feature.icon;
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className={`grid gap-8 lg:gap-12
        ${isReversed ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"}`}
    >
      <div
        id={feature.id}
        className={`order-1 ${isReversed ? "lg:order-2" : "lg:order-1"}
          p-6 sm:p-7 lg:p-8 scroll-mt-24`}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/35
              bg-[#07111F] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            style={{ borderColor: `${feature.accent}55` }}
          >
            <Icon className="h-6 w-6" style={{ color: feature.accent }} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-brand dark:text-[#6DA5FF]">
              {feature.category}
            </div>
          </div>
        </div>
        <h3 className="mt-5 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-white">
          {feature.title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-[15px] dark:text-slate-400">
          {feature.description}
        </p>
        <div className="mt-6">
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand dark:text-[#3B82F6]">
            PRINCIPAIS AÇÕES DISPONÍVEIS
          </h4>
          <ul className="mt-4 space-y-2.5">
            {feature.actions.map((action) => (
              <li
                key={action}
                className="flex items-start gap-2.5 text-sm leading-6 text-slate-700 dark:text-slate-300"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand dark:bg-[#3B82F6]" />
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`order-2 ${isReversed ? "lg:order-1" : "lg:order-2"} flex items-center`}
      >
        <div
          className="w-full rounded-[20px] border border-slate-200 bg-white p-1.5
            shadow-[0_18px_48px_rgba(0,0,0,0.24)] shadow-slate-200/70 sm:p-2 lg:p-2.5
            dark:border-white/10 dark:bg-[#07111F]"
        >
          <ScreenFrame mockupKey={feature.mockupKey} imageName={feature.imageName} />
        </div>
      </div>
    </motion.div>
  );
}
