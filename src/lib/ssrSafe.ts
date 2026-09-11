import { useEffect, useRef } from 'react';

export function isServer() {
    return typeof window === 'undefined';
}

export function isBrowser() {
    return typeof window !== 'undefined';
}

export function useMounted() {
    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;
    }, []);

    return mounted.current;
}

export function createStableId(prefix: string, index: number): string {
    return `${prefix}-${index}`;
}
