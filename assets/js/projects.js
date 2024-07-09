const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let docItems = document.getElementsByClassName('mv-docItem');
let foundItems = 0;

topMsg.classList.add('text-success');
if (params.with == undefined || params.with.length == 0){
    showAllItems();

}else{
    let xButton = `<i class="bi bi-x p-0 d-inline pe-none"></i>`;

    foundItems = highlithLabel(docItems, params.with, xButton);

    let topMsg = document.getElementById('topMsg');
    if (foundItems > 0){
        let nextWord = `Utilizing '${params.with}'`;
        if (params.with.startsWith('-ready')){
            nextWord = `have details`;
        }

        topMsg.innerHTML = `(${foundItems} of ${docItems.length}) Projects ${nextWord}`;
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

window.onCardLabelClick = function(event){
    if (params.with == event.target.getAttribute('data-card-label')){
        event.preventDefault();
        window.location.href = document.getElementById('showAllItemsLink').href;
    }
};

[...document.querySelectorAll('[labelOnclick]')].map(el => el.addEventListener('click', window.onCardLabelClick));

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