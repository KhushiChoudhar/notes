console.log("Welcome to this website");
window.onload=function(){
    showNotes();
    let addbtn=document.getElementById('addbtn');
    addbtn.addEventListener("click",function(e){
        let atxt=document.getElementById("name");
        let notes=localStorage.getItem("notes");
        if (notes==null){
            notesObj=[];
        }
        else{
            notesObj=JSON.parse(notes);
        }
        notesObj.push(atxt.value);
        localStorage.setItem("notes",JSON.stringify(notesObj));
        atxt.value="";
        console.log(notesObj);
        showNotes();
    });
}
    function showNotes(){
        console.log("yes");
        let notes=localStorage.getItem("notes");
        if (notes==null){
            notesObj=[];
        }
        else{
            notesObj=JSON.parse(notes);
        }
        let html="";
        notesObj.forEach(function(element,index){
            html+=`<div id="notes" class="row container-fluid">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Notes</h5>
                  <p class="card-text">${element}</p>
                  <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Notes</button>
                </div>
              </div>
        </div>`;
        });
        let notese=document.getElementById("notes");
        if(notesObj.length!=0){
            notese.innerHTML=html;
        }
        else{
            notese.innerHTML="Nothing";
        }

    }
    function deleteNode(index){
        let notes=localStorage.getItem("notes");
        if(notes==null){
            nobj=[];
        }
        else{
            nobj=JSON.parse(notes);
        }
        nobj.splice(index,1);
        localStorage.setItem("notes",JSON.stringify(nobj));
        showNotes();
    }
    window.onload-function(){
        let search=document.getElementById("Search");
        search.addEventListener("input",function(){
        let inputt=search.value;
        let el=document.getElementsByClassName("card-body");
        Array.from(el).forEach(function(element){
            let val=element.getElementsByTagName("p")[0].innerText;
            if(val.includes(search)){
                element.style.display="block";
            }
            else{
                element.style.display="none";                
            }
        });
    })}


