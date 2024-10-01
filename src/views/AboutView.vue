<template>
  <div class="about">
    <h1>This is an about pages</h1>
  </div>
</template>

<!-- js start-->
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>
<!-- js end -->

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>