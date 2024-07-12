$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: true,
        transitionStyle: "backSlide",
        autoPlay: true
    });
});

$(document).ready(function () {
    $("#client-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: true,
        transitionStyle: "backSlide",
        autoPlay: true
    });
});

// $(document).ready(function(){
//     $("#myModal").modal('show');
// });

$(document).ready(function () {
    $('#myModal').modal({
        backdrop: 'static',
        keyboard: false
    });
    
    if(!Cookies.get('hide-div') || Cookies.get('hide-div')=='true'){
        $('#myModal').modal('show');
    }
    
    $('#agreeBtn').click(function () {
        Cookies.set('hide-div', false, { expires: 365 });
        $('#myModal').modal('hide');
    });

    if(!Cookies.get('hide-div')){
        setTimeout(function() {
        $('#myModal').modal();
        }, 15000);
    }

    $('#disagreeBtn').click(function () {
        Cookies.set('hide-div', true, { expires: 365 });
        history.back();
    });

    $('#myModal').on('click', function (e) {
        if (e.target.id === 'myModal') {
            e.stopPropagation();
        }
    });
});

// $(document).ready(function(){
//     $("#myModal").modal('show');
//     $('#myModal').modal({
//         backdrop: 'static',
//         keyboard: false
//     });
    

//     if(!Cookies.get('hide-div')){
//       setTimeout(function() {
//         $('#myModal').modal();
//       }, 15000);
//     }
  
//     $("#disagreeBtn").click(function () {
//         Cookies.set('hide-div', true, { expires: 365 });
//     });
//   });

function openPdf(pdfUrl) {
    window.open(pdfUrl);
}

let section_counter = document.querySelector('#section_counter');
let counters = document.querySelectorAll('.counter-item .counter');

let CounterObserver = new IntersectionObserver(
    (entries, observer) => {
        let [entry] = entries;
        if (!entry.isIntersecting) return;

        let speed = 200;
        counters.forEach((counter, index) => {
            function UpdateCounter() {
                const targetNumber = +counter.dataset.target;
                const initialNumber = +counter.innerText;
                const incPerCount = targetNumber / speed;
                if (initialNumber < targetNumber) {
                    counter.innerText = Math.ceil(initialNumber + incPerCount);
                    setTimeout(UpdateCounter, 40);
                }
                else {
                    counter.innerText = targetNumber;
                }
            }
            UpdateCounter();

            if (counter.parentElement.style.animation) {
                counter.parentElement.style.animation = '';
            } else {
                counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${index / counters.length + 0.5
                    }s`;
            }
        });
        observer.unobserve(section_counter);
    },
    {
        root: null,
        threshold: window.innerWidth > 768 ? 0.4 : 0.3,
    }
);

CounterObserver.observe(section_counter);
