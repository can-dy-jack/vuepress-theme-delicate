<template>
  <div class="h100 container">
    <Header></Header>
    <div class="content">
      <SiderBar></SiderBar>
      <div class="right">
        <Content class="markdown-body" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import { Content } from 'vuepress/client';
import { ref } from 'vue'

import Header from "../components/Header.vue";
import SiderBar from '../components/SiderBar.vue';

// import useSideBar from "../utiles/useSideBar";
const count = ref(0);

// const data = useSideBar();
// console.log('useSideBar', data.value);

</script>

<style>
@import url(../styles/github-markdown.min.css);
@import url(../styles/common.css);
</style>

<style lang="scss" scoped>
.container {
  overflow: auto;
}
.content {
  display: flex;
}
.right {
  padding: 20px;
}
</style>
