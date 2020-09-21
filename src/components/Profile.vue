<template>
    <div class="profile">

        <img class="dashboard-image" src="@/assets/orhanprofil.jpg" alt="profile">
        <div class="user-name">Orhan Akgül</div>    
        <div class="department">Bilgisayar Mühendisliği</div>

        <div class="sidebar-buttons">
            <img class="sidebar-icons" src="@/assets/plus-square.svg" alt="announce">
            <span>DUYURU YAP</span>
        </div>
        <div class="sidebar-buttons">
            <img class="sidebar-icons" src="@/assets/file-text.svg" alt="announce">
            <span>DERS NOTLARI</span>
        </div>
        <div class="sidebar-buttons">
            <img class="sidebar-icons" src="@/assets/help-circle.svg" alt="announce">
            <span>SORU SOR</span>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@import '@/main.scss';

.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 350px;
    height: calc(100vh - 66px);
    background: $main-color;
    border-top-left-radius: 56px;


    .dashboard-image {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-top: 40px;
    }

    .user-name {
        font-size: 20px;
        margin-top: 10px;
        color: $title-color;
    }

    .department {
        margin-top: 5px;
        margin-bottom: 150px;
        color: $title-color-gray;

    }

    .sidebar-buttons {
        width: 260px;
        height: 80px;
        background-color: #ACB1CA;
        text-align: center;
        line-height: 80px;
        margin-bottom: 20px;
        border-radius: 40px;
        position: relative;
        font-size: 18px;
        cursor: pointer;
        transition: 500ms all;
        border: 1px solid white;

        &:hover {
            background: white;
            color: gray;
            filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.2));
            margin-left: 10px;
            border: 1px dashed gray;
        }

        .sidebar-icons {
            width: 42px;
            height: 42px;
            position: absolute;
            left: 20px;
            top: 20px;
        }
    }
}

</style>