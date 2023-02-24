const buttons = document.querySelectorAll('.menu');
const sidebar = document.querySelector('.sidebar');

buttons.forEach((button) =>
  button.addEventListener('click', () => {
    sidebar.classList.toggle('close');
    if (sidebar.classList[1] !== 'close') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  })
);
