<template>
  <div id="add-blog">
      <h2>Add a New Blog Post</h2>
      <form v-if="!submitted">
            <label for="">Blog Title</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label for="">Blog Content</label>
            <textarea v-model.lazy="blog.content" ></textarea>
            <div id="checkboxes">
               <div v-for="(category ,index) in categories" :key="index">
                   <input type="checkbox" :id="category" :value="category" v-model="blog.categories"/>
                   <label for="category">{{category}}</label>
               </div>
            </div>
            <select v-model="blog.author">
                <option v-for="(author, index) in authors" :key="index" :value="author">{{ author}}</option>
            </select>
            <button @click.prevent="addBlog">Add Blog</button>
      </form>
      <p v-if="submitted">Thanks for adding blog</p>
      <div id="preview">
          <h3>Preview Blog</h3>
          <p>Blog title: {{ blog.title }}</p>
          <p>Blog content: </p>
          <p>{{ blog.content }}</p>
          <p>Blog Categories</p>
          <ul class="list">
              <li v-for="(category ,index) in blog.categories" :key="index"> {{ category }}</li>
          </ul>
          <p>Blog Author: {{ blog.author}}</p>
      </div>
  </div>
</template>

<script>

import constants from "./../config/contants";
export default {
  data() {
    return {
      categories: [
        "Islamic",
        "Dance",
        "Music",
        "Education",
        "Sport",
        "Computer science"
      ],
      authors: ["The Net ninja", "The Angular Avenger"],
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      submitted: false
    };
  },
  methods: {
    addBlog: function() {
      this.$http
        .post(`${constants.URL}/posts.json`, this.blog)
        .then(res => {
          this.submitted = true;
        });
    }
  }
};
</script>


<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}

#checkboxes input,
#checkboxes div {
  display: inline-block;
  margin-right: 5px;
}
#checkboxes label {
  display: inline-block;
}

.list li {
  margin-bottom: 5px;
}
</style>
