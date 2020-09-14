<template>
  <div id="app">
    <Header />
    <router-view class="view" />
  </div>
</template>

<script>
  import Header from "@/components/Header";

export default {
  components : {
    Header,
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    outline: none;
  }

  .view {
    max-width: 1366px;
    margin-right: auto;
    margin-left: auto;
    /* background-color: #F3F1F0; */
    /* border-left: 1px solid #000;
    border-right: 1px solid #000; */
  }
</style>
