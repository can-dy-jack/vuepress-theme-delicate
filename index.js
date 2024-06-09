import { getDirname, path } from 'vuepress/utils'
import { themeDataPlugin } from '@vuepress/plugin-theme-data';
const __dirname = getDirname(import.meta.url);

import {assignDefaultLocaleOptions} from "./tools";

export default configJSON => {
  let { hostname, themePlugins = {}, ...localeOptions } = configJSON;
  assignDefaultLocaleOptions(localeOptions);

  return {
    name: 'vuepress-plugin-delicate',
    clientConfigFile: path.resolve(__dirname, 'client.js'),
    plugins: [
      themeDataPlugin({ themeData: localeOptions }),
    ],
  }
};

// elementui/
// unocss


