"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * True once the client has hydrated. Unlike `useState` + `useEffect`, this
 * doesn't call setState from an effect body — React re-renders automatically
 * when the client snapshot (`true`) differs from the server snapshot
 * (`false`) used for hydration.
 */
export function useHasMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
