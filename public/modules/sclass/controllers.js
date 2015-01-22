'use strict';

angular.module('sclass')

.controller('sclassController',['$scope','$http','$location','AuthenticationService',function ($scope,$http,$location,AuthenticationService) {
	/*$scope.teachers = [
		{'name' : 'Teacher one','id':1},
		{'name' : 'Teacher Two','id':2},
		{'name' : 'Teacher Three',id:3}
	];

	$scope.classes = [
		{'name' : 'Class one','id':1},
		{'name' : 'Class Two','id':2},
		{'name' : 'Class Three',id:3}
	];*/
	var GetDetails = AuthenticationService.GetDetails();
	$http.get('/getteachers').success(function(resteacher){
        $scope.teachers = resteacher;
    })

    $http.get('/getclasses').success(function(resclass){
        $scope.classes = resclass;
    })	
	
	$scope.assignTeacher = function () {
		$http.post('/sclass',{teacher_id : $scope.teacher_id,class_id :$scope.class_id}).success(function(response){
               $scope.info = 'Teacher Assigned';
        })
	};

	if(GetDetails.currentUser.username!=null || GetDetails.currentUser.username!=''){
		$http.post('/viewclass',{}).success(function(listteacherdata){
	       $scope.listteacher = listteacherdata;
		})
	}
	
}]);