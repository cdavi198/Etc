<template>
<div>
    <b-navbar type="dark" variant="info">
        <b-navbar-nav>
            <b-navbar-brand href="#">Etc</b-navbar-brand>
            <b-nav-item to="/" href="#">Home</b-nav-item>
            <b-nav-item to="/health" href="#">Health</b-nav-item>
            <b-nav-item-dropdown text="Activities" href="#">
                <b-dropdown-item href="#">Golf</b-dropdown-item>
                <b-dropdown-item href="#">DnD</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item>
                <b-button variant="light" size="sm" right @click="signIn()">Sign In</b-button>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</div>
</template>

<script>
export default {
    components: {},
    methods: {
        signIn: function () {
            console.log("sign in");
        }
    }
}
</script>

<style lang="scss">
    .login {
        color: blue
    }
</style>