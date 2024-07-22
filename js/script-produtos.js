function MenuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src ="../img/icon/icon-menu-mobile.svg";
    }else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src ="../img/icon/icon-closer-mobile.svg";
    }
}