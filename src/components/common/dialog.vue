<template>
 <div>
 	<div class="mask" v-if="isShowDialog"></div>	
    <transition name="ani-dialog">
    	<div class="dialog_box" v-if="isShowDialog">
	       <div class="close" @click="closeIt">x</div>
	        <slot></slot>
	    </div>
    </transition>
 </div>
</template>
<script type="text/javascript">
 export default{
        data(){
        	return{

        	}
        },
        props:{
        	isShowDialog:{
        		type:Boolean,
        		default:false
        	}
        },
        methods:{
        	closeIt(){
        		this.$emit("on-close")
        	}
        }
 }	
</script>
<style type="text/css" scoped>
 .mask{position:fixed;top:0px;left:0px;right:0px;bottom:0px;background:#000;opacity:0.4;z-index:100;}
 .dialog_box{
 	position: fixed;
 	top:30%;
 	left:50%;
 	margin-left:0px;
 	z-index:101;
 	padding:20px;
 	border:3px solid #ccc;
 	border-radius:10px;
 	background:#fff;
 }
 .close	{
 	position:absolute;
 	right:10px;
 	top:5px;
 	width:16px;height:16px;
 	line-height:16px;
 	text-align: center;
 	font-size:19px;
 	border-radius:8px;
 	border:2px solid pink;
 }
 .ani-dialog-enter{
 	transform: translateY(-300px);
 }
 .ani-dialog-enter-active{
 	transition:all 1s;
 }
  .ani-dialog-leave-active{
  	transform: translateY(600px);
  	transition: all 1s;
  }
</style>