/// <reference path="../typings/globals/jquery/index.d.ts" />
export  class login{
    users:user[]=[];
    constructor()
    {
        
    }  
    public ValidateLogin(users:user[]):void{
        if(users.length>0)
        {
            let name:string=$(".login-form #name").val();
            let password:string=$(".login-form #pass").val();
            let reqUser:user=users.filter((u:user)=>u.name===name&&u.password===password)[0];
            if(reqUser){
                $("#container .login-form").find('input').removeClass('error');                
                alert("done");
            }
            else{
                $("#container .login-form").find('input').addClass('error');
            }
        }
        else{
            alert("Not a valid user:")
        }
    }
    public validateRegistration():registeredUser{
        let result:registeredUser={
            validRegistration:false,
            userDetails: new user("",0,"")
        };
        let id:string='#container .register-form';
        let name:string=$(id).find('input#name').val();
        let age:string=$(id).find('input#age').val();
        let pass:string=$(id).find('input#pass').val();
        let cpass:string=$(id).find('input#cpass').val();
        if(pass!==cpass){
           alert('password not match')
        }
        else if(name !== undefined && name !== null && name.length>0 && /^[0-9][0-9]$/.test(age)){
            result={
                validRegistration:true,
                userDetails:new user(name,parseInt(age),pass)
            }
            alert("passed")
        }
        return result;

    }
   
     public showRegistrationPage():void{
        $("#login-heading").html("Registration");
        $("#container .login-form").hide();
        $("#container .register-form").show();
        
    }
    add(a:number,b:number):number{
        return a+b;
    }
    
    
}
export interface registeredUser{
    validRegistration:boolean;
    userDetails:user;
}
export interface userLogin{
    name:string,
    password:string;
}
export class user{
  name:string;
  age:number;
  password:string;
  constructor(name:string,age:number,password:string)
  {
      this.name=name;
      this.age=age;
      this.password=password;
  } 
  
}
