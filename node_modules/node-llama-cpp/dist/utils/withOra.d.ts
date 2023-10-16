export default function withOra<T>(message: string | {
    loading: string;
    success?: string;
    fail?: string;
}, callback: () => Promise<T>): Promise<T>;
