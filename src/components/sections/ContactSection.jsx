import { ArrowRight, Mail, Smartphone } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";
import FadeIn from "../ui/FadeIn.jsx";

export default function ContactSection() {
  const { dark } = useTheme();

  return (
    <section id="contato" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className={`rounded-[32px] border p-8 lg:p-10 ${dark ? "border-white/10 bg-white/5" : "border-black/8 bg-white"}`}>
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-full text-sm text-[#3B82F6] mb-5">
                  Vamos conversar
                </div>
                <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${dark ? "text-white" : "text-slate-900"}`} style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  Pronto para levar mais organização para o seu estabelecimento?
                </h2>
                <p className={`text-lg leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
                  O SmartFlow foi pensado para transformar o dia a dia de bares e restaurantes com inteligência, clareza e controle em tempo real.
                </p>
              </div>

              <div className={`rounded-3xl border p-6 ${dark ? "border-white/10 bg-[#060D1C]" : "border-black/8 bg-slate-50"}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/15 border border-[#2563EB]/25 flex items-center justify-center">
                    <Mail size={20} className="text-[#3B82F6]" />
                  </div>
                  <div>
                    <div className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>Entre em contato</div>
                    <div className={`text-sm ${dark ? "text-slate-400" : "text-slate-600"}`}>Fale com a equipe do projeto</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className={`rounded-2xl border px-4 py-3 flex items-center gap-3 ${dark ? "border-white/10 bg-white/5" : "border-black/8 bg-white"}`}>
                    <Smartphone size={16} className="text-[#3B82F6]" />
                    <span className={`${dark ? "text-slate-300" : "text-slate-700"}`}>Disponível para demonstração e apresentação</span>
                  </div>
                  <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium transition-colors">
                    Solicitar apresentação
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
