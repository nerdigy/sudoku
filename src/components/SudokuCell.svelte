<script lang="ts">
	import { board, editBlock } from '$lib/board';

	export let row: number;
	export let column: number;

	const CELL_NUMBER = row * 9 + column;

	function setEditBlock() {
		editBlock.update(() => CELL_NUMBER);
	}
</script>

<div
	class="border-2 flex justify-center items-center text-slate-500 cursor-pointer"
	class:bg-sky-200={$editBlock === CELL_NUMBER}
	class:text-slate-950={$editBlock === CELL_NUMBER}
	on:click={setEditBlock}
>
	{$board[row][column] > 0 ? $board[row][column] : ''}
</div>
