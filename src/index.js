function loadSpacers() {
    var spacers = document.getElementsByClassName('spacer')
    for (var i = 0; i < spacers.length; i++) {
        spacers[i].style.height = document.getElementById(spacers[i].id.split('-')[0]).offsetHeight + 'px'
    }
}

function autoMode() { 
    var searchParams = new URLSearchParams(window.location.search)
    setMode(searchParams.has('mode') ? searchParams.get('mode') : 'Default' ) }

function setMode(mode) {
    var icon, text, mainText
    switch (mode) {
        case '404':
            icon = 'search-x'
            text = 'The page you are looking for does not exist! ㅤ'
            mainText = 'Error 404'
            break
        default:
            icon = 'triangle-alert'
            text = 'If You are seeing this page, it means the service is Offline or Under Maintenance! ㅤ'
            mainText = 'Service Unavailable'
            break
    }

    document.getElementById('icon').setAttribute('data-lucide', icon)
    document.getElementById('mainText').innerText = mainText
    document.getElementsByTagName('title')[0].innerText = mainText + ' | Nerexbcd'
    var contents = document.getElementsByClassName('bannerText')
    for (var i = 0; i < contents.length; i++) {
        contents[i].innerText = text
    }
}

function finalizePage() {
    lucide.createIcons();
    loadSpacers();
}