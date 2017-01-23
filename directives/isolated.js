directiveMadness.directive("isolated", [
  function() {

    var linkFunction = function(scope) {
      scope.oneWay = "altered one way variable";
      scope.twoWay = "altered two way variable";
      var isolateSayHello = scope.sayHello;
      scope.sayHello = function(name) {
        isolateSayHello({name: name + " from isolated scope."});
      };
    };

    return {
      templateUrl: 'directives/isolated.html',
      restrict: 'AE',
      scope: {
        twoWay: '=',
        oneWay: '@',
        sayHello: '&'
      },
      link: linkFunction
    };
  }
]);
