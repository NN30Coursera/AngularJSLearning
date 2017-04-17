(function (){
'use strict';

angular.module('MsgApp',[])
.controller('MsgController',MsgController)
.filter('loves', LovesFilter)
.filter('truth',TruthFilter);

MsgController.$inject = ['$scope','lovesFilter'];
function MsgController($scope,lovesFilter){
  $scope.name = "Nitish";
  $scope.stateOfYaakov = "hungry";
  $scope.cookieCost = .50;

  $scope.sayMessage = function (){
    var msg = "Yaakov likes to eat Cookies!";
    return msg;
  };

  $scope.sayLovesMessage = function (){
    var msg = "Yaakov likes to eat healthy snacks!";
    msg = lovesFilter(msg);
    return msg;
  };

  $scope.feedYaakov = function (){
    $scope.stateOfYaakov = "fed";
  };
};

  function LovesFilter(){
      return function (input) {
        input = input || "";
        input = input.replace("likes","loves");
        return input;
    };
  }

  function TruthFilter(){
    return function (input,target,replace){
      input = input || "";
      input = input.replace(target,replace);
      return input;
    };
  }



})();
