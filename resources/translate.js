app.factory('t', function($rootScope, $http, $timeout) {

  return function(msg) {
    return $rootScope.a.translate[msg.toLowerCase()] || msg;
  };

}).directive('t', function (t) {
  function link(scope, elem, attr) {
    var txt = elem.text();
    elem.text(t(txt));
  };

  return {
    restrict : 'E',
    link : link
  };
});
