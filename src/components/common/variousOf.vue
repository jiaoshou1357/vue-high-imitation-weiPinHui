<template>
 <div class="kinds">
  <div class="img"><img :src="pro.bgImg" ></div>
  <div class="word"></div>
  <div class="word_content"><img :src="pro.logo" >天线宝宝</div>
  <div class="top_hover"  >
  	<div class="img_box">
  		<div class="item" 
  		v-for="(i,index) in pro.showList" 
  		:class="{cancelMargin:index==2}">
  			<img :src="i.imgSrc" >
  			<h5>${{i.price}}</h5>
  		</div>
  	</div>
  	<div class="bottom_list">
  		<div class="b_logo">
  			<img :src="pro.logo">
  		</div>
  		<div class="collection">
  			<button class="btn activeThis" >
  				<span class="glyphicon glyphicon-ok-sign"></span>
  				收藏
  			</button>
  		</div>
  		<div class="special ">
  			<button class="btn activeThis">
  				进入专场
  			</button>
  		</div>
  		<div></div>
  	</div>
  </div>
 </div>	
</template>
<script type="text/javascript">
 
 export default{
 	props:{
       pro:{
       	type:[Object,Array],
       	
       	default:{
       		bgImg:require('../../assets/verious/bg1.jpg'),
       		logo:require("../../assets/verious/1.png"),
       		showList:[
       		   {
       		   	imgSrc:require('../../assets/verious/1.jpg'),
       		   	price:246,
       		   	linkSrc:''
       		   },
       		   {
       		   	imgSrc:require('../../assets/verious/2.jpg'),
       		   	price:216,
       		   	linkSrc:''
       		   },
       		   {
       		   	imgSrc:require('../../assets/verious/2.jpg'),
       		   	price:446,
       		   	linkSrc:''
       		   }
       		],
       		specialSrc:''
       	}

       
       }
 	},
 	data(){
 		return{
         hoverThis:false
        
 		}
 	}

 }	
</script>
<style type="text/css" scoped>
 .kinds{
 	width:100%;box-sizing: border-box;
 	background: #fff;
 	position: relative;
 	padding-right:10px;
 	padding-top:10px;
 	padding-bottom:10px;
 	height:300px;
 }
 .kinds:hover>.top_hover{
   display:block;
   animation:opacityMove 1s;
 }
 .kinds .img{
 	position:absolute;
 	z-index:2;width:100%;height:100%;
 	top:0px;
 }	
 .kinds .word{
 	position:absolute;z-index:3;
 	width:54%;height:37%;left:50%;top:50%;
 	transform: translate(-50%,-50%);
 	background:#fff;opacity:0.6;
 }
 .kinds .word_content{
 	position:absolute;z-index:4;
 	width:27%;height:40%;left:50%;top:50%;
 	transform: translate(-50%,-50%);
 	text-align: center;
 }		
 .kinds .top_hover{
 	display:none;
 	position:absolute;z-index:5;
 	width:85%;height:85%;
 	left:50%;top:50%;
 	transform: translate(-50%,-50%);
 	box-sizing:border-box;
 	padding:10px;border-radius:10px;
 	background:#fff;
 }
 .kinds .top_hover .img_box{
 	width:100%;overflow:auto;height:80%;
 }

 .kinds .top_hover .img_box .item{
 	float:left;
 	width:33.3%;
 	height:100%;overflow:hidden;
 	box-sizing: border-box;
 	padding-right:10px;
 	
 }
 .kinds .top_hover .img_box .item:hover img{
  animation:opacityMove 1s;
 }
 .cancelMargin{
 	padding-right:0px!important;
 }
 .kinds .top_hover .bottom_list{
 	overflow:auto;zoom:1;width:100%;
 }
 .kinds .top_hover .bottom_list>.b_logo img{
    width:80px;
 }
 .kinds .top_hover .bottom_list>div{
 	float: left;width:33.3%;height:60%;
 	text-align: center;padding-top:10px;
 }
.aniIt{
	animation: opacityMove 1s;
}
@keyframes opacityMove{
  0%{opacity:0.5;}
	100%{opacity:1;}
}
.activeThis:hover{
	color:white;
	background:#F101B9;
}
@media screen and (max-width:414px){
	.kinds{
		height:257px;
	}
}
</style>