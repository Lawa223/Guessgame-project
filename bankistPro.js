'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close--modal');
const btnsOpenModal = document.querySelectorAll('.btn--show--modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const nav = document.querySelector('.nav');
// Tabbed Component
const tabs = document.querySelectorAll('.operations_tab');
const tabsContainer = document.querySelector('.operations_tab-container');
const tabsContent = document.querySelectorAll('.operations_content');

/////////////////////////////// Modal window /////////////////////////

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  //   e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', overlay);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////////////////////////////////////

// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //   // Scrolling
  //   window.scrollTo(
  //     s1coords.left + window.pageXOffset,
  //     s1coords.top + window.pageYOffset
  //   );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////////////////////////////////////
// Page Navigation
// document.querySelectorAll('.nav-link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1). Add event listener to the common parent element
// 2).Determin what element originated event
document.querySelector('.nav_links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching Strategy
  if (e.target.classList.contains('nav_link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations_tab');
  // console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('.operations_tab--active'));
  tabsContent.forEach(c => c.classList.remove('.operations_contct--active'));

  // Activate tab
  clicked.classList.add('.operations_tab--active');

  // Activate content area
  document
    .querySelector(`.operations_content--${clicked.dataset.tab}`)
    .classList.add('.operations_content--active');
});

// Menu fade animation
const handHover = function (e) {
  if (e.target.classList.contains('.nav_link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav_link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
//  Passin "argument" into handler
nav.addEventListener('mouseover', handHover.bind(0.5));

nav.addEventListener('mouseout', handHover.bind(1));

////////////////////////////////////////////////////////////////////
// // Sticky Navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// const obsCallback = function (entries, observer) {
//   entries.forEach(entries => {
//     console.log(entries);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe('section1');

// document.addEventListener('DOMContentLoaded', function (e) {
//   console.log('HTML parsed and DOM tree built!', e);
// });

// window.addEventListener('load', function (e) {
//   console.log('Page fully loaded', e);
// });

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  cost[entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
  // nav.classList.add('sticky')
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Reveal Section
const allSections = document.querySelectorAll('section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading image
const imgTarget = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTarget.forEach(img => imgObserver.observe(img));

// Slider
const slider = function () {
  const slides = documenty.querySelectorAll('.slide');
  const btnLeft = document.querySelector('slider_btn--left');
  const btnRight = document.querySelector('slider_btn--right');

  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-800px';
  // slider.style.overflow = 'visible';

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend');
      `  <button class="dots_dot" data-slide="${i}"></button>`;
    });
  };
  createDots();

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots_dot')
      .forEach(dot => dot.classList.remove('dots_dot--active'));

    document
      .querySelector(`".dots_dot[data-slide="${slide}"]`)
      .classList.add('.dots_dot');
  };
  activateDot(0);

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  goToSlide(0);

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  // -100%, 0%, 100%, 200%

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots_dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// // Selecting Element
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// // Creating and inserting element
// // insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie--message');
// // message.textContent = 'We use cookied for improved functionality and analytics';
// message.innerHTML =
//   'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!<!button>';
// header.prepend(message);
// // header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// // Delete Element
// document
//   .querySelector('btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });

// // Style
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-pimary', 'orangered');

// // Attribute
// const logo = document.querySelector('.nav_logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// console.log(logo.getAttribute('designer'));

// logo.alt = 'Beautiful minimalist logo';

// // Not a standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attribute
// console.log(logo.dataset.versionNumber);

// // classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes

// // Dont use
// logo.className = 'jonas';

// // Implementing Smooth Scrolling
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());
//   console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );
//   //   // Scrolling
//   //   window.scrollTo(
//   //     s1coords.left + window.pageXOffset,
//   //     s1coords.top + window.pageYOffset
//   //   );
//   window.scrollTo({
//     left: s1coords.left + window.pageXOffset,
//     top: s1coords.top + window.pageYOffset,
//     behavior: 'smooth',
//   });
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

///////////////////////////////////////////////////////////////////////////////////
///////////////////// Types of Event and event Handler/////////////////////////////
// const h1 = document.querySelector('h1');
// // h1.addEventListener('mouseenter', function (e) {
// //   alert('addEventListener: Great! You are reading the heading :D');
// // });

// // h1.onmouseenter = function (e) {
// //   alert('onmouseenter: Great! You are reading the heading :D');
// // };

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// Event propagation in practice
// rgb(255,255,255)

// const RandomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${RandomInt(0, 255)},${RandomInt(0, 255)},${RandomInt(0, 255)})`;

// document.querySelector('.nav_link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor;
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop Propagation
//   //   e.stopPropagation();
// });

// document.querySelector('.nav_links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor;
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor;
//   console.log('NAV', e.target, e.currentTarget);
// });

// DOM Tranverson
// const h1 = document.querySelector('h1');

// // Going downwards:  child
// console.log(h1.document.querySelector('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.backgroundColor = 'var (--gradient-secondary)';
// h1.closest('.h1').style.backgroundColor = 'var (--gradient-primary)';

// // Goingsideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
