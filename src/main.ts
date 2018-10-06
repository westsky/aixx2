import Vue from "vue";
let vue=new Vue({
   el:"#app",
   template:`<div>
             <div>hello{{name}}</div>
             name:<input v-model="name" type='text'>
             </div>`,
   data:{
     name:"World"
   }
})
