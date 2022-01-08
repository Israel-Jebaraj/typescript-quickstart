/// <reference path="../typings/globals/jquery/index.d.ts" />
export  class login{
    users:user[]=[];
    constructor()
    {
        
    }
    public loginPage():void{    

          
          
        // this.showRegistrationPage();
        // this.returnUser();
        
    }
    public ValidateLogin(users:user[]):void{
        if(users.length>0)
        {
            let name:string=$(".login-form #name").val();
            let password:string=$(".login-form #pass").val();
            let reqUser:user=users.filter((u:user)=>u.name===name&&u.password===password)[0];
            if(reqUser){
                alert("done");
            }
        }
        else{
            alert("Not a valid user:")
        }
    }
     showRegistrationPage():void{
        // $("#login-heading").html("Registration");
        // $("#container .login-form").hide();
        // console.log(this.add(4,5));
        // this.returnUser;
        returnUser();
        
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
function returnUser():void{
    alert("User");    
    console.log("User")
}