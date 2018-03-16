<template>
  <form-template>
      <div slot="form-header">
        <h1> Sign up</h1>
      </div>
      <div slot="form-fields">
        <div class="inputContainer">
          <input type="text" placeholder="username" required /> 
        </div>
        <div class="inputContainer">
          <input type="email" placeholder="email" required /> 
        </div>
        <div class="inputContainer">
          <input type="password" placeholder="password" required /> 
        </div>
      </div>
      <div slot="form-controls" class="buttonContainer">
        <button class="button" @click.prevent="submitSignup">Sign up</button>
      </div>
      <div slot="form-links">
        <span @click="gotoLogin" class="link">Already have an account?</span>
      </div>
    </form-template>
</template>
<script>
export default {
  methods: {
    submitSignup: function() {
      this.$emit("submitSignup");
    },
    gotoLogin: function() {
      this.$emit("gotoPage", {
        component: "sign-in-form"
      });
    }
  }
};
</script>


<style>

</style>
