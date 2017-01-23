directiveMadness.directive("colorize", [
  function(){
    function setColor(s, e, a){
      e.css({
        color: s.color,
        background: s.background
      });
    }

    return {
      restrict: 'A',
      scope:{
        color: '@',
        background: '@',
      },
      link: setColor
    };
  }
]);
