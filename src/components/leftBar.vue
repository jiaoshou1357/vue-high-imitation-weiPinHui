<template>
 <div class="leftBar">
 	<ul>
 	  <li v-for="item in nav_bar"><a :href="item.name">{{item.tittle}}</a></li>
 	</ul>
 </div>	
</template>
<script type="text/javascript">
 export default{
 	data(){
 		return{
 			nav_bar:[
             {
              tittle:'首页',
              name:""
             },
             {
              tittle:'女装',
              src:'',
              name:"#vwomen"             },
             {
              tittle:'男装',
              src:'',
              name:"#vman"
             },
             {
              tittle:'国际出装',
              src:'',
              name:"#vinter"
             },
             {
              tittle:'居居家',
              src:'',
              name:""
              
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
 		}
 	}
 }
</script>
<style scoped>
 .leftBar{
 	position:fixed;left:50%;
    margin-left:-590px;
 	border:1px solid #ccc;border-radius:5px;
 	z-index:100;background:#fff;
 }
 .leftBar ul{
 	padding:15px 10px;
 }
 .leftBar ul li{
 	border-bottom:1px solid #ccc;
 	padding:10px 2px;
 	cursor:pointer;
 	text-align: center;
 	border-radius:4px;

 }
  .leftBar ul li:hover{
  	background:#F101B9;
  }	
</style>