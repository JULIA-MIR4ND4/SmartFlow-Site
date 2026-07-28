import { useTheme } from "../../context/ThemeContext.jsx";

/**
 * Renderiza a print real de uma tela do SmartFlow, trocando automaticamente
 * entre a versão "claro" e "escuro" conforme o tema atual do site.
 *
 * @param {string} name - nome-base da imagem, sem o sufixo de tema
 *   (ex: "dashboard1" vira /imagem/dashboard1-claro.png ou -escuro.png)
 * @param {"cover"|"contain"} fit - "cover" (padrão) preenche o quadro podendo
 *   cortar bordas da imagem; "contain" exibe a imagem inteira, sem cortes.
 */
export default function ScreenImage({ name, alt = "", className = "", fit = "cover" }) {
  const { dark } = useTheme();
  if (!name) return null;

  const src = `/imagem/${name}-${dark ? "escuro" : "claro"}.png`;
  const fitClass = fit === "contain" ? "object-contain" : "object-cover object-top";

  return (
    <div className={`w-full h-full flex items-center justify-center ${dark ? "bg-[#0E1726]" : "bg-white"}`}>
      <img
        key={src}
        src={src}
        alt={alt || `Tela ${name} do SmartFlow`}
        loading="lazy"
        className={`w-full h-full ${fitClass} ${className}`}
      />
    </div>
  );
}