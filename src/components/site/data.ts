import {
  Ship,
  Layers,
  Gauge,
  Wrench,
  Radar,
  Settings2,
  Drill,
  LineChart,
  HardHat,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Crude Lifting & Marketing",
    description:
      "Crude sales partnerships, vessel fleets, storage, floating production and modular refinery swap deals.",
    icon: Ship,
  },
  {
    title: "Asset Development & Reservoir Management",
    description:
      "Basin analysis, evaluation, reserves, asset modelling, FDP and production performance analysis.",
    icon: Layers,
  },
  {
    title: "Production Optimization",
    description:
      "System debottlenecking, integrated well/reservoir/facility modelling and sensitivity analysis.",
    icon: Gauge,
  },
  {
    title: "Well Intervention Solutions",
    description:
      "Water/gas shut-off, zone switches, reperforation, sand control, gas lift, slickline and coiled tubing.",
    icon: Wrench,
  },
  {
    title: "Production Operation Surveillance",
    description:
      "Remote near-real-time monitoring connected to intelligent asset solutions.",
    icon: Radar,
  },
  {
    title: "Wellhead Equipment & Maintenance",
    description:
      "Wellhead assemblies, Christmas trees, casing heads, stuffing boxes, flow meters and related equipment.",
    icon: Settings2,
  },
  {
    title: "Drilling, Completion & Workover",
    description:
      "Land, swamp and offshore rigs, directional drilling, geosteering, MWD/LWD, cementing and casing inspection.",
    icon: Drill,
  },
  {
    title: "Project Financing & Petroleum Economics",
    description:
      "Financing viable oilfield development projects and providing economic advisory services.",
    icon: LineChart,
  },
  {
    title: "Engineering, Procurement & Construction",
    description:
      "Process facilities, pipelines, commissioning, repairs, valve replacement, corrosion protection and pigging.",
    icon: HardHat,
  },
  {
    title: "Logistics & Equipment Leasing",
    description:
      "Heavy-duty land equipment and marine assets including barges, tugboats, houseboats and vessels.",
    icon: Truck,
  },
  {
    title: "Manpower & Project Management",
    description:
      "Technical and managerial manpower, visa/work permit support, contract evaluation and project execution.",
    icon: Users,
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const strengths = [
  "Experienced Human Capital",
  "Technology-Driven Solutions",
  "Strategic Global Partnerships",
  "Integrated Oil & Gas Services",
  "Asset Optimization & Maximum Recovery",
  "Strong Client-Focused Approach",
  "HSSE-Driven Operations",
];
