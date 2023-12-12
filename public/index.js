window.onscroll = function () {
    dynamicNav = document.getElementById('dynamic-nav')
    if (window.scrollY > 1) {
        var scrollingSize = window.scrollY >= 32 ? 16 : window.scrollY/2;
        var size = 16 - scrollingSize;
        dynamicNav.style.margin = '16px ' + size +'px'
        
        if (window.scrollY > 32) {
            dynamicNav.style.borderRadius = '0'
        }
        else {
            dynamicNav.style.borderRadius = '10px'
        }
    }
};
