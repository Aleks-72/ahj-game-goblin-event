export default class Field {
    constructor(element) {
        this._element = element
    }

    createFieldBoxes(size) {
        let gameField = document.createElement("div")
        gameField.classList.add("game-field")
        let n = size**2;
        while (n>0) {
            let box = document.createElement("div")
            box.classList.add("field-box")
            gameField.append(box)
            n = n-1
        }
        this._element.append(gameField)
    }
}