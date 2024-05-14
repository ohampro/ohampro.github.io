// Parallax Effect Javascript:

    const parallaxList = document.querySelectorAll('.parallax');
    const parallaxMap = [...parallaxList].map(parallaxEl => {
        parallaxEl.style.backgroundImage = 'url(' + parallaxEl.getAttribute("data-prlx-bg") + ')';
        parallaxEl.style.minHeight = (parallaxEl.getAttribute("data-prlx-min-h") ?? '100') + 'vh';
    })

