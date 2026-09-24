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
  DollarSign,
  BarChart2,
  FileText,
  Settings,
  Receipt,
  UserCog,
  Tablet,
} from "lucide-react";

export const UNIVERSES = [
  {
    id: "dashboard",
    name: "Dashboard",
    icon: LayoutDashboard,
    color: "#2563EB",
    description: "Visão geral dos indicadores após o login",
    screens: [
      {
        title: "Dashboard Principal",
        desc: "Apresenta um resumo das principais informações do sistema.",
      },
      {
        title: "Dashboard (Painel de Acompanhamento)",
        desc: "Exibe informações resumidas e indicadores operacionais.",
      },
    ],
  },
  {
    id: "vendas",
    name: "Vendas",
    icon: ShoppingCart,
    color: "#0EA5E9",
    description: "Registro de vendas no PDV com histórico das últimas 30",
    screens: [
      {
        title: "Tela Inicial de Vendas (PDV)",
        desc: "Ao acessar Vendas, o sistema exibe as últimas 30 vendas realizadas no PDV. Identifique o cliente para iniciar uma nova venda.",
      },
    ],
  },
  {
    id: "pagamento",
    name: "Pagamento",
    icon: CreditCard,
    color: "#8B5CF6",
    description: "Gerenciamento financeiro do cliente: créditos, TAGs e saldo",
    screens: [
      {
        title: "Identificação e Conta do Cliente",
        desc: "Informe a TAG ou o número do documento para abrir o atendimento. Em seguida, gerencie créditos, cashback, saldo e TAGs do cliente.",
      },
    ],
  },
  {
    id: "comandas",
    name: "Comandas",
    icon: ClipboardList,
    color: "#0891B2",
    description: "Consulta e gerenciamento das comandas registradas",
    screens: [
      {
        title: "Lista de Comandas com Filtros",
        desc: "Consulte todas as comandas registradas. Use filtros por categoria e período para localizar registros específicos. Acesse detalhes ou a conta do cliente diretamente.",
      },
    ],
  },
  {
    id: "clientes",
    name: "Clientes",
    icon: UserCheck,
    color: "#10B981",
    description: "Gerenciamento completo do cadastro de clientes",
    screens: [
      {
        title: "Consulta de Clientes",
        desc: "Visualize todos os clientes cadastrados. Pesquise por nome, CPF ou TAG. Acesse o PDV, a conta do cliente, edite ou exclua registros.",
      },
      {
        title: "Cadastro de Novo Cliente",
        desc: "Preencha os dados do cliente. Campos com indicador vermelho são obrigatórios. Após salvar, o sistema direciona para Pagamento para vincular a TAG.",
      },
    ],
  },
  {
    id: "produto",
    name: "Produto",
    icon: Package,
    color: "#F59E0B",
    description: "Cadastro e gestão do portfólio de produtos",
    screens: [
      {
        title: "Consulta de Produtos",
        desc: "Visualize todos os produtos cadastrados. Pesquise, filtre, edite ou cadastre novos. Para cadastrar um produto é necessário que categoria, tipo e unidade já estejam cadastrados.",
      },
      {
        title: "Cadastro de Novo Produto",
        desc: "Preencha informações básicas, defina necessidade de preparo, produto fiscal e foto. Produto é criado como ativo por padrão.",
      },
    ],
  },
  {
    id: "barril",
    name: "Barril",
    icon: Droplets,
    color: "#6366F1",
    description: "Cadastro de barris com redirecionamento para Estoque",
    screens: [
      {
        title: "Cadastro de Barril",
        desc: "Registre um novo barril. Após salvar, o sistema redireciona automaticamente para a listagem de barris no módulo Estoque.",
      },
    ],
  },
  {
    id: "torneira",
    name: "Torneira",
    icon: Activity,
    color: "#EC4899",
    description: "Consulta e cadastro das torneiras do estabelecimento",
    screens: [
      {
        title: "Consulta de Torneiras",
        desc: "Visualize todas as torneiras cadastradas. Filtre por ativos, gerencie o status de oferta e acesse visualização, edição ou exclusão.",
      },
      {
        title: "Cadastro de Nova Torneira",
        desc: "Preencha os dados da torneira. Defina o status como Ativa ou Bloqueada. Salve para disponibilizá-la nas operações.",
      },
    ],
  },
  {
    id: "estoque",
    name: "Estoque",
    icon: Warehouse,
    color: "#64748B",
    description: "Produtos e barris disponíveis para comercialização",
    screens: [
      {
        title: "Estoque de Produtos",
        desc: "Consulte os produtos em estoque e registre entradas. Somente produtos com entrada no estoque podem ser comercializados no PDV.",
      },
      {
        title: "Estoque de Barris",
        desc: "Consulte os barris disponíveis para as torneiras. Adicione novos barris com o mesmo formulário de cadastro da funcionalidade Barril.",
      },
    ],
  },
  {
    id: "financeiro",
    name: "Financeiro",
    icon: DollarSign,
    color: "#10B981",
    description: "Extrato, faturamento e saldo do estabelecimento",
    screens: [
      {
        title: "Extrato de Movimentações",
        desc: "Consulte as movimentações financeiras por forma de pagamento, tipo de operação e período. Exporte em Excel.",
      },
      {
        title: "Faturamento",
        desc: "Consulte o faturamento obtido em um período. Categorias 'não contábil' são excluídas automaticamente do cálculo.",
      },
      {
        title: "Saldo",
        desc: "Visualize saldos em TAG e cofre por categoria de cliente. Exporte os dados em Excel.",
      },
    ],
  },
  {
    id: "vendasresumo",
    name: "Vendas – Resumo",
    icon: BarChart2,
    color: "#F97316",
    description: "Indicadores consolidados de vendas por período",
    screens: [
      {
        title: "Resumo de Vendas",
        desc: "Visualize indicadores de vendas por período: volume no TAP, valor total no TAP e PDV, forma de pagamento e distribuição percentual. Faça download dos gráficos.",
      },
    ],
  },
  {
    id: "relatoriosfinanceiro",
    name: "Relatórios – Financeiro",
    icon: FileText,
    color: "#7C3AED",
    description: "Relatórios financeiros completos exportáveis em Excel",
    screens: [
      {
        title: "Relatórios Financeiros",
        desc: "Gere relatórios detalhados em Excel: Resumo Geral (créditos, PDV, TAP, pós-pagos) e Vendas por Cliente com dados completos de consumo e pagamento.",
      },
    ],
  },
  {
    id: "torneiraservico",
    name: "Torneira – Serviço",
    icon: Settings,
    color: "#0F766E",
    description: "Movimentações com TAG de serviço (autosserviço e sangria)",
    screens: [
      {
        title: "Relatório de Serviço",
        desc: "Gere relatório das movimentações no TAP realizadas com a TAG de serviço. Dados organizados em abas separadas: autosserviço e sangria.",
      },
    ],
  },
  {
    id: "fiscal",
    name: "Fiscal",
    icon: Receipt,
    color: "#DC2626",
    description: "Situações tributárias e relatórios fiscais exportáveis",
    screens: [
      {
        title: "Situações Tributárias",
        desc: "Consulte as situações tributárias cadastradas no sistema. Acesse os relatórios fiscais a partir desta tela.",
      },
      {
        title: "Exportar Relatórios Fiscais",
        desc: "Selecione e exporte os relatórios fiscais disponíveis. Para relatórios de vendas, aplique o filtro por período antes de exportar.",
      },
    ],
  },
  {
    id: "sistema",
    name: "Sistema",
    icon: UserCog,
    color: "#7C3AED",
    description: "Gestão de filiais e usuários do SmartFlow",
    screens: [
      {
        title: "Filiais",
        desc: "Consulte as informações da filial vinculada ao sistema. Esta tela é exclusivamente de consulta — sem cadastro, edição ou exclusão.",
      },
      {
        title: "Usuários — Gerenciar",
        desc: "Consulte, cadastre e edite usuários do sistema. Use geração automática de senha e organize por grupos.",
      },
    ],
  },
  {
    id: "tablet",
    name: "Tablet — Sirva-se",
    icon: Tablet,
    color: "#C026D3",
    description: "Aplicativo do tablet instalado na torneira para autoatendimento",
    // Este universo não possui alternância entre modo claro/escuro: o app do
    // tablet só existe em um único modo visual. As imagens são exibidas por
    // inteiro (sem cortes), pois as telas são fotos em formato retrato.
    imageFit: "contain",
    screens: [
      {
        title: "Tela Inicial da Torneira (Sirva-se)",
        desc: "Tela de espera exibida no tablet da torneira, apresentando a bebida disponível no barril conectado, com informações, preço e status do dispositivo.",
      },
      {
        title: "Menu de Opções do Tap",
        desc: "Menu de acesso rápido sobreposto à tela inicial, com atalhos para fechar, configurar, bloquear, consultar e selecionar a torneira.",
      },
      {
        title: "Torneira Indisponível",
        desc: "Mensagem exibida quando a torneira não está disponível para uso, orientando o cliente a utilizar outra torneira.",
      },
      {
        title: "Sobre a Bebida (Descrição e Ingredientes)",
        desc: "Modal com a descrição completa e os ingredientes cadastrados para o estilo de cerveja em exibição.",
      },
      {
        title: "Sirva-se! (Autoatendimento)",
        desc: "Tela de dispensação exibida durante o consumo, com crédito disponível, volume servido e valor total em tempo real.",
      },
      {
        title: "Acesso Manutenção (Senha)",
        desc: "Modal de autenticação exigido para liberar o acesso às configurações de manutenção do tap.",
      },
      {
        title: "Configurações do Tap",
        desc: "Tela de configuração do tap, com identificação do dispositivo, estado da torneira e ações de manutenção.",
      },
      {
        title: "Confirmação — Tap Bloqueado",
        desc: "Confirmação exibida após o bloqueio manual da torneira a partir da tela de configurações.",
      },
      {
        title: "Confirmação — Tap Desbloqueado",
        desc: "Confirmação exibida após o desbloqueio manual da torneira a partir da tela de configurações.",
      },
      {
        title: "Calibração do Sensor de Fluxo",
        desc: "Modal com passo a passo para calibrar o sensor de fluxo, comparando o volume lido pelo sensor com o volume real retirado.",
      },
      {
        title: "Sangria (Descarte de Volume)",
        desc: "Modal utilizado para realizar a sangria da torneira, descartando o volume necessário antes de novos atendimentos.",
      },
      {
        title: "Diagnóstico do Tap",
        desc: "Tela de diagnóstico com a legenda de comportamento do LED indicador e o log de eventos e falhas registrados pelo dispositivo.",
      },
      {
        title: "Configuração de Novo Tap (Ativação)",
        desc: "Tela de configuração de um tap ainda não vinculado, utilizada para informar o UUID e ativá-lo pela primeira vez.",
      },
    ],
  },
];
