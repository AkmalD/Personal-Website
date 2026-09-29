import React from "react";
import {
  Coffee,
  Layers,
  Network,
  Server,
  Cpu,
  Code2,
  Terminal,
  Database,
  Workflow,
  Boxes,
  Zap,
  Globe,
  Layout,
  Palette,
  Table,
  Component,
  FastForward,
  Box,
  Cloud,
  GitBranch,
  Package,
  Send,
  Compass,
  Share2,
  Shield,
  Lock,
  Award,
  Flame,
  Leaf,
} from "lucide-react";

interface TechIconProps {
  name?: string;
  className?: string;
}

export function TechIcon({ name, className = "w-4 h-4 text-primary" }: TechIconProps) {
  switch (name) {
    case "Coffee":
      return <Coffee className={className} />;
    case "Layers":
      return <Layers className={className} />;
    case "Network":
      return <Network className={className} />;
    case "Server":
      return <Server className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    case "Code2":
      return <Code2 className={className} />;
    case "Terminal":
      return <Terminal className={className} />;
    case "Database":
      return <Database className={className} />;
    case "Workflow":
      return <Workflow className={className} />;
    case "Boxes":
      return <Boxes className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "Globe":
      return <Globe className={className} />;
    case "Layout":
      return <Layout className={className} />;
    case "Palette":
      return <Palette className={className} />;
    case "Table":
      return <Table className={className} />;
    case "Component":
      return <Component className={className} />;
    case "FastForward":
      return <FastForward className={className} />;
    case "Container":
      return <Box className={className} />;
    case "Cloud":
      return <Cloud className={className} />;
    case "GitBranch":
      return <GitBranch className={className} />;
    case "Package":
      return <Package className={className} />;
    case "Send":
      return <Send className={className} />;
    case "Compass":
      return <Compass className={className} />;
    case "Share2":
      return <Share2 className={className} />;
    case "Shield":
      return <Shield className={className} />;
    case "Lock":
      return <Lock className={className} />;
    case "Award":
      return <Award className={className} />;
    case "Flame":
      return <Flame className={className} />;
    case "Leaf":
      return <Leaf className={className} />;
    default:
      return <Code2 className={className} />;
  }
}
