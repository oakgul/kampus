<template>
    <div class="dashboard-header">
        <img src="@/assets/logo.svg" alt="kampusDuy Logo">

        <div class="settings">
            <div class="notification"></div>
            <img class="settings-icon" src="@/assets/bell.svg" alt="bell">
            <img class="settings-icon" src="@/assets/settings.svg" alt="bell">
        </div>
    </div>
</template>

<style lang="scss" scoped>

.dashboard-header {
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .settings {
        position: relative;

        .notification {
            width: 10px;
            height: 10px;
            background-color: orangered;
            border: 2px solid white;
            border-radius: 50%;
            position: absolute;
            // top: 5px;
            left: 35px;
        }
        .settings-icon {
            padding-left: 20px;
        }
    }    
}   

</style>