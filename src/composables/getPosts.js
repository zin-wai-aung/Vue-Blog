import { ref } from "vue";

let getPosts = () => {
    let posts = ref([]);
    let error = ref("");
    let load = async () => {
        try {
            await new Promise((resolve,reject)=>{
                // resolve();
                setTimeout(resolve,1000)
            })
            
            let res = await fetch("http://localhost:3000/posts/");
            if (res.status === 404) {
                throw new Error("Not found URL");
            }
            let datas = await res.json();
            posts.value = datas;
        }
        catch (err) {
            error.value = Error(err)
        }
    }

    return {posts, error, load}
}

export default getPosts;