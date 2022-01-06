/// <reference path="../typings/globals/jquery/index.d.ts" />
 export  class customerData{  
  constructor(){}
  callAPI(){
    $.ajax({
        url:'https://northwind.netcore.io/customers/ALFKI',
        type:'GET',
        contentType:'application/json',
        dataType:'json',
        success:(data:any,status)=>{
            alert(data);
        },
    });
  }
    
}