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
  green: "rgba(0, 128, 0, 0.7)",
};

const screenSize = {
  mobileS_width: "320px",
  mobileS_height: "568px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
};

export const device = {
  mobileS_width: `(max-width: ${screenSize.mobileS_width})`,
  mobileS_height: `(max-height: ${screenSize.mobileS_height})`,
  mobileM: `(max-width: ${screenSize.mobileM})`,
  mobileL: `(max-width: ${screenSize.mobileL})`,
  tablet: `(max-width: ${screenSize.tablet})`,
  laptop: `(max-width: ${screenSize.laptop})`,
};
