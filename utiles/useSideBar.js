import { usePageData, usePageFrontmatter, useRoute, useRouteLocale } from 'vuepress/client';
import {computed, inject, provide} from "vue";
import { useThemeData } from "./useThemeData";
import {sidebarSymbol, themeSymbol} from "../config";

export default function useSideBar() {
  const sidebar = inject(sidebarSymbol);
  if (!sidebar) {
    throw new Error('useSideBar() is called without provider.');
  }
  return sidebar;
}

export function setupSideBar() {
  // 主题配置
  // const themedata = useThemeData();
  // 页面 AST 内容
  const pageData = usePageData();
  // Frontmatter - 或者使用 usePageFrontmatter
  const pageFrontmatter = pageData.value.frontmatter;
  // 路由
  const route = useRoute();
  const routeLocale = useRouteLocale();

  // console.log('themedata', themedata);

  const sidebarConfig = computed(() => {
    if (pageFrontmatter.home) { // 首页不需要侧边栏
      return false;
    }
    return pageFrontmatter.sidebar ? pageFrontmatter.sidebar : 'auto'; // 默认 auto
  });

  const sidebarData = computed(() => {
    return {
      type: " computed - provide",

    }
  });

  console.log('提供 sidebarSymbol');

  provide(sidebarSymbol, sidebarData);

  console.log('提供 themeSymbol', inject(sidebarSymbol));
}

