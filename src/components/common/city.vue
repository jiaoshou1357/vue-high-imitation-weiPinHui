<template>

  <div class="citys" @mouseout="closeIt" @mouseover="keepIt">
    <h5>请选择您所在的城市</h5>
  	<ul>
  		<li v-for="item in citys">
  			<span>{{item.tittle}}</span>
  			<span v-for="i in item.lists" 
                     :class="{isActive:i==checkedCity}"
                     @click="checkIt(i)"
  			>{{i}}</span>
  		</li>
  	</ul>
  </div>	

</template>
<script type="text/javascript">
 export default{
 	mounted(){

 	},
 	props:{
       checkedCity:{
       	type:String,
       },
       isShowCity:{
       	type:Boolean,
       }
 	},
 	data(){
 	 return {
 	 	keep:true,
 	 	citys:[
 	 	  {
 	 	  	tittle:"A",
 	 	  	lists:[
 	 	  	  '澳门','安徽'
 	 	  	]
 	 	  },
 	 	  {
 	 	  	tittle:"B",
 	 	  	lists:[
 	 	  	  '北京'
 	 	  	]
 	 	  },
 	 	  {
 	 	  	tittle:"C",
 	 	  	lists:[
 	 	  	  '重庆'
 	 	  	]
 	 	  },
 	 	  {
 	 	  	tittle:"D",
 	 	  	lists:[
 	 	  	  '福建'
 	 	  	]
 	 	  },
 	 	  {
 	 	  	tittle:"E",
 	 	  	lists:[
 	 	  	  '澳门','安徽'
 	 	  	]
 	 	  },
 	 	  {
 	 	  	tittle:"H",
 	 	  	lists:[
 	 	  	  '河北','河南','黑龙江','海南'
 	 	  	]
 	 	  },
 	 	  {
 	 	  	tittle:"G",
 	 	  	lists:[
 	 	  	  '澳门','安徽'
 	 	  	]
 	 	  },
 	 	  {
 	 	  	tittle:"H",
 	 	  	lists:[
 	 	  	  '澳门','安徽'
 	 	  	]
 	 	  },
 	 	]
 	 }	
 	},
 	methods:{
 		checkIt(i){
 			this.$emit('on-change',i)
 		},
 		closeIt(){
 			this.keep=false
 			this.$emit('on-close')
 		},
 		keepIt(){
            this.keep=true
 			this.$emit('on-keep',this.keep)
 		}
 	}
 }	
</script>
<style type="text/css" scoped>
.citys{position:absolute;
  padding:10px 15px;width:300px;border:1px solid #ccc;z-index:10;
  background:#fff;
}
.citys h5{border-bottom:1px dashed #000;width:auto;font-size:1rem;padding-bottom:5px;}
.citys ul li{padding:5px 2px;}
.citys ul li span{margin-right:8px;}
.isActive{color:#f80!important;}
</style>