<template>
  <div>
  	<div class="slider_box"><Vslider :slides="slides" :styleObject="styleObject"></Vslider></div>
 	<div class="category_box"><Category :datas="datas"></Category></div>
  </div>
</template>
<script type="text/javascript">
import Vslider from '../components/common/Vslider'
import Category from '../components/category'
 export default{
 	mounted(){
     $(window).scrollTop(0)
  },
 	data(){
     return{
     	 datas:{
            tittle:"国际品牌",
            lists:[
              {
                srcImg:require("../assets/inter/1.jpg"),
                linkSrc:"",
                discount:0.5,
                fullDiscount:"满200减100，满10减8块",
                tittle:"女装专场",
                lastDay:1
              },
              {
                srcImg:require("../assets/inter/2.jpg"),
                linkSrc:"",
                discount:0.5,
                fullDiscount:"满200减100，满10减8块",
                tittle:"女装专场",
                lastDay:1
              },
              {
                srcImg:require("../assets/inter/3.jpg"),
                linkSrc:"",
                discount:0.5,
                fullDiscount:"满200减100，满10减8块",
                tittle:"女装专场",
                lastDay:1
              },
              {
                srcImg:require("../assets/inter/1.jpg"),
                linkSrc:"",
                discount:0.5,
                fullDiscount:"满200减100，满10减8块",
                tittle:"女装专场",
                lastDay:1
              },
              {
                srcImg:require("../assets/inter/3.jpg"),
                linkSrc:"",
                discount:0.5,
                fullDiscount:"满200减100，满10减8块",
                tittle:"女装专场",
                lastDay:1
              },
              {
                srcImg:require("../assets/inter/2.jpg"),
                linkSrc:"",
                discount:0.5,
                fullDiscount:"满200减100，满10减8块",
                tittle:"女装专场",
                lastDay:1
              },
            ]
          },
          slides:[
             {
	          	imgSrc:require('../assets/inter/bg1.jpg'),
				      linkSrc:'',
             },
             
          ],
          styleObject:{
          	height:"220px"
          }
     }
 	},
    components:{
       Vslider,Category
    }
 }	
</script>
<style type="text/css" scoped>
.category_box{
	max-width:1000px;
	width:100%;
	margin:0px auto;
}	
</style>