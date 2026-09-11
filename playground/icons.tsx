import type { CSSProperties } from "react";
import {
  IconArrowRight,
  IconBell,
  IconCheck,
  IconChevronRight,
  IconCode,
  IconCopy,
  IconDownload,
  IconHeart,
  IconLayoutGrid,
  IconMenu2,
  IconMoon,
  IconPlus,
  IconSearch,
  IconSettings,
  IconStack2,
  IconSun,
  IconX,
  type Icon as TablerIconComponent,
} from "@tabler/icons-react";

/** SynapseWare instrument defaults — hairline stroke, square joins */
export const glyphProps = {
  stroke: 1.5,
  strokeLinejoin: "miter" as const,
  strokeLinecap: "square" as const,
};

const catalog: Record<string, TablerIconComponent> = {
  search: IconSearch,
  arrow: IconArrowRight,
  chevron: IconChevronRight,
  grid: IconLayoutGrid,
  layers: IconStack2,
  sun: IconSun,
  moon: IconMoon,
  code: IconCode,
  copy: IconCopy,
  check: IconCheck,
  plus: IconPlus,
  close: IconX,
  menu: IconMenu2,
  settings: IconSettings,
  heart: IconHeart,
  download: IconDownload,
  bell: IconBell,
};

export function Glyph({
  name,
  size = 18,
  style,
}: {
  name: string;
  size?: number;
  style?: CSSProperties;
}) {
  const Icon = catalog[name] ?? catalog.layers;
  return (
    <Icon
      size={size}
      stroke={glyphProps.stroke}
      strokeLinejoin={glyphProps.strokeLinejoin}
      strokeLinecap={glyphProps.strokeLinecap}
      aria-hidden
      style={style}
    />
  );
}
