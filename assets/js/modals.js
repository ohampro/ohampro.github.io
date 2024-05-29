// Add dialog to images
function onThumbnailBookClick (){
    let imgEl = document.getElementById('thumbnailBookDialogImg');
    imgEl.src = event.target.src;

    let parent = event.target.parentElement;

    let figcaptions = parent.getElementsByTagName('figcaption');
    let srcTitle = parent;
    if (figcaptions.length > 0){
        srcTitle = figcaptions[0];
    }else{
        let titles = parent.getElementsByClassName('title');
        if (titles.length > 0){
            srcTitle = titles[0];
        }
    }

    let titleEl = document.getElementById('thumbnailBookDialogTitle');
    titleEl.textContent = srcTitle.innerText ?? srcTitle.textContent;
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