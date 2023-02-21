import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { md1 } from "vuetify/blueprints";

export default defineNuxtPlugin((nuxtApp) => {
  const defaultTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: "#000000",
      surface: "#FFFFFF",
      primary: "#000000",
      secondary: "#BDBDBD",
      error: "#B00020",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FB8C00",
    },
  };
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    blueprint: md1,
    theme: {
      defaultTheme: "defaultTheme",
      themes: {
        defaultTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
