<template>
  <MainPage/>
</template>

<script>
import MainPage from './view/MainPage.vue'

export default {
  // eslint-disable-next-line
  name: 'App',
  components: {
    MainPage,
  }
}
</script>

<style lang="scss">
  @import './assets/style/common.scss';
  @import './assets/style/contents.scss';
  @import './assets/style/layout.scss';
</style>