$(document).ready(function() {
    var table = $("<table class='table'></table>");
    var thead = $("<thead class='table-dark''></thead>")
    var headers = $("<tr><th>ID</th><th>TEXT</th><th>UPDATE</th><th>DELETE</th></tr>");
    var tbody = $("<tbody id='tbody'></tbody>");
    var tableEl = $("<tr><td>d</td><td>d</td><td>d</td><td>awd</td></tr>")
    $("#wrapper").append(table);
    $(".table").append(thead);
    $(".table").append(tbody);
    $(".table-dark").append(headers);
    $("#tbody").append(tableEl);


});