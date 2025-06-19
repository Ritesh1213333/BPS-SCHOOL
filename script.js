// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// Mouse movement parallax effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Parallax effect for hero content
    gsap.to('.hero-content', {
        x: (mouseX - window.innerWidth / 2) * 0.02,
        y: (mouseY - window.innerHeight / 2) * 0.02,
        duration: 0.5,
        ease: 'power2.out'
    });

    // Parallax effect for program cards
    gsap.utils.toArray('.program-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;
        
        gsap.to(card, {
            x: (mouseX - cardX) * 0.03,
            y: (mouseY - cardY) * 0.03,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// Navbar entrance animation on page load
gsap.from('.navbar', {
    y: -100, // Start from 100px above its final position
    opacity: 0, // Start fully transparent
    duration: 1, // Animation duration
    ease: 'power3.out', // Easing function
    delay: 0.2 // A small delay after page load
});

// Enhanced Hero Section Animations
gsap.from('.hero-content h1', {
    opacity: 0,
    y: 50,
    duration: 1.2,
    delay: 0.5,
    ease: 'power3.out'
});

gsap.from('.hero-content p', {
    opacity: 0,
    y: 30,
    duration: 1.2,
    delay: 0.8,
    ease: 'power3.out'
});

gsap.to('.cta-button', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    delay: 1.1,
    ease: 'power3.out'
});

// Enhanced Scroll Animations
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    });
});

// Enhanced Stats Counter Animation
const stats = document.querySelectorAll('.stat-item h3');
stats.forEach(stat => {
    const target = parseInt(stat.textContent);
    gsap.from(stat, {
        scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        textContent: 0,
        duration: 2,
        snap: { textContent: 1 },
        ease: 'power2.inOut',
        stagger: 0.2
    });
});

// Enhanced Program Cards Animation with hover effect
gsap.utils.toArray('.program-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2,
        ease: 'power2.out'
    });

    // Hover animation
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Enhanced Facility Cards Animation
gsap.utils.toArray('.facility-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2,
        ease: 'power2.out'
    });

    // Hover animation
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Enhanced Gallery Items Animation
gsap.utils.toArray('.gallery-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power2.out'
    });

    // Hover animation
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Navbar hover animations
gsap.utils.toArray('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            y: -3,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Smooth Scroll for Navigation Links with enhanced animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 0.4,
                scrollTo: {
                    y: target,
                    offsetY: 70
                },
                ease: 'power3.inOut'
            });
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Add your form submission logic here
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Show success message
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        contactForm.reset();
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }, 1500);
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const body = document.body;
    const html = document.documentElement;
    const documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const footerHeight = document.querySelector('.footer').offsetHeight; // Get footer height

    // Define a threshold from the bottom of the page
    const scrollThreshold = 100 + footerHeight; // Adjust 100px as needed, plus footer height

    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        navbar.classList.remove('scroll-down'); // Ensure it's fully visible at the top
        return;
    }

    // Prevent scroll-down when near the bottom of the page
    if (currentScroll + window.innerHeight >= documentHeight - scrollThreshold) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up'); // Ensure it's up when near bottom
        lastScroll = currentScroll; // Update lastScroll to prevent immediate re-trigger
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scrolling Down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scrolling Up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Loader Animation and Hiding Logic
const loader = document.querySelector('.loader-wrapper');
const loaderLogo = document.querySelector('.loader-logo');

if (loader && loaderLogo) {
    // Initial animation for the loader logo
    gsap.to(loaderLogo, {
        scale: 1.2, 
        opacity: 0.8, 
        duration: 1.5, 
        ease: "power1.inOut", 
        repeat: -1, 
        yoyo: true
    });

    // Hide loader once the page is fully loaded
    window.addEventListener('load', () => {
        gsap.to(loader, {
            opacity: 0, 
            duration: 0.7, 
            ease: "power2.out", 
            onComplete: () => {
                loader.classList.add('hidden');
            }
        });
    });
}

// Highlight active navigation link on scroll
gsap.utils.toArray('section').forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onToggle: self => {
            if (self.isActive) {
                const id = section.getAttribute('id');
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        }
    });
});

// Swiper Initialization and Text Change Logic
document.addEventListener('DOMContentLoaded', function() {
    const heroHeading = document.getElementById('hero-heading');
    const heroSubheading = document.getElementById('hero-subheading');

    const swiper = new Swiper('.swiper-container', {
        loop: true,
        effect: 'fade',
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function() {
                const initialSlide = this.slides[this.activeIndex];
                if (heroHeading && heroSubheading && initialSlide) {
                    heroHeading.textContent = initialSlide.getAttribute('data-heading');
                    heroSubheading.textContent = initialSlide.getAttribute('data-subheading');
                }
            },
            slideChange: function () {
                const activeSlide = this.slides[this.activeIndex];
                if (heroHeading && heroSubheading && activeSlide) {
                    const newHeading = activeSlide.getAttribute('data-heading');
                    const newSubheading = activeSlide.getAttribute('data-subheading');

                    // Animate text out
                    gsap.to([heroHeading, heroSubheading], { 
                        opacity: 0, 
                        y: -20, 
                        duration: 0.3, 
                        onComplete: () => {
                            // Update text
                            heroHeading.textContent = newHeading;
                            heroSubheading.textContent = newSubheading;

                            // Animate text in
                            gsap.to([heroHeading, heroSubheading], { 
                                opacity: 1, 
                                y: 0, 
                                duration: 0.5, 
                                ease: "power2.out" 
                            });
                        }
                    });
                }
            },
        },
    });
});