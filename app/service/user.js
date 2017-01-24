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

    * createUser(userId,userName) {
      // 假如 我们拿到用户 id 从数据库获取用户详细信息
      const res = yield app.mysql.insert("users",{
        user_id:userId,
        user_name:userName
      });
      return res;
    }
    
  }
};