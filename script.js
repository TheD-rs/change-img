
//////start

const btns = document.querySelector('.btns');
const btn = document.querySelector('.btn');
const btnAll = document.querySelectorAll('.btn');
const cardImg = document.querySelectorAll('.card__img');

function changeImage(event) {
  if(event.target.classList.contains('btn')) {
    const img1 = event.target.dataset.img1;
    cardImg.forEach((img, index) => img.src = `./img/${img1}/${index +1}.jpg`);
  }
}

btns.addEventListener('click', changeImage);

 btnAll.forEach(item => {
  item.addEventListener('click', (e) => {
    btnAll.forEach(el => {
      el.classList.remove('active');
      item.classList.add('active');
    })
  })
 })