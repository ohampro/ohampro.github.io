
    var prevScrollpos = window.pageYOffset;

    var deleyed_attentions = document.getElementsByClassName('deleyed-attention');

    var prevScroll_direction = '';
    const scroll_direction_up = 'up';
    const scroll_direction_down = 'down';

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        var scroll_direction = '';

        if (prevScrollpos > currentScrollPos) {
            scroll_direction = scroll_direction_up;
        } else {
            scroll_direction = scroll_direction_down;
        }

        let navbar = document.getElementsByClassName("navbar")[0];

        //
        if (currentScrollPos == 0){
            document.getElementById("brand-subtitle").className = "d-none";
            navbar.classList.remove('shadow-sm');

            Array.prototype.forEach.call(deleyed_attentions, (element)=>{
                element.classList.add("content-blur");
            });
        }

        //
        //if (scroll_direction != prevScroll_direction){
            prevScroll_direction = scroll_direction;

            if (scroll_direction == scroll_direction_up) {
                //document.getElementById("navbar").style.top = "0";

            } else {        
                //document.getElementById("navbar").style.top = "-50px";
                document.getElementById("brand-subtitle").className = "show-brand-subtitle";
                navbar.classList.add('shadow-sm');

                for (element of deleyed_attentions){
                    element.classList.remove("content-blur");
                };
            }
        //}

        prevScrollpos = currentScrollPos;
    }


    

    function displayMoreItems(){
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
            displayDocsItem(document.getElementById(key));

        }else if (value == 'btnLink'){
            hideBtnLink(document.getElementById(key));

        }else{
            
        }
    }


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

    async function scrollToProjects(){
        const portfolio_list = document.getElementById('portfolio_list');
        if (portfolio_list.classList.contains('show')){
            return;
        }
        //
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        await delay(400);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }