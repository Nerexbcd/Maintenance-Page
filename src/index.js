function loadSpacers() {
    var spacers = document.getElementsByClassName('spacer')
    for (var i = 0; i < spacers.length; i++) {
        spacers[i].style.height = document.getElementById(spacers[i].id.split('-')[0]).offsetHeight + 'px'
    }
}

function setContents() {
    var mode = window.location.search.split('mode=')[1].split('&')[0]

    var icon, text
    switch (mode) {
        case '404':
            icon = 'search-x'
            text = 'The page you are looking for does not exist! ㅤ'
            break
        default:
            icon = 'triangle-alert'
            text = 'If You are seeing this page, it means the service is Offline or Under Maintenance! ㅤ'
            break
    }


    window.getElementById('icon').setAttribute('data-lucide', icon)
    var contents = window.getElementsByClassName('bannerText')
    for (var i = 0; i < contents.length; i++) {
        contents[i].innerText = text
    }
}