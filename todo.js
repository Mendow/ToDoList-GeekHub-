//&#10004; tick
//&#10007; cross
var newtask = document.getElementById("newtask");

//var task = function (task){
//    this.done = "<hr><div class='doneButton'>&#10004 |</div>";
//    this.task =
//
//}
function divFunction() {
    alert("hell");
}

function slave(e) {
    if (e.keyCode == 13) {

        var inpt = document.getElementById("npt").value;

        document.body.innerHTML += "<div></div>";
        var last = document.body.lastChild;
        last.innerHTML += "<hr>";

        last.innerHTML += "<div class='doneButton' onclick='taskDone(event)'>|&#10004|</div>";
        last.innerHTML += "<div>Error</div>";
        last.innerHTML += "<div class='deleteButton' onclick='taskDel(this)'>|&#10007|</div>";
        last.lastChild.previousSibling.textContent = inpt;

        return false;

    }
}

function taskDone(e) {
    if (e.target.style.color == "red") {
        e.target.style.color = "black";
    } else {
        e.target.style.color = "red";
    }
}

function taskDel(t) {
    t.parentNode.parentNode.removeChild(t.parentNode);

}
