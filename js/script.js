const nezuko = document.querySelector('.nezuko');
const pedra = document.querySelector('.pedra');

const jump = () => {
    nezuko.classList.add('jump');

    setTimeout(() => {
     nezuko.classList.remove('jump');
    }, 550);
}

const loop = setInterval(() => {

  const pedraPosition = pedra.offsetLeft;
  const nezukoPosition = +window.getComputedStyle(nezuko).bottom.replace('px', '');

  if (pedraPosition <= 120 && pedraPosition > 0 && nezukoPosition < 80) {

    pedra.style.animation = 'none';
    pedra.style.left = `${pedraPosition}px`;

    nezuko.style.animation = 'none';
    nezuko.style.bottom = `${nezukoPosition}px`;

    nezuko.src = './images/nezuko-gameover.png';
    nezuko.style.width = '120px'
    nezuko.style.marginLeft = '-45px'

    clearInterval(loop);
  }

}, 10);

document.addEventListener('keydown', jump);