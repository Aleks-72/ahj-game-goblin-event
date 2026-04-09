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
        let statusDisplay = document.createElement('div');
        statusDisplay.classList.add('info-item');
        statusDisplay.classList.add('status');
        statusDisplay.textContent = `Статус: Игра начата`
        stats.append(scoreDisplay)
        stats.append(errorDisplay)
        stats.append(statusDisplay)
        menu.append(buttonRestart)
        menu.append(stats)
        this._element.append(menu)
    }

    updateMenu(score, error, status) {
        let scoreDisplay = document.querySelector('.score')
        scoreDisplay.textContent = `Счет: ${score}`
        let errorDisplay = document.querySelector('.error')
        errorDisplay.textContent = `Ошибок: ${error}`
        let statusDisplay = document.querySelector('.status')
        statusDisplay.textContent = `Статус: ${status==="active" ? "Игра начата" : status==="win"? "Победа!" : "Поражение!"}`
    }

    buttonRestartListener(restartHandler) {
        this.buttonRestart.addEventListener('click', () => restartHandler())
    }
}