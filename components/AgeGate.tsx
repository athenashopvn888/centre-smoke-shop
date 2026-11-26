"use client";

import { useEffect, useState } from "react";

const KEY = "centre-smoke-age-confirmed";

export function AgeGate() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    queueMicrotask(() => setOpen(window.localStorage.getItem(KEY) !== "yes"));
  }, []);

  if (!open) return null;

  function accept() {
    window.localStorage.setItem(KEY, "yes");
    setOpen(false);
  }

  return (
    <div className="age-backdrop" role="presentation">
      <section className="age-dialog" role="dialog" aria-modal="true" aria-labelledby="age-title" aria-describedby="age-copy">
        <div className="age-mark" aria-hidden="true">C</div>
        <p className="eyebrow">Adults only</p>
        <h2 id="age-title">Are you 19 or older?</h2>
        <p id="age-copy">This website is intended for adults of legal smoking and vaping age.</p>
        <div className="age-actions">
          <button className="button button--primary" onClick={accept}>Yes, enter</button>
          <a className="button button--ghost" href="https://www.google.ca/">No, leave</a>
        </div>
      </section>
    </div>
  );
}
