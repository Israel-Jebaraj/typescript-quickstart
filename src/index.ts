/// <reference path="../typings/globals/jquery/index.d.ts" />
import {login,user,userLogin} from './login.js';
let users:user[]=[];
let user1:user={
    name:"sample",
    age:21,
    password:"sample"
}
users.push(user1);
$(document).ready(function(){
    $(".link").on("click",function(){
        new login().showRegistrationPage();      
    });
    $("#container .login-form #loginBtn").on("click",function(){
        new login().ValidateLogin(users);      
    });
});

