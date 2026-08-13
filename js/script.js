/**
 * Shibam Singh Gouria - Portfolio Configuration & Logic
 * Built with Vanilla JavaScript
 */

/* ==========================================================================
   Configuration Object
   ========================================================================== */
   const PORTFOLIO_CONFIG = {
    personal: {
        name: "Shibam Singh Gouria",
        email: "shibam.gouria@example.com", // Replace with real email
        phone: "+91 000 000 0000",          // Replace with real phone
        resumePath: "assets/Shibam-Singh-Gouria-Resume.pdf"
    },
    socials: {
        instagram: "https://instagram.com/placeholder", // Replace
        linkedin: "https://linkedin.com/in/placeholder", // Replace
        telegram: "https://t.me/placeholder"             // Replace
    },
    travelDestinations: [
        {
            location: "Himachal Pradesh",
            desc: "Exploring the majestic mountains and serene valleys.",
            image: "assets/images/travel/travel-01.jpg"
        },
        {
            location: "Goa",
            desc: "Coastal adventures and sunset views.",
            image: "assets/images/travel/travel-02.jpg"
        },
        {
            location: "Kerala",
            desc: "Backwaters and rich cultural heritage.",
            image: "assets/images/travel/travel-03.jpg"
        }
    ],
    foodItems: [
        {
            location: "Local Delicacies",
            desc: "Exploring street food and authentic local dishes.",
            image: "assets/food/food-01.jpg"
        },
        {
            location: "Homemade Comfort",
            desc: "Trying out new recipes and homemade comfort food.",
            image: "assets/food/food-02.jpg"
        },
        {
            location: "Fine Dining",
            desc: "Experiencing unique culinary arts and desserts.",
            image: "assets/food/food-03.jpg"
        }
    ],
    gallery: [
        { src: "assets/images/football/football-01.jpg", category: "football", alt: "National Level Football" },
        { src: "assets/images/football/football-02.jpg", category: "football", alt: "Football Coaching" },
        { src: "assets/images/travel/travel-01.jpg", category: "travel", alt: "Travel Memories" },
        { src: "assets/images/dp.jpg", category: "professional", alt: "Professional Portrait" },
        { src: "assets/food/food-01.jpg", category: "food", alt: "Local Delicacies" },
        { src: "assets/food/food-02.jpg", category: "food", alt: "Homemade Comfort" },
        { src: "assets/food/food-03.jpg", category: "food", alt: "Fine Dining" },
        { src: "assets/images/lifestyle/IMG_20210206_212911-03.jpg", category: "lifestyle", alt: "Lifestyle Moment" },
        { src: "assets/images/lifestyle/IMG_20220624_105122_288.jpg", category: "lifestyle", alt: "Lifestyle Experience" },
        { src: "assets/images/lifestyle/IMG_8162.jpg", category: "lifestyle", alt: "Lifestyle Capture" },
        { src: "assets/images/football/WhatsApp Image 2026-08-13 at 4.56.18 PM.jpeg", category: "football", alt: "Football Moments" },
        { src: "assets/images/travel/WhatsApp Image 2026-08-13 at 4.50.24 PM.jpeg", category: "travel", alt: "Travel Adventures" }
    ]
};

/* ==========================================================================
   DOM Elements & Initialization
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    hydrateDOM();
    initPreloader();
    initCustomCursor();
    initScrollAnimations();
    initMobileMenu();
    initTravelSection();
    initFoodSection();
    initGallery();
    initNavbarScroll();
    initMagneticButtons();
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

/* ==========================================================================
   Hydrate DOM with Config
   ========================================================================== */
function hydrateDOM() {
    // Update Social Links
    const ig = document.getElementById('social-ig');
    const li = document.getElementById('social-li');
    const tg = document.getElementById('social-tg');
    if(ig) ig.href = PORTFOLIO_CONFIG.socials.instagram;
    if(li) li.href = PORTFOLIO_CONFIG.socials.linkedin;
    if(tg) tg.href = PORTFOLIO_CONFIG.socials.telegram;

    // Footer Socials
    const footerSocials = document.querySelector('.footer-socials');
    if (footerSocials) {
        footerSocials.innerHTML = `
            <a href="${PORTFOLIO_CONFIG.socials.instagram}" class="social-icon" target="_blank" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="${PORTFOLIO_CONFIG.socials.linkedin}" class="social-icon" target="_blank" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
        `;
    }

    // Contact Info
    const emailLink = document.getElementById('contact-email');
    const phoneLink = document.getElementById('contact-phone');
    if (emailLink) {
        emailLink.href = `mailto:${PORTFOLIO_CONFIG.personal.email}`;
        emailLink.textContent = PORTFOLIO_CONFIG.personal.email;
    }
    if (phoneLink) {
        phoneLink.href = `tel:${PORTFOLIO_CONFIG.personal.phone.replace(/\s+/g, '')}`;
        phoneLink.textContent = PORTFOLIO_CONFIG.personal.phone;
    }
}

/* ==========================================================================
   Preloader Logic
   ========================================================================== */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    // Fallback: max 3 seconds for preloader
    const fallbackTimer = setTimeout(() => {
        removePreloader();
    }, 3000);

    window.addEventListener('load', () => {
        clearTimeout(fallbackTimer);
        setTimeout(removePreloader, 500); // Small delay for smooth effect
    });

    function removePreloader() {
        if(!preloader) return;
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        
        // Trigger hero animations
        setTimeout(() => {
            document.querySelector('.reveal-text').classList.add('loaded');
            
            const fadeUps = document.querySelectorAll('.hero-actions, .hero-socials');
            fadeUps.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('loaded');
                }, index * 200);
            });
        }, 300);
    }
}

/* ==========================================================================
   Custom Cursor Logic
   ========================================================================== */
function initCustomCursor() {
    const cursor = document.querySelector('.cursor-glow');
    if (!cursor) return;
    
    // Check if user prefers reduced motion or is on mobile
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 768) {
        cursor.style.display = 'none';
        return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Easing factor for smooth follow
        const speed = 0.15;
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;

        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        requestAnimationFrame(animateCursor);
    }

    requestAnimationFrame(animateCursor);
}

/* ==========================================================================
   Scroll Animations (Intersection Observer)
   ========================================================================== */
function initScrollAnimations() {
    // Determine if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        document.querySelectorAll('.scroll-reveal, .scroll-reveal-up, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-stagger').forEach(el => {
            el.classList.add('is-revealed');
            el.style.transition = 'none';
        });
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -15% 0px', // Trigger slightly before it comes into view
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                
                // If it's a staggered container, reveal its children
                if (entry.target.classList.contains('scroll-reveal-stagger')) {
                    const children = Array.from(entry.target.children);
                    children.forEach((child, index) => {
                        child.style.opacity = '0';
                        child.style.transform = 'translateY(20px)';
                        child.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`;
                        
                        // Force reflow
                        void child.offsetWidth;
                        
                        requestAnimationFrame(() => {
                            child.style.opacity = '1';
                            child.style.transform = 'translateY(0)';
                        });
                    });
                }
                
                // Unobserve after revealing
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-up, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-stagger');
    revealElements.forEach(el => observer.observe(el));
    
    // Parallax effect for football section background
    const footballSection = document.getElementById('football');
    const footballBg = document.querySelector('.football-bg');
    
    if (footballSection && footballBg) {
        window.addEventListener('scroll', () => {
            const rect = footballSection.getBoundingClientRect();
            // If section is in viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                footballBg.style.transform = `translateY(${scrollPercent * 50}px)`;
            }
        }, { passive: true });
    }
}

/* ==========================================================================
   Mobile Navigation
   ========================================================================== */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const body = document.body;

    if (!menuBtn || !overlay) return;

    function toggleMenu() {
        menuBtn.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Prevent background scrolling when menu is open
        if (overlay.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }

    menuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });
}

/* ==========================================================================
   Navbar Scroll Effect & Active States
   ========================================================================== */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Navbar background
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active section indicator
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }, { passive: true });
}

/* ==========================================================================
   Travel Section Setup
   ========================================================================== */
function initTravelSection() {
    const grid = document.getElementById('travel-grid');
    if (!grid) return;

    let html = '';
    PORTFOLIO_CONFIG.travelDestinations.forEach((dest, index) => {
        const delayClass = index > 0 ? `delay-${index}` : '';
        html += `
            <div class="travel-card scroll-reveal-up ${delayClass}">
                <img src="${dest.image}" alt="${dest.location}" class="travel-img" onerror="this.src='https://via.placeholder.com/600x800/1e293b/3b82f6?text=${encodeURIComponent(dest.location)}'">
                <div class="travel-overlay">
                    <h3 class="travel-location">${dest.location}</h3>
                    <p class="travel-desc">${dest.desc}</p>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

/* ==========================================================================
   Food Section Setup
   ========================================================================== */
function initFoodSection() {
    const grid = document.getElementById('food-grid');
    if (!grid) return;

    let html = '';
    PORTFOLIO_CONFIG.foodItems.forEach((dest, index) => {
        const delayClass = index > 0 ? `delay-${index}` : '';
        html += `
            <div class="travel-card scroll-reveal-up ${delayClass}">
                <img src="${dest.image}" alt="${dest.location}" class="travel-img" onerror="this.src='https://via.placeholder.com/600x800/1e293b/3b82f6?text=${encodeURIComponent(dest.location)}'">
                <div class="travel-overlay">
                    <h3 class="travel-location">${dest.location}</h3>
                    <p class="travel-desc">${dest.desc}</p>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

/* ==========================================================================
   Gallery & Lightbox
   ========================================================================== */
function initGallery() {
    const galleryContainer = document.getElementById('masonry-gallery');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxNext = document.querySelector('.lightbox-next');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    
    if (!galleryContainer) return;

    let currentImages = [...PORTFOLIO_CONFIG.gallery];
    let currentImageIndex = 0;

    // Render Images
    function renderGallery(filter = 'all') {
        galleryContainer.innerHTML = '';
        currentImages = filter === 'all' 
            ? [...PORTFOLIO_CONFIG.gallery] 
            : PORTFOLIO_CONFIG.gallery.filter(img => img.category === filter);

        currentImages.forEach((img, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            // Simple fade in animation for generated items
            item.style.animation = `fadeUp 0.5s ease ${index * 0.1}s forwards`;
            item.style.opacity = '0';
            
            item.innerHTML = `
                <img src="${img.src}" alt="${img.alt}" loading="lazy" onerror="this.src='https://via.placeholder.com/600x600/1e293b/4F46E5?text=Gallery+Image'">
                <div class="gallery-overlay">
                    <svg class="gallery-icon" viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" stroke-width="2" fill="none"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                </div>
            `;
            
            item.addEventListener('click', () => openLightbox(index));
            galleryContainer.appendChild(item);
        });
    }

    // Initial render
    renderGallery();

    // Filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            e.target.classList.add('active');
            // Render
            renderGallery(e.target.getAttribute('data-filter'));
        });
    });

    // Lightbox Functions
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLightboxImage() {
        const img = currentImages[currentImageIndex];
        lightboxImg.src = img.src;
        // Handle broken image in lightbox as well
        lightboxImg.onerror = function() {
            this.src = `https://via.placeholder.com/1200x800/1e293b/4F46E5?text=Gallery+Image`;
        };
        lightboxCaption.textContent = img.alt;
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
        updateLightboxImage();
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
        updateLightboxImage();
    }

    // Event Listeners for Lightbox
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
    if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
    
    // Close on background click
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });
}

/* ==========================================================================
   Magnetic Buttons Effect
   ========================================================================== */
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.magnetic-btn');
    
    // Disable on mobile devices
    if (window.innerWidth < 768) return;

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const position = btn.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;
            
            // Move button slightly towards mouse
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseout', function() {
            // Reset to original position
            btn.style.transform = 'translate(0px, 0px)';
        });
    });
}
