import { motion } from "motion/react";
import {
  LayoutDashboard,
  ShoppingCart,
  CreditCard,
  ClipboardList,
  UserCheck,
  Package,
  Droplets,
  Activity,
  Warehouse,
  Search,
  FileText,
  Building2,
  BarChart2,
  Settings,
} from "lucide-react";
import FadeIn from "../ui/FadeIn.jsx";
import ScreenFrame from "../ui/ScreenFrame.jsx";

const FEATURES = [
  {
    title: "Dashboard",
    category: "VISÃO GERAL DOS INDICADORES APÓS O LOGIN",
    description:
      "A tela inicial exibida após o login no SmartFlow. Reúne em um único ambiente indicadores e relatórios que auxiliam no acompanhamento das operações: vendas no TAP, inserção de créditos, vendas no PDV, consumo em litros e Top 10 consumos no TAP do mês.",
    actions: [
      "Relatórios de vendas do mês (TAP e PDV)",
      "Gráfico de vendas por categoria",
      "Top 10 consumos no TAP",
      "Clientes por dia e aniversariantes",
    ],
    icon: LayoutDashboard,
    accent: "#3B82F6",
    mockupKey: "dashboard",
  },
  {
    title: "Vendas",
    category: "GESTÃO RÁPIDA E ORGANIZADA NO PDV",
    description:
      "O módulo de vendas centraliza a abertura de pedidos, consulta de itens, busca de clientes e fechamento das operações com rapidez e controle.",
    actions: [
      "Cadastro rápido de clientes",
      "Busca e seleção de produtos",
      "Finalização de venda em poucos passos",
      "Acompanhamento de pedidos em tempo real",
    ],
    icon: ShoppingCart,
    accent: "#22C55E",
    mockupKey: "vendas",
  },
  {
    title: "Pagamento",
    category: "CONTROLE FINANCEIRO E MOVIMENTAÇÃO DE CRÉDITO",
    description:
      "Centraliza recebimentos, saldo de crédito, pagamentos e integração com as operações financeiras do estabelecimento.",
    actions: [
      "Gestão de pagamentos e recebimentos",
      "Consulta de saldos e crédito",
      "Acompanhamento de TAGs e movimentações",
      "Relatórios financeiros por período",
    ],
    icon: CreditCard,
    accent: "#8B5CF6",
    mockupKey: "pagamento",
  },
  {
    title: "Comandas",
    category: "ORGANIZAÇÃO E CONSULTA DE ATENDIMENTOS",
    description:
      "Permite acompanhar comandas, consultar pedidos abertos e facilitar o atendimento com uma visão organizada do fluxo de mesas.",
    actions: [
      "Consulta de comandas abertas",
      "Filtro por período e mesa",
      "Acompanhamento do status do atendimento",
      "Rastreamento de pedidos em andamento",
    ],
    icon: ClipboardList,
    accent: "#06B6D4",
    mockupKey: "comandas",
  },
  {
    title: "Clientes",
    category: "VISÃO DO RELACIONAMENTO E HISTÓRICO",
    description:
      "Reúne informações de clientes, histórico de consumo e dados de contato para uma gestão mais próxima e personalizada.",
    actions: [
      "Cadastro e atualização de clientes",
      "Histórico de consumo por cliente",
      "Aniversariantes e recorrência",
      "Segmentação para ações futuras",
    ],
    icon: UserCheck,
    accent: "#F59E0B",
    mockupKey: "clientes",
  },
  {
    title: "Produto",
    category: "GERENCIAMENTO DE ITENS E CATÁLOGO",
    description:
      "Organiza o catálogo do estabelecimento com detalhes de cada item, facilitando o controle e a operação diária.",
    actions: [
      "Cadastro de produtos e categorias",
      "Consulta rápida de disponibilidade",
      "Atualização de preços e detalhes",
      "Organização de itens por tipo",
    ],
    icon: Package,
    accent: "#3B82F6",
    mockupKey: "produto",
  },
  {
    title: "Barril",
    category: "MONITORAMENTO DE PRODUÇÃO E DISPENSA",
    description:
      "Acompanha o consumo, volume e condições operacionais do barril, trazendo maior controle para a produção e a operação.",
    actions: [
      "Monitoramento de consumo por barril",
      "Acompanhamento de volume e produtividade",
      "Alertas para operação contínua",
      "Visão rápida das movimentações",
    ],
    icon: Droplets,
    accent: "#14B8A6",
    mockupKey: "barril",
  },
  {
    title: "Torneira",
    category: "CONTROLE DE DISPENSA E FLUXO",
    description:
      "Oferece um painel operacional para acompanhar o estado das torneiras e ajustar a disponibilidade de forma mais eficiente.",
    actions: [
      "Acompanhamento do estado das torneiras",
      "Análise das operações por equipamento",
      "Visão rápida do fluxo de uso",
      "Orientação para manutenção e controle",
    ],
    icon: Activity,
    accent: "#0EA5E9",
    mockupKey: "torneira",
  },
  {
    title: "Estoque",
    category: "VISÃO GERAL DE DISPONIBILIDADE E MOVIMENTAÇÃO",
    description:
      "Centraliza informações de estoque, entradas e saídas com uma visão mais segura do controle operacional do estabelecimento.",
    actions: [
      "Controle de entradas e saídas",
      "Visão eficiente da disponibilidade",
      "Histórico de movimentações",
      "Acompanhamento do saldo em tempo real",
    ],
    icon: Warehouse,
    accent: "#F97316",
    mockupKey: "estoque",
  },
  {
    title: "Consultas — Financeiro",
    category: "CONSULTA ÁGIL DE MOVIMENTAÇÕES FINANCEIRAS",
    description:
      "Permite revisar entradas, saídas, saldos e movimentações financeiras com filtros rápidos para análise do dia a dia.",
    actions: [
      "Consulta por período e categoria",
      "Acompanhamento de saldos e recebimentos",
      "Visualização de fluxo financeiro",
      "Filtro para operações específicas",
    ],
    icon: Search,
    accent: "#0EA5E9",
    mockupKey: "consultasfinanceiro",
  },
  {
    title: "Consultas — Vendas",
    category: "ANÁLISE RÁPIDA DO DESEMPENHO COMERCIAL",
    description:
      "Organiza consultas de vendas por período, cliente e operação para facilitar a leitura de indicadores e tendências.",
    actions: [
      "Consulta por período e canal",
      "Análise de desempenho comercial",
      "Acompanhamento de itens e clientes",
      "Comparativo de movimentações",
    ],
    icon: BarChart2,
    accent: "#22C55E",
    mockupKey: "consultasvendas",
  },
  {
    title: "Relatórios — Financeiro",
    category: "VISUALIZAÇÃO ESTRUTURADA DOS DADOS FINANCEIROS",
    description:
      "Consolida relatórios financeiros com foco em acompanhamento, composição e análise das operações do período.",
    actions: [
      "Resumo financeiro por período",
      "Análise de recebimentos e pagamentos",
      "Visão consolidada da operação",
      "Comparativo entre ciclos financeiros",
    ],
    icon: FileText,
    accent: "#8B5CF6",
    mockupKey: "relatoriosfinanceiro",
  },
  {
    title: "Relatórios — Torneira",
    category: "MONITORAMENTO OPERACIONAL DE DISPENSA",
    description:
      "Apresenta a performance das torneiras com indicadores de uso e operação para um controle mais detalhado.",
    actions: [
      "Indicadores de uso por equipamento",
      "Análise de operação e fluxo",
      "Acompanhamento de tempo e volume",
      "Visão consolidada do desempenho",
    ],
    icon: Activity,
    accent: "#0EA5E9",
    mockupKey: "relatoriostorneira",
  },
  {
    title: "Relatórios — Fiscal",
    category: "GESTÃO DE DADOS E COMPLIANCE",
    description:
      "Centraliza informações fiscais para organização, conferência e acompanhamento das movimentações do negócio.",
    actions: [
      "Resumo de documentos e movimentações",
      "Organização das informações fiscais",
      "Acompanhamento de conformidade",
      "Consulta rápida para auditoria",
    ],
    icon: FileText,
    accent: "#F59E0B",
    mockupKey: "fiscal",
  },
  {
    title: "Sistema — Filiais",
    category: "GESTÃO CENTRALIZADA DE UNIDADES",
    description:
      "Permite configurar e acompanhar o funcionamento das filiais de forma integrada, mantendo padronização e controle.",
    actions: [
      "Configuração de filiais e unidades",
      "Acompanhamento operacional centralizado",
      "Padronização de processos",
      "Visão integrada das operações",
    ],
    icon: Building2,
    accent: "#3B82F6",
    mockupKey: "sistemafiliais",
  },
  {
    title: "Sistema — Usuários",
    category: "CONFIGURAÇÃO E MANUTENÇÃO DA PLATAFORMA",
    description:
      "Oferece acesso às configurações principais da operação para ajustar regras, permissões e funcionamento da solução.",
    actions: [
      "Configuração de regras e permissões",
      "Ajustes gerais da plataforma",
      "Manutenção de parâmetros do sistema",
      "Visão centralizada da operação",
    ],
    icon: Settings,
    accent: "#64748B",
    mockupKey: "sistema",
  },
];

export default function ModulesSection() {
  return (
    <section id="funcionalidades" className="relative overflow-hidden bg-[#0D1629] py-24 md:py-32 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_45%)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-[#2563EB]/35 bg-[#2563EB]/10 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.3em] text-[#6DA5FF]">
            Funcionalidades
          </div>
          <h2
            className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Módulos do sistema
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            15 módulos completamente integrados, cada um desenvolvido para uma etapa específica da gestão do seu estabelecimento.
          </p>
        </FadeIn>

        <div className="space-y-10 lg:space-y-14">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35 }}
                className={`grid gap-8 lg:gap-12 ${isReversed ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"}`}
              >
                <div className={`order-1 ${isReversed ? "lg:order-2" : "lg:order-1"} p-6 sm:p-7 lg:p-8`}>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2563EB]/35 bg-[#07111F] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                      style={{ borderColor: `${feature.accent}55` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: feature.accent }} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[#6DA5FF]">
                        {feature.category}
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">{feature.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-[15px]">
                    {feature.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3B82F6]">
                      PRINCIPAIS AÇÕES DISPONÍVEIS
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {feature.actions.map((action) => (
                        <li key={action} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3B82F6]" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`order-2 ${isReversed ? "lg:order-1" : "lg:order-2"} flex items-center`}>
                  <div className="w-full rounded-[20px] border border-white/10 bg-[#07111F] p-1.5 shadow-[0_18px_48px_rgba(0,0,0,0.24)] sm:p-2 lg:p-2.5">
                    <ScreenFrame mockupKey={feature.mockupKey} height={340} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
