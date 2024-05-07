document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMedium = document.getElementById('navMedium');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicator = document.getElementById('indicator');
    let currentSlide = 0;
    let slides = [];

  
    
        hamburger.addEventListener('click', function() {
            navMedium.classList.toggle('show');
        });


    function initialize() {
        slides = document.querySelectorAll('#carousel img');
        showSlide(currentSlide);
        generateIndicators();
        updateIndicator();
    }

    // Toggle mobile navigation menu
    hamburger.addEventListener('click', function() {
        navMedium.classList.toggle('show');
    });

    // Carousel functionality
    function showSlide(index) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[index].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        updateIndicator();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        updateIndicator();
    }

    function updateIndicator() {
        const indicators = Array.from(indicator.children);
        indicators.forEach((indicator, index) => {
            indicator.style.backgroundColor = index === currentSlide ? 'gray' : 'red';
        });
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Generate indicators
    function generateIndicators() {
        indicator.innerHTML = '';
        for (let i = 0; i < slides.length; i++) {
            const indicatorItem = document.createElement('span');
            indicatorItem.addEventListener('click', function() {
                currentSlide = i;
                showSlide(currentSlide);
                updateIndicator();
            });
            indicator.appendChild(indicatorItem);
        }
    }

    // Automatic slide change
    setInterval(function() {
        nextSlide();
    }, 5000); 

    // Initialize after DOM is fully loaded
    initialize();
});
