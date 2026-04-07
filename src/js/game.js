import Goblin from "./pageClass/goblin";

export default class Game {
    constructor(gameMenu) {
        this.score = 0;
        this.error = 0;
        this.fieldGame = document.querySelector(".game-field")
        this.gameMenu = gameMenu //new GameMenu(document.querySelector("main"))
        this.goblinGenerate = null
        this.handleClick = (event) => {
            const isGoblinHit = event.target.closest('.goblin');
            console.log(this.gameMenu)
            if (isGoblinHit) {
                this.score += 1;
                console.log('Попал! Счет: ' + this.score);
                this.gameMenu.updateMenu(this.score, this.error)
                isGoblinHit.remove(); 
            } else {
                this.error += 1;
                console.log('Промах! Ошибок: ' + this.error);
                this.gameMenu.updateMenu(this.score, this.error)
            }
            if (this.score === 16) {
                alert("You win!")
                this.stopGame()
            } else if (this.error === 5) {
                alert("You lose!")
                this.stopGame()
            }
        }
        
    }

    startGame() {
        this.stopGame()
        this.score = 0;
        this.error = 0;
        this.gameMenu.updateMenu(this.score, this.error)
        this.status = "active";
        // let fieldBoxes = (document.querySelectorAll(".field-box"));
        // let oldCount;
        // let count;
        this.fieldGame.addEventListener('click', this.handleClick)
        this.goblinGenerateStart()
    }

    goblinGenerateStart() {
        let fieldBoxes = (document.querySelectorAll(".field-box"));
        let oldCount;
        let count;
        this.goblinGenerate = setInterval(() => {
            let oldGoblin = document.querySelector("img")
            if (oldGoblin) {
                oldGoblin.remove()
            }
            count = Math.floor(Math.random()*(16));
            while (count === oldCount) {
                count = Math.floor(Math.random()*(16));
            };
            let goblin = new Goblin(fieldBoxes[count]);
            goblin.createGoblin()
            oldCount = count;
            if (this.status === "end") {
                clearInterval(this.goblinGenerate)
                this.goblinGenerate = null
            }
        }, 1000);
    }

    stopGame() {
        this.status = "end"
        clearInterval(this.goblinGenerate)
        this.goblinGenerate = null
        this.fieldGame.removeEventListener('click', this.handleClick)
        console.log("Game is stopping!")
    }
}

