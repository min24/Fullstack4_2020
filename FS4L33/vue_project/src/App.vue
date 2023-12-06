<template>
  <div id="app">
    
    <input v-bind:id="inputId" v-bind:class="className" type="text" v-model="message" name="">
    <input type="checkbox" v-model="agree" name="">
    <button v-on:click="message = 'Chuc mung da dang ki'">Dang ky</button>
    <button v-on:mouseover="message = 'Day la mouse over'">Dang ky</button>
      <div v-html="message"></div>
    
    <div><input type="checkbox" v-model="showHeader" name=""></div>
    <h2 v-if="showHeader">Vui long chon mon hoc</h2>
    <span 
      @click="langs.push('html')" 
      :class="{ selected: langs.includes('html')}">
      Html
    </span>
    <span 
      @click="langs.push('css')" 
      :class="{ selected: langs.includes('css')}">
      CSS
    </span>
    <span 
      @click="langs.push('js')" 
      :class="{ selected: langs.includes('js')}">
      Javascript
    </span>
    <span 
      @click="langs.push('vuejs')" 
      :class="{ selected: langs.includes('vuejs')}">
      Vue js
    </span>

    <input type="text" name="" v-model="newToDo">
    <button @click="todos.push({content: newToDo, done: false}); newToDo=''">Them</button>
    <div id="list">
      <div v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" name="">
        <button @click="todos.splice(index, 1)">Xoa</button>  
        <span :class="{ done: todo.done }">{{ todo.content }}</span>
          
      </div>
    </div>
  </div>

  
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      inputId: 'abc',
      className: 'xyz',
      message: 'Xin chao',
      agree: true,
      langs: [],
      showHeader: false,
      todos: [
        {content: 'di hoc', done: true},
        {content: 'nau an', done: false},
      ],
      newToDo: '',
    }
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

span {
  display: inline-block;
  border: 1px solid #ebebeb;
  margin-right: 10px;
  padding: 5px 10px;
}

span.selected {
  background-color: red;
  color: white;

}

#todoApp {
  max-width: 400px;
  border: 1px solid #ededed;
}
#list div span.done {
  text-decoration: line-through;
}
</style>