<template>
    <header class="header-container">
    <div class="header">
        <div class="logo">
            <img src="@/assets/logo.svg" alt="logo">
        </div>
        <div class="nav">
            <router-link class="nav-items" to="/">Anasayfa</router-link>
            <router-link class="nav-items" to="/about">Hakkında</router-link>
            <router-link class="nav-items" to="/register">Kayıt</router-link>
            <router-link class="nav-items" to="/login">Giriş</router-link>
        </div>
    </div>
    </header>
</template>

<style scoped>

    .header-container {
        width: 100%;
        /* background: white; */
        /* border-bottom: 1px solid #e8e8e8;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,.05); */
    }

    .header {
        max-width: 1366px;
        margin-right:auto;
        margin-left:auto;
        height: 66px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .nav-items {
        font-family: Asap;
        font-size: 18px;
        color: #525f7f;
        margin-left: 80px;
    }

    .nav-items:hover {
        color: #FFD037;
    }

</style>