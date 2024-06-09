import { defineClientConfig } from 'vuepress/client'
import Layout from './layouts/Layout.vue'
import NotFound from './layouts/NotFound.vue'
import {setupSideBar} from "./utiles/useSideBar";
import {inject} from "vue";

export default defineClientConfig({
  enhance({ app, router }) {
  },
  setup() {
    setupSideBar();
  },
  layouts: {
    Layout,
    NotFound,
  },
})
