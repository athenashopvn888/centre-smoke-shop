"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function ContentStatusRefresh({ webOn, tvOn }: { webOn: boolean; tvOn: boolean }) {
  const router = useRouter();
  useEffect(() => {
    const controller = new AbortController();
    let pending = false;
    async function check() {
      if (pending || document.hidden) return;
      pending = true;
      try {
        const result = await fetch("/api/content-status", { cache: "no-store", signal: controller.signal });
        const status = result.ok ? await result.json() : null;
        if (Boolean(status?.cigaretteWebOn) !== webOn || Boolean(status?.cigaretteTvOn) !== tvOn) router.refresh();
      } catch {
        if (!controller.signal.aborted && (webOn || tvOn)) router.refresh();
      } finally {
        pending = false;
      }
    }
    const timer = window.setInterval(check, 60000);
    document.addEventListener("visibilitychange", check);
    return () => {
      controller.abort();
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", check);
    };
  }, [router, webOn, tvOn]);
  return null;
}
