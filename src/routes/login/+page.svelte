<script lang="ts">
    import PopupForm from "$lib/components/PopupForm.svelte";
    import TextBox from "$lib/components/TextBox.svelte";
    import PrimaryButton from "$lib/components/PrimaryButton.svelte";

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

<PopupForm title='Login'>
    <TextBox label='Username' bind:value={username}/>
    <TextBox label='Password' isPassword={true} bind:value={password}/>
    <PrimaryButton onclick={login}>Log In</PrimaryButton>
</PopupForm>
