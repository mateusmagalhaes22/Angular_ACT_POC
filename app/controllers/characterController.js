angular.module("app", []).controller("CharacterController", function CharacterController(Characters) {
    const characterController = this;
    characterController.characterList = []
    characterController.search = (nome) => {
        this.characterList.push(Characters.listar(nome))
    }
})