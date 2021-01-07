console.log('hello world');


class Space {
	constructor (rank, file) {
		this.file = file 
		this.rank = rank
	}
}

class Pawn {
	constructor (color, rank, file){
		this.color = color
		this.rank = rank 
		this.file = file 
	}
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const app = {

	board: [],
	whitePawns: [],
	blackPawns: [],
	capturedPawns: [],

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
		for (i = 0; i < numberOfPawns; i ++){
		 	let whitePawn = new Pawn(`white`, 6, i )
		 	app.whitePawns.push(whitePawn);
		 	let wPawn = document.createElement('div')
		 	wPawn.classList.add('white_pawn')
		 	for (n = 0; n < whiteFile.length; n++){
		 		if ( n === i ) {
		 			wPawn.dataset.file = `${i}`
		 			wPawn.dataset.rank = `${app.board[53].rank}`
		 			whiteFile[n].appendChild(wPawn)
		 		}
		 	}
		}
	},

	createBlackPawns: (numberOfPawns) => {
		let blackFile = document.querySelectorAll(`[data-rank='${app.board[13].rank}']`)
		for (i = 0; i < numberOfPawns; i ++){
		 	let blackPawn = new Pawn(`black`, 1, i )
		 	app.blackPawns.push(blackPawn);
		 	let bPawn = document.createElement('div')
		 	bPawn.classList.add('black_pawn') 
		 	for (n = 0; n < blackFile.length; n++){
		 		if (n === i) {
		 			bPawn.dataset.file = `${i}`
		 			bPawn.dataset.rank = `${app.board[13].rank}`
		 			blackFile[n].appendChild(bPawn)
		 		}
		 	}
		}
	},

	selectWhitePawn: (file, rank) => {
		for (x = 0; x < app.whitePawns.length; x++){
			if (app.whitePawns[x].rank == rank && app.whitePawns[x].file == file) {
				let selectedPiece = document.querySelector(`[data-file='${app.whitePawns[x].file}'][data-rank='${app.whitePawns[x].rank}'] .white_pawn`)
				if (selectedPiece.classList.length === 2) {
					selectedPiece.classList.remove('selected_piece')			
					app.highlightWhiteMoves(selectedPiece)
				} else {
					selectedPiece.classList.add('selected_piece')
					app.highlightWhiteMoves(selectedPiece)
				}
			}
		}
	},

	selectBlackPawn: (file, rank) => {
		for (x = 0; x < app.blackPawns.length; x++){
			if (app.blackPawns[x].rank == rank && app.blackPawns[x].file == file) {
				let selectedPiece = document.querySelector(`[data-file='${app.blackPawns[x].file}'][data-rank='${app.blackPawns[x].rank}'] .black_pawn`)
				if (selectedPiece.classList.length === 2) {
					selectedPiece.classList.remove('selected_piece')
					app.highlightBlackMoves(selectedPiece)			
				} else {
					selectedPiece.classList.add('selected_piece')
					app.highlightBlackMoves(selectedPiece)
				}
			}
		}
	},

	highlightWhiteMoves: (selectedPiece) => {
		console.log('here is the selectedPiece', selectedPiece.dataset)
		for ( x = 0; x < app.board.length; x++){
			if (app.board[x].rank == selectedPiece.dataset.rank && app.board[x].file == selectedPiece.dataset.file){
				if ( app.board[x].rank === 6 ){ 
					for ( i = 0; i < 2; i ++) {
						let firstMoveSpaces = document.querySelector(`[data-file='${app.board[x].file}'][data-rank='${app.board[x].rank - (i+1)}']`)
						console.log(firstMoveSpaces.childNodes.length)
						if (firstMoveSpaces.childNodes.length === 1){
							console.log(selectedPiece.dataset.rank - 2)
							if (firstMoveSpaces.childNodes[0].dataset.rank == selectedPiece.dataset.rank - 2){
								let newAvailableMove = document.querySelector(`[data-file='${app.board[x].file}'][data-rank='${app.board[x].rank - 1}']`)
								if (newAvailableMove.classList.length < 3 ){
									newAvailableMove.classList.remove('available_space')
								} else {
									newAvailableMove.classList.add('available_space')
								}
							} else if (firstMoveSpaces.childNodes[0].dataset.rank == selectedPiece.dataset.rank - 1) {
								let newAvailableMove = document.querySelector(`[data-file='${app.board[x].file}'][data-rank='${app.board[x].rank - 1}']`)
								return 
							}
						} else if (firstMoveSpaces.childNodes.length === 0 && firstMoveSpaces.classList.length === 3){
							firstMoveSpaces.classList.remove('available_space')		
						} else {
							firstMoveSpaces.classList.add('available_space')
						}
					}	
				} else {
					let availableMove = document.querySelector(`[data-file='${app.board[x].file}'][data-rank='${app.board[x].rank - 1}']`)
					if (availableMove.childNodes.length === 1){
						return
					} else if (availableMove.classList.length === 3 ){
						availableMove.classList.remove('available_space')
					} else {
						availableMove.classList.add('available_space')
					}
				}
			}
		}
	},

	highlightBlackMoves: (selectedPiece) => {
		console.log('here is the selectedPiece', selectedPiece.dataset)
		for ( x = 0; x < app.board.length; x++){
			if (app.board[x].rank == selectedPiece.dataset.rank && app.board[x].file == selectedPiece.dataset.file){
				if (app.board[x].rank === 1 ){ 
					for ( i = 0; i < 2; i ++) {
						let firstMoveSpaces = document.querySelector(`[data-file='${app.board[x].file}'][data-rank='${app.board[x].rank + (i+1)}']`)
						console.log(firstMoveSpaces.childNodes.length)
						if (firstMoveSpaces.childNodes.length === 1){
							console.log(firstMoveSpaces.childNodes[0].dataset.rank)
							if (firstMoveSpaces.childNodes[0].dataset.rank == selectedPiece.dataset.rank - (-2) ){
								let newAvailableMove = document.querySelector(`[data-file='${app.board[x].file}'][data-rank='${app.board[x].rank + 1 }']`)
								console.log('here is the available move if white is in rank 2 ', newAvailableMove)
								if (newAvailableMove.classList.length < 3 ){
									newAvailableMove.classList.remove('available_space')
								} else {
									newAvailableMove.classList.add('available_space')
								}
							} else if (firstMoveSpaces.childNodes[0].dataset.rank == selectedPiece.dataset.rank - (-1) ) {
								let newAvailableMove = document.querySelector(`[data-file='${app.board[x].file}'][data-rank='${app.board[x].rank + 1}']`)
								console.log(newAvailableMove,' here is the available move when white is on rank 2')
								return 
							}
						} else if (firstMoveSpaces.childNodes.length === 0 && firstMoveSpaces.classList.length === 3){
							firstMoveSpaces.classList.remove('available_space')		
						} else {
							firstMoveSpaces.classList.add('available_space')
						}
					}	
				} else {
					let availableMove = document.querySelector(`[data-file='${app.board[x].file}'][data-rank='${app.board[x].rank + 1}']`)
					if (availableMove.childNodes.length === 1){
						return
					} else if (availableMove.classList.length === 3 ){
						availableMove.classList.remove('available_space')
					} else {
						availableMove.classList.add('available_space')
					}
				}
			}
		}
	},

	movePawn: (file, rank) => {
		console.log('available move being passed into move function', rank , file);
		let pawn = document.querySelector('.selected_piece')
		pawn.remove()
		for (x = 0; x < app.board.length; x++) {
			if ( app.board[x].rank == rank && app.board[x].file == file){
				let newPawnSpace = document.querySelector(`[data-file='${app.board[x].file}'][data-rank='${app.board[x].rank}']`)
				newPawnSpace.appendChild(pawn)
				pawn.classList.remove('selected_piece')
				let availableSpaces = document.querySelectorAll('.available_space')
				availableSpaces.forEach((space)=> {
					space.classList.remove('available_space')
				})
			}
		}
		app.transferPawnData(pawn,file,rank)
	},

	transferPawnData: (pawn, spaceFile, spaceRank ) => {
		console.log(pawn)
		console.log(spaceFile, spaceRank)
		if (pawn.classList.contains('white_pawn')){
			for ( x = 0 ; x < app.whitePawns.length; x++){
				if (app.whitePawns[x].file == pawn.dataset.file && app.whitePawns[x].rank == pawn.dataset.rank){
					app.whitePawns[x].file = parseInt(spaceFile)
					app.whitePawns[x].rank = parseInt(spaceRank)
					pawn.dataset.file = spaceFile
					pawn.dataset.rank = spaceRank
				}
			}
		} else if (pawn.classList.contains('black_pawn')){
			for ( x = 0 ; x < app.blackPawns.length; x++){
				if (app.blackPawns[x].file == pawn.dataset.file && app.blackPawns[x].rank == pawn.dataset.rank){
					app.blackPawns[x].file = parseInt(spaceFile)
					app.blackPawns[x].rank = parseInt(spaceRank)
					pawn.dataset.file = spaceFile
					pawn.dataset.rank = spaceRank
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



let board = document.getElementById('game_arena')
board.addEventListener('click', (event) => {
       if (event.target.classList.contains('white_pawn')){
       		console.log(event.target)
       		app.selectWhitePawn(event.target.dataset.file, event.target.dataset.rank)
       } else if (event.target.classList.contains('black_pawn')){
       		app.selectBlackPawn(event.target.dataset.file, event.target.dataset.rank)
       } else if (event.target.classList.contains('available_space')){
       		app.movePawn(event.target.dataset.file, event.target.dataset.rank)
       } else if (event.target.classList[0] === 'space'){
       	console.log('clicked a space')
       } else {
       	console.log('clicked')
       }
})






	