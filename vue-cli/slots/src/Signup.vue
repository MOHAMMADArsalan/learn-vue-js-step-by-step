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
        <button class="button">Sign up</button>
      </div>
    </form-template>
</template>


<style>

</style>
