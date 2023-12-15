const navigationHeight = document.querySelector('.header').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 'px');

const themeToggle = document.querySelector('.theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (JSON.parse(window.localStorage.getItem('theme'))?.dark) {
    themeToggle.src = './resources/images/light-bulb-off.png';
    document.body.classList.toggle('dark', true);
} else if (prefersDark) {
    themeToggle.src = './resources/images/light-bulb-off.png';
    document.body.classList.toggle('dark', true);
} else {
    themeToggle.src = './resources/images/light-bulb.png';
    document.body.classList.toggle('dark', false);
}

themeToggle.addEventListener('click', e => {
    const imgSrc = e.target.src;

    if (imgSrc.substring(imgSrc.length - 14) === 'light-bulb.png') {
        e.target.src='./resources/images/light-bulb-off.png';
        window.localStorage.setItem('theme', JSON.stringify({dark: true}));
    } else {
        e.target.src = './resources/images/light-bulb.png';
        window.localStorage.setItem('theme', JSON.stringify({dark: false}));
    }
    
    document.body.classList.toggle('dark');
});