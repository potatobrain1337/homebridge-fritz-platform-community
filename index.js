/**
 * v6
 *
 * Community fork maintained by potatobrain1337 (original by SeydX)
 * @url https://github.com/potatobrain1337/homebridge-fritz-platform-community
 * @author potatobrain1337
 *
 **/

'use strict';

module.exports = function (homebridge) {
  let FritzPlatform = require('./src/platform.js')(homebridge);
  homebridge.registerPlatform('homebridge-fritz-platform-community', 'FritzPlatform', FritzPlatform, true);
};
