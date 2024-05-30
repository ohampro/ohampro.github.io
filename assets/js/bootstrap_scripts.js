
// Enable tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

const navLinkList = document.querySelectorAll('.nav-link');
const navLinks = [...navLinkList].map(linkEl => {
    let path = document.location.pathname.replaceAll('/','');
    let href = linkEl.href.split('/').pop();
    if (href == path){
        linkEl.classList.add('active');
    }
});

    // const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    // const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));