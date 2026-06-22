// src/constants/theme.js
import React, { createContext, useContext, useState } from 'react';

export const LIGHT_COLORS = {
  primary: '#007AFF',       
  background: '#F8FAFC',    
  cardBg: '#FFFFFF',        
  border: '#E2E8F0',        
  textPrimary: '#0F172A',   
  textSecondary: '#475569', 
  textMuted: '#94A3B8',     
  buttonBlue: '#007AFF',    
  lost: '#EF4444',          
  found: '#22C55E',         
  claimed: '#64748B',       
  white: '#FFFFFF',
  innerBoxBg: '#F1F5F9',
};

export const DARK_COLORS = {
  primary: '#3B82F6',       // Brighter blue for accessible contrast on dark screens
  background: '#0F172A',    // Deep dark slate canvas
  cardBg: '#1E293B',        // Sleek navy slate for card modules
  border: '#334155',        // Soft border lines for dark surfaces
  textPrimary: '#F8FAFC',   // Clean off-white for main titles
  textSecondary: '#94A3B8', // Muted slate gray for text descriptions
  textMuted: '#64748B',     // Placeholder gray
  buttonBlue: '#3B82F6',    
  lost: '#EF4444',          
  found: '#22C55E',         
  claimed: '#64748B',       
  white: '#FFFFFF',
  innerBoxBg: '#0F172A',
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 20,
  extraLarge: 26,
  radiusSmall: 10,
  radiusMedium: 16,         
  radiusLarge: 24,
};

export const SHADOWS = {
  light: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
};

// --- THEME CONTEXT SYSTEM ---
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const colors = isDarkMode ? DARK_COLORS : LIGHT_COLORS;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook so your components can access the global active theme settings
export function useTheme() {
  return useContext(ThemeContext);
}

// Keep this fallback export so nothing crashes during setup
export const COLORS = LIGHT_COLORS;