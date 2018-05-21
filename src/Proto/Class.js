HTMLElement.prototype.hasClass = function(className) {
    return this.classList.contains(className);
}

HTMLElement.prototype.addClass = function(className) {
    let _arr = className.split(' ');
    for(let i=0;i<_arr.length;i++){
        this.classList.add(_arr[i]);
    };
}

HTMLElement.prototype.removeClass = function(className) {
    let _arr = className.split(' ');
    for(let i=0;i<_arr.length;i++){
        this.classList.remove(_arr[i]);
    };
}

HTMLElement.prototype.toggleClass = function(className, enable) {
    this.classList.toggle(className, enable);
}
