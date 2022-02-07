"use strict";
var LOCAL_STORAGE_KEY = "ToDoList";
var localStoreString = localStorage.getItem(LOCAL_STORAGE_KEY);
var lists = localStoreString != null ? JSON.parse(localStoreString) : [];
if (lists.length > 0) {
    lists.forEach(function (a) { return renderTodo(a); });
}
$(document).on('submit', function (e) {
    e.preventDefault();
    var todo = $("form #todoInput").val();
    if (todo) {
        var newTodoItem = {
            id: Date.now(),
            value: todo,
            isCompleted: false
        };
        renderTodo(newTodoItem, true);
    }
});
$(document).ready(function () {
    $('.ToDoList').on('click', function (e) {
        if (e.target.tagName == "SPAN") {
            var element = e.target.parentNode;
            var LIId = element.getAttribute("id");
            if (LIId != null) {
                var reqId_1 = parseInt(LIId);
                lists = lists.filter(function (a) { return a.id != reqId_1; });
                pushToLocalStorage();
            }
            element.remove();
        }
        if (e.target.tagName == "P") {
            var pTag = e.target;
            var element = e.target.parentNode;
            var LIId = element.getAttribute("id");
            if (LIId != null) {
                var reqId_2 = parseInt(LIId);
                lists.forEach(function (a) {
                    if (a.id == reqId_2) {
                        a.isCompleted = !a.isCompleted;
                    }
                });
                pushToLocalStorage();
            }
            $(pTag).toggleClass('completed');
        }
    });
});
function renderTodo(todoItem, isNew) {
    if (isNew === void 0) { isNew = false; }
    var todoLI = "<li id='" + todoItem.id + "'><p class=''> " + todoItem.value + " </p> <span class=\"far fa-trash-alt\"></span></li>";
    $('.ToDoList').prepend(todoLI);
    if (isNew) {
        lists.push(todoItem);
        pushToLocalStorage();
        var form = $("#todoForm")[0];
        form.reset();
    }
    else {
        if (todoItem.isCompleted) {
            $(".ToDoList li#" + todoItem.id).find("p").toggleClass("completed");
        }
    }
}
function pushToLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lists));
}

//# sourceMappingURL=index.js.map
