<template>
    <div>
      <button @click=decrease()>-</button>
      <span>{{ num }}</span>
      <button @click=increase()>+</button>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return {
        num: 0
      }
    },
    watch: {
        num: function(newValue, oldValue){
            console.log("number changed");
            console.log("Old number: " + oldValue);
            console.log("New number: " + newValue);
        }
    },
    created(){
      console.log("Menu creadted");
    },
    mounted() {
      console.log("Menu mounted");
    },
    methods: {
      increase: function() {
        this.num++;
      },
      decrease: function() {
        if (this.num == 0){return}
        this.num--;
      },

    }
  }
  </script>
  
  <style scoped>
  h2 {
    color: red;
  }
  
  ul li a {
    color: green;
  }
  </style>