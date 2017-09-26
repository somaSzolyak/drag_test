
function drag(event){
    // var dataToDrag = document.querySelector("#");
    console.log(event.target.id)
    event.dataTransfer.setData("text/html", event.target.id);
}

function allowDrop(event){
    event.preventDefault();
}

function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text/html");
    var element = document.getElementById(data);
    console.log(element);
    event.target.appendChild(element);
}

function init() {
    var objToDrag = document.querySelector("#o");
    objToDrag.setAttribute("draggable", "true");
    objToDrag.addEventListener("dragstart", drag);

    var container1 = document.querySelector("#div1");
    container1.addEventListener("dragover", allowDrop);
    container1.addEventListener("drop", drop);

    var container2 = document.querySelector("#div2");
    container2.addEventListener("dragover", allowDrop);
    container2.addEventListener("drop", drop);
}

init();
