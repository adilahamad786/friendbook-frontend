import { useState, useCallback } from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const sendRequest = useCallback(async (reqConfig, applyData) => {
        setIsLoading(true);
        setError(false);

        try {
            const res = await fetch((process.env.REACT_APP_BASE_URL+reqConfig.url), {
                method : reqConfig.method ? reqConfig.method : "GET",
                headers : reqConfig.headers ? reqConfig.headers : {},
                body : reqConfig.body ? reqConfig.body : null,
                credentials: "include"
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(JSON.stringify(data.error));
            }

            applyData(data);
        }
        catch (error) {
            setError(JSON.parse(error.message));
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