import type { ReactNode } from "react";

export function RightSceneShell({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative hidden lg:block"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      {children}
    </div>
  );
}
