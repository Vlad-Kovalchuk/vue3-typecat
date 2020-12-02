<template>
  <Typecat />
</template>

<script lang="ts">
import Typecat from "@/components/Typecat.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: { Typecat },
});
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: Ubuntu, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #1a1a1c;
  color: #a0aec0;
}

#app {
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 363px;
}
</style>
