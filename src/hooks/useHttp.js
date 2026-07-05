import { useCallback } from 'react';

const BASE_URL = 'http://localhost:3000';

export const useHttp = () => {
  const request = useCallback(
    async (
      url,
      method = 'GET',
      body = null,
      headers = { 'Content-Type': 'application/json' }
    ) => {
      const response = await fetch(`${BASE_URL}${url}`, {
        method,
        body,
        headers,
      });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    },
    []
  );

  return { request };
};
