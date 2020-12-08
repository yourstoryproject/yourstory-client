<template>
  <div class="home">
    <img class="logo" alt="Your Story Project logo" src="../assets/logo.png" />
    <TheHomePageHeader />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHomePageHeader from '@/components/TheHomePageHeader';
export default {
  name: 'Home',
  components: { TheHomePageHeader },
};
</script>

<style lang="scss" scoped>
.logo {
  height: 100px;
}
</style>
