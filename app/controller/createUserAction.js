'use strict';

module.exports = function* createUserAcation() {
    const userName = this.query.userName;
    const userPassword = this.query.userPassword;
    if(!userName || !userPassword){
        this.body = "505服务器错误";
        return;
    }
    const res = yield this.service.user.createUser(userName,userPassword);
    if(res){
        this.body = "成功";
    }else{
        this.body = "失败";
    }
};