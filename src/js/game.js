import Goblin from "./pageClass/goblin";

export default class Game {
    constructor(gameMenu) {
        this._max_score = 16;
        this._max_error = 5;
        this.score = 0;
        this.error = 0;
        this.fieldGame = document.querySelector(".game-field")
        this.gameMenu = gameMenu
        this.goblinClick = false
        this.goblinGenerate = null
        this.handleClick = (event) => {
            const isGoblinHit = event.target.closest('.goblin');
            if (isGoblinHit) {
                this.score += 1;
                this.goblinClick = true
            }
            if (this.score === this._max_score) {
                this.status = "win"
                this.stopGame("Win")
            }
        }
        
    }

    startGame() {
        this.stopGame()
        this.score = 0;
        this.error = 0;
        this.status = "active";
        this.gameMenu.updateMenu(this.score, this.error, this.status)
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
            if (this.goblinClick === false) {
                this.error +=1
                if (this.error === this._max_error) {
                    this.status= "lose"
                    this.stopGame("Lose")
            }
            }
            count = Math.floor(Math.random()*(fieldBoxes.length));
            while (count === oldCount) {
                count = Math.floor(Math.random()*(fieldBoxes.length));
            };
            let goblin = new Goblin(fieldBoxes[count]);
            goblin.createGoblin()
            oldCount = count;
            this.goblinClick=false
            this.gameMenu.updateMenu(this.score, this.error, this.status)
            if (this.status === "end") {
                clearInterval(this.goblinGenerate)
                this.goblinGenerate = null
            }
        }, 1000);
    }

    stopGame() {
        this.gameMenu.updateMenu(this.score, this.error, this.status)
        clearInterval(this.goblinGenerate)
        this.goblinGenerate = null
        this.fieldGame.removeEventListener('click', this.handleClick)
    }
}

