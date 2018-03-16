<template>
  <form-template>
      <div slot="form-header">
        <h1> Sign in</h1>
      </div>
      <div slot="form-fields">
        <div class="inputContainer">
          <input type="text" placeholder="username" required /> 
        </div>
        <div class="inputContainer">
          <input type="password" placeholder="password" required /> 
        </div>
      </div>
      <div slot="form-controls" class="buttonContainer">
        <button class="button" @click.prevent="onSubmit">Sign in</button>
      </div>
      <div slot="form-links">
        <span @click="gotoSignup" class="link">Forget password?</span>
      </div>
    </form-template>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onSubmit: function() {
      this.$emit("submitLogin");
    },
    gotoSignup: function() {
      this.$emit("gotoPage", {
        component: "sign-up-form"
      });
    }
  }
};
</script>


<style>

</style>
