$(document).ready(function() {
    var table = $("<table class='table'></table>");
    var thead = $("<thead class='table-dark''></thead>")
    var headers = $("<tr><th>ID</th><th>TEXT</th><th>UPDATE</th><th>DELETE</th></tr>");
    var tbody = $("<tbody id='tbody'></tbody>");
    var addButton = $("<button type=\"button\" class=\"btn btn-primary\" id='addBtn'>Add note</button>");
    var addNoteForm = $("<form id='addNoteForm' class='hide'>\n" +
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


    $("#addBtn").click(function (){
        $("#addNoteForm").toggle();
    });

    function checkIfInputEmpty(){
        return $("#Text1").val();
    }

    function checkIfConfirmationBtnClicked(){
      return $("#exampleCheck1").is(':checked');
    }

    var addNote = function (){
        var row = $("<tr><th scope='row'></th></tr>");
        var cellValue = $("<td>test</td>");
        console.log(checkIfConfirmationBtnClicked());
        if(!checkIfInputEmpty()){
            alert('insert some text!')
            return;
        }
        if(!checkIfConfirmationBtnClicked()){
            alert('click confirmation button.')
            return;
        }


        $("#tbody").append(row);
        $("th:last").append(cellValue);
    }

    $("#addNoteFormBtn").click(addNote);



});