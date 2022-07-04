angular.module("marvelApp", []).controller("CharacterController", function() {
    const characterController = this;
    characterController.characterName = '';
    characterController.characterList = [];
    characterController.search = () => {
        characterController.characterList = [];
        characterController.characterList.push(characters.listar(this.characterName));
    };
});