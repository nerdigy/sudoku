<script lang="ts">
	import { board, editBlock, resetBoard } from '$lib/board';
	import { solveSudoku } from '$lib/engine';
	import SudokuGrid from '../components/SudokuGrid.svelte';

	function onKeyDown(event: KeyboardEvent) {
		if ($editBlock >= 0) {
			const row = Math.floor($editBlock / 9);
			const column = $editBlock % 9;

			if (/^[0-9]$/i.test(event.key)) {
				$board[row][column] = parseInt(event.key);
			} else if (event.code === 'Backspace') {
				$board[row][column] = 0;
			}
		}
	}

	function clickOutside(node: HTMLElement) {
		function handleClick(event: MouseEvent) {
			if (event.target instanceof Node && !node.contains(event.target)) {
				editBlock.update(() => -1);
			}
		}

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

	function solve() {
		solveSudoku($board);
		$board = $board;
	}
</script>

<div class="mx-auto max-w-md container mt-10" use:clickOutside>
	<div class="grid grid-cols-3">
		<div>
			<SudokuGrid row={1} column={1} />
			<SudokuGrid row={2} column={1} />
			<SudokuGrid row={3} column={1} />
		</div>
		<div>
			<SudokuGrid row={1} column={2} />
			<SudokuGrid row={2} column={2} />
			<SudokuGrid row={3} column={2} />
		</div>
		<div>
			<SudokuGrid row={1} column={3} />
			<SudokuGrid row={2} column={3} />
			<SudokuGrid row={3} column={3} />
		</div>
	</div>

	<div class="mt-6 space-y-3">
		<button
			type="button"
			class="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 w-full active:bg-sky-600"
			on:click={solve}
		>
			Solve
		</button>

		<button
			type="button"
			class="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 w-full active:bg-red-600"
			on:click={resetBoard}
		>
			Reset
		</button>
	</div>
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />
