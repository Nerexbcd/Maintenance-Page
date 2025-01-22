function loadSpacers() {
    var spacers = document.getElementsByClassName('spacer')
    for (var i = 0; i < spacers.length; i++) {
        spacers[i].style.height = document.getElementById(spacers[i].id.split('-')[0]).offsetHeight + 'px'
    }
}

function autoMode() {
    var icon, text, mainText, bannerColor
    switch (window.location.pathname.split('/')[1]) {
        case '404':
            icon = 'search-x'
            bannerColor = 'bg-red-300'
            text = 'The page you are looking for does not exist! ㅤ'
            mainText = '404 - Not Found'
            break
        case 'dev':
            icon = 'pencil-ruler'
            bannerColor = 'bg-yellow-300'
            text = 'The page you are looking for is in Development! ㅤ'
            mainText = 'Service In Development'
            break
        default:
            icon = 'triangle-alert'
            bannerColor = 'bg-red-300'
            text = 'If You are seeing this page, it means the service is Offline or Under Maintenance! ㅤ'
            mainText = 'Service Unavailable'
            break
    }

    document.getElementById('icon').setAttribute('data-lucide', icon)
    document.getElementById('devBanner').classList.add(bannerColor)
    document.getElementById('mainText').innerText = mainText
    document.getElementsByTagName('title')[0].innerText = mainText + ' | Nerexbcd'
    var contents = document.getElementsByClassName('bannerText')
    for (var i = 0; i < contents.length; i++) {
        contents[i].innerText = text
    }
}

function finalizePage() {
    autoMode()
    lucide.createIcons();
    loadSpacers();
}