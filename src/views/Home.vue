<template>
  <div class="home">
    <img class="logo" alt="Your Story Project logo" src="../assets/logo.png" />
    <TheHomePageHeader />
    <img
      class="world-image"
      alt="Picture of earth with lines"
      src="../assets/world-image.png"
    />
    <LargeButton
      superLabel="Want to be a part of the experiment?"
      label="Start a Notebook"
      :callback="navigateStartANotebook"
    />
  </div>
</template>

<script>
import TheHomePageHeader from '@/components/TheHomePageHeader';
import LargeButton from '@/components/LargeButton';

export default {
  name: 'Home',
  components: { TheHomePageHeader, LargeButton },
  methods: {
    navigateStartANotebook() {
      // Anti-patter: Buttons should not navigate.
      this.$router.push({ path: 'start-a-notebook' });
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  height: 100px;
}

.world-image {
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>
