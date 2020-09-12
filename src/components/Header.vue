<template>
    <header class="header">
        <div class="logo">
            <img src="../assets/logo.svg" alt="logo">
        </div>
        <div class="nav">
            <router-link class="nav-items" to="/">HOME</router-link>
            <router-link class="nav-items" to="/about">ABOUT</router-link>
            <router-link class="nav-items" to="/register">REGISTER</router-link>
            <router-link class="nav-items" to="/login">LOGIN</router-link>
        </div>
    </header>
</template>



<style scoped>
    .header {
        width: 100%;
        height: 60px;
        /* background-color: darkseagreen; */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        margin-left: 200px;
    }

    .nav {
        margin-right: 200px;
    }

    .nav-items {
        font-family: Roboto;
        font-weight: bold;
        font-size: 24px;
        color: #2F1728;
        margin-left: 100px;
    }

</style>