window.onscroll = function () {
    dynamicNav = document.getElementById('dynamic-nav')
    if (window.scrollY > 1) {
        var scrollingSize = window.scrollY >= 32 ? 16 : window.scrollY/2;
        var size = 16 - scrollingSize;
        dynamicNav.style.margin = '16px ' + size +'px'
    }
};
