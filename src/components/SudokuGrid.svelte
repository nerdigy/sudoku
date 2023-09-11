<script lang="ts">
	import SudokuCell from './SudokuCell.svelte';

	export let row: number;
	export let column: number;
</script>

<div class="h-36 border-slate-400 border-2 grid grid-rows-3">
	<div class="grid grid-cols-3">
		<SudokuCell row={(row - 1) * 3} column={(column - 1) * 3 + 0} />
		<SudokuCell row={(row - 1) * 3} column={(column - 1) * 3 + 1} />
		<SudokuCell row={(row - 1) * 3} column={(column - 1) * 3 + 2} />
	</div>
	<div class="grid grid-cols-3">
		<SudokuCell row={(row - 1) * 3 + 1} column={(column - 1) * 3 + 0} />
		<SudokuCell row={(row - 1) * 3 + 1} column={(column - 1) * 3 + 1} />
		<SudokuCell row={(row - 1) * 3 + 1} column={(column - 1) * 3 + 2} />
	</div>
	<div class="grid grid-cols-3">
		<SudokuCell row={(row - 1) * 3 + 2} column={(column - 1) * 3 + 0} />
		<SudokuCell row={(row - 1) * 3 + 2} column={(column - 1) * 3 + 1} />
		<SudokuCell row={(row - 1) * 3 + 2} column={(column - 1) * 3 + 2} />
	</div>
</div>
