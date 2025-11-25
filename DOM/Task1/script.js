function addTask() {
    let input=document.getElementById("input");
    let task=input.value;

    if(task==="") {
        alert("Please Enter a Task!");
        return;
    }

    let li=document.createElement("li");
    li.innerText=task;


    let editBtn=document.createElement("Button");
    editBtn.innerText="Edit";
    editBtn.onclick=function(){
        let newText=prompt("Edit Task: ",li.firstChild.textContent);
        if(newText !== null && newText.trim()!==""){
            li.firstChild.textContent=newText;
        }
    };
    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.onclick=function(){
        li.remove();
    };
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);
    input.value="";

    
}