<template>
  <router-view />
  <TheFooter />
</template>

<script>
import TheFooter from '@/components/TheFooter';

export default {
  components: { TheFooter },
};
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 1rem;
  max-width: 768px;
  margin: auto;
  height: 100vh;
}
</style>
