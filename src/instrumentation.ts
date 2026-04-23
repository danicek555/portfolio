const storageState = new Map<string, string>();

function createStorageShim() {
  return {
    getItem(key: string) {
      return storageState.has(key) ? storageState.get(key)! : null;
    },
    setItem(key: string, value: string) {
      storageState.set(String(key), String(value));
    },
    removeItem(key: string) {
      storageState.delete(String(key));
    },
    clear() {
      storageState.clear();
    },
    key(index: number) {
      const keys = Array.from(storageState.keys());
      return keys[index] ?? null;
    },
    get length() {
      return storageState.size;
    },
  };
}

export function register() {
  // In some local Node setups, --localstorage-file is injected with an invalid
  // value. That creates a broken global localStorage (missing getItem/setItem),
  // and SSR crashes with "localStorage.getItem is not a function".
  const globalObj = globalThis as typeof globalThis & {
    localStorage?: unknown;
    sessionStorage?: unknown;
  };

  const hasValidStorage = (candidate: unknown) =>
    !!candidate &&
    typeof candidate === "object" &&
    typeof (candidate as { getItem?: unknown }).getItem === "function" &&
    typeof (candidate as { setItem?: unknown }).setItem === "function";

  if (!hasValidStorage(globalObj.localStorage)) {
    globalObj.localStorage = createStorageShim();
  }

  if (!hasValidStorage(globalObj.sessionStorage)) {
    globalObj.sessionStorage = createStorageShim();
  }
}
