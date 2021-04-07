<template>

<div v-if="resources">
  {{resources.title}}
  <button @click="reloadData">reload</button>
  <button @click="createPost">create post</button>
  <ul v-if="posts">
    <li  v-for="(post,index) in posts" :key="index">
      {{post.title}}
    </li>
  </ul>
</div>
</template>

<script>
import mixins from "@/mixins";
import { mapGetters } from "vuex";

export default {
  mixins:[mixins],
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapGetters(['resources','posts'])
  },
  mounted(){
        this.handleRequest("COMMON", "RESOURCES").then(res=>{
          console.log(res)
        });
  },
  methods:{
    reloadData(){
        this.handleRequest("COMMON", "POSTS")
    },
    createPost(){
      const data = {
        title: 'foo',
        body: 'bar',
        userId: 1
      }

      this.handleRequest("COMMON", "CREATE_POST",data).then(res =>{
        this.reloadData()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
</style>
