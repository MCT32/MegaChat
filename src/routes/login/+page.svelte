<script lang="ts">
    let username = $state('');
    let password = $state('');

    async function login() {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'content-type': 'application/json'
            }
        });
    }
</script>

<div class="flex items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-800 w-full min-h-svh">
    <div class="flex flex-col h-fit bg-zinc-700 p-8 border-zinc-600 rounded-lg border gap-3">
        <h1 class="text-white text-center font-bold text-xl">Login</h1>
        <label class="text-white">
            Username
            <br>
            <input bind:value={username} type="text" class="bg-transparent border-zinc-600 rounded-md border w-64">
        </label>
        <label class="text-white">
            Password
            <br>
            <input bind:value={password} type="password" class="bg-transparent border-zinc-600 rounded-md border w-64">
        </label>
        <button onclick={login} class="text-white bg-green-500 w-fit self-center px-2 py-1 rounded-md shadow-lg">Log In</button>
    </div>
</div>