import daisyui from "daisyui";
import containerQueries from "@tailwindcss/container-queries";

export default {
  plugins: [daisyui, containerQueries],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      fontFamily: {
        "josefin-sans": "Josefin Sans, sans-serif",
      },
      containers: {
        card: "120px",
      },
    },
  },
};
