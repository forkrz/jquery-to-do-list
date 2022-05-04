function checkIfInputEmpty() {
    return $("#Text1").val();
}

function checkIfConfirmationBtnClicked() {
    return $("#exampleCheck1").is(':checked');
}

async function getInitialNotesData(){

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return await res.json();
}


async function addNotesFromJson() {
    let x = await getInitialNotesData();

        $.each(x,function (index){
            addNoteFromJson(index +1,x[index].company.catchPhrase);
            addListener(index + 1);
        })
}

function addListener(index){
    $("[delete-id=" + index + "]").click(function (){
        $(this).closest('tr').remove();
    })
}

function addNoteFromJson(id,text){
    const row = $("<tr></tr>");
    const idCell = $("<td id=row"+id + ">" + id + "</td>");
    const textCell = $("<td>" + text + "</td>");
    const updateBtn = $("<button type=\"button\" class=\"btn btn-warning\">Update</button>");
    const deleteBtn = $("<button type=\"button\" class=\"btn btn-danger\">Delete</button>");
    updateBtn.attr('update-id',id);
    deleteBtn.attr('delete-id',id);
    const tdBtn1 = $("<td></td>")
    const tdBtn2 = $("<td></td>")
    tdBtn1.append(updateBtn);
    tdBtn2.append(deleteBtn);
    $("#tbody").append(row);
    $("tr:last").append(idCell,textCell,tdBtn1,tdBtn2);
}

     function addNote(){
    const row = $("<tr><th scope='row'></th></tr>");
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


    $("#wrapper").append(addButton,addNoteForm,table);
    $(".table").append(thead,tbody);
    $(".table-dark").append(headers);


    $("#addBtn").click(function () {
        $("#addNoteForm").toggle();
    });



    $("#addNoteFormBtn").click(()=>{addNote()});

    addNotesFromJson();



});

