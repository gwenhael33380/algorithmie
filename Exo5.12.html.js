
// declaration de fonction
function genrerTableEnHtml( n ) {

    let html = "<table>";

    html += "<thead><tr><th>Table des " + n + "</th></tr></thead>";

    html += "<tbody>";
    for( let i = 0; i <= 10; i++ ){
        html += "<tr><td>" + n + " x " + i + " = " + (i * n) + "</td></tr>";
    }
    html += "</tbody>";
    html += "</table>";

    return html;
}

let maTableHtml = "";
// debut

maTableHtml += "<table>";
maTableHtml += "<tbody><tr><td>";
for( t = 1; t <= 5; t++) {
    maTableHtml += genrerTableEnHtml(t);
    maTableHtml += "</td>";
    if( t < 5) maTableHtml += "<td>";
}
maTableHtml += "</tr><tr><td>"; 
for( t = 6; t <= 10; t++) {
    maTableHtml += genrerTableEnHtml(t);
    maTableHtml += "</td>";
    if( t < 10) maTableHtml += "<td>";
}
maTableHtml += "</tr></tbody></table>"; 

document.write(maTableHtml);
console.log(maTableHtml);

//fin