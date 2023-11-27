<template>
  <div class="home">
    <h1>Vue Bloggy System</h1>
    <div>
      <div v-if="error">
          {{error}}
      </div>
      <div v-if="posts.length" class="layout">
        <div>
          <PostList :posts="posts"></PostList>
        </div>
        <div>
          <TagCloud :posts="posts"></TagCloud>
        </div>
      </div>
      <div v-else>
          <Spinner></Spinner>
      </div>
    </div>
    
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostList from './PostList'
import getPosts from "../composables/getPosts"
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    TagCloud,
    Spinner,
    PostList,
    
  },
  setup(){

    let {posts, error, load}=getPosts();


    load();
    return {posts , error}
  }

}
</script>

<style>
.home{
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.layout{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap:20px;
  }
</style>
