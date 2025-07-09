var message = "hello world";
document.getElementById("Csets").onchange=function() {
    alert("Yoo what's up my "+document.getElementById("Csets").value+" men");
}
i=1;
document.getElementById("Confirm").onclick=function() {
    newContent = document.createElement("br");
    newDiv.appendChild(newContent);
    newContent = document.createElement("button");
    newContent.textContent="Copy";
    newContent.id="number "+i;
    i+=1;
    newContent.addEventListener("click", function() {
        alert(event.target.id);
    })
    newDiv.appendChild(newContent);
}
newDiv = document.createElement("div");
newContent = document.createTextNode("Hiiii :3");
currentDiv = document.getElementById("End");
document.body.insertBefore(newDiv,currentDiv);
newDiv.appendChild(newContent);