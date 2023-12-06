<template>
  <div id="app">
    <MenuT></MenuT>
    <MenuT></MenuT>
    <MenuT></MenuT>
    <h2>Lop hoc fullstack4</h2>
    <step-number></step-number>
    <StepNumber></StepNumber>
    
  </div>
</template>

<script>
import MenuT from './components/MenuT.vue';
import StepNumber from './components/StepNumber.vue';

export default {
  data() {
    return {
      
    }
  },
  components: {
    MenuT,
    StepNumber
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
