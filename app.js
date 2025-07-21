fullDiv = [];

specDiv=[[]];

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
        //Updating command sets visibility.
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


        //Add div containing all commands to every commandset
        newContent=document.createElement("div");

        //Final command header
        newerContent=document.createElement("h4");
        newerContent.textContent="Command ELSE";
        newContent.appendChild(newerContent);

        //Final command text 1
        newerContent=document.createElement("p");
        newerContent.textContent="Strategy: All else";
        newContent.appendChild(newerContent);
        
        //Final command text 2
        newerContent=document.createElement("p");
        newerContent.textContent="Response: ";
        newContent.appendChild(newerContent);
        //Final command input 2
        newerContent=document.createElement("input");
        newContent.appendChild(newerContent);
        // breaks to make it look better
        newContent.appendChild(document.createElement("br"));

        //Final command text 3
        newerContent=document.createElement("p");
        newerContent.textContent="What command set will you go to?";
        newContent.appendChild(newerContent);
        //Final command input 3
        newerContent=document.createElement("select");
        newContent.appendChild(newerContent);

        //Add this div to smallDiv by default
        smallDiv.appendChild(newContent);

        //Add this div to specDiv too
        specDiv.push([]);
        specDiv[specDiv.length-1].push(newContent);

        // Add smallDiv to fullDiv so every commandset is just one element
        fullDiv.push(smallDiv);
}

//Test button
document.getElementById("Reveal").onclick=function() {
    alert(specDiv);
}