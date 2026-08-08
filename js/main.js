/* ==========================================================================
   MEEM Creative Group — Interactive Features
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCurtainReveal();
  initNavbar();
  initScrollReveal();
  initMobileMenu();
  initSmoothScroll();
  initProcessTimeline();
  initProcessProgress();
  initContactForm();
  initNavActiveState();
  initMobileViewportFix();
  initDivisionScroll();
  initTypewriter();
  initStatPulse();
});

/* ---------- Page Load Curtain ---------- */
function initCurtainReveal() {
  const curtain = document.getElementById('pageCurtain');
  if (!curtain) return;

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    curtain.remove();
    return;
  }

  // Show curtain briefly, then slide away
  setTimeout(() => {
    curtain.classList.add('curtain--hidden');
    // Remove from DOM after animation
    setTimeout(() => curtain.remove(), 900);
  }, 800);
}

/* ---------- Navbar Scroll Effect ---------- */
function initNavbar() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  let lastScroll = 0;
  const threshold = 60;

  function handleScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > threshold) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }

    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/* ---------- Scroll Reveal Animations ---------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal--scale, .reveal--left, .reveal--right');
  if (!reveals.length) return;

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(el => el.classList.add('reveal--visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  reveals.forEach(el => observer.observe(el));
}

/* ---------- Mobile Menu ---------- */
function initMobileMenu() {
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');
  const mobileLinks = document.querySelectorAll('.nav__mobile .nav__link');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('nav__hamburger--open');
    mobileMenu.classList.toggle('nav__mobile--open');
    document.body.style.overflow = mobileMenu.classList.contains('nav__mobile--open') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('nav__hamburger--open');
      mobileMenu.classList.remove('nav__mobile--open');
      document.body.style.overflow = '';
    });
  });
}

/* ---------- Smooth Scroll Navigation ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        const navHeight = document.querySelector('.nav')?.offsetHeight || 80;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ---------- Active Nav State ---------- */
function initNavActiveState() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('nav__link--active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '-80px 0px -50% 0px'
    }
  );

  sections.forEach(section => observer.observe(section));
}

/* ---------- Process Timeline ---------- */
function initProcessTimeline() {
  const steps = document.querySelectorAll('.process__step');
  if (!steps.length) return;

  steps.forEach(step => {
    step.addEventListener('click', () => {
      // Toggle active state
      const wasActive = step.classList.contains('process__step--active');
      steps.forEach(s => s.classList.remove('process__step--active'));
      if (!wasActive) {
        step.classList.add('process__step--active');
      }
    });

    step.addEventListener('mouseenter', () => {
      step.classList.add('process__step--active');
    });

    step.addEventListener('mouseleave', () => {
      if (!step.dataset.clicked) {
        step.classList.remove('process__step--active');
      }
    });
  });
}

/* ---------- Process Progress Line (Animated on Reveal) ---------- */
function initProcessProgress() {
  const timeline = document.querySelector('.process__timeline');
  const steps = document.querySelectorAll('.process__step');

  if (!timeline || !steps.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add class to trigger CSS width transition
          timeline.classList.add('timeline--in-view');
          
          // Light up step numbers sequentially
          steps.forEach((step, i) => {
            setTimeout(() => {
              step.classList.add('step--in-view');
            }, i * 300); // 300ms delay between each step
          });

          observer.unobserve(timeline);
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  observer.observe(timeline);
}

/* ---------- Contact Form ---------- */
function initContactForm() {
  const form = document.querySelector('#contactForm');
  if (!form) return;

  const divisionSelect = document.querySelector('#division');
  const submitBtn = form.querySelector('.btn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Gather form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Visual feedback
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Send data to Google Forms
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSc3UeamNYQAFsXgcMgc4r9tUrT9MHyl8r4cGh_pKzHIR7F-UQ/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    }).then(() => {
      // Success feedback (no-cors always resolves to opaque response if network succeeds)
      submitBtn.textContent = 'Message Sent ✓';
      submitBtn.style.background = '#27ae60';
      submitBtn.style.borderColor = '#27ae60';

      setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = 'Send Message <svg class="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
        submitBtn.disabled = false;
        submitBtn.style.background = '';
        submitBtn.style.borderColor = '';
      }, 3000);
    }).catch(error => {
      // Error feedback
      submitBtn.textContent = 'Error. Try Again.';
      
      setTimeout(() => {
        submitBtn.innerHTML = 'Send Message <svg class="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
        submitBtn.disabled = false;
      }, 3000);
    });
  });

  // Add floating label effect
  const inputs = form.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('form-group--focused');
    });
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('form-group--focused');
    });
  });
}

/* ---------- Typewriter Effect for Hero Accent Text ---------- */
function initTypewriter() {
  const accent = document.querySelector('.hero__title-accent');
  if (!accent) return;

  const text = accent.getAttribute('data-text') || '';
  if (!text) return;

  // If reduced motion, show text immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    accent.textContent = text;
    accent.classList.add('typewriter-done');
    return;
  }

  // Start typing after a short delay
  let charIndex = 0;
  // Use zero-width space to preserve line height while empty
  accent.textContent = '\u200B';

  setTimeout(() => {
    function typeChar() {
      if (charIndex === 0) {
        accent.textContent = ''; // clear zero-width space on first char
      }
      if (charIndex < text.length) {
        accent.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, 40 + Math.random() * 30); // slight randomness, faster typing
      } else {
        // Stop cursor blink after typing is done
        setTimeout(() => {
          accent.classList.add('typewriter-done');
        }, 1500);
      }
    }
    typeChar();
  }, 1000); // 1s delay instead of 1.8s
}

/* ---------- Stat Icon Pulse on Viewport Entry ---------- */
function initStatPulse() {
  const stats = document.querySelectorAll('.why__stat');
  if (!stats.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('stat--in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.4
    }
  );

  stats.forEach(stat => observer.observe(stat));
}

/* ---------- Counter Animation (for stats if needed) ---------- */
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  function step() {
    start += increment;
    if (start >= target) {
      el.textContent = target;
      return;
    }
    el.textContent = Math.floor(start);
    requestAnimationFrame(step);
  }

  step();
}

/* ---------- Parallax Effect (subtle) ---------- */
function initParallax() {
  const hero = document.querySelector('.hero');
  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const shapes = hero.querySelectorAll('.hero__shape');
    shapes.forEach((shape, i) => {
      const speed = 0.1 + (i * 0.05);
      shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }, { passive: true });
}

/* ---------- Mobile Viewport Height Fix ---------- */
function initMobileViewportFix() {
  // Fix for mobile browsers where 100vh includes the address bar
  function setVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  setVH();
  window.addEventListener('resize', debounce(setVH, 100));
}

/* ---------- Division Cards Scroll Indicator ---------- */
function initDivisionScroll() {
  const container = document.querySelector('.divisions');
  if (!container) return;

  // Only apply on mobile
  const isMobile = () => window.innerWidth <= 768;
  if (!isMobile()) return;

  const cards = container.querySelectorAll('.division-card');
  if (cards.length < 2) return;

  // Create dots indicator
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'division-dots';
  dotsContainer.style.cssText = `
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: -8px;
    margin-bottom: 24px;
  `;

  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.style.cssText = `
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${i === 0 ? '#00215C' : 'rgba(0, 33, 92, 0.2)'};
      transition: all 0.3s ease;
      cursor: pointer;
    `;
    dot.dataset.index = i;
    dot.addEventListener('click', () => {
      cards[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
    dotsContainer.appendChild(dot);
  });

  container.parentElement.insertBefore(dotsContainer, container.nextSibling);

  // Update active dot on scroll
  const dots = dotsContainer.querySelectorAll('span');
  let scrollTimeout;

  container.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = cards[0].offsetWidth;
      const gap = parseInt(getComputedStyle(container).gap) || 16;
      const activeIndex = Math.round(scrollLeft / (cardWidth + gap));

      dots.forEach((dot, i) => {
        dot.style.background = i === activeIndex ? '#00215C' : 'rgba(0, 33, 92, 0.2)';
        dot.style.transform = i === activeIndex ? 'scale(1.3)' : 'scale(1)';
      });
    }, 50);
  }, { passive: true });
}

/* ---------- Utility: Debounce ---------- */
function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
}
