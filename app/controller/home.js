'use strict';

module.exports = function* home() {
  if(this.session.userName){
    this.body = JSON.stringify(this.session.inspect())
  }else{
    yield this.render("home.html");
  }
};