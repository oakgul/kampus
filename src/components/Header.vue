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

<style lang="scss" scoped>
@import '@/main.scss';

.header-container {

    .header {
        max-width: 1366px;
        margin-right:auto;
        margin-left:auto;
        height: 66px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .nav {
            .nav-items {
                font-size: 18px;
                color: #525f7f;
                margin-left: 80px;

                &:hover {
                    color: #FFD037;
                }
            } 
        }
    }
}    

</style>