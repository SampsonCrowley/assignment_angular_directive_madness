directiveMadness.controller('QuotesCtrl', [
  '$scope', function($scope) {
    $scope.quotes = [];

    $scope.addQuote = function(quote) {
      var newQuote = {
        author: quote.author,
        message: quote.message
      };

      $scope.quotes.push(newQuote);

      quote.author = undefined;
      quote.message = undefined;
    };

    $scope.deleteQuote = function(quote) {
      for (var i = 0; i < $scope.quotes.length; i++) {
        if ($scope.quotes[i] === quote) {
          $scope.quotes.splice(i, 1);
          break;
        }
      }
    };
  }
]);
