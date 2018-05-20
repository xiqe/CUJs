HTMLElement.prototype.hasClass = function(className) {
    return this.classList.contains(className);
}

HTMLElement.prototype.addClass = function(className) {
    this.classList.add(className);
}

HTMLElement.prototype.removeClass = function(className) {
    this.classList.remove(className);
}

HTMLElement.prototype.toggleClass = function(className, enable) {
    this.classList.toggle(className, enable);
}
