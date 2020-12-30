console.log('hello world');


class Space {
	constructor (rank, file) {
		this.rank = rank
		this.file = file 
	}
}


class Pawn {
	constructor (color, rank, file){
		this.color = color
		this.rank = rank 
		this.file = file 
	}
	movePawn(newRank, newfile) {
		this.rank = newRank
		this.file = newFile
	}
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const app = {
	whitePawns : [],
	blackPawns: [],
	board: [],

	createPawns: (numberOfPawns) => {  
		for (i = 0; i < numberOfPawns; i ++){
			const whitePawn = new Pawn(`white`, 2, i + 1)
			const blackPawn = new Pawn(`black`, 7, i + 1)
			app.whitePawns.push(whitePawn)
			app.blackPawns.push(blackPawn)
		}

	},

	createBoardSpaces: (numberOfSpaces) => {
		for (n = 1; n <= Math.sqrt(numberOfSpaces); n ++){
				for (s = 1; s <= Math.sqrt(numberOfSpaces); s++ ) {
					const space = new Space(n,s)
					app.board.push(space)
				}
		}
		console.log(app.board);
	},

	createBoard: () => {
		const arena = document.getElementById('game_arena')
		console.log(arena);
		app.board.forEach(() => {
			let board = document.createElement('div')
			board.innerText = 'space'
			arena.appendChild(board)
		})
	}
		
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	




app.createPawns(12)
app.createBoardSpaces(64)
app.createBoard()