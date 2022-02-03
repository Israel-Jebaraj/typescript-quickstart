/// <reference path="../typings/globals/jquery/index.d.ts" />
let id:number=0;
$(document).on('submit',(e)=>{
    e.preventDefault();
    let todo:string=$("form #todoInput").val();
    if(todo)
    {
        let todoLI:string=`<li id='${++id}'> ${todo} <span style='color:blue;cursor:pointer' class='delete'> delete</span></li>`;
        $('.ToDoList').prepend(todoLI);
        let form=$("#todoForm")[0] as any;
        form.reset();
    }
});
$(document).ready(()=>{
    $('.ToDoList').on('click',(e)=>
        {
        let LiElement=e.target.parentNode as HTMLElement; 
        LiElement.remove();   
        }
    );
})