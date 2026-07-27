import {
  ShoppingCart,
  CreditCard,
  ClipboardList,
  UserCheck,
  Package,
  Droplets,
  Activity,
  Warehouse,
  BarChart2,
  FileText,
  Settings,
  Receipt,
  UserCog,
} from "lucide-react";
import MockupDashboard from "./MockupDashboard.jsx";
import MockupFinanceiro from "./MockupFinanceiro.jsx";
import MockupPlaceholder from "./MockupPlaceholder.jsx";

// Módulos com tela real já construída em código.
const READY = {
  dashboard: MockupDashboard,
  financeiro: MockupFinanceiro,
};

// Módulos que ainda usam o placeholder genérico — cada um vira um
// componente de verdade conforme formos avançando seção por seção.
const PENDING = {
  vendas: { active: "Venda", label: "Vendas (PDV)", icon: ShoppingCart, path: "Venda" },
  pagamento: { active: "Pagamento", label: "Pagamento", icon: CreditCard, path: "Pagamento" },
  comandas: { active: "Comandas", label: "Comandas", icon: ClipboardList, path: "Comandas" },
  clientes: { active: "Cliente", label: "Clientes", icon: UserCheck, path: "Clientes" },
  produto: { active: "Produto", label: "Produto", icon: Package, path: "Produto" },
  barril: { active: "Barril", label: "Barril", icon: Droplets, path: "Barril" },
  torneira: { active: "Torneira", label: "Torneira", icon: Activity, path: "Torneiras" },
  estoque: { active: "Estoque", label: "Estoque", icon: Warehouse, path: "Estoque" },
  vendasresumo: { active: "Vendas", label: "Vendas — Resumo", icon: BarChart2, path: "Relatórios/Vendas/Resumo" },
  relatoriosfinanceiro: { active: "Financeiro", label: "Relatórios Financeiros", icon: FileText, path: "Relatórios/Financeiro" },
  torneiraservico: { active: "Torneira", label: "Torneira — Serviço", icon: Settings, path: "Relatórios/Torneira/Serviço" },
  fiscal: { active: "Fiscal", label: "Fiscal", icon: Receipt, path: "Relatórios/Fiscal" },
  sistema: { active: "Sistema", label: "Sistema", icon: UserCog, path: "Sistema" },
};

const pendingEntries = Object.fromEntries(
  Object.entries(PENDING).map(([key, props]) => [
    key,
    () => <MockupPlaceholder {...props} />,
  ])
);

export const MOCKUP_MAP = { ...READY, ...pendingEntries };
