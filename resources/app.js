'use strict';

var app = angular.module('uzavto', [
    'appRoutes',
    'blockUI',
    'ui.select',
    'ngSanitize',
    'ngFileUpload'
  ]);

app.constant('routes', {
  init_params: '/t/ap/stream/ph&init_params',
  langs: '/b/ap/stream/ph&langs',
  translates: '/b/ap/stream/ph&translates',
  oauth2_gen_params: '/t/core/m$oauth2_gen_params?code=oneid',
  proxy_token: '/t/core/m$oauth2_token',
  user_info: '/t/ap/stream/ph$user_info',
  logout: '/b/logout'
});

app.config(function($locationProvider) {
  $locationProvider.hashPrefix('');
});

app.config(function($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
});

app.config(function (blockUIConfig) {
  blockUIConfig.requestFilter = function (config) {
    return !config.unblock;
  };
});

app.config(function ($httpProvider) {
  $httpProvider.interceptors.push(function() {
    return {
      'request': function(config) {
        if (config.method == "POST") {
          if (true) {
            if (config.headers.BiruniUpload) {
              config.fields.param.filial_id = 100;
              config.fields.param = JSON.stringify(config.fields.param);
            } else {
              if (config.data === undefined) config.data = {};
              if (config.data.constructor == Object) config.data.filial_id = 100
            }
          }
        }
        return config;
      }
    }
  });
});