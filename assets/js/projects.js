const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let docItems = document.getElementsByClassName('mv-docItem');
let foundItems = 0;

topMsg.classList.add('text-success');
if (params.with == undefined || params.with.length == 0){
    showAllItems();

}else{
    
    foundItems = highlithLabel(docItems, params.with);

    let topMsg = document.getElementById('topMsg');
    if (foundItems > 0){
        topMsg.innerHTML = `(${foundItems} of ${docItems.length}) Projects Utilizing '${params.with}'`;
    }else{
        topMsg.classList.remove('text-success');
        topMsg.classList.add('text-danger');

        foundItems = highlithLabel(docItems, "-Default");
        if (foundItems > 0){
            topMsg.innerHTML = `Projects possibly utilizing '${params.with}'`;
        }else{
            topMsg.innerHTML = "Not Found!";
        }        
    }
    topMsg.classList.remove('d-none');

}

window.onCardLabelClick = function(){
    if (params.with == event.target.innerText){
        window.location.href = document.getElementById('showAllItemsLink').href;
        event.preventDefault();
    }
};

function showAllItems(){
    document.getElementById('showAllItems').classList.add('d-none');

    for (let item of docItems){
        item.classList.remove('d-none');
        foundItems++;
    }

    let topMsg = document.getElementById('topMsg');
    topMsg.innerHTML = `All Projects (${foundItems} items)`;
    topMsg.classList.remove('d-none');
}