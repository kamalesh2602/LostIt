// src/constants/theme.js

export const COLORS = {
  // Brand Colors
  primary: '#1E3A8A',       // Deep Trust Blue for headers / primary actions
  background: '#0F172A',    // Dark Navy/Slate background matching your app's current top bar
  cardBg: '#FFFFFF',        // Pure White for contrast containers
  
  // Status Colors
  lost: '#EF4444',          // Vibrant Red for Lost status
  found: '#10B981',         // Emerald Green for Found status
  claimed: '#6B7280',       // Muted Gray for Claimed status
  
  // UI Elements
  textPrimary: '#1F2937',   // Near black for high legibility on white cards
  textSecondary: '#6B7280', // Medium gray for secondary text/subtitles
  textMuted: '#9CA3AF',     // Light gray for placeholders
  border: '#E5E7EB',        // Clean light border color
  
  // Action Elements
  buttonBlue: '#3B82F6',    // Bright blue for "Find Matches" or primary buttons
  white: '#FFFFFF',
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
  radiusSmall: 8,
  radiusMedium: 12,
  radiusLarge: 16,
};

export const SHADOWS = {
  light: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Android
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4, // Android
  },
};