<template>
<div @click="resetComponent">
<div id="header">
 <div class="container max_1000">
 	<div class="row top_1">
 		<div class="col-md-3" >
 			<div class="left_wh" @mouseover="showCity" @mouseout="noneshowCity">
 				<span style="text-align:center;"><a >{{checkedCity}}</a></span>
 			    <span class="icon_i" :class="{icon_active:isShowCity}"></span>
 			</div>
 			<City
             :checkedCity='checkedCity'
              v-show="isShowCity"
              @on-close="isShowCity=false" 
              @on-keep="keepShow"
             @on-change="getCity"></City>
 		</div>
 		<div class="col-md-9 " style="text-align:right;" >
 			<ul class="nav_1">
 				<li class="login" >
 					<span><a @click="isShowDialogLogin=true" >登陆</a></span>
 					<span class="ral">/</span>
          
 				</li>
 				<li>
 					<span><a >注册</a></span>
 					<span class="ral">/</span>
 				</li>
 				<li>
 					<span><a >我的特卖</a></span>
                    <span class="icon_i"></span>
                    <span class="ral">/</span>
 				</li>
 				<li>
 					<span><a >会员俱乐部</a></span>
                    <span class="icon_i"></span>
                    <span class="ral">/</span>
 				</li>
 			</ul>
 		</div>
 	</div>
  <div class="row top_2">
     <div class="col-md-12">
         <ul class="top_2_left">
             <li ><img style="width:140px;" src="../assets/logo.png"></li>
             <li >
               <button class="btn ">
                  <span class="glyphicon glyphicon-briefcase"></span>
                  购物车
               </button>
             </li>
             <li ><button class="btn ">
                  <span class="glyphicon glyphicon-briefcase"></span>
                  钱袋
              </button></li>
              <li ><button class="btn ">
                  <span class="glyphicon glyphicon-adjust"></span>
                 呵呵
              </button></li>
         </ul>
     </div>
     
  </div>
 </div>
 <Navbar></Navbar>
</div>
<transition name="navMove">
  <div class="nav_fix" v-if="isFixNav">
    <Navbar></Navbar>
  </div>
</transition>
<vDialog  :isShowDialog="isShowDialogLogin" @on-close="isShowDialogLogin=false">
  <Login></Login>
</vDialog>
<div id="content">
  <router-view></router-view>
</div>	
</div>
</template>
<script type="text/javascript">
import City from './common/city'
import Navbar from './nav_bar'
import vDialog from './common/dialog'
import Login from './login'
import {eventBus} from '../eventBus'
 export default{
  mounted(){
    $(window).on('scroll',()=>{
       if($(window).scrollTop()>150){
         this.isFixNav=true
       }else{
         this.isFixNav=false
       }
    })
  },
 	data(){
 		return {
          isShowDialogLogin:false,
          isShowCity:false,
          checkedCity:'澳门',
          keep:false,
          mavMap:{
            man:'/man',
            women:'/women'
          },
          scroll:0,
          isFixNav:false
 		}
 	},
    methods:{
      getCity(i){
           this.checkedCity=i
      },
      showCity(){
        this.isShowCity=true
      },
      keepShow(i){
       this.isShowCity=true
       this.keep=i
      },
      noneshowCity(){
          if(!this.keep){
            this.isShowCity=false
          }
      },
      resetComponent(){
        eventBus.$emit('reset-component')
      }
     
    },
 	components:{
 		City,Navbar,vDialog,Login
 	}
 }	
</script>
<style type="text/css">
 *{padding:0px;margin:0px;list-style-type:none;border:none;}	
 span{display:inline-block;width:auto;}
 img{width:auto;max-width:100%;}
 .left_wh{padding:3px 8px;border:1px solid #fff;width:40%;
 	position: relative;
 }
 #header{width:100%;}
 .nav_fix{position:fixed;z-index:100;top:0px;background:#F101B9;width:100%;}
 .max_1000{max-width:1000px;width:100%;}
 #header .top_1{font-size:14px;}
 #header .nav_1{
    float: right;
 }
 #header .nav_1 li{
 	float:left;padding:3px 20px 3px 3px;
 	color:#146;
 	text-align: center;
 }
 a:hover{color:#f80!important;}
 #header .nav_1 li .ral{padding-left:10px;}
 .top_2_left{overflow:auto;}
 .top_2_left  li{float:left;margin-right:15px;}
 .top_2_left  li button{
    margin-top:30px;
    color:#f10180;
 }
 .icon_i{
	margin-top: 5px;
    width: 0;
    height: 0;
    line-height: 0;
    vertical-align: middle;
    border-width: 4px;
    border-color: #999 transparent transparent transparent;
    border-style: solid dashed dotted dashed;
}
.icon_active{
    border-color: transparent transparent #f80 transparent!important;
    margin-top: -5px!important;
    border-style:dotted solid dashed  dashed!important;
}
.login{position: relative;}
.login .login_modu{position: absolute;top:35px;z-index:12;}
#content{width:100%;background:#F101B9;box-sizing:border-box;padding-top:30px;}
.navMove-enter{
  opacity:0.1;
}
.navMove-enter-active{
  transition:all 0.5s;
}

</style>