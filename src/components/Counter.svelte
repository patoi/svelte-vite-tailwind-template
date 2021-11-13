<script>
	import { count } from '../stores'
</script>

<button class="px-8 py-4 w-52 text-red-500 bg-red-200 rounded-sm" on:click={() => ($count += 1)}>
	Clicks: {$count}
</button>
