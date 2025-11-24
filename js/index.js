/*
1. back to top
2. 후기 슬라이드 (06-horizontal)
3. about page (Q&A accodion)
*/

// back to top
const goTop = document.querySelector('#btt');

// slide-horizontal
const slideWrapper = document.querySelector('.testimonial');
const slideContainer = slideWrapper.querySelector('.slide-container');
const slides = slideContainer.querySelectorAll('li');
let currentIdx = 0;
const prevBtn = slideWrapper.querySelector('.prev');
const nextBtn = slideWrapper.querySelector('.next');
const slideCount = slides.length;

// back to top
window.addEventListener('scroll', () => {
  let scrAmt = window.scrollY;

  if (scrAmt >= 300) {
    goTop.classList.add('active');
  } else {
    goTop.classList.remove('active');
  }

  goTop.addEventListener('click', (e) => {
    e.preventDefault();

    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    })
  })
})

// slide-horizontal

slides.forEach((item, idx) => {
  item.style.left = idx * 100 + '%';
}) 

moveSlide(0);

function moveSlide(idx) {

  slideContainer.style.left = -idx * 100 + '%';
  currentIdx = idx;

  for(let slide of slides) {
    slide.classList.remove('active');
  }
  slides[idx].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  let nextIdx = (currentIdx + 1) % slideCount;
  moveSlide(nextIdx);
})

prevBtn.addEventListener('click', () => {
  let prevIdx = (currentIdx - 1 + slideCount) % slideCount;
  moveSlide(prevIdx);
})