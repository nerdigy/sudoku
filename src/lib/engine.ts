type Board = Array<Array<number>>;

function isSafe(board: Board, row: number, col: number, num: number) {
	// Check the row
	for (let x = 0; x < 9; x++) {
		if (board[row][x] === num) {
			return false;
		}
	}

	// Check the column
	for (let x = 0; x < 9; x++) {
		if (board[x][col] === num) {
			return false;
		}
	}

	// Check the 3x3 box
	const startRow = row - (row % 3),
		startCol = col - (col % 3);
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (board[i + startRow][j + startCol] === num) {
				return false;
			}
		}
	}

	return true;
}

function findEmpty(board: Board) {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] === 0) {
				return [i, j]; // Return row and column
			}
		}
	}
	return false; // No empty spaces found
}

export function solveSudoku(board: Board) {
	let empty = findEmpty(board);
	if (!empty) return true; // No empty spaces, puzzle is solved

	let row = empty[0],
		col = empty[1];

	for (let num = 1; num <= 9; num++) {
		if (isSafe(board, row, col, num)) {
			board[row][col] = num;

			if (solveSudoku(board)) {
				return true; // Move to the next square
			}

			board[row][col] = 0; // Reset the current square (backtrack)
		}
	}

	return false; // Trigger backtracking
}
