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
	board: [],
	pawns: [],

	createBoard: (numberOfSpaces) => {
		const arena = document.getElementById('game_arena')
		for (n = 1; n <= Math.sqrt(numberOfSpaces); n ++){
				for (s = 1; s <= Math.sqrt(numberOfSpaces); s++ ) {
					const space = new Space(n,s)
					app.board.push(space)
					let square = document.createElement('div')
					square.dataset.file = `${s}`
					square.dataset.rank = `${n}` 
					square.classList.add('space')
					if( (n + s) % 2 === 0 ){
						square.classList.add('white')
					} else {
						square.classList.add('black')
					}
					arena.appendChild(square)
			}
		}
	},
	

	createWhitePawns: (numberOfPawns) => {  
		for (i = 1; i <= numberOfPawns; i ++){
		 	let whitePawn = new Pawn(`white`, 7, i )
		 	app.pawns.push(whitePawn);
		}

	},

	createBlackPawns: (numberOfPawns) => {
		let blackFile = document.querySelectorAll(`[data-rank='${app.board[9].rank}']`)
		for (i = 0; i < numberOfPawns; i ++){
		 	let blackPawn = new Pawn(`black`, 2, i )
		 	app.pawns.push(blackPawn);
		 	let bPawn = document.createElement('div')
		 	bPawn.classList.add('black_pawn')
		 	for (n = 0; n < blackFile.length; n++){
		 		if (n === i) {
		 			console.log(n , i);
		 			console.log(blackFile[n]);
		 			blackFile[n].appendChild(bPawn)
		 		}
		 	}

		}
		console.log(blackFile[0]);
	},

}





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	




app.createBoard(64)
app.createWhitePawns(8)
app.createBlackPawns(8)

document.addEventListener('click', (event) => {
       console.log(event.target);;
    })

	