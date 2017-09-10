<template>
 <div class="count">
   <span>{{days}}</span>
   <span>天</span>

   <span>{{hours|formateTime}}</span>
   <span>小时</span>
   <span>{{minute|formateTime}}</span>
   <span>分</span>
   <span>{{second|formateTime}}</span>
   <span>秒</span>
   <span class="milli">{{miniSecond}}</span>
 </div>	
</template>
<script type="text/javascript" >
export default{
  mounted(){
     setInterval(()=>{
      let  arr=this.getLastTime()
       this.days=arr[0]
       this.hours=arr[1]
       this.minute=arr[2]
       this.second=arr[3]
       this.miniSecond=arr[4]
     },1)
  },
  data(){
   return {
      days:0,
      hours:0,
      minute:0,
      second:0,
      miniSecond:0
   }
  },
  methods:{
    getLastTime(){
      let lastMi=Date.parse('2018/1/1 00:00:00')
      let nowTime=new Date().getTime()
      let totalTime=lastMi-nowTime

      let days=Math.floor(totalTime/1000/60/60/24)
      let hours=Math.floor(totalTime/1000/60/60%24)
      let minute=Math.floor(totalTime/1000/60%60)
      let second=Math.floor(totalTime/1000%60)
      let miniSecond=Math.floor(totalTime%1000/100)
      return [days,hours,minute,second,miniSecond]
    }

  },
  computed:{
    getDays(){
      setInterval(()=>{
         let arr=this.getLastTime()
         return arr[0]
      },1)
    },
    getSecond(){
      setInterval(()=>{
       let arr=this.getLastTime()
       return arr[3]
      },1)
    },

  },
  filters:{
   formateTime(val){
      if(val>9){
         return val
      }else{
         return "0"+val
      }
   }
  }

}
</script>
<style type="text/css" scoped>
.count{margin:0px auto;width:auto;padding:20px 0px;color:white;}
.count span{
   padding:5px;border:1px dashed white;font-size:20px;font-weight:900;
   
}
</style>