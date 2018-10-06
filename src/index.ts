import Vue from "vue";
import VueRouter from "vue-router";

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

