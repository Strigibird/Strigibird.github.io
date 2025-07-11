fullDiv = [];

//You get one by default
AddCommandSet();

document.getElementById("Commandsets").appendChild(fullDiv[0]);

document.getElementById("Csets").onchange=function() {
    //Add new commandsets until the amount matches
    while (event.target.value>fullDiv.length) {
        AddCommandSet();
    }
    document.getElementById("Commandsets").innerHTML="";
    for (i=0;i<event.target.value;i+=1) {
        document.getElementById("Commandsets").appendChild(fullDiv[i]);
    }
}

function AddCommandSet() {
        //Makes smaller div to avoid fucking up the count.
        smallDiv = document.createElement("div");
        // breaks to make it look better
        smallDiv.appendChild(document.createElement("br"));
        // The question
        newContent = document.createElement("h3");
        newContent.textContent="How many commands are in command set "+(fullDiv.length+1)+"?"
        smallDiv.appendChild(newContent);
        // The input
        newContent = document.createElement("input");
        newContent.type="number";
        newContent.value=1;
        newContent.min=1;
        //Makes it follow any function on change
        newContent.addEventListener("change", function() {
            alert(event.target.value);
        })
        smallDiv.appendChild(newContent);
        // Add smallDiv to fullDiv so every commandset is just one element
        fullDiv.push(smallDiv);
}

//Test button
document.getElementById("Reveal").onclick=function() {
    alert(fullDiv.length)
}