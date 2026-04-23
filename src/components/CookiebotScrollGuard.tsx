"use client";

import { useEffect } from "react";

function elementVisible(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  if (rect.width < 8 || rect.height < 8) return false;
  const s = getComputedStyle(el);
  return s.display !== "none" && s.visibility !== "hidden" && s.opacity !== "0";
}

function hasVisibleConsentDialog(): boolean {
  const selectors = [
    "#CybotCookiebotDialog",
    "[id*='cookiebot']",
    "[class*='cookiebot']",
    "[id*='cookie-consent']",
    "[class*='cookie-consent']",
    "[data-testid*='cookie']",
  ];

  return selectors.some((selector) => {
    const nodes = Array.from(document.querySelectorAll(selector));
    return nodes.some((node) => elementVisible(node));
  });
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
  document.body.style.removeProperty("overflow-y");
  document.body.style.removeProperty("position");
  document.documentElement.style.removeProperty("overflow");
  document.documentElement.style.removeProperty("overflow-y");
  document.documentElement.style.removeProperty("position");
}

/** Clears html/body scroll lock when Cookiebot errors (e.g. domain not in Cookiebot Manager). */
export function CookiebotScrollGuard() {
  useEffect(() => {
    const tryFix = () => {
      if (hasVisibleConsentDialog()) return;
      if (!documentScrollLocked()) return;
      clearCookiebotScrollLock();
    };

    const delays = [300, 800, 1500, 2500, 4000, 7000].map((ms) =>
      window.setTimeout(tryFix, ms),
    );
    const interval = window.setInterval(tryFix, 5000);

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
      clearInterval(interval);
      obs.disconnect();
    };
  }, []);

  return null;
}
