import { useState, useEffect, useCallback } from 'react';

const storage = typeof chrome !== 'undefined' && chrome.storage
  ? chrome.storage.local
  : null;

export function useChromeStorage(key, initialValue) {
  const [data, setData] = useState(initialValue);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (storage) {
      storage.get([key], (result) => {
        if (result[key] !== undefined) {
          setData(result[key]);
        }
        setLoaded(true);
      });
    } else {
      // Fallback to localStorage for development
      const stored = localStorage.getItem(key);
      if (stored !== null) {
        try {
          setData(JSON.parse(stored));
        } catch {
          // ignore parse errors
        }
      }
      setLoaded(true);
    }
  }, [key]);

  const saveData = useCallback((newData) => {
    const value = typeof newData === 'function' ? newData(data) : newData;
    setData(value);
    if (storage) {
      storage.set({ [key]: value });
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, data]);

  return [data, saveData, loaded];
}
