import { useTheme } from "../../../context/ThemeContext.jsx";
import {
  LayoutDashboard,
  ShoppingCart,
  DollarSign,
  Users,
  Ticket,
  UserCheck,
  Package,
  Droplets,
  Waves,
  ClipboardList,
  BarChart2,
  Receipt,
  Settings,
  Activity,
} from "lucide-react";

const MAIN_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Venda", icon: ShoppingCart },
  { label: "Pagamento", icon: DollarSign },
  { label: "Clientes", icon: Users },
  { label: "Comandas", icon: Ticket },
];

const GROUPS = [
  {
    title: "Cadastro",
    items: [
      { label: "Cliente", icon: UserCheck },
      { label: "Produto", icon: Package },
      { label: "Barril", icon: Droplets },
      { label: "Torneira", icon: Waves },
    ],
  },
  {
    title: "Lançamentos",
    items: [{ label: "Estoque", icon: ClipboardList }],
  },
  {
    title: "Consultas",
    items: [
      { label: "Financeiro", icon: DollarSign },
      { label: "Vendas", icon: Activity },
    ],
  },
  {
    title: "Relatórios",
    items: [
      { label: "Financeiro", icon: BarChart2 },
      { label: "Torneira", icon: Waves },
      { label: "Fiscal", icon: Receipt },
    ],
  },
  {
    title: "Adm",
    items: [{ label: "Sistema", icon: Settings }],
  },
];

// Sidebar compacta usada dentro dos mockups de tela — reproduz a
// estrutura real do menu do SmartFlow (não é navegação funcional).
export default function MockupSidebar({ active = "Dashboard" }) {
  const { dark } = useTheme();

  return (
    <div className={`w-[124px] shrink-0 h-full border-r py-3 overflow-hidden text-[9px] ${dark ? "bg-[#0B1220] border-white/5" : "bg-slate-100 border-slate-200"}`}>
      <div className={`flex items-center gap-1.5 px-3 pb-2 mb-2 border-b ${dark ? "border-white/5" : "border-slate-200"}`}>
        <div className="w-4 h-4 rounded bg-[#2563EB] flex items-center justify-center">
          <span className="text-white text-[8px] font-bold">S</span>
        </div>
        <span className={`font-semibold text-[10px] ${dark ? "text-white" : "text-slate-900"}`}>SmartFlow</span>
      </div>

      <nav className="flex flex-col gap-0.5 px-2">
        {MAIN_ITEMS.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className={`flex items-center gap-1.5 px-2 py-1 rounded ${
              active === label ? "bg-[#2563EB] text-white" : dark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            <Icon size={10} />
            <span>{label}</span>
          </div>
        ))}
      </nav>

      {GROUPS.map((group) => (
        <div key={group.title} className="px-2 mt-3">
          <div className={`uppercase text-[7px] tracking-wide px-2 mb-1 ${dark ? "text-slate-600" : "text-slate-500"}`}>
            {group.title}
          </div>
          <div className="flex flex-col gap-0.5">
            {group.items.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className={`flex items-center gap-1.5 px-2 py-1 rounded ${
                  active === label ? "bg-[#2563EB] text-white" : dark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                <Icon size={10} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
