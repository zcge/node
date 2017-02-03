const mySqlFindUser = ""

//用户服务
module.exports = app => {
  return class User extends app.Service {
    * find(uid) {
      // 假如 我们拿到用户 id 从数据库获取用户详细信息
      const user = yield app.mysql.get("users",{
        user_id:uid
      });
      return {
        user,
      };
    }
    * login(userName,passWord){
       const res = yield app.mysql.get("users",{
         user_name : userName,
         user_password :  passWord
       });
       return res;
    }
    * createUser(userName,passWord) {
      // 假如 我们拿到用户 id 从数据库获取用户详细信息
      const res = yield app.mysql.insert("users",{
        user_name : userName,
        user_password :  passWord
      });
      return res;
    }
    
  }
};