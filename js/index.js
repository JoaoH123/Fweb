var banners = ["./img/174854.png", "./img/CSS3_logo.png", "./img/javascript-logo-javascript-icon-transparent-free-png.webp"];

var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 3;
    document.querySelector('.destaque img').src = banners[bannerAtual];
}

setInterval(trocaBanner, 5000);

const audioP = document.querySelector('#audioplayer');

const inputRange = document.querySelector('#input-range')

const buttonPlayer = document.querySelector('#Play')

inputRange.addEventListener("input",() => {audioP.volume = inputRange.value});

buttonPlayer.addEventListener("click", () => {audioP.play();});