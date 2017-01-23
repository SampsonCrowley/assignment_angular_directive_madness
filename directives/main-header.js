directiveMadness.directive("mainHeader", [
  function(){
    return {
      restrict: 'E',
      scope:{},
      templateUrl: '/directives/main-header.html',
      transclude: true
    }
  }
])
