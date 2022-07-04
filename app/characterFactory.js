angular.module("marvelApp", []).service("Characters", function($q, $http){
    const characterService = this;
    characterService.listar = (nome) => {
        var promise = $q.defer();
        var list = [];
        const result = $http.get(`https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=bd4b447a65ef5d6b174f87cf9db6d2db`).then(
            list = function(){
                angular.forEach(result, function(){
                    console.log(result)
                    list.push(result);
                });
                promise.resolve(list);
            }
        );
        return promise.promise;
    }
});