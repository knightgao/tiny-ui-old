import type { App, Plugin } from "vue";
import Btn from "./src/index.vue";

export const BtnPlugin: Plugin = {
  install(app: App) {
    app.component("TinyBtn", Btn);
  },
};

export { Btn };
