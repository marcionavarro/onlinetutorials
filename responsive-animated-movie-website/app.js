$(document).ready(function () {
    $('.carousel').carousel();
});

const changeBgImg = (bgImgUrl, title) => {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');

    banner.style.background = `url(./images/${bgImgUrl})`;
    banner.style.backgroundPosition = 'left, bottom';
    banner.style.backgroundSize = "cover"

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active')
        }
    })
}

const toggleVideo = () => {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active');
}