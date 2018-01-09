myApp.controller('RegistrationController', 
  ['$scope', 'Authentication', 
  function($scope, Authentication) {

  $scope.login = function() {
      var loggedIn = false;
    Authentication.login($scope.user);
      /*if($scope.user.name!==""){
          loggedIn = true;
          $scope.loggedIn = loggedIn;
          
      }*/
          
  };

  $scope.logout = function() {
    Authentication.logout();
  };

  $scope.register = function() {
    Authentication.register($scope.user);
  }; //register

}]); //Controller