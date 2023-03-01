const buttons = document.querySelectorAll('.menu');
const sidebar = document.querySelector('.sidebar');
const mainImg = document.querySelector('#main-img');

// change mainImg based on window width
if (window.innerWidth > 750) {
  mainImg.src = 'assets/images/image-web-3-desktop.jpg';
} else {
  mainImg.src = 'assets/images/image-web-3-mobile.jpg';
}

buttons.forEach((button) =>
  button.addEventListener('click', () => {
    sidebar.classList.toggle('close');
    if (sidebar.classList[1] !== 'close') {
      document.html.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.html.style.overflow = 'scroll';
      document.body.style.overflow = 'scroll';
    }
  })
);
