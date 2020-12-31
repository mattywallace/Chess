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
	whitePawns: [],
	blackPawns: [],

	createBoard: (numberOfSpaces) => {
		const arena = document.getElementById('game_arena')
		for (n = 0; n < Math.sqrt(numberOfSpaces); n ++){
				for (s = 0; s < Math.sqrt(numberOfSpaces); s++ ) {
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
		let whiteFile = document.querySelectorAll(`[data-rank='${app.board[53].rank}']`)
		console.log(whiteFile);
		for (i = 0; i < numberOfPawns; i ++){
		 	let whitePawn = new Pawn(`white`, 6, i )
		 	app.whitePawns.push(whitePawn);
		 	let wPawn = document.createElement('div')
		 	wPawn.classList.add('white_pawn')
		 	for (n = 0; n < whiteFile.length; n++){
		 		if ( n === i ) {
		 			whiteFile[n].appendChild(wPawn)
		 			wPawn.dataset.file = `${i}`
		 			wPawn.dataset.rank = `${app.board[53].rank}`
		 		}
		 	}

		 }
	},

	

	createBlackPawns: (numberOfPawns) => {
		let blackFile = document.querySelectorAll(`[data-rank='${app.board[13].rank}']`)
		console.log(blackFile);
		for (i = 0; i < numberOfPawns; i ++){
		 	let blackPawn = new Pawn(`black`, 1, i )
		 	app.blackPawns.push(blackPawn);
		 	let bPawn = document.createElement('div')
		 	bPawn.classList.add('black_pawn') 
		 	for (n = 0; n < blackFile.length; n++){
		 		if (n === i) {
		 			console.log(n , i);
		 			bPawn.dataset.file = `${i}`
		 			bPawn.dataset.rank = `${app.board[13].rank}`
		 			console.log(blackFile[n]);
		 			blackFile[n].appendChild(bPawn)
		 		}
		 	}

		}
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

	