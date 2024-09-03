
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    let prevScrollpos = window.pageYOffset;

    const deleyed_attentions = document.getElementsByClassName('deleyed-attention');

    let prevScroll_direction = '';
    const scroll_direction_up = 'up';
    const scroll_direction_down = 'down';

    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        let scroll_direction = '';

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


    async function scrollToProjects(event){
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


    // selected feature -----------------------------------
    let featuresButtons = document.querySelectorAll('.features-group .btn');
    //
    let selectedFeatureBtn;
    {
        let prevIndex = params.fi ?? sessionStorage.getItem('selectedFeature');
        let selectedButtons = [];

        if (prevIndex > -1){
            selectedButtons = document.querySelectorAll(`.features-group [data-bs-slide-to='${prevIndex}']`);
        }

        if (selectedButtons.length == 0){
            selectedButtons = document.querySelectorAll(`.features-group [data-bs-slide-default]`);
        }

        selectedFeatureBtn = selectedButtons[0];
    }
    
    let docItems = document.getElementsByClassName('mv-docItem');
    const bsCarouselSignificantWorks = new bootstrap.Carousel('#carouselSignificantWorks');
    setSelectedFeature(selectedFeatureBtn);
    //
    featuresButtons.forEach(button => {
        button.addEventListener('click', function() {
            setSelectedFeature(this);
        });
    });

    function setSelectedFeature(button){
        featuresButtons.forEach(btn => {
            btn.classList.remove('active');
            if (!btn.classList.contains('link-underline-opacity-0 ')){
                btn.classList.add('link-underline-opacity-0');
            }
        });
        button.classList.add('active');
        button.classList.remove('link-underline-opacity-0');

        let selectedFeatureIndex = button.getAttribute('data-bs-slide-to');
        sessionStorage.setItem('selectedFeature', selectedFeatureIndex);
        //
        bsCarouselSignificantWorks.to(selectedFeatureIndex);
        highlithLabel(docItems, button.getAttribute('data-card-label'));
        setEqualHeight();
    }