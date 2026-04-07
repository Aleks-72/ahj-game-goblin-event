import GameMenu from "./menu";

export default class Page {
    constructor(element) {
        this._element = element;
    }

    generateHeader() {
        let  header  = document.createElement("header")
        header.textContent = "Goblin Killer Game"
        this._element.append(header)
    }

    generateMain() {
        let main = document.createElement("main")
        this._element.append(main)
        const menu = new GameMenu(main)
        menu.generateMenu()
    }
}