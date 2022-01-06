/// <reference path="../typings/globals/jquery/index.d.ts" />

import { customerData } from "./customerData.js";

let itemeName:string;
let peopels:people[]=[];
class people{
    name:string="";
    id:number=0;
};
interface fruit{
    color: string;
    id:number;
    description?: string;
};
let fruits:fruit[];
let mango:fruit={
    color:"orange",
    id:1,
}
let person1=new people();
person1.name="Raj";
person1.id=1;
peopels.push(person1);
let person2=new people();
person2.name="Jebaraj";
person2.id=2;
peopels.push(person2);
peopels.forEach((p:people)=>{
    console.log(" Name = "+ p.name +" Id = "+p.id);
});
let container:JQuery=$('#container').find('p');
console.log(container);  
var cData=new customerData();
cData.callAPI(); 