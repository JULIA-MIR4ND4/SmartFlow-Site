import { useTheme } from "../../context/ThemeContext.jsx";

/**
 * Renderiza a print real de uma tela do SmartFlow, trocando automaticamente
 * entre a versão "claro" e "escuro" conforme o tema atual do site.
 *
 * @param {string} name - nome-base da imagem, sem o sufixo de tema
 *   (ex: "dashboard1" vira /imagem/dashboard1-claro.png ou -escuro.png)
 */
export default function ScreenImage({ name, alt = "", className = "" }) {
  const { dark } = useTheme();
  if (!name) return null;

  const src = `/imagem/${name}-${dark ? "escuro" : "claro"}.png`;

  return (
    <img
      key={src}
      src={src}
      alt={alt || `Tela ${name} do SmartFlow`}
      loading="lazy"
      className={`w-full h-full object-cover object-top ${className}`}
    />
  );
}
