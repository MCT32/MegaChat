<script lang="ts">
    export let onclick: () => void = () => {};
</script>

<button onclick={onclick} class="text-white bg-green-500 w-fit self-center px-2 py-1 rounded-md shadow-lg"><slot /></button>
