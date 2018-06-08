(function () {
    /* jshint validthis: true */
    "use strict";
    //Panels for Portfolio
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

    function toggleOpen() {
        this.classList.toggle('open');
        this.children[2].classList.toggle('show');
    }

    function toggleActive(e) {
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('panel-active');
        }
    }    
}());