// If user adds a item
showItems();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(e){

    let addTxt = document.getElementById('addTxt');
    let items = localStorage.getItem('items');
    if (items==null){
        itemsObj = [];
    }
    else{
        itemsObj = JSON.parse(items)
    }
    itemsObj.push(addTxt.value)
    localStorage.setItem('items', JSON.stringify(itemsObj))
    addTxt.value = "";
    showItems();
})

// function to show itmes
function showItems() {
    let items = localStorage.getItem('items');
    if (items==null){
        itemsObj = [];
    }
    else{
        itemsObj = JSON.parse(items)
    }
    let html = "";
    itemsObj.forEach(function(element, index){
        html += `
        <div class="noteCard ncard">
            <div class="card-body">
                <h3 class="card-title">Item ${index+1}</h3>
                <p class="card-text" style="font-size: 20px; word-wrap: break-word;">${element}</p>
                <span>
                    <button id=${index} class="btn" onclick="deleteNote(this.id)">Delete Item</button>
                </span>
            </div>
        </div>
        `
    });

    let itemsElm = document.getElementById('items');
    if(itemsObj.length!==0){
        itemsElm.innerHTML = html;
    }
    else{
        itemsElm.innerHTML = "Nothing to show! Use above section to add items."
    }
}


// function to delete a item 
function deleteNote(index){
    let items = localStorage.getItem('items');
    if (items==null){
        itemsObj = [];
    }
    else{
        itemsObj = JSON.parse(items)
    }
    itemsObj.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(itemsObj))
    showItems();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
    let inputVal = search.value.toLowerCase()
    console.log("event fire", inputVal)
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block"
        }
        else{
            element.style.display = "none"
        }
    })

})
