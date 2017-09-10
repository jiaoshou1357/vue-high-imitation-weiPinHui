import Vue from 'vue'
import Router from 'vue-router'
import Store from './store'
import httpUrl from './api'
import axios from 'axios'
import _ from 'lodash'
import layout from './components/layout'
import Page1 from './pages/page1'
import Man from './pages/man'
import Women from './pages/women'
import Inter from './pages/inter'
Vue.use(axios)
Vue.use(Router)
let router=new Router({
  mode:'history',
	routes:[
       {
         path:'/',
         component:Page1
       },
       {
       	path:'/man',
       	component:Man
       },
       {
       	path:'/women',
       	component:Women
       },
       {
        path:'/inter',
        component:Inter
       }
       
       
	]
})

new Vue({
	el:'#app',
	Store,
	router,
	render:h=>h(layout),
	components:{layout}
})