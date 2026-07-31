import { Instagram, Phone } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";
import FadeIn from "../ui/FadeIn.jsx";

const WHATSAPP_NUMBER = "5549991060861";
const WHATSAPP_DISPLAY = "(49) 9 9106-0861";
const INSTAGRAM_HANDLE = "@smartflow.app";
const INSTAGRAM_URL = "https://instagram.com/smartflow.app";

export default function ContactSection() {
  const { dark } = useTheme();

  return (
    <section id="contato" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-full text-sm text-[#3B82F6] mb-6">
              Contato
            </div>
            <h2
              className={`text-3xl lg:text-4xl font-bold mb-4 leading-tight ${dark ? "text-white" : "text-slate-900"}`}
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Alguma dúvida sobre o SmartFlow?
            </h2>
            <p className={`text-lg leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
              Estamos à disposição para conversar, tirar dúvidas ou mostrar o sistema com mais calma.
              É só chamar por um dos canais abaixo.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 px-6 py-4 rounded-2xl border transition-colors w-full sm:w-auto ${
                dark
                  ? "border-white/10 bg-white/5 hover:border-[#2563EB]/40 hover:bg-white/[0.07]"
                  : "border-black/8 bg-white hover:border-[#2563EB]/30 hover:bg-slate-50"
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-[#2563EB]/15 border border-[#2563EB]/25 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-[#3B82F6]" />
              </div>
              <div className="text-left">
                <div className={`text-xs mb-0.5 ${dark ? "text-slate-500" : "text-slate-500"}`}>WhatsApp</div>
                <div className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{WHATSAPP_DISPLAY}</div>
              </div>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 px-6 py-4 rounded-2xl border transition-colors w-full sm:w-auto ${
                dark
                  ? "border-white/10 bg-white/5 hover:border-[#2563EB]/40 hover:bg-white/[0.07]"
                  : "border-black/8 bg-white hover:border-[#2563EB]/30 hover:bg-slate-50"
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-[#2563EB]/15 border border-[#2563EB]/25 flex items-center justify-center flex-shrink-0">
                <Instagram size={18} className="text-[#3B82F6]" />
              </div>
              <div className="text-left">
                <div className={`text-xs mb-0.5 ${dark ? "text-slate-500" : "text-slate-500"}`}>Instagram</div>
                <div className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{INSTAGRAM_HANDLE}</div>
              </div>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className={`mt-20 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${dark ? "border-white/10" : "border-black/8"}`}>
            <span
              className={`font-bold ${dark ? "text-white" : "text-slate-900"}`}
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Smart<span className="text-[#3B82F6]">Flow</span>
            </span>
            <span className={`text-sm ${dark ? "text-slate-500" : "text-slate-500"}`}>
              © {new Date().getFullYear()} SmartFlow. Todos os direitos reservados.
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}