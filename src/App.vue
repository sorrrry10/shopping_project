<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts" name="App">
import { RouterView } from 'vue-router';

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f3f3f3;
}

a {
  text-decoration: none;
}

@font-face {
  font-family: "logoFont";
  src: url("@/assets/font/logoFont.ttf");
}

.logo {
  font-family: "logoFont";
  margin-left: 20px;
  color: $txtColor;
  float: left;
}

.clear {
  clear: both;
}
</style>
