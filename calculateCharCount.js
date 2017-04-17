(function (){
'use strict';
angular.module('calculateCharCountApp', [])

.controller('calculateCharCountController', function ($scope){

$scope.name = "";
$scope.totalValue = 0;

$scope.displayNumeric = function(){
  var totalNameValue = calculateNumericForString($scope.name);
  $scope.totalValue = totalNameValue;
};

function calculateNumericForString(stringName)
{
  var totalStringValue = 0;
  for(var i = 0 ; i < stringName.length ; i++){
    totalStringValue += stringName.charCodeAt(i);
  }

  return totalStringValue;
}

});
})();
