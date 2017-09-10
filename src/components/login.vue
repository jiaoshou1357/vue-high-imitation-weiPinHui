<template>
<div>
  <div class="login">
    <div class="item">
    	<span>欢迎注册</span>
  		<span>已经注册直接登录</span>
    </div>
  	<ul>
  		<li>
      <div class="correct" v-show="checkPhone.status">✔</div>
      <div class="error" v-show="checkPhone.errorPhoneNumber">手机号不能为空</div>
  			<input type="text" 
  			placeholder="请输入您手机号"
  			:class="{errorBg:!checkPhone.isPassPhoneNumber}"
  			v-model="phoneNumber"
  			 @click.stop="writeIt($event,'phoneNumber')" >
  		</li>
  		<li>
        <div class="correct" v-show="checkPassword.status">✔</div>
        <div class="error" v-show="checkPassword.errorPassword">密码由6-8位数字和字母组成</div>
  			<input type="text" 
  			placeholder="请输入您的密码" 
  			v-model="password"
        :class="{errorBg:!checkPassword.isPassPassword}"
        @click.stop="writeIt('password')"
  			>
  		</li>
  		<li>
        <div class="correct" v-show="checkOncePassword.status">✔</div>
        <div class="error" v-show="checkOncePassword.errorOncePassword">请输入确认密码</div>
  			<input type="text" 
  			placeholder="请再输入一次密码"
  			v-model="oncePassword"
        :class="{errorBg:!checkOncePassword.isPassOncePassword}"
         @click.stop="writeIt('oncePassword')"
  			 >
  		</li>
  		<li>
        <div class="correct" v-show="">✔</div>
        <div class="error" v-show="">请输入6位数字验证码</div>
  			<input type="text" 
  			style="width:40%;margin-right:20px;" 
  			 placeholder="短信验证码"
  			 v-model="shortMessage"
          @click.stop="writeIt('shortMessage')"
  			 >
  			<button class="btn">获取短信验证码</button>
  		</li>
  		<li>
  			<p><input type="checkbox" 
  			name="" class="checkbox"
  			     v-model="isChecked"
  			>&nbsp;&nbsp;我已经阅读条款并同意</p>
  		</li>
  		<li>
  			<button class="btn reg">立即注册</button>
  		</li>
  	</ul>
  </div>	
</div>	
</template>
<script type="text/javascript">
import {eventBus} from '../eventBus'
  export default{
    mounted(){
      eventBus.$on('reset-component',()=>{
           
      })
      
    },
  	data(){
  	 return {
    
      phoneNumber:"",
      password:'',
      oncePassword:'',
      shortMessage:'',
      isChecked:false
    
  	 }	
  	},
    methods:{
       
    },
  	computed:{
       checkPhone(){
           let phone=/^[0-9]{8,}$/
           let errorPhoneNumber,isPassPhoneNumber,status
           if(phone.test(this.phoneNumber)){
              isPassPhoneNumber=true
              errorPhoneNumber=false
              status=true
           }else{
              isPassPhoneNumber=false
              errorPhoneNumber=true
              status=false
           }
           if(!this.phoneFlag){
              isPassPhoneNumber=true
              errorPhoneNumber=false
              this.phoneFlag=true
           }
           return{
             isPassPhoneNumber,errorPhoneNumber,status
           }
      },
      checkPassword(){
         let password=/^[0-9a-zA-Z]{6,8}$/
         let isPassPassword,errorPassword,status
         if(password.test(this.password)){
          isPassPassword=true
          errorPassword=false
          status=true
         }else{
          isPassPassword=false
          errorPassword=true
          status=false
         }
         if(!this.passwordFlag){
              isPassPassword=true
              errorPassword=false
              this.passwordFlag=true
           }
         return{
          isPassPassword,errorPassword,status
         }
      },
      checkOncePassword(){
        let isPassOncePassword,errorOncePassword,status
        if(this.oncePassword==this.password&&this.oncePassword!==''){
          isPassOncePassword=true
          errorOncePassword=false
          status=true
        }else{
          isPassOncePassword=false
          errorOncePassword=true
          status=false
        }
        if(!this.oncePasswordFlag){
              isPassOncePassword=true
              errorOncePassword=false
              this.oncePasswordFlag=true
           }
        return{
          isPassOncePassword,errorOncePassword,status
        }
      }
    },
  	watch:{
  	
  	}

  }	
</script>
<style type="text/css" scoped>
.login{
	
	width:337px;
}
.item {
 width:100%;
 overflow: auto;zoom:1;
 line-height: 30px;
 margin:10px 0px;
}
.item span:nth-child(1){
 float: left;
}
.item span:nth-child(2){
 float: right;
}
.login ul .first{
	border:1px solid #ccc;padding:3px 5px;
}
.login ul li{
	position: relative;
	line-height:30px;margin:10px 0px;
	
}
.login ul li .error{
	position: absolute;top:-30px;
	border-radius:4px;
	width:auto;
  padding:0px 10px;
	height:28px;
	background:pink;
	color:black;
	text-align: center;
}
.login ul li input{
	outline:none;
	border:none;background:none;width:100%;
	border:1px solid #ccc;padding:3px 5px;
	border-radius:5px;
}
.checkbox{
	display:inline-block;
	width:18px!important;
	height:18px;position: relative;top:3px;
}
.reg{background:#f10180;width:40%;color:white;}
.errorBg{background:pink!important;}
.correct{position: absolute;top:3px;right:5px;color:green;font-size:20px;}
</style>




