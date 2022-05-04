$(document).ready(function() {
    const table = $("<table class='table'></table>");
    const thead = $("<thead class='table-dark''></thead>")
    const headers = $("<tr><th>ID</th><th>TEXT</th><th>UPDATE</th><th>DELETE</th></tr>");
    const tbody = $("<tbody id='tbody'></tbody>");
    const addButton = $("<button type=\"button\" class=\"btn btn-primary\" id='addBtn'>Add note</button>");
    const addNoteForm = $("<form id='addNoteForm' class='hide'>\n" +
        "  <div class=\"form-group\">\n" +
        "    <label for=\"Text\">Note text</label>\n" +
        "    <input type=\"text\" class=\"form-control\" id=\"Text1\">\n" +
        "  </div>\n" +
        "  <div class=\"form-check\">\n" +
        "    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n" +
        "    <label class=\"form-check-label\" for=\"exampleCheck1\">Confirm adding note</label>\n" +
        "  </div>\n" +
        "  <button type=\"button\" class=\"btn btn-primary\" id='addNoteFormBtn'>Submit</button>\n" +
        "</form>");


    $("#wrapper").append(addButton);
    $("#wrapper").append(addNoteForm);
    $("#wrapper").append(table);
    $(".table").append(thead);
    $(".table").append(tbody);
    $(".table-dark").append(headers);


    $("#addBtn").click(function () {
        $("#addNoteForm").toggle();
    });

    function checkIfInputEmpty() {
        return $("#Text1").val();
    }

    function checkIfConfirmationBtnClicked() {
        return $("#exampleCheck1").is(':checked');
    }

    function addNotesFromJson() {
        $.get("https://jsonplaceholder.typicode.com/users", function (data) {
            var arr = data;
            $.each(arr,function (index){
                addNoteFromJson(index +1,arr[index].company.catchPhrase);
                addListener(index + 1);
            })
        })
    }

    function addListener(index){
        $("[delete-id=" + index + "]").click(function (){
            $(this).closest('tr').remove();
        })
    }

    function addNoteFromJson(id,text){
        var row = $("<tr></tr>");
        var idCell = $("<td id=row"+id + ">" + id + "</td>");
        var textCell = $("<td>" + text + "</td>");
        var updateBtn = $("<button type=\"button\" class=\"btn btn-warning\">Update</button>");
        var deleteBtn = $("<button type=\"button\" class=\"btn btn-danger\">Delete</button>");
        updateBtn.attr('update-id',id);
        deleteBtn.attr('delete-id',id);
        var tdBtn1 = $("<td></td>")
        var tdBtn2 = $("<td></td>")
        tdBtn1.append(updateBtn);
        tdBtn2.append(deleteBtn);
        $("#tbody").append(row);
        $("tr:last").append(idCell,textCell,tdBtn1,tdBtn2);
    }

        addNotesFromJson();

    var addNote = function (){
        var row = $("<tr><th scope='row'></th></tr>");
        if(!checkIfInputEmpty()){
            alert('insert some text!')
            return;
        }
        if(!checkIfConfirmationBtnClicked()){
            alert('click confirmation button.')
            return;
        }


        $("#tbody").append(row);
        $("th:last").append(id);
    }

    $("#addNoteFormBtn").click(addNote);



});

