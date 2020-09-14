<template>
    <header class="header">
        <div class="logo">
            <img src="../assets/logo.svg" alt="logo">
        </div>
        <div class="nav">
            <router-link class="nav-items" to="/">Anasayfa</router-link>
            <router-link class="nav-items" to="/about">Hakkında</router-link>
            <router-link class="nav-items" to="/register">Kayıt</router-link>
            <router-link class="nav-items" to="/login">Giriş</router-link>
        </div>
    </header>
</template>



<style scoped>
    .header {
        max-width: 1366px;
        margin-right:auto;
        margin-left:auto;
        height: 66px;
        /* background-color: darkseagreen; */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .nav-items {
        font-family: Roboto;
        /* font-weight: bold; */
        font-size: 20px;
        color: #2F1728;
        margin-left: 80px;
    }

    .nav-items:hover {
        color: orange;
    }

</style>