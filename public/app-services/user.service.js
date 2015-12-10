﻿(function () {
    'use strict';

    angular.module('app').factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        //service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll() {
            return $http.get('/api/v1/users').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('/api/v1/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        //function GetByUsername(username) {
        //    return $http.get('/api/v1/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
        //}

        function Create(user) {
            return $http.post('/api/v1/users', user).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put('/api/v1/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('/api/v1/users/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        // private functions
        function handleSuccess(res) {
            console.log(res.data);
            return res.data._results;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
