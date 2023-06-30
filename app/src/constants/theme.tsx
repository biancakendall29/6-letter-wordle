export interface ThemeSchema {
  backgroundPrimary: string;
  backgroundSecondary: string;
  textPrimary: string;
  textSecondary: string;
  borderPrimary: string;
  borderRadius: string;
  green: string;
}

export const defaultTheme: ThemeSchema = {
  backgroundPrimary: "#22262b",
  backgroundSecondary: "#d8e4ee",
  textPrimary: "#d8e4ee",
  textSecondary: "#22262b",
  borderPrimary: "#d8e4ee",
  borderRadius: "4px",
  green: "#AAD2BA",
};
