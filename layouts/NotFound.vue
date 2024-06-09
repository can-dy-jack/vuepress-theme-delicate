<template>
  <div class="container">
    404
  </div>
</template>

<script>
export default {
  name: "404",
  components: {},
  methods: {
    go2home() {
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

