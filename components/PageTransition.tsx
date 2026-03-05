"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [animKey, setAnimKey] = useState(pathname);

  useEffect(() => {
    // Re-trigger animation on route change
    setAnimKey(pathname);
  }, [pathname]);

  return (
    <div key={animKey} className="page-enter">
      {children}
    </div>
  );
}
