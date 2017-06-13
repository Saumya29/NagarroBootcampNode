/**
 * Created by championswimmer on 12/06/17.
 */

$(function () {

    function refreshTodos(todos) {
        var todolist = "";
        for (var todo of todos) {
            todolist += "<li>" + todo + "</li>"
        }
        $('#todolist').html(todolist);
    }

    $.get('/api/todos', function (data) {
        refreshTodos(data)
    });

    $('#addtodo').click(function () {

        $.post('/api/todos/new', {
            newtodo: $('#newtodo').val()
        }, function (data) {
            refreshTodos(data)
        })

    })

    // $('#myform').submit(function (event) {
    //     event.preventDefault();
    //
    // })

});