'use strict';

module.exports = function* loginAction() {
    const userName = this.query.userName;
    const userPassword = this.query.userPassword;
    const res = yield this.service.user.login(userName,userPassword);
    if(res){
        this.session.userName = userName;
        this.session.userPassword = userPassword;
        this.session.id = res.user_id;
        this.session.save();
        this.body = "成功";
    }else{
        this.body = "失败";
    }
};