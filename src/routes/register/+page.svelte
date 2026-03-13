<script lang="ts">
    import PopupForm from "$lib/components/PopupForm.svelte";
    import TextBox from "$lib/components/TextBox.svelte";
    import PrimaryButton from "$lib/components/PrimaryButton.svelte";

    let username = $state('');
    let password = $state('');
    let password_confirm = $state('');

    async function register() {
        if (password !== password_confirm) {
            alert("Passwords do not match");
            return;
        }

        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'content-type': 'application/json'
            }
        });
    }
</script>

<PopupForm title='Register'>
    <TextBox label='Username' bind:value={username}/>
    <TextBox label='Password' isPassword={true} bind:value={password}/>
    <TextBox label='Confirm password' isPassword={true} bind:value={password_confirm}/>
    <PrimaryButton onclick={register}>Log In</PrimaryButton>
</PopupForm>
