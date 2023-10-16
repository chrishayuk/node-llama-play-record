export default function withStatusLogs<T>(message: string | {
    loading: string;
    success?: string;
    fail?: string;
}, callback: () => Promise<T>): Promise<T>;
