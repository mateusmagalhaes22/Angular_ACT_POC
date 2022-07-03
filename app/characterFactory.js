angular.module("app", []).factory("Characters", function($q, $http){
    return {
        listar : function(nome) {
            var promise = $q.defer();
            var list;
            $http.get("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=bd4b447a65ef5d6b174f87cf9db6d2db").then(
                list = function(result){
                    return result;
                }
            );
            return list
        }
    };
});