//&#10004; tick
//&#10007; cross
/*global alert */
/*global console */

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
alert("j");
