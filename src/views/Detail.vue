<template>
  <div class="post">
    <div v-if="post">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
      <button class="delete" @click="deletePost"> Delete </button>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost"
import {db} from "../firebase/config"
import {useRouter} from "vue-router"
export default {
  components: { Spinner },
  props:['id'],

  setup(props){
    let router = useRouter();
    let {post,error,load} = getPost(props.id);
    load();

    let id = props.id;

    let deletePost = async ()=>{
      await db.collection("posts").doc(id).delete();
      router.push("/")
    }

    return {post,error, deletePost}
  }

}
</script>

<style>
button.delete{
  margin: 20px auto;
  cursor: pointer;
}
</style>