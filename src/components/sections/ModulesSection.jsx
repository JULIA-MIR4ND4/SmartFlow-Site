import { motion } from "motion/react";
import { useTheme } from "../../context/ThemeContext.jsx";
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
    id: "dashboard",
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
    imageName: "dashboard1",
  },
  {
    id: "vendas",
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
    imageName: "venda1",
  },
  {
    id: "pagamento",
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
    imageName: "pagamento1",
  },
  {
    id: "comandas",
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
    imageName: "comandas1",
  },
  {
    id: "clientes",
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
    imageName: "cliente1",
  },
  {
    id: "produto",
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
    imageName: "produto1",
  },
  {
    id: "barril",
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
    imageName: "barril1",
  },
  {
    id: "torneira",
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
    imageName: "torneira1",
  },
  {
    id: "estoque",
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
    imageName: "estoque1",
  },
  {
    id: "consultas-financeiro",
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
    id: "consultas-vendas",
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
    id: "relatorios-financeiro",
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
    imageName: "relatorioFinanceiro1",
  },
  {
    id: "relatorios-torneira",
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
    imageName: "relatorioTorneira1",
  },
  {
    id: "relatorios-fiscal",
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
    imageName: "fiscal1",
  },
  {
    id: "sistema-filiais",
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
    imageName: "sistema1",
  },
  {
    id: "sistema",
    title: "Sistema",
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
    imageName: "sistema2",
  },
];

export default function ModulesSection() {
  const { dark } = useTheme();

  return (
    <section id="funcionalidades" className={`relative overflow-hidden py-24 md:py-32 lg:py-36 ${dark ? "bg-[#0D1629]" : "bg-slate-50"}`}>
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
          <div className={`mb-5 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium uppercase tracking-[0.3em] ${dark ? "border-[#2563EB]/35 bg-[#2563EB]/10 text-[#6DA5FF]" : "border-blue-200 bg-blue-50 text-blue-700"}`}>
            Funcionalidades
          </div>
          <h2
            className={`text-4xl font-semibold sm:text-5xl lg:text-6xl ${dark ? "text-white" : "text-slate-900"}`}
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Módulos do sistema
          </h2>
          <p className={`mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg ${dark ? "text-slate-400" : "text-slate-600"}`}>
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
                <div id={feature.id} className={`order-1 ${isReversed ? "lg:order-2" : "lg:order-1"} p-6 sm:p-7 lg:p-8 scroll-mt-24`}>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2563EB]/35 bg-[#07111F] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                      style={{ borderColor: `${feature.accent}55` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: feature.accent }} />
                    </div>
                    <div>
                      <div className={`text-[10px] uppercase tracking-[0.3em] ${dark ? "text-[#6DA5FF]" : "text-[#2563EB]"}`}>
                        {feature.category}
                      </div>
                    </div>
                  </div>

                  <h3 className={`mt-5 text-2xl font-semibold sm:text-3xl ${dark ? "text-white" : "text-slate-900"}`}>{feature.title}</h3>
                  <p className={`mt-3 max-w-2xl text-sm leading-7 sm:text-[15px] ${dark ? "text-slate-400" : "text-slate-600"}`}>
                    {feature.description}
                  </p>

                  <div className="mt-6">
                    <h4 className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${dark ? "text-[#3B82F6]" : "text-[#2563EB]"}`}>
                      PRINCIPAIS AÇÕES DISPONÍVEIS
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {feature.actions.map((action) => (
                        <li key={action} className={`flex items-start gap-2.5 text-sm leading-6 ${dark ? "text-slate-300" : "text-slate-700"}`}>
                          <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${dark ? "bg-[#3B82F6]" : "bg-[#2563EB]"}`} />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`order-2 ${isReversed ? "lg:order-1" : "lg:order-2"} flex items-center`}>
                  <div className={`w-full rounded-[20px] border p-1.5 shadow-[0_18px_48px_rgba(0,0,0,0.24)] sm:p-2 lg:p-2.5 ${dark ? "border-white/10 bg-[#07111F]" : "border-slate-200 bg-white shadow-slate-200/70"}`}>
                    <ScreenFrame mockupKey={feature.mockupKey} imageName={feature.imageName} height={340} />
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