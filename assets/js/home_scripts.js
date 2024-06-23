
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


    var featuresButtons = document.querySelectorAll('.features-group .btn');
    //
    let selectedFeature = sessionStorage.getItem('selectedFeature');
    let selectedButtons = [];

    if (selectedFeature > -1){
        selectedButtons = document.querySelectorAll(`.features-group [data-bs-slide-to='${selectedFeature}']`);
    }
    if (selectedButtons.length == 0){
        selectedFeature = 1;
        selectedButtons = document.querySelectorAll(`.features-group [data-bs-slide-to='${selectedFeature}']`);
    }
    
    let docItems = document.getElementsByClassName('mv-docItem');
    {
        selectedButtons[0].classList.add('active');
        selectedButtons[0].classList.remove('link-underline-opacity-0');
        const bsCarouselSignificantWorks = new bootstrap.Carousel('#carouselSignificantWorks');
        bsCarouselSignificantWorks.to(selectedFeature);
        highlithLabel(docItems, selectedButtons[0].getAttribute('data-card-label'));
    }
    //
    featuresButtons.forEach(button => {
        button.addEventListener('click', function() {
            featuresButtons.forEach(btn => {
                btn.classList.remove('active');
                if (!btn.classList.contains('link-underline-opacity-0 ')){
                    btn.classList.add('link-underline-opacity-0');
                }
            });
            this.classList.add('active');
            this.classList.remove('link-underline-opacity-0');
            sessionStorage.setItem('selectedFeature', this.getAttribute('data-bs-slide-to'));
            //
            highlithLabel(docItems, this.getAttribute('data-card-label'));
        });
    });