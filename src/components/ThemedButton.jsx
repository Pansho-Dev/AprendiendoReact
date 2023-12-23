import React from 'react';
import { useTheme } from './ThemeContext';

const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      style={{ backgroundColor: theme === 'light' ? '#fff' : '#6060' }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
};

export default ThemedButton;