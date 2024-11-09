function loadSpacers() {
    var spacers = document.getElementsByClassName('spacer')
    for (var i = 0; i < spacers.length; i++) {
        spacers[i].style.height = document.getElementById(spacers[i].id.split('-')[0]).offsetHeight + 'px'
    }
}