<template>
    <div class="profile">

        <img class="dashboard-image" src="@/assets/orhanprofil.jpg" alt="profile">
        <div class="name">Orhan Akgül</div>    
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

    .profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        // max-width: 200px;   // daha sonra kaldır!!!
        min-width: 345px;
        height: 100vh;
        background: #F5F5FF;
        border-top-left-radius: 56px;

        .settings {
            position: relative;
        }

        .notification {
            width: 10px;
            height: 10px;
            background-color: orangered;
            border: 2px solid #F5F5FF;;
            border-radius: 50%;
            position: absolute;
            top: 5px;
            right: -17px;
        }

        .dashboard-image {
    width: 150px;
    height: 150px;
}

.name {
    font-family: Roboto;
    font-size: 20px;
    margin-top: 10px;
}

.department {
    margin-top: 5px;
    margin-bottom: 150px;
    font-family: Roboto;
}

.settings-icon {
    width: 32px;
    height: 32px;
    margin-left: 110px;
    margin-right: -80px;
    margin-bottom: 20px;
    cursor: pointer;
}

.sidebar-buttons {
    width: 260px;
    height: 80px;
    background-color: #E3E3FC;
    text-align: center;
    line-height: 80px;
    margin-bottom: 20px;
    border-radius: 40px;
    position: relative;
    font-family: Roboto;
    font-size: 18px;
    cursor: pointer;
    transition-duration: 500ms;
    border: 1px solid white;
}

.sidebar-buttons:hover {
    background: white;
    color: gray;
    filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.2));
    margin-left: 20px;
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

</style>