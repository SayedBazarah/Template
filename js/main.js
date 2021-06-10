const nav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const close = document.querySelector('.close');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    })
    close.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    })

}

nav();