angular.module("marvelApp", []).factory("Characters", function($q, $http){
    return {
        listar : function(nome) {
            var promise = $q.defer();
            var list = [];
            $http.get(`https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=bd4b447a65ef5d6b174f87cf9db6d2db&nameStartsWith=${nome}`).then(
                list = function(result){
                    angular.forEach(result, function(characters){
                        console.log(characters)
                        list.push(characters);
                    })
                    promise.resolve(list);
                }
            );
            return promise.promise;
        }
    };
});