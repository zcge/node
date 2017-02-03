'use strict';

module.exports = appInfo => {
  const config = {
      mysql:{
        client: {
          // host
          // host: 'hankewei.xyz',
          host:"112.74.180.116",
          // 端口号
          port: '3306',
          // 用户名
          user: 'root',
          // 密码
          password: 'mysql123456',
          // 数据库名
          database: 'hkw',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
      },
      //配置session 信息
      session : {
        maxAge: 24 * 3600 * 1000, // ms
        key: 'EGG_SESS',
        httpOnly: true,
        encrypt: true,
      }
  };

  // should change to your own
  config.keys = appInfo.name + '123456';

  return config;
};
