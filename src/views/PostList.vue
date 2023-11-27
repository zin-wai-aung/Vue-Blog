<template>
  <div v-for="post in posts" :key="post">
        <SinglePost :post="post"></SinglePost>
    </div>
</template>

<script>
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props:['posts']

}
</script>

<style>

</style>