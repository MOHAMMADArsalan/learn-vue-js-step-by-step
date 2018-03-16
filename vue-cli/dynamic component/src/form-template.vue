<template>
  <div id="form">
      <form>
          <div class="form-header">
              <slot name="form-header"></slot>
          </div>
          
          <div id="form-fields">
              <slot name="form-fields"></slot>
          </div>
          <div id="form-controls">
              <slot name="form-controls"></slot>
          </div>
          <div class="linkContainer">
              <slot name="form-links"></slot>
          </div>

      </form>
  </div>
</template>


<style>
    #form {
        width: 30em;
        margin: 0 auto;
    }

</style>



  