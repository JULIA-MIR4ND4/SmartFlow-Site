import { Instagram, Phone } from "lucide-react";
import FadeIn from "../ui/FadeIn.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";

const WHATSAPP_NUMBER = "5549991060861";
const WHATSAPP_DISPLAY = "(49) 9 9106-0861";
const INSTAGRAM_HANDLE = "@smartflow.app";
const INSTAGRAM_URL = "https://instagram.com/smartflow.app";

const CONTACT_METHODS = [
  {
    label: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: Phone,
  },
  {
    label: "Instagram",
    value: INSTAGRAM_HANDLE,
    href: INSTAGRAM_URL,
    icon: Instagram,
  },
];

export default function ContactSection() {
  return (
    <section id="contato" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            className="text-center max-w-2xl mx-auto mb-14"
            eyebrow="Contato"
            title="Alguma dúvida sobre o SmartFlow?"
            description="Estamos à disposição para conversar, tirar dúvidas ou mostrar o sistema com mais calma. É só chamar por um dos canais abaixo."
            titleClassName="font-display text-3xl lg:text-4xl font-bold mb-4 leading-tight text-slate-900 dark:text-white"
            descriptionClassName="text-lg leading-relaxed text-slate-600 dark:text-slate-400"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {CONTACT_METHODS.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-black/8 bg-white transition-colors hover:border-brand/30 hover:bg-slate-50 w-full sm:w-auto dark:border-white/10 dark:bg-white/5 dark:hover:border-brand/40 dark:hover:bg-white/[0.07]"
              >
                <div className="w-11 h-11 rounded-xl bg-brand/15 border border-brand/25 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#3B82F6]" />
                </div>
                <div className="text-left">
                  <div className="text-xs mb-0.5 text-slate-500">{label}</div>
                  <div className="font-semibold text-slate-900 dark:text-white">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-20 pt-8 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-4 dark:border-white/10">
            <span
              className="font-display font-bold text-slate-900 dark:text-white"
            >
              Smart<span className="text-[#3B82F6]">Flow</span>
            </span>
            <span className="text-sm text-slate-500">
              © {new Date().getFullYear()} SmartFlow. Todos os direitos reservados.
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}