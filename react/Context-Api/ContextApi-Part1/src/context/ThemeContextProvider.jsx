import React, { useEffect, useState } from 'react';
import ThemeContext from './ThemeContext';

function ThemeContextProvider({ children }) {
  const [ThemeMode, setThemeMode] = useState('light');

  const enableDarkMode = () => setThemeMode('dark');
  const enableLightMode = () => setThemeMode('light');

  useEffect(() => {
    const html = document.querySelector('html');
    if (ThemeMode === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [ThemeMode]);

  return (
    <ThemeContext.Provider
      value={{
        ThemeMode,
        setThemeMode,
        enableDarkMode,
        enableLightMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
