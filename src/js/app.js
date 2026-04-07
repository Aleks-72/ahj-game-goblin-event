import Field from "./pageClass/fieldGame"
import Game from "./game";
import GameMenu from "./pageClass/menu";

export default function generatePage() {
    const page =document.querySelector("body");
    let  header  = document.createElement("header")
    header.textContent = "Goblin Killer Game"
    page.append(header)
    let main = document.createElement("main")
    page.append(main)
    const menu = new GameMenu(main)
    const field = new Field(document.querySelector("main"));
    field.createFieldBoxes(4);
    let game = new Game(menu);
    menu.buttonRestartListener(() => game.startGame())
    game.startGame();
}

