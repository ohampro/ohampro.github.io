// Add dialog to images
function onThumbnailBookClick (){
    let imgEl = document.getElementById('thumbnailBookDialogImg');
    imgEl.src = event.target.src;

    let parent = event.target.parentElement;

    let srcTitle = parent.getElementsByTagName('figcaption').first ?? 
        parent.getElementsByClassName('title').first ?? parent;

    let titleEl = document.getElementById('thumbnailBookDialogTitle');
    titleEl.textContent = srcTitle.innerText;
}

function setupImage(img){
    img.style.cursor = 'pointer';
    img.setAttribute('data-bs-toggle', "modal");
    img.setAttribute('data-bs-target', "#thumbnailBookDialog");
    img.onclick = onThumbnailBookClick;
}

const imgList = document.querySelectorAll('img');
const imgs = [...imgList].map(imgEl => {
    if (!imgEl.hasAttribute('modalOff')){
        setupImage(imgEl);
    }
});