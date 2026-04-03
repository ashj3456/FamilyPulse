// File: hooks/useFetch.ts

import { useEffect, useState } from "react";

interface UseFetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
}

export function useFetch<T = any>(url: string, options?: UseFetchOptions) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://jsonplaceholder.typicode.com${url}`,
          {
            method: options?.method || "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: options?.body ? JSON.stringify(options.body) : undefined,
          },
        );

        const result = await response.json();

        setData(result);
        setError(null);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
