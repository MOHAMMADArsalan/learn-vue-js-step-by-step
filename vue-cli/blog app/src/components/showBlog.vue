<template>
    <div id="show-blog">
        <h1>All Blogs Article</h1>
        <input type="text" v-model="search" placeholder="search blog">
        <div 
            v-for="blog in filterBlogs" 
            class="single-blog"
            :key="blog.id"
            >
            <router-link :to="'/blog/' + blog.id">
                <h2 v-rainbow> {{ blog.title | to-uppercase }}</h2>
            </router-link>
            <!-- <h2 v-rainbow> {{ blog.title | to-uppercase }}</h2> -->
            <article> {{ blog.content | snippet }}</article>
        </div>
    </div>
</template>

<script>
import constants from "./../config/contants";

export default {
  data: function() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$http
      .get(`${constants.URL}/posts.json`)
      .then(data => data.json())
      .then(data => {
          let blogsArray = [];
          for(let key in data) {
              data[key].id = key;
              blogsArray.push(data[key]);
          }
          this.blogs = blogsArray;
      });
  },
  computed: {
    filterBlogs: function() {
      return this.blogs.filter(blog => blog.title.match(this.search));
    }
  }
};
</script>

<style>
#show-blog {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  margin: 20px 0;
  padding: 20px;
  box-sizing: border-box;
  background: #eee;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
a {
  text-decoration: none;
}
</style>
