import { createApp } from "https://unpkg.com/vue@3/dist/vue.global.js";


const app = createApp({
    data(){
        return{
            message: "Hello World!"
        }
    }
});

app.mount("#app");