// Colors and styling constants
export const COLORS = {
  primary: "#007AFF",
  secondary: "#5AC8FA",
  background: "#F5F5F5",
  text: "#000000",
  lightText: "#666666",
  border: "#E0E0E0",
  success: "#34C759",
  warning: "#FF9500",
  error: "#FF3B30",
};

// API endpoints (update with your backend URL)
export const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000";

// App configuration
export const APP_CONFIG = {
  appName: "FamilyPulse",
  version: "1.0.0",
};

// Activity types for the app
export const ACTIVITY_TYPES = {
  MEDICINE: "medicine",
  HEALTH_CHECK: "health_check",
  EXERCISE: "exercise",
  MEAL: "meal",
};

export default {
  COLORS,
  API_BASE_URL,
  APP_CONFIG,
  ACTIVITY_TYPES,
};
