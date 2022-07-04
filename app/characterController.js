angular.module("marvelApp", []).controller("CharacterController", function($q, $http) {
    const characterController = this;
    characterController.characterName = '';
    characterController.characterList = [];
    characterController.search = function(service) {
        characterController.characterList = [];
        characterController.characterList.push(characterController.listar(characterController.characterName));
    };
    characterController.listar = (nome) => {
        var promise = $q.defer();
        var list = [];
        $http.get(`https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=bd4b447a65ef5d6b174f87cf9db6d2db&nameStartsWith=${nome}`).then(
            function(result){
                angular.forEach(result, function(){
                    list.push(result);
                });
                promise.resolve(list);
            }
        );
        return list;
    }
});