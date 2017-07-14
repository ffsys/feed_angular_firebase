app.controller('HomeController', ['$scope','$firebaseObject',
	function ($scope,$firebaseObject) {

		var ref=firebase.database().ref();
		$scope.dados=$firebaseObject(ref);




}]);


