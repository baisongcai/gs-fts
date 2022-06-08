<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  props: {
    name: {
      // eslint-disable-next-line no-undef
      type: String
    }
  }
})
</script>
<style scoped lang="less">
.app {
  height: 100%;
}
</style>
