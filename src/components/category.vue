<template>
 <div class="cat_content" >
  <div class="top_tittle">
  	<div class="left"><h2>{{datas.tittle}}</h2></div>
  	<div class="right">
  		<!-- <router-link tag="" :to="">{{datas.tittle}}</router-link> -->
  	</div>
  </div>
  <div class="container" style="width:100%;">
  	<div class="row"  v-for="arr in listChunkArray">
  		<div class="col-md-6 col-sm-6 box_item" v-for="item in arr">
  			<div class="box">
  			  <div class="img_box"><img :src="item.srcImg" ></div>
  			  <div class="mask"></div>
  			  <div class="word">{{item.fullDiscount}}</div>
  			</div>
  			<div class="bottom">
  				<div class="left">
  				  <span class="dis_active">{{item.discount}}</span>折起
  				  {{item.tittle}}
  				</div>
  				<div class="right">
  					<span class="time">❤</span>15天
  				</div>
  			</div>
  		</div>
  		
  	</div>
  </div>	
 </div>	
</template>
<script type="text/javascript">
 export default{
 	mounted(){
     console.log(this.datas)
 	},
 	props:{
      datas:{
      	type:[Array,Object],
      	default:{
      		tittle:"男装品牌",
      		lists:[
      		  {
      		  	srcImg:require("../assets/man/1.jpg"),
      		  	linkSrc:"",
      		  	discount:0.5,
      		  	fullDiscount:"满200减100，满10减8块",
      		  	tittle:"爱马仕男装专场",
      		  	lastDay:1
      		  },
      		  {
      		  	srcImg:require("../assets/man/1.jpg"),
      		  	linkSrc:"",
      		  	discount:0.5,
      		  	fullDiscount:"满200减100，满10减8块",
      		  	tittle:"爱马仕男装专场",
      		  	lastDay:1
      		  },
      		]
      	}
      }
 	},
 	data(){
 		return{

 		}
 	},
 	computed:{
 		listChunkArray(){
 		 return  _.chunk(this.datas.lists,2)	
 		}
 	}

 }	
</script>
<style type="text/css" scoped>
 .cat_content{

 	width:100%;
 	box-sizing:border-box;
 	padding:20px 0px;
 	background:#fff;
 }
 .top_tittle{
 	text-indent:15px;
 	position: relative;overflow: auto;zoom:1;
 	border-bottom:1px solid #000;
 	margin-bottom:20px;

 }
 .top_tittle .left{
 	float:left;
 }
 .top_tittle .left>h2{
 	padding-bottom:10px;
 	border-bottom:2px solid #000;
 	margin-bottom:0px;
 }
 .top_tittle .right{
 	float:right;
 }
 .cat_content .box{
 	box-sizing:border-box;
 	width:100%;
 	height:196px;
 	position:relative;
 	overflow:hidden;
 }
 .cat_content .box:hover>.img_box img{
    animation: opacityMove 1s;
 }
 @keyframes opacityMove{
 	0%{opacity:1;}
 	50%{opacity:0.5;}
 	100%{opacity:1;}
 }
 .cat_content .box>div{
 	position: absolute;
 	left:0px;
 } 
 .cat_content .box .img{
 	z-index:2;
 	width:100%;
 	top:0px;
 	height:100%;
 }
 .cat_content .box .mask{
 	z-index:3;
 	bottom:0px;
 	height:20%;
 	width:100%;
 	background: #000;
 	opacity:0.5;
 	filter:alpha("opacity=50");
 }
 .cat_content .box .word{
 	color:white;
 	z-index:4;
 	width:100%;
 	bottom:0px;
 	box-sizing: border-box;
 	padding:10px 10px;
 	color:white;
 	height:20%;
 }
 .cat_content .bottom{
 	padding:8px 5px;overflow:auto;zoom:1;
 }
 .cat_content .bottom .left{
 	float:left;
 }
 .cat_content .bottom .right{
 	float:right;
 }
 .dis_active{
 	font-size:19px;
 	color:#f10180;
 	font-weight:900;
 }
 .time{
 	font-size:18px;color:#f10180;
 }
</style>