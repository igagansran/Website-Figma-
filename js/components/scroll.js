// Scroll-triggered image animations
gsap.to('.hero-image', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    },
    y: 100,
    scale: 0.8,
    opacity: 0.5,
});

// Rotate image on scroll
gsap.to('.hero-image img', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    },
    rotation: 10,
});

// Section animations
const sections = ['projects', 'resume', 'contact'];
sections.forEach(section => {
    gsap.to(`#${section} .section-title`, {
        scrollTrigger: {
            trigger: `#${section}`,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power4.out'
    });
});

// Content animations
gsap.to('.projects-grid', {
    scrollTrigger: {
        trigger: '#projects',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    opacity: 1,
    stagger: 0.2,
    ease: 'power4.out'
});

gsap.to('.resume-content', {
    scrollTrigger: {
        trigger: '#resume',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    opacity: 1,
    ease: 'power4.out'
});

gsap.to('.contact-content', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    opacity: 1,
    ease: 'power4.out'
});