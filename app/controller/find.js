'use strict';

module.exports = function* find() {
   const user = yield this.service.user.find(1);
   this.body = user;
};