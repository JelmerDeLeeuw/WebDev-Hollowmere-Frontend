import { useState } from "react";

let abortController: AbortController | null = null;

export function useApi() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    async function fetchData(fetchUrl: string) {
        abortController?.abort();
        abortController = new AbortController();
        setData(null);
        setLoading(true);
        setError(null)

        try {
            const response = await fetch(fetchUrl, {
                signal: abortController.signal,
            });
            const json = await response.json();
            setData(json);
        } catch(e: any) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    async function sendData(postUrl: string, data: object) {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(postUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            return response.json();
        } catch(e: any) {
            setError(e);
            return null;
        } finally {
            setLoading(false);
        }
    }

    return { data, loading, error, fetchData, sendData}
}
