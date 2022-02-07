/// <reference path="../typings/globals/jquery/index.d.ts" />
const LOCAL_STORAGE_KEY: string = "ToDoList";
let localStoreString: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);
let lists: ToDo[] = localStoreString != null ? JSON.parse(localStoreString) : [];

if (lists.length > 0) {
    lists.forEach((a: ToDo) => renderTodo(a));
}

$(document).on('submit', (e) => {
    e.preventDefault();
    let todo: string = $("form #todoInput").val();
    if (todo) {
        let newTodoItem: ToDo = {
            id: Date.now(),
            value: todo,
            isCompleted: false
        }
        renderTodo(newTodoItem, true);
    }
});
$(document).ready(() => {
    $('.ToDoList').on('click', (e) => {
        if (e.target.tagName == "SPAN") {
            let element = e.target.parentNode as HTMLElement;
            let LIId = element.getAttribute("id");
            if (LIId != null) {
                let reqId: number = parseInt(LIId);
                lists = lists.filter((a: ToDo) => a.id != reqId);
                pushToLocalStorage();
            }
            element.remove();
        }
        if (e.target.tagName == "P") {
            let pTag = e.target as HTMLLIElement;
            let element = e.target.parentNode as HTMLElement;
            let LIId = element.getAttribute("id");
            if (LIId != null) {
                let reqId: number = parseInt(LIId);
                lists.forEach((a: ToDo) => {
                    if (a.id == reqId) {
                        a.isCompleted = !a.isCompleted;
                    }
                });
                pushToLocalStorage();
            }
            $(pTag).toggleClass('completed');
        }
    }
    );
})

interface ToDo {
    id: number,
    value: string,
    isCompleted: boolean
}

function renderTodo(todoItem: ToDo, isNew: boolean = false): void {
    let todoLI: string = `<li id='${todoItem.id}'><p class=''> ${todoItem.value} </p> <span class="far fa-trash-alt"></span></li>`;
    $('.ToDoList').prepend(todoLI);
    if (isNew) {
        lists.push(todoItem);
        pushToLocalStorage();
        let form = $("#todoForm")[0] as HTMLFormElement;
        form.reset();
    }
    else {
        if(todoItem.isCompleted){
            $(".ToDoList li#" + todoItem.id).find("p").toggleClass("completed");
        }
    }



}

function pushToLocalStorage(): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lists));
}
