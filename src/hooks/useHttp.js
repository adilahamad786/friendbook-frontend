import { useState, useCallback } from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (reqConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await fetch(reqConfig.url, {
                method : reqConfig.method ? reqConfig.method : "GET",
                headers : reqConfig.headers ? reqConfig.headers : {},
                body : reqConfig.body ? reqConfig.body : null
            });

            if (!res.ok) {
                throw new Error("Request failed!");
            }

            applyData(await res.json());
        }
        catch (error) {
            setError(error);
        }

        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHttp;