<template>
 <div class="slide" :style="styleObject"
 @mouseover="showAll(1)" 
 @mouseout="showAll(-1)">
 	<div class="img">
 	    <transition name="slide-come" >
 	       <img :src="slides[nowIndex].imgSrc" v-if="isShow">
 	    </transition>
 	    <transition name="slide-old">
 	    	<img :src="slides[nowIndex].imgSrc" v-if="!isShow">
 	    </transition>
 	</div>
 	<div class="word">
 		<span 
 		@click="checkIt(index)"
 		v-for="(item,index) in slides" 
 		:class="{isActive:nowIndex==index}"
 		class="ico" 
 		>{{index+1}}</span>
 	</div>
    <transition name="left">
 		<button class="btn_slide left_btn" v-show="isShowBtn" @click="checkIt(prePage)">
 		 <span class="glyphicon glyphicon-chevron-left"></span>
 		</button>
    </transition>
    <transition name="right">
 		<button class="btn_slide right_btn" v-show="isShowBtn" @click="checkIt(nextPage)">
 		<span class="glyphicon glyphicon-chevron-right"></span>
 		</button>
 	</transition>
 </div>	
</template>
<script type="text/javascript">

export default{
	mounted(){
      this.runSlide()
	},
	data(){
		return {
		  nowIndex:0,
		  isShowBtn:false,
		  isShow:true,
		  timer:null,
		  start:0	
		}
	},
	methods:{
     checkIt(i){
     	this.isShow=false
     	setTimeout(()=>{
     		this.nowIndex=i
     		this.isShow=true
     	},10)
     },
     runSlide(){
     	this.timer=setInterval(()=>{
     		this.checkIt(this.prePage)
     	},3000)
     },
     showAll(i){
        if(i>0){
        	this.isShowBtn=true
        	clearInterval(this.timer)
        }else{
        	this.isShowBtn=false
        	this.runSlide()
        }
     }
	},
	props:{
		slides:{
			type:Array,
			default:[
			   {
			   	imgSrc:require('../../assets/slide/1.jpg'),
			   	linkSrc:'',
			   }
			]
		},
		styleObject:{
			type:Object,
			default:{
				height:'420px',
				width:'100%'
			}
		}
	},
	computed:{
		prePage(){
			if(this.nowIndex==0){
               return this.slides.length-1
			}else{
				return this.nowIndex-1
			}
		},
		nextPage(){
			if(this.nowIndex==this.slides.length-1){
              return 0
			}else{
				return this.nowIndex+1
			}
		}
	}
}
</script>
<style type="text/css" scoped>
 .slide{width:100%;height:420px;position: relative;overflow:hidden;}
 .slide .img{position:absolute;width:100%;z-index:2;}
 .slide .img img{position: absolute;left:0px;}	
 .slide .word{position:absolute;width:auto;z-index:3;bottom:10px;right:10px;}	
 .slide .left_btn,.slide .right_btn{
 	position:absolute;z-index:4;
 	top:40%;width:30px;height:80px;
 	border-radius:3px;
 	background: #000;
 	padding:0px 5px;
 	opacity:0.1;color:white;
 	font-size:22px;font-weight:800;
 	text-align: center;
 	line-height:80px; 
 }
 .slide .left_btn{left:0px;}	
 .slide .right_btn{right:0px;}
 .left-enter{
 	transform:translateX(-30px);
 }
 .left-enter-active{
   transition:all 1s;
 }
 .left-leave-active{
 	transform:translateX(-30px);
   transition:all 1s;
 }
 .right-enter{
 	transform:translateX(30px);
 }
 .right-enter-active{
   transition:all 1s;
 }
 .right-leave-active{
 	transform:translateX(30px);
   transition:all 1s;
 }
 .ico{
 	width:20px;
 	height:20px;
 	background:#fff;
 	border-radius:19px;
 	text-align: center;
 	line-height: 20px;
 	margin:5px 3px;
 }
 .isActive{
 	color:white;
 	background:#f80;
 }
 .slide-come-enter{
 	transform:translateX(-100%);
 }
 .slide-come-enter-active{
 	transition:all 1s;
 }
 .slide-old-leave-active{
 	transform:translateX(100%);
 	transition:all 1s;
 }
 .btn_slide:hover{
 	opacity: 1;
  animation:opacityMove 1s;
 }
 @keyframes opacityMove{
 	0%{opacity:0.5;}
 	100%{opacity:1;}
 }
 @media screen and (max-width:414px){
  .slide{height:180px;}	
 }		
</style>