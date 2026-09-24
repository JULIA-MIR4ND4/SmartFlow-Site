// Mapeia cada universo/módulo para o prefixo usado nos arquivos de imagem
// dentro de public/imagem (ex: "dashboard" -> dashboard1-claro.webp / dashboard1-escuro.webp)
// e para a quantidade de telas reais disponíveis para aquele universo.
//
// Como as imagens já seguem o padrão "<prefixo><numero>-<claro|escuro>.webp",
// só precisamos saber o prefixo e quantas telas existem — o restante do nome
// é montado automaticamente pelo componente ScreenImage.

const IMAGE_CONFIG = {
  dashboard: { prefix: "dashboard", count: 2 },
  vendas: { prefix: "venda", count: 3 },
  pagamento: { prefix: "pagamento", count: 11 },
  comandas: { prefix: "comandas", count: 1 },
  clientes: { prefix: "cliente", count: 6 },
  produto: { prefix: "produto", count: 11 },
  barril: { prefix: "barril", count: 2 },
  torneira: { prefix: "torneira", count: 4 },
  estoque: { prefix: "estoque", count: 5 },
  financeiro: { prefix: "financeiro", count: 3 },
  vendasresumo: { prefix: "vendaResumo", count: 1 },
  relatoriosfinanceiro: { prefix: "relatorioFinanceiro", count: 2 },
  torneiraservico: { prefix: "relatorioTorneira", count: 1 },
  fiscal: { prefix: "fiscal", count: 2 },
  sistema: { prefix: "sistema", count: 3 },
  tablet: { prefix: "tablet", count: 13 },
};

// Retorna a lista ordenada de nomes-base de imagem para um universo
// (ex: ["dashboard1", "dashboard2"]). Retorna [] se não houver imagens reais.
export function getScreenImages(universeId) {
  const config = IMAGE_CONFIG[universeId];
  if (!config) return [];
  return Array.from({ length: config.count }, (_, i) => `${config.prefix}${i + 1}`);
}

// Retorna apenas a primeira tela real de um universo (usado em cards/resumos).
export function getFirstScreenImage(universeId) {
  return getScreenImages(universeId)[0] ?? null;
}

export default IMAGE_CONFIG;
