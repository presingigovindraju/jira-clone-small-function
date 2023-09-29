const createButton = document.getElementsByTagName("button");

const inputElements = document.querySelectorAll("section > div > input");

function deleteButton(buttonDelete){
   const parentCard =buttonDelete.parentNode;
   parentCard.remove();
}

function handleInput(event){
     if(event.keyCode === 13){
        let taskName=event.target.value;
        const card =document.createElement("div");
        card.className="card";
        card.draggable="true";
        card.innerHTML=`
        <b>${taskName} </b>
        <button onclick="deleteButton(this)">delete</button>
        `;
        const cardsContainer =event.target.nextElementSibling;
        cardsContainer.appendChild(card);
        event.target.value="";
        event.target.className="Hide";


     }
}

for(let i = 0;i < inputElements.length ;i++){
    inputElements[i].addEventListener("keyup",handleInput);
}

function createTask(event){
    //const containerId=event.target.parentNode.id;

    //const container = document.getElementById(containerId);

    //const textArea =document.createElement("textarea");
    //textArea.placeholder="Enter issue"

    //container.appendChild(textArea);
    const testAreaShow =event.target.nextElementSibling;

    testAreaShow.className="Show";
}

for(let i=0;i <createButton.length;i++){
    createButton[i].addEventListener("click",createTask);
}