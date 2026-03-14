document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        // Change icon between bars and times (close)
        const icon = navToggle.querySelector('i');
        if (navList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Header scroll background effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(5, 5, 5, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        } else {
            header.style.backgroundColor = 'rgba(5, 5, 5, 0.9)';
            header.style.boxShadow = 'none';
        }
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavSelection() {
        const scrollY = window.scrollY;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavSelection);

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Optional: Stop observing once animated to keep it shown
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });
});
