import { useMemo, type HTMLAttributes } from "react";
import qrcode from "qrcode-generator";
import { cn } from "../../utils/cn";

export interface QRCodeProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  size?: number;
  fg?: string;
  bg?: string;
}

export function QRCode({
  value,
  size = 160,
  // The code itself stays dark-on-light in both appearances for scan reliability;
  // only its frame follows the theme (bg-paper / border-rule). Values are the
  // light-appearance --su-ink / --su-paper; override via fg/bg.
  fg = "#1d1d1f",
  bg = "#ffffff",
  className,
  style,
  ...rest
}: QRCodeProps) {
  const code = useMemo(() => {
    try {
      const qr = qrcode(0, "M");
      qr.addData(Array.from(new TextEncoder().encode(value), byte => String.fromCharCode(byte)).join(""), "Byte");
      qr.make();
      const count = qr.getModuleCount();
      const cells: string[] = [];
      for (let row = 0; row < count; row++) {
        for (let col = 0; col < count; col++) {
          if (qr.isDark(row, col)) cells.push(`M${col + 4},${row + 4}h1v1h-1z`);
        }
      }
      return { modules: count + 8, path: cells.join("") };
    } catch {
      // qrcode-generator throws a bare string when the value overflows the
      // capacity of version 40 at error level M.
      // ponytail: one fallback for every encode failure; split by reason if a
      // caller ever needs to tell "too long" from something else.
      return null;
    }
  }, [value]);
  if (!code)
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center border border-solid border-rule bg-paper p-su2 text-center font-mono text-footnote text-label-secondary",
          className,
        )}
        style={{ width: size, height: size, ...style }}
        role="img"
        aria-label="QR code unavailable: value too long to encode"
        {...rest}
      >
        Value too long to encode
      </div>
    );
  const { modules, path } = code;
  return (
    <div
      className={cn(
        "inline-flex rounded-none overflow-hidden border border-solid border-rule bg-paper",
        className,
      )}
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${modules} ${modules}`}
        shapeRendering="crispEdges"
        role="img"
        aria-label={`QR code for ${value}`}
      >
        <rect width={modules} height={modules} fill={bg} />
        <path d={path} fill={fg} />
      </svg>
    </div>
  );
}
