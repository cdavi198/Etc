<template>
<div>
    <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
            <b-navbar-brand href="#">Etc...</b-navbar-brand>
            <b-nav-item to="/" href="#">Home</b-nav-item>
            <b-nav-item to="/health" href="#">Gallery</b-nav-item>
            <b-nav-item-dropdown text="Activities" href="#">
                <b-dropdown-item href="/dnd">DnD</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/golf" href="#">Golf</b-nav-item>
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