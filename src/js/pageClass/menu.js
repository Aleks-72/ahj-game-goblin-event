export default class GameMenu {
    constructor(element) {
        this._element = element;
        this.generateMenu();
        this.buttonRestart = document.querySelector("button")
    }

    generateMenu(score = 0, error = 0) {
        let menu  = document.createElement("div")
        menu.classList.add('menu')
        let buttonRestart = document.createElement("button")
        buttonRestart.textContent = "Перезапустить игру"
        let stats = document.createElement("div")
        stats.classList.add("game-info")
        let scoreDisplay = document.createElement('div');
        scoreDisplay.classList.add('info-item');
        scoreDisplay.classList.add('score');
        scoreDisplay.textContent = `Счет: ${score}`
        let errorDisplay = document.createElement('div');
        errorDisplay.classList.add('info-item');
        errorDisplay.classList.add('error');
        errorDisplay.textContent = `Ошибок: ${error}`
        stats.append(scoreDisplay)
        stats.append(errorDisplay)
        menu.append(buttonRestart)
        menu.append(stats)
        this._element.append(menu)
    }

    updateMenu(score, error) {
        let scoreDisplay = document.querySelector('.score')
        scoreDisplay.textContent = `Счет: ${score}`
        let errorDisplay = document.querySelector('.error')
        errorDisplay.textContent = `Ошибок: ${error}`
    }

    buttonRestartListener(restartHandler) {
        console.log(this.buttonRestart)
        // this.restartCallback = () => {
        //     restartHandler();
        // };
        this.buttonRestart.addEventListener('click', () => restartHandler())
    }
}