var thumbnailBookDialogMatchingImages = [];
var thumbnailBookDialogIndex = 0;

// Add dialog to images
function onThumbnailBookClick (event){
    let imgEl = document.getElementById('thumbnailBookDialogImg');
    let src = event.target.getAttribute('src');
    imgEl.src = src;

    // apply size:
    imgEl.className = 'w-100'; // default
    let modalClass = event.target.getAttribute('data-modal-class');
    if (modalClass){
        imgEl.className = modalClass;
    }

    // set title:
    setThumbnailBookDialogTitleBy(event.target);
    
    // find gallery:
    let parentPath = src.substring(0, src.lastIndexOf('/'));

    let gallery = event.target.closest('.gallery');
    const images = gallery ? gallery.querySelectorAll('img') : [];
    thumbnailBookDialogMatchingImages = [];

    let index = 0;
    let i = 0;

    for (let img of images){
        if (img.hasAttribute('modalOff')){
            continue;
        }

        const imgSrc = img.getAttribute('src');
        if (imgSrc.startsWith(parentPath)) {
            if (imgSrc === src){
                index = i;
            }

            thumbnailBookDialogMatchingImages.push(img);
            i++;
        }
    }

    if (thumbnailBookDialogMatchingImages.length > 1){
        document.getElementById('btnThumbnailBookDialogPrev').classList.remove('d-none');
        document.getElementById('btnThumbnailBookDialogNext').classList.remove('d-none');
    }else{
        document.getElementById('btnThumbnailBookDialogPrev').classList.add('d-none');
        document.getElementById('btnThumbnailBookDialogNext').classList.add('d-none');
    }
}

function setThumbnailBookDialogTitleBy(img){
    let titleEl = document.getElementById('thumbnailBookDialogTitle');
    titleEl.textContent = '';

    if (img.hasAttribute('noTitle')){
        return;
    }

    let parent = img.parentElement ?? img;

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

    titleEl.textContent = srcTitle.innerText ?? srcTitle.textContent;
}

function setupImage(img){
    img.style.cursor = 'pointer';
    img.setAttribute('data-bs-toggle', "modal");
    img.setAttribute('data-bs-target', "#thumbnailBookDialog");
    img.addEventListener('click', onThumbnailBookClick);
}

const imgList = document.querySelectorAll('img');
const imgs = [...imgList].map(imgEl => {
    if (!imgEl.hasAttribute('modalOff')){
        setupImage(imgEl);
    }
});

function toggleFullscreen(){
    let modal = document.getElementById('thumbnailBookDialog');
    modal.firstElementChild.classList.toggle('modal-fullscreen');
}

function thumbnailBookDialogPrev(){
    let imgEl = document.getElementById('thumbnailBookDialogImg');

    thumbnailBookDialogIndex = Math.max(thumbnailBookDialogIndex-1, 0);
    let img = thumbnailBookDialogMatchingImages[thumbnailBookDialogIndex];
    setThumbnailBookDialogTitleBy(img);
    imgEl.src = img.getAttribute('src');
}

function thumbnailBookDialogNext(){
    let imgEl = document.getElementById('thumbnailBookDialogImg');

    thumbnailBookDialogIndex = Math.min(thumbnailBookDialogIndex+1, thumbnailBookDialogMatchingImages.length-1);
    let img = thumbnailBookDialogMatchingImages[thumbnailBookDialogIndex];
    setThumbnailBookDialogTitleBy(img);
    imgEl.src = img.getAttribute('src');
}