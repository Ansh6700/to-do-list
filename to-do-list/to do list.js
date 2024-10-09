let Button=document.querySelector("button");
let div=document.querySelector("#container")
Button.addEventListener("click",function(){
    let newdiv=document.createElement("div")
    newdiv.classList.add("newdiv")
    let input=document.getElementById("list").value;
    newdiv.innerText=input;
    let checkbox=document.createElement("input");
    checkbox.setAttribute("type","checkbox")
    checkbox.addEventListener("change",function(){
        if(checkbox.checked){
            newdiv.style.textDecoration="line-through";
        }
        else{
            newdiv.style.textDecoration="none";
        }
    })
    let button=document.createElement("button")
    button.innerText="x";
    button.classList="close";
    button.addEventListener("click",function(){
        newdiv.remove();
    })
    newdiv.appendChild(button)
    newdiv.prepend(checkbox)
    div.appendChild(newdiv)
    
    })
    