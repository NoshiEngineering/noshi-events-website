// src/types/global.d.ts or create at root
export {};

declare global {
  interface Window {
    gtag: (
      command: string,
      eventName: string,
      eventParams?: Record<string, unknown> 
    ) => void;
  }
}
