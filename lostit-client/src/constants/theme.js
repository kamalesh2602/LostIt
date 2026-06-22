// src/constants/theme.js

export const COLORS = {
  // Main Brand (Vibrant blue matching your app icon)
  primary: '#007AFF',       
  
  // Neutral Canvas Blocks (Light SaaS style)
  background: '#F8FAFC',    // Soft off-white page canvas
  cardBg: '#FFFFFF',        // Pure white card modules
  border: '#E2E8F0',        // Clean, thin light-gray border lines
  
  // Typographic Scale
  textPrimary: '#0F172A',   // Deep slate black for titles
  textSecondary: '#475569', // Medium slate gray for descriptions
  textMuted: '#94A3B8',     // Muted gray for placeholders
  
  // Functional Actions & Badges
  buttonBlue: '#007AFF',    // Brand blue for main buttons
  lost: '#EF4444',          // Vibrant red for lost status
  found: '#22C55E',         // Emerald green for found status
  claimed: '#64748B',       // Muted slate for claimed status
  white: '#FFFFFF',
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 20,
  extraLarge: 26,
  radiusSmall: 10,
  radiusMedium: 16,         // Smooth rounded cards
  radiusLarge: 24,
};

export const SHADOWS = {
  light: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 4,
  },
};