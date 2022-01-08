/// <reference path="../typings/globals/jquery/index.d.ts" />
import {login,registeredUser,user,userLogin} from './login.js';
let users:user[]=[];
let user1:user={
    name:"sample",
    age:21,
    password:"sample"
}
users.push(user1);
$(document).ready(function(){
    loginRelated();
});

function loginRelated()
{
    $("#container .register-form").hide();
    $(".register-link").on("click",function(){
        new login().showRegistrationPage();      
    });
    $(".login-link").on('click',function(){
        $("#login-heading").html("Login");
        $("#container .register-form").hide();
        $("#container .login-form").show();
    })
    $("#container .login-form #loginBtn").on("click",function(){
        new login().ValidateLogin(users);      
    });
    $("#container .register-form #registerBtn").on("click",function(){
        let registeredUserdetail:registeredUser=new login().validateRegistration();     
    });
}
