    // 1. Custom Cursor Movement
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
        if(cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });

    // 2. Scroll Navigation effect
    window.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 20) {
            navbar.classList.add('bg-[#0b132b]/90', 'backdrop-blur-md', 'shadow-lg', 'border-white/10', 'py-3');
            navbar.classList.remove('border-white/0', 'py-4');
        } else {
            navbar.classList.remove('bg-[#0b132b]/90', 'backdrop-blur-md', 'shadow-lg', 'border-white/10', 'py-3');
            navbar.classList.add('border-white/0', 'py-4');
        }
    });

    // 3. Hero Background Image Slideshow logic
    const backgroundImages = [
        'your-background-hero.jpeg',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80'
    ];

    // Preload images immediately
    backgroundImages.forEach((image) => {
        const img = new Image();
        img.src = image;
    });

    let currentImageIndex = 0;
    const slideshowBg = document.getElementById('slideshow-bg');

    function changeBackgroundImage() {
        if(slideshowBg) {
            slideshowBg.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
            currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        }
    }

    // Initialize Hero slideshow
    changeBackgroundImage();
    setInterval(changeBackgroundImage, 10000);
    // Initialize Swiper for the History Section
    // Initialize Swiper for the History Section ONCE
    const historySwiper = new Swiper('.historySwiper', {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: { // Added for front/back arrows
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
});
