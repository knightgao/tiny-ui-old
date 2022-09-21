import type { App, Plugin } from 'vue';
import {BtnPlugin} from "./Button"

const Plugins: Plugin = {
    install(app: App,options) {
        BtnPlugin.install?.(app);
    },
  };

  
export default Plugins;

export * from './Button'