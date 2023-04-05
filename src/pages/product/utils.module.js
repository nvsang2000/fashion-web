
const moreInfo = document.querySelector('.moreInfo');
const textAdd = document.querySelector('.textAdd');

moreInfo.addEventListener('click', () => {
  textAdd.classList.toggle('active');
});