<template>
  <div id="single-blog">
      <h1> {{ blog.title }}</h1>
      <p> {{ blog.content }}</p>
      <p>Author: {{ blog.author }}</p>
      <ul>
          <li v-for="(category,i) in blog.categories" :key="i">{{category}}</li>
      </ul>
  </div>
</template>

<script>
import constants from "./../config/contants";

export default {
  data: function() {
      return {
          id: this.$route.params.id,
          blog: {}
      }
  },
  created() {
      this.$http.get(`${constants.URL}/posts/${this.id}.json`)
            .then((data) => {
                this.blog = data.body
            })
  }
}
</script>

<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
#single-blog ul{
    text-align: left;
    padding: 0;
}
#single-blog li {
    list-style: circle;
}
</style>
