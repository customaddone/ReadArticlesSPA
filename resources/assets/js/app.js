
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter)

Vue.component('navbar', require('./components/Layouts/Navbar.vue'))

const router = new VueRouter({
    // historyモード（デフォルトはhashモード）はページのリロードなしにURLが遷移する
    mode: 'history',
    /*
      ここでVue Routerを定義しているので、HTMLに書かれた<router-view></router-view>が
      下記のように変わる

      / -> Articles/Index.vue を表示
　　　 /about -> About.vue を表示
    */
    routes: [
        { path: '/', component: require('./components/Articles/Index.vue') },
        { path: '/about', component: require('./components/About.vue') },
    ]
})

const app = new Vue({
    router,
    el: '#app'
})
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example-component', require('./components/ExampleComponent.vue'));

/*
const app = new Vue({
    el: '#app'
}); */
