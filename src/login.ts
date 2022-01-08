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
     showRegistrationPage():void{
        $("#login-heading").html("Registration");
        $("#container .login-form").hide();    
        
    }
    add(a:number,b:number):number{
        return a+b;
    }
    
    
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
