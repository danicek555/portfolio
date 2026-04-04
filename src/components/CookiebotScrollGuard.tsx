"use client";

import { useEffect } from "react";

function cookiebotBannerVisible(): boolean {
  const dialog = document.getElementById("CybotCookiebotDialog");
  if (!dialog) return false;
  const rect = dialog.getBoundingClientRect();
  if (rect.width < 8 || rect.height < 8) return false;
  const s = getComputedStyle(dialog);
  if (s.display === "none" || s.visibility === "hidden") return false;
  return true;
}

function documentScrollLocked(): boolean {
  const b = getComputedStyle(document.body);
  const h = getComputedStyle(document.documentElement);
  return (
    b.overflow === "hidden" ||
    b.overflowY === "hidden" ||
    h.overflow === "hidden" ||
    h.overflowY === "hidden"
  );
}

function clearCookiebotScrollLock() {
  document.body.style.removeProperty("overflow");
  document.body.style.removeProperty("position");
  document.documentElement.style.removeProperty("overflow");
  document.documentElement.style.removeProperty("position");
}

/** Clears html/body scroll lock when Cookiebot errors (e.g. domain not in Cookiebot Manager). */
export function CookiebotScrollGuard() {
  useEffect(() => {
    const tryFix = () => {
      if (cookiebotBannerVisible()) return;
      if (!documentScrollLocked()) return;
      clearCookiebotScrollLock();
    };

    const delays = [800, 2000, 4000].map((ms) => window.setTimeout(tryFix, ms));

    const obs = new MutationObserver(tryFix);
    obs.observe(document.body, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => {
      delays.forEach(clearTimeout);
      obs.disconnect();
    };
  }, []);

  return null;
}
