<script lang="ts">
    export let title: String;
</script>

<div class="flex items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-800 w-full min-h-svh">
    <div class="flex flex-col h-fit bg-zinc-700 p-8 border-zinc-600 rounded-lg border gap-3">
        <h1 class="text-white text-center font-bold text-xl">{title}</h1>
        <slot></slot>
    </div>
</div>
