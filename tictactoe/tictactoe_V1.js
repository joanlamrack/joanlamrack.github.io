class TicTacToeGameSession {
	constructor(firstPlayer, secondPlayer, boardSize, defaultvalue = []) {
		this.currentTurn = firstPlayer;
		this.firstPlayer = firstPlayer;
		this.secondPlayer = secondPlayer;
		this.defaultvalue = defaultvalue;
		this.stopGame = false;
		this.gameStatus = "Current Turn: " + firstPlayer;
		this.board = this.generateBoard(boardSize, defaultvalue);
	}

	generateBoard(num, default_value = []) {
		let output = [];
		for (let i = 0; i < num; i++) {
			output.push([]);
			for (let j = 0; j < num; output[i].push(default_value), j++);
		}
		return output;
	}

	TakeTurn(x, y) {
		if (!this.stopGame) {
			if (this.board[x][y] === this.defaultvalue) {
				this.board[x][y] = this.currentTurn;
				if (this.whoIsWinningTicTacToe(this.board, this.currentTurn)) {
					this.gameStatus = this.currentTurn + " Wins";
					this.stopGame = true;
				}
				if (this.isBoardFull(this.board, this.defaultvalue)) {
					this.gameStatus = "Draw";
					this.stopGame = true;
				}

				if (!this.stopGame) this.NextTurn();
				return true;
			} else {
				return false;
			}
		}
	}

	NextTurn() {
		this.currentTurn =
			this.currentTurn === this.firstPlayer
				? this.secondPlayer
				: this.firstPlayer;
		this.gameStatus = "Current Turn: " + this.currentTurn;
	}

	isBoardFull(paramArray, defaultvalue) {
		for (let column of paramArray) {
			for (let row of column) {
				if (row === defaultvalue) {
					return false;
				}
			}
		}
		return true;
	}

	getGameStatus() {
		return this.gameStatus;
	}

	whoIsWinningTicTacToe(paramArray, player) {
		let score = 0;
		let score2 = 0;

		for (let i = 0; i < paramArray.length; i++) {
			for (let j = 0; j < paramArray.length; j++) {
				if (paramArray[i][j] === player) {
					score++;
				}
				if (paramArray[j][i] === player) {
					score2++;
				}
			}
			if (score === paramArray.length || score2 === paramArray.length) {
				return true;
			}
			score = 0;
			score2 = 0;
		}

		for (
			let i = 0, j = paramArray.length - 1;
			i < paramArray.length;
			i++, j--
		) {
			if (paramArray[i][i] === player) {
				score++;
			}
			if (paramArray[i][j] === player) {
				score2++;
			}
		}
		return score === paramArray.length || score2 === paramArray.length;
	}

	PrintBoard() {
		for (let row of this.board) {
			console.log(row);
		}
	}
}
