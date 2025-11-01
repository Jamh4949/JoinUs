declare module 'aos' {
  interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    startEvent?: string;
    initClassName?: string;
    animatedClassName?: string;
    useClassNames?: boolean;
    disable?: boolean | 'phone' | 'tablet' | 'mobile' | (() => boolean);
    throttleDelay?: number;
    debounceDelay?: number;
  }

  interface AosInstance {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: AosInstance;

  export type { AosOptions };
  export function init(options?: AosOptions): void;
  export function refresh(): void;
  export function refreshHard(): void;
  export default AOS;
}
