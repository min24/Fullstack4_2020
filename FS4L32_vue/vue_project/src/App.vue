<template lang="">
  <div id='app'>
    <appHeader />
    <toDos />
  </div>
</template>
<script>
import appHeader from "./components/appHeader";
import toDos from "./components/toDos";

export default {
  name: 'App',
  components: {
    appHeader,
    toDos,
  }
}
</script>
<style lang="">


</style>