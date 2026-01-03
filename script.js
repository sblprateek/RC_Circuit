// Initialize animations and interactions
document.addEventListener('DOMContentLoaded', function () {

    // Smooth scroll animation for all links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add hover effect animations to module cards
    const moduleCards = document.querySelectorAll('.module-card');

    moduleCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add ripple effect to module buttons
    const moduleButtons = document.querySelectorAll('.module-btn');

    moduleButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Animate team member cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe team member cards
    const memberCards = document.querySelectorAll('.member-card');
    memberCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe module cards
    moduleCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = `all 0.8s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    // Create PCB-themed background effects
    createSolderPoints();
    createCopperTraces();
    createResistorSymbols();
    createCapacitorSymbols();
    createICChips();

    // Add styles for animations
    addAnimationStyles();

    // Console greeting
    console.log('%c⚡ Circuit Crafters - Team 12 ⚡',
        'background: linear-gradient(135deg, #d4af37 0%, #4caf50 100%); color: #1a2f1a; font-size: 20px; padding: 10px; border-radius: 5px; font-weight: bold;');
    console.log('%c🔌 RC Circuit Analysis Using Laplace Transform 🔌',
        'color: #d4af37; font-size: 14px; font-weight: bold;');
});

// Create solder points (bright dots on PCB)
function createSolderPoints() {
    const pointCount = 30;

    for (let i = 0; i < pointCount; i++) {
        const point = document.createElement('div');
        point.className = 'solder-point';
        const size = Math.random() * 6 + 4;
        const delay = Math.random() * 3;

        point.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, #ffd700 0%, #d4af37 50%, #c9a22e 100%);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            pointer-events: none;
            z-index: 1;
            box-shadow: 
                0 0 ${size}px rgba(212, 175, 55, 0.6),
                0 0 ${size * 2}px rgba(212, 175, 55, 0.3),
                inset 0 1px 2px rgba(255, 255, 255, 0.5);
            animation: solderGlow 3s ease-in-out infinite ${delay}s;
        `;
        document.body.appendChild(point);
    }
}

// Create copper trace lines
function createCopperTraces() {
    const traceCount = 20;

    for (let i = 0; i < traceCount; i++) {
        const trace = document.createElement('div');
        trace.className = 'copper-trace';
        const isHorizontal = Math.random() > 0.5;
        const length = Math.random() * 200 + 100;
        const thickness = Math.random() > 0.5 ? 3 : 2;
        const delay = Math.random() * 5;

        trace.style.cssText = `
            position: fixed;
            ${isHorizontal ? `width: ${length}px; height: ${thickness}px;` : `width: ${thickness}px; height: ${length}px;`}
            background: linear-gradient(${isHorizontal ? '90deg' : '180deg'}, 
                transparent 0%, 
                rgba(212, 175, 55, 0.4) 10%,
                rgba(212, 175, 55, 0.6) 50%,
                rgba(212, 175, 55, 0.4) 90%,
                transparent 100%);
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            pointer-events: none;
            z-index: 1;
            opacity: 0.6;
            box-shadow: 0 0 5px rgba(212, 175, 55, 0.3);
            animation: traceFlow 4s ease-in-out infinite ${delay}s;
        `;
        document.body.appendChild(trace);
    }
}

// Create resistor symbols
function createResistorSymbols() {
    const resistorCount = 8;

    for (let i = 0; i < resistorCount; i++) {
        const resistor = document.createElement('div');
        resistor.className = 'resistor-symbol';
        resistor.innerHTML = `
            <svg width="40" height="20" viewBox="0 0 40 20">
                <rect x="5" y="6" width="30" height="8" fill="none" stroke="#d4af37" stroke-width="1.5" opacity="0.4"/>
                <line x1="0" y1="10" x2="5" y2="10" stroke="#d4af37" stroke-width="1.5" opacity="0.4"/>
                <line x1="35" y1="10" x2="40" y2="10" stroke="#d4af37" stroke-width="1.5" opacity="0.4"/>
            </svg>
        `;

        resistor.style.cssText = `
            position: fixed;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            pointer-events: none;
            z-index: 1;
            animation: componentFloat 20s linear infinite ${Math.random() * 5}s;
            opacity: 0;
        `;
        document.body.appendChild(resistor);
    }
}

// Create capacitor symbols
function createCapacitorSymbols() {
    const capacitorCount = 8;

    for (let i = 0; i < capacitorCount; i++) {
        const capacitor = document.createElement('div');
        capacitor.className = 'capacitor-symbol';
        capacitor.innerHTML = `
            <svg width="30" height="30" viewBox="0 0 30 30">
                <line x1="12" y1="5" x2="12" y2="25" stroke="#4caf50" stroke-width="2" opacity="0.4"/>
                <line x1="18" y1="5" x2="18" y2="25" stroke="#4caf50" stroke-width="2" opacity="0.4"/>
                <line x1="0" y1="15" x2="12" y2="15" stroke="#4caf50" stroke-width="1.5" opacity="0.4"/>
                <line x1="18" y1="15" x2="30" y2="15" stroke="#4caf50" stroke-width="1.5" opacity="0.4"/>
            </svg>
        `;

        capacitor.style.cssText = `
            position: fixed;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            pointer-events: none;
            z-index: 1;
            animation: componentFloat 18s linear infinite ${Math.random() * 5}s;
            opacity: 0;
        `;
        document.body.appendChild(capacitor);
    }
}

// Create IC chip symbols
function createICChips() {
    const chipCount = 6;

    for (let i = 0; i < chipCount; i++) {
        const chip = document.createElement('div');
        chip.className = 'ic-chip';
        chip.innerHTML = `
            <svg width="40" height="40" viewBox="0 0 40 40">
                <rect x="10" y="10" width="20" height="20" fill="rgba(33, 150, 243, 0.2)" stroke="#2196f3" stroke-width="1.5" opacity="0.4"/>
                <line x1="0" y1="15" x2="10" y2="15" stroke="#2196f3" stroke-width="1" opacity="0.4"/>
                <line x1="0" y1="20" x2="10" y2="20" stroke="#2196f3" stroke-width="1" opacity="0.4"/>
                <line x1="0" y1="25" x2="10" y2="25" stroke="#2196f3" stroke-width="1" opacity="0.4"/>
                <line x1="30" y1="15" x2="40" y2="15" stroke="#2196f3" stroke-width="1" opacity="0.4"/>
                <line x1="30" y1="20" x2="40" y2="20" stroke="#2196f3" stroke-width="1" opacity="0.4"/>
                <line x1="30" y1="25" x2="40" y2="25" stroke="#2196f3" stroke-width="1" opacity="0.4"/>
            </svg>
        `;

        chip.style.cssText = `
            position: fixed;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            pointer-events: none;
            z-index: 1;
            animation: componentFloat 25s linear infinite ${Math.random() * 5}s;
            opacity: 0;
        `;
        document.body.appendChild(chip);
    }
}

// Add animation styles
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes solderGlow {
            0%, 100% {
                opacity: 0.6;
                transform: scale(1);
            }
            50% {
                opacity: 1;
                transform: scale(1.2);
            }
        }
        
        @keyframes traceFlow {
            0%, 100% {
                opacity: 0.3;
            }
            50% {
                opacity: 0.7;
            }
        }
        
        @keyframes componentFloat {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.6;
            }
            90% {
                opacity: 0.6;
            }
            100% {
                transform: translateY(-120vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(212, 175, 55, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add scroll progress indicator with copper trace theme
window.addEventListener('scroll', function () {
    const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, #d4af37 0%, #4caf50 50%, #2196f3 100%);
            z-index: 9999;
            transition: width 0.1s ease;
            box-shadow: 0 0 10px rgba(212, 175, 55, 0.6), 0 2px 5px rgba(0, 0, 0, 0.3);
        `;
        document.body.appendChild(progressBar);
    }

    progressBar.style.width = scrollProgress + '%';
});

// Add keyboard navigation
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Performance optimization
let ticking = false;
window.addEventListener('scroll', function () {
    if (!ticking) {
        window.requestAnimationFrame(function () {
            ticking = false;
        });
        ticking = true;
    }
});