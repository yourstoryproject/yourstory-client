<template>
  <button class="large-button" @click="callback">
    <h4 v-if="superLabel">{{ superLabel }}</h4>
    <h2 class="large-button__label">{{ label }}</h2>
  </button>
</template>

<script>
export default {
  name: 'LargeButton',
  props: {
    callback: {
      default: () => {},
      type: Function,
    },
    superLabel: {
      default: '',
      type: String,
    },
    label: {
      default: '',
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.large-button {
  background-color: unset;
  border: solid 2px rgba(0, 0, 0, 0.2);
  padding: 28px 64px;

  &__label {
    letter-spacing: 4px;
  }
}
</style>
