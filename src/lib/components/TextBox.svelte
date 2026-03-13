<script lang="ts">
    export let label:String;
    export let value:String = '';
    export let isPassword:boolean = false;
</script>

<label class="text-white">
    {label}
    <br>
    <input bind:value type={isPassword ? 'password' : 'text'} class="bg-transparent border-zinc-600 rounded-md border w-64">
</label>