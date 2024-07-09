    function setEqualHeight() {
        const cards = document.querySelectorAll('.card-equal-height');
        let maxHeight = 0;
        // Reset height to auto to recalculate heights
        cards.forEach(card => {
            card.style.height = 'auto';
        });
        // Find the maximum height
        cards.forEach(card => {
            if (card.offsetHeight > maxHeight) {
                maxHeight = card.offsetHeight;
            }
        });
        // Set all cards to the maximum height
        cards.forEach(card => {
            card.style.height = maxHeight + 'px';
        });
    }

    window.onload = setEqualHeight;
    window.onresize = setEqualHeight

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function displayMoreItems(event){
        let btnLink = event.target;

        let targetItem = btnLink.dataset.targetItem;
        let targetItemEl = document.getElementById(targetItem);
        let inVisibleItems = targetItemEl.getElementsByClassName('inVisibleItem');

        if (inVisibleItems.length > 0){
            let firstItem = inVisibleItems[0];
            displayDocsItem(firstItem);

            sessionStorage.setItem(firstItem.id, 'visibleItem');
        }

        if (inVisibleItems.length == 0){
            hideBtnLink(btnLink);

            sessionStorage.setItem(btnLink.id, 'btnLink');
        }

        return false;
    }

    [...document.querySelectorAll('[displayMoreOnclick]')].map(el => el.addEventListener('click', window.displayMoreItems));

    function displayDocsItem(item){
        item.classList.remove("d-none");
        item.classList.remove("inVisibleItem");
        item.classList.remove("visibleItem");
        item.classList.add("visibleItem");
    }

    function hideBtnLink(btnLink){
        btnLink.classList.remove('d-none');
        btnLink.classList.add('d-none');
    }


    

    // load data: it a simple case,s o yet to make a page state though.
    for (let i = 0; i < sessionStorage.length; i++){
        let key = sessionStorage.key(i);
        let value = sessionStorage.getItem(key);
        //

        if (value == 'visibleItem'){
            let item = document.getElementById(key);
            if (item) {
                displayDocsItem(item);
            }

        }else if (value == 'btnLink'){
            let item = document.getElementById(key);
            if (item) {
                hideBtnLink(item);
            }

        }else{
            
        }
    }

    if (window.onCardLabelClick == undefined){
        window.onCardLabelClick = function(){};
    } 

    function highlithLabel(docItems, label, xButton = undefined){
        let foundItems = 0;

        for (let item of docItems){
            let dataLabels = item.querySelectorAll('[data-labels]');
            const aElements = item.querySelectorAll('a[href]:not(:empty):not(:has(*))');

            if (dataLabels.length > 0){
                let itemLabels = dataLabels[0].getAttribute('data-labels');
                
                Array.from(aElements).filter(a => a.classList.contains(labelsActiveColor)).map((el) => {
                    el.classList.add(labelsDefaultColor);
                    el.classList.remove(labelsActiveColor);
                });

                if (itemLabels.split(', ').indexOf(label) > -1){
                    item.classList.remove('d-none');
                    foundItems++;
                    //

                    const filteredElements = Array.from(aElements).filter(a => a.textContent.trim() === label);
                    filteredElements.map((el) => {
                        el.classList.remove(labelsDefaultColor);
                        el.classList.add(labelsActiveColor);
                        //
                        if (xButton){
                            el.innerHTML += xButton;
                        }
                    });
                }
            }
        }

        return foundItems;
    }