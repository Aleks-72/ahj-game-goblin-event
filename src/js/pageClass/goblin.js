import image from '../../pic/goblin.png'

export default class Goblin {
    constructor(element) {
        this._element = element
    }

    createGoblin() {
        let goblin = document.createElement("img")
        goblin.src = image
        goblin.alt = "гоблин"
        goblin.classList.add("goblin")
        this._element.append(goblin)
    }
}