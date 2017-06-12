/**
 * Created by championswimmer on 12/06/17.
 */

$(function () {

    function refreshTodos(todos) {
        var todolist = "";
        for (todo of todos) {
            todolist += "<li>" + todo + "</li>"
        }
        $('#todolist').html(todolist);
    }


    $('#addtodo').click(function () {
        var newtodo = $('#newtodo').val();

        $.get('/addtodo?todo=' + newtodo, function (data) {
            refreshTodos(data)
        })

    })


});