'use strict';

// had enabled by egg
// exports.static = true;
exports.view = {
  enable: true,
  package: 'egg-view-nunjucks'
};
//启用mysql
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};