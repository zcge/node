'use strict';

module.exports = function* page404() {
    yield this.render("404.html");
};