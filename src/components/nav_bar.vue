<template>
 <div class="nav_bar">
 	<ul class="nav">
           <router-link :to="{path:item.path}" 
           active-class="nav_active"
           v-for="item in nav_bar" 
           tag="li">
             {{item.tittle}}
           </router-link>
           <li class="last_li" @mouseover="changeHover(1)" @mouseout="changeHover(-1)">
              更多<span class="icon_i i_1" :class="{i_active:isShow}"></span>
              <div class="dialog_more">
		       <div class="item" v-for="(i,index) in dialog_more" :class="{cancelMargin:index==2}">
		          <router-link :to="{path:i.linkPath}">
		     	  <div class="img"><img :src="i.imgSrc"></div>
		     	  <div class="mask"></div>
		     	  <div class="word">{{i.tittle}}</div>
		     	  </router-link>
		     	</div>
		      </div>
           </li>
     </ul>
     
 </div>	
</template>
<script type="text/javascript">

$(function(){
	$(".dialog_more .item").hover(function(){
	$(this).find('.mask').stop(true,true)
	$(this).find('.mask').animate({background:"-webkit-linear-gradient(top,#fff 1%,#000 99%)",opacity:"0.6"},500)
    $(this).find('.word').animate({top:"30%"},500)
	},function(){
	$(this).find('.mask').stop(true,true)
	$(this).find('.mask').animate({background:"-webkit-linear-gradient(top,#fff 10%,#000 90%)",opacity:"0.5"},500)
	$(this).find('.word').animate({top:"56%"},500)
	})
    
	$(".last_li").hover(function(){
		$(".dialog_more").css("display","block")

	},function(){
         $(".dialog_more").css("display","none")
	})
	
	
})

 export default{
    mounted(){
      this.routePath=this.$route.path
    },
     data(){
      return {
          routePath:'',
          navMap:{
             "女装":"/women",
             "男装":"/man",
             "首页":"/"
             
          },
           nav_bar:[
             {
              tittle:'首页',
              src:'',
              path:'/'
             },
             {
              tittle:'女装',
              src:'',
              path:'/women'
             },
             {
              tittle:'男装',
              src:'',
              path:'/man'
             },
             {
              tittle:'国际出装',
              src:'',
              path:"/inter"
             },
             {
              tittle:'居居家',
              src:'',
              path:'/home'
              
             },
             {
              tittle:'运动',
              src:'',
              path:'/sport'
             },
             {
              tittle:'生活',
              src:'',
              path:'/life'
             },
             {
              tittle:'母婴',
              src:'',
              path:'/baby'
             }
          ],
          dialog_more:[
             {
             	tittle:'秦庄',
             	imgSrc:require('../assets/2.jpg'),
             	linkPath:''
             },
             {
             	tittle:'秦庄',
             	imgSrc:require('../assets/2.jpg'),
             	linkPath:''
             },
             {
             	tittle:'秦庄',
             	imgSrc:require('../assets/2.jpg'),
             	linkPath:''
             }
          ],
          isShow:false
      }	
     },
     methods:{
     	changeHover(i){
          if(i>0){
          	this.isShow=true
          }else{
          	this.isShow=false
          }
     	}
     }

 }	
</script>
<style type="text/css" scoped>
.nav_bar{
	width:100%;background:#f10180;
	font-size:16px;font-weight:800;position:relative;
}
 .nav{margin:0px auto;max-width:1000px;width:100%;height: 35px;}
 .nav li{float:left;padding:0% 3%;line-height:35px;color:white;cursor:pointer;}
 .nav li:hover{background:#c10180; }
 li .i_1{
 	border-color: #fff transparent transparent transparent;
 	border-width:8px;
 }
 
 .last_li{position: relative;}
 .dialog_more{
 	display:none;
 	position:absolute;right:0px;
 	top:35px;z-index:20;padding:20px;
 	text-align: center;width:512px;
 }
 .dialog_more .item{
 	float:left;margin-right:10px;
 	width:150px;height:85px;position: relative;
 }
 .dialog_more .item .img{
 	position: absolute;
 	width:100%;z-index:1;
 }
 .dialog_more .item .mask{
 	position: absolute;height:100%;
 	width:100%;z-index:2;
 	opacity:0.5;
    background:-webkit-linear-gradient(top,#fff 10%,#000 90%);
 	
 }
 .dialog_more .item .word{
 	position: absolute;
 	z-index:3;
 	top:56%;
 	left:50%;
 	transform:translateX(-50%);
    color:white;
    

 }
 
 .cancelMargin{
 	margin-right:0px!important;
 }
 .i_active{
    border-color: transparent transparent #fff transparent!important;
    margin-top: -12px!important;
    border-style:dotted solid dashed  dashed!important;
}
.router-link-exact-active{background:#c10180;}
</style>