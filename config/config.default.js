'use strict';

module.exports = appInfo => {
  const config = {
      mysql:{
        client: {
          // host
          host: 'hankewei.xyz',
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
      }
  };

  // should change to your own
  config.keys = appInfo.name + '123456';

  return config;
};
