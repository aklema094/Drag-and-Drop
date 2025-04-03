let lists = document.querySelectorAll(".list");
const leftBox = document.getElementById("left");
const rightBox = document.getElementById("right");

lists.forEach((list) =>{
    list.addEventListener("dragstart", function(event){
    let selected = event.target;

    rightBox.addEventListener("dragover",function(e){
        e.preventDefault();
    });
    rightBox.addEventListener("drop",function(e){
    rightBox.appendChild(selected);
    selected = null;
    });
    leftBox.addEventListener("dragover",function(e){
        e.preventDefault();
    });
    leftBox.addEventListener("drop",function(e){
    leftBox.appendChild(selected);
    selected = null;
    });


    });
});
