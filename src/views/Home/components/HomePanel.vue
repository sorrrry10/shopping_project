<template>

  <div class="page">
    <div class="page_title">
      <h3 style="font-weight: 500; display: flex;
  align-items: center;">{{ title }}&nbsp;&nbsp;<small style="font-weight: 400; color: #acaaaa;">{{ subtitle
  }}</small>
      </h3>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String
  },
  subtitle: {
    type: String
  }
})
</script>

<style scoped>
.page {
  margin-top: 10px;
}

.page_title {
  padding-top: 10px;
}
</style>
