// Generated from docs/DESIGN.md via:
// npx @google/design.md export --format tailwind docs/DESIGN.md
export default {
  theme: {
    extend: {
      colors: {
        primary: "#0f2a3d",
        secondary: "#5d6a72",
        tertiary: "#8fa7b3",
        accent: "#2f80a8",
        neutral: "#e7eaec",
        surface: "#ffffff",
        "surface-muted": "#f5f7f8",
        "surface-strong": "#eef2f4",
        "on-surface": "#172027",
        "on-surface-muted": "#5d6a72",
        background: "#fafaf8",
        border: "#d9dee2",
        "border-strong": "#b8c2c8",
        success: "#2f6f4e",
        warning: "#a86e2f",
        error: "#b23a3a",
      },
      fontFamily: {
        "headline-display": ["Inter"],
        "headline-lg": ["Inter"],
        "headline-md": ["Inter"],
        "headline-sm": ["Inter"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"],
        "body-sm": ["Inter"],
        "label-md": ["Inter"],
        "label-sm": ["Inter"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "headline-display": [
          "56px",
          {
            lineHeight: "1.02",
            letterSpacing: "-0.045em",
            fontWeight: "720",
          },
        ],
        "headline-lg": [
          "42px",
          {
            lineHeight: "1.08",
            letterSpacing: "-0.035em",
            fontWeight: "700",
          },
        ],
        "headline-md": [
          "30px",
          {
            lineHeight: "1.16",
            letterSpacing: "-0.02em",
            fontWeight: "680",
          },
        ],
        "headline-sm": [
          "22px",
          {
            lineHeight: "1.22",
            letterSpacing: "-0.01em",
            fontWeight: "650",
          },
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "1.65",
            fontWeight: "400",
          },
        ],
        "body-md": [
          "16px",
          {
            lineHeight: "1.58",
            fontWeight: "400",
          },
        ],
        "body-sm": [
          "14px",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "label-md": [
          "13px",
          {
            lineHeight: "1",
            letterSpacing: "0.03em",
            fontWeight: "650",
          },
        ],
        "label-sm": [
          "12px",
          {
            lineHeight: "1",
            letterSpacing: "0.06em",
            fontWeight: "650",
          },
        ],
      },
      borderRadius: {
        none: "0px",
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px",
        full: "999px",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "40px",
        "2xl": "64px",
        "3xl": "96px",
        "4xl": "128px",
      },
      maxWidth: {
        shell: "1200px",
      },
      boxShadow: {
        card: "0 16px 36px rgba(23, 32, 39, 0.08)",
        "card-hover": "0 22px 46px rgba(23, 32, 39, 0.14)",
      },
    },
  },
};
