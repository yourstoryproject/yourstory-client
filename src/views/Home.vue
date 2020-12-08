<template>
  <div class="home">
    <img class="logo" alt="Your Story Project logo" src="../assets/logo.png" />
    <TheHomePageHeader />
    <LargeButton
      superLabel="Want to be a part of the experiment?"
      label="Start a Notebook"
      :callback="navigateStartANotebook"
    />
  </div>
</template>

<script>
// @ is an alias to /src
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
</style>
