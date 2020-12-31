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

	createBoard: (numberOfSpaces) => {
		const arena = document.getElementById('game_arena')
		for (n = 1; n <= Math.sqrt(numberOfSpaces); n ++){
				for (s = 1; s <= Math.sqrt(numberOfSpaces); s++ ) {
					const space = new Space(n,s)
					app.board.push(space)
					let square = document.createElement('div')
					square.dataset.rank_and_file = `${n},${s}` 
					square.classList.add('space')
					if( (n + s) % 2 === 0 ){
						square.classList.add('white')
					} else {
						square.classList.add('black')
					}
					arena.appendChild(square)
					console.log(square);
				}
		}
	},

}



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	




app.createPawns(12)
app.createBoard(64)
document.addEventListener('click', (event) => {
       console.log(event.target);;
    })

	