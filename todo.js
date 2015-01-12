

function addList(myTable) {
    'use strict';
    var table = document.getElementById(myTable),
        rowCount = table.rows.length,
        row = table.insertRow(rowCount),
        b = document.getElementById('txt1').value,
        cell1 = row.insertCell(0),
        element1 = document.createElement("input"),
        cell2 = row.insertCell(1),
        element2 = document.createElement("input"),
        cell3 = row.insertCell(2),
        element3 = document.createElement("div");
    element1.type = "text";
    element1.style.width = "100%";
    element1.name = "txtbox[]";
    element1.value = b;
    cell1.appendChild(element1);

    element2.type = "checkbox";
    element2.name = "chkbox[]";
    element2.onclick = function () {
        showDone(this);
    }
    cell2.appendChild(element2);

    element3.innerHTML = "|&#10007|";
    element3.onclick = function () {
        taskDel(this);
    }
    cell3.appendChild(element3);

    document.getElementById('txt1').value = " ";

    document.getElementById('taskTotal').textContent = rowCount + 1;
}

function deleteMarked(myTable) {

    var table = document.getElementById(myTable);
    var rowCount = table.rows.length;

    for (var i = 0; i < rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[1].childNodes[0];
        if (null != chkbox && true == chkbox.checked) {
            table.deleteRow(i);
            rowCount--;
            i--;

            document.getElementById('taskTotal').textContent = rowCount;

        }
    }
}

function markAll(myTable) {
    var table = document.getElementById(myTable);
    var rowCount = table.rows.length;

    for (var i = 0; i < rowCount; i++) {
        var row = table.rows[i];
        row.cells[1].childNodes[0].checked = true;

    }
}

function taskDel(t) {
    var p = t.parentNode.parentNode;
    p.parentNode.removeChild(p);
    document.getElementById('taskTotal').textContent -= 1;
}

function showDone(t) {

    if (t.checked) {
        document.getElementById('taskDone').textContent = parseInt(document.getElementById('taskDone').textContent)+1;
    } else {
        document.getElementById('taskDone').textContent = parseInt(document.getElementById('taskDone').textContent)-1;
    }
}


//&#10004; tick
//&#10007; cross
/*global alert */
/*global console */
/*gloabl document*/
/*
var newtask = document.getElementById("newtask");

function divFunction() {
    'use strict';
    console.log('lal');
}

function slave(e) {
    'use strict';
    if (e.keyCode === 13) {

        var inpt = document.getElementById("npt").value,
            last;

        document.body.innerHTML += "<div></div>";
        last = document.body.lastChild;
        last.innerHTML += "<hr>";

        last.innerHTML += "<div class='doneButton' onclick='taskDone(event)'>|&#10004|</div>";
        last.innerHTML += "<div>Error</div>";
        last.innerHTML += "<div class='deleteButton' onclick='taskDel(this)'>|&#10007|</div>";
        last.lastChild.previousSibling.textContent = inpt;

        return false;

    }
}

function taskDone(e) {
    'use strict';
    if (e.target.style.color === "red") {
        e.target.style.color = "black";
    } else {
        e.target.style.color = "red";
    }
}

function taskDel(t) {
    'use strict';
    t.parentNode.parentNode.removeChild(t.parentNode);
}
*/
