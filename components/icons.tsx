import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ className, children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

export function BrandMark(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4.5 12c0-4.1 3.4-7.5 7.5-7.5 2.1 0 4.1.9 5.5 2.4" />
      <path d="M19.5 12c0 4.1-3.4 7.5-7.5 7.5-2.1 0-4.1-.9-5.5-2.4" />
      <path d="M12 7.5c2 1.1 3.2 3 3.2 5.1 0 2.4-1.6 4.7-4.2 5.9" />
      <circle cx="17.8" cy="6.2" r="1.2" />
    </IconBase>
  );
}

export function FeatureIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "reader":
      return (
        <IconBase className={className}>
          <path d="M4.5 6.5A2.5 2.5 0 0 1 7 4h10a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 17 20H7a2.5 2.5 0 0 1-2.5-2.5z" />
          <path d="M8 8h8" />
          <path d="M8 11.5h8" />
          <path d="M8 15h5" />
        </IconBase>
      );
    case "summary":
      return (
        <IconBase className={className}>
          <path d="M5 7.5h14" />
          <path d="M5 12h10" />
          <path d="M5 16.5h7" />
          <path d="M17 14.5l2 2 3-4" />
        </IconBase>
      );
    case "highlighting":
      return (
        <IconBase className={className}>
          <path d="M14.5 5.5l4 4" />
          <path d="M8.5 18.5l-3 1 1-3 8-8 2 2z" />
          <path d="M5 21h14" />
        </IconBase>
      );
    case "notes":
      return (
        <IconBase className={className}>
          <path d="M7 4.5h10a2.5 2.5 0 0 1 2.5 2.5v10L15 21.5H7A2.5 2.5 0 0 1 4.5 19V7A2.5 2.5 0 0 1 7 4.5z" />
          <path d="M9 9h6" />
          <path d="M9 13h6" />
          <path d="M15 17v4.5" />
        </IconBase>
      );
    case "citations":
      return (
        <IconBase className={className}>
          <path d="M7 7h4v4H7z" />
          <path d="M13 13h4v4h-4z" />
          <path d="M11 9l2 2" />
          <path d="M9 15l-2 2" />
        </IconBase>
      );
    case "search":
      return (
        <IconBase className={className}>
          <circle cx="10.5" cy="10.5" r="4.5" />
          <path d="M14 14l5 5" />
          <path d="M8.5 10.5h4" />
        </IconBase>
      );
    case "import":
      return (
        <IconBase className={className}>
          <path d="M12 4.5v10" />
          <path d="M8.5 8L12 4.5 15.5 8" />
          <path d="M5 15.5v2A2.5 2.5 0 0 0 7.5 20h9a2.5 2.5 0 0 0 2.5-2.5v-2" />
        </IconBase>
      );
    case "focus":
      return (
        <IconBase className={className}>
          <path d="M8 4.5H5.5v2.5" />
          <path d="M16 4.5h2.5v2.5" />
          <path d="M8 19.5H5.5V17" />
          <path d="M16 19.5h2.5V17" />
          <rect x="8" y="8" width="8" height="8" rx="2" />
        </IconBase>
      );
    case "highlight":
      return (
        <IconBase className={className}>
          <path d="M6 16l8-8 4 4-8 8H6z" />
          <path d="M13 7l4 4" />
        </IconBase>
      );
    case "ask":
      return (
        <IconBase className={className}>
          <path d="M6.5 8.5A5.5 5.5 0 0 1 12 4a5.5 5.5 0 0 1 5.5 5.5c0 4-3.5 5.5-4.5 6.5-.5.5-1 1-1 2" />
          <circle cx="12" cy="18.5" r="1" fill="currentColor" stroke="none" />
        </IconBase>
      );
    case "save":
      return (
        <IconBase className={className}>
          <path d="M6 5h10l2 2v12H6z" />
          <path d="M9 5v5h6V5" />
          <path d="M9 18h6" />
        </IconBase>
      );
    case "build":
      return (
        <IconBase className={className}>
          <circle cx="7" cy="12" r="2" />
          <circle cx="17" cy="7" r="2" />
          <circle cx="17" cy="17" r="2" />
          <path d="M9 12h6" />
          <path d="M15.5 8.5l-5 3.5 5 3.5" />
        </IconBase>
      );
    default:
      return (
        <IconBase className={className}>
          <circle cx="12" cy="12" r="6" />
          <path d="M12 9v6" />
          <path d="M9 12h6" />
        </IconBase>
      );
  }
}
