<template>
  <div id="app">
    <router-view class="view" />
  </div>
</template>

<script>
export default {

  created() {
    this.$store.dispatch('initAuth')
  }
 
}
</script>

<style lang="scss">
@import '@/main.scss';


.view {
    max-width: 1366px;
    margin-right: auto;
    margin-left: auto;
  }

</style>
