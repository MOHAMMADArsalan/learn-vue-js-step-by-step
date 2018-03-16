<template>
  <div id="app">
    <component 
      :is="componentId" 
      v-on:submitLogin="submitLogin"
      v-on:submitSignup="submitSignup"
      v-on:gotoPage="gotoPage($event)"></component>
  </div>
</template>

<script>
import SignIn from "./SignIn.vue";
import Signup from "./Signup.vue";
export default {
  components: {
    "sign-in-form": SignIn,
    "sign-up-form": Signup
  },
  name: "app",
  data() {
    return {
      componentId: "sign-in-form"
    };
  },
  methods: {
    submitLogin: function() {
      this.componentId = "sign-up-form";
    },
    submitSignup: function() {
      this.componentId = "sign-in-form";
    },
    gotoPage: function(component) {
      this.componentId = component.component
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

input {
  padding: 10px;
  /* border: 0; */
  border-radius: 5px;
  width: 100%;
  outline: none;
  font-size: 18px;
  border: 2px solid lightgray;
}

.inputContainer {
  // width: 80%;
  padding: 0 2em;
  margin-bottom: 1em;
}

.buttonContainer {
  width: 50%;
  margin: 0 auto;
}
.button {
  padding: 1em;
  width: 100%;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: cadetblue;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}

.link {
      font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

.linkContainer {
  margin-top: 1em;
}
</style>
