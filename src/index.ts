// Stylesheets import
import './index.css';
import './buttons.css';
import './lenis.css';

// Import dependencies
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// Init scripts
function initScripts() {
  initLenis();
  pageloader();
  processAnimation();
  wistjedatAnimation();
}

initScripts();

// Lenis Smooth Scroll
function initLenis() {
  const lenis = new Lenis({
    duration: 1,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

// Page Loader Animation
function pageloader() {
  const tl = gsap.timeline();

  tl.to(
    '.page-loader',
    {
      duration: 1.5,
      opacity: 0,
      ease: 'Expo.easeOut',
    },
    '+=0.7'
  );
  tl.set('.page-loader', { pointerEvents: 'none' });
  tl.from(
    '.once-in',
    {
      duration: 1.3,
      stagger: 0.07,
      opacity: 0,
      yPercent: 20,
      ease: 'Expo.easeOut',
    },
    '<-1.4'
  );
  tl.from(
    '.hero_right_bg',
    {
      duration: 1,
      opacity: 0,
      ease: 'Expo.easeOut',
    },
    '<'
  );
  tl.from(
    '.is-nav',
    {
      duration: 1,
      stagger: 0.1,
      opacity: 0,
      ease: 'Expo.easeOut',
    },
    '<'
  );
}

// Process Section Animation
function processAnimation() {
  // Select all process grid items and progress circles
  const processItems = document.querySelectorAll('.process-grid-item-content');
  const progressCircles = document.querySelectorAll('.progress-circle');

  processItems.forEach((item, index) => {
    const circle = progressCircles[index]; // Associate circle by index

    if (circle) {
      // Create a timeline for each item
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 48%',
          end: 'bottom 31%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to(circle, {
        scale: 1.4,
        borderColor: '#a8f858',
        duration: 0.5,
        ease: 'power4.inOut',
      });
    }
  });
}

// Wist Je Dat Accordion Animation
function wistjedatAnimation() {
  const question = document.querySelectorAll('.wistjedat-item');

  question.forEach((question) => {
    question.addEventListener('click', (event) => {
      const active = document.querySelector('.wistjedat-item.active');
      if (active && active !== question) {
        active.classList.toggle('active');
        const activeLower = active.querySelector('.wistjedat-item-lower');
        if (activeLower) {
          activeLower.style.maxHeight = 0;
        }
      }
      question.classList.toggle('active');
      const answerLower = question.querySelector('.wistjedat-item-lower');
      if (question.classList.contains('active')) {
        if (answerLower) {
          answerLower.style.maxHeight = answerLower.scrollHeight + 'px';
        }
      } else {
        if (answerLower) {
          answerLower.style.maxHeight = 0;
        }
      }
    });
  });
}
