// Stylesheets import
import './buttons.css';
import './lenis.css';

// Import dependencies
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

// Init scripts
function initScripts() {
  initLenis();
}

initScripts();

// Lenis Smooth Scroll
function initLenis() {
  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

// Hero Appear Animation
gsap.set('.hero_left_wrap .heading-h1', { opacity: 0 });
gsap.fromTo(
  '.hero_left_wrap .heading-h1',
  { y: 100 },
  { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.5 }
);
