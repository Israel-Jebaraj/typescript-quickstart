/// <reference path="../typings/globals/jquery/index.d.ts" />
import {login} from './login.js';
$(document).ready(function(){
    $(".link").on('click',function(){
       new login().showRegistrationPage();
    });
});
