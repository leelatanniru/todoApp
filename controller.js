var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
	.when("/login", {
	    templateUrl : "./loginform.html"
	})
	.when("/test", {
	    templateUrl : "./dashboard.html"
	})
	
    .otherwise({
        template : "<h1></h1>"
    });
});
app.controller('myctrl', function($scope){
	
	
	});
	app.controller('dashboardctrl', function($scope){
	console.log("testing");
	
	$scope.status = true;
// $scope.works = [{
	// "disabled" : true,
	// "value" :"This is First Work "
// },{
	// "disabled" : true,
	// "value" :"This is Second Work "
// }];
// $scope.works = [];
// localStorage["mydatas"] = JSON.stringify($scope.works);
if(localStorage.getItem("mydatas")===null){
	$scope.works = []; 
    
} else {
    $scope.works = JSON.parse(localStorage["mydatas"]); 
	console.log("values are present");
	console.log($scope.works);
}
// $scope.works = JSON.parse(localStorage["mydatas"]); 
// localStorage["mydatas"] = JSON.stringify($scope.works);
	//$scope.new_item = 'abc';
	 console.log("debug1");
	// $scope.todayTime = new Date().toLocaleTimeString();
	// $interval(function () {
        // $scope.todayTime = new Date().toLocaleTimeString();
    // }, 1000);
	$scope.addItem = function(){
		console.log("debug");
		var item={
			"disabled" : true,
			"value" : $scope.new_item
		}
		$scope.works.push(item);
		console.log($scope.works);
		// localStorage["mydatas"] = JSON.stringify($scope.works);
		localStorage.setItem("mydatas", JSON.stringify($scope.works));
		$scope.new_item = "";
	};
	
	$scope.removeItem = function(index){
		$scope.works.splice(index, 1);
		localStorage["mydatas"] = JSON.stringify($scope.works);
		
		console.log(index);
	};
	
	$scope.checkDisabled=function(index){
		
		return true;
	};
	
	$scope.showEdit = function(val){ //can we do this inline?
		if(val == true){
			return true;
		}
	};
	$scope.showSave = function(val){
		if(val == false){
			return true;
		}
	};
	$scope.EditItem = function(x){
		console.log("hello");
		console.log(x);
		x.disabled = !x.disabled;
	}
	
	$scope.SaveItem = function(x){
		console.log("after clicking save");
		console.log(x);
		x.disabled = !x.disabled;
		console.log("array now is");
		console.log($scope.works);
		localStorage.setItem("mydatas", JSON.stringify($scope.works));
		// localStorage["mydatas"] = JSON.stringify($scope.works);
	}
	// 
	// $scope.addItem = funciton(){	
		// $scope.works.push($scope.new_item);
	//}
	
});



