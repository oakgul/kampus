<template>
    <div class="dashboard">

        <div class="school-announce">
            <div class="card">

                <div class="photo-date">
                    <img src="@/assets/orhanprofil.jpg" alt="profile">
                    <div class="date">
                        <div class="day">15</div>
                        <div class="month">EYL</div>
                        <div class="year">2020</div>
                    </div>
                </div>

                <div class="head-content">
                    <h1>PANDEMİ OKUL AÇILIŞ TARİHİ</h1>
                    <p>Sayın öğrenciler bildiğiniz üzere pandemi gerekçesiyle okulumuza ara vermek zorunda kaldık. Okulun ne zmaan açılacağı...</p>
                </div>
            </div>

            
        </div>
        <div class="school-announce">
            <div class="card">

                <div class="photo-date">
                    <img src="@/assets/orhanprofil.jpg" alt="profile">
                    <div class="date">
                        <div class="day">15</div>
                        <div class="month">EYL</div>
                        <div class="year">2020</div>
                    </div>
                </div>

                <div class="head-content">
                    <h1>PANDEMİ OKUL AÇILIŞ TARİHİ</h1>
                    <p>Sayın öğrenciler bildiğiniz üzere pandemi gerekçesiyle okulumuza ara vermek zorunda kaldık. Okulun ne zmaan açılacağı...</p>
                </div>
            </div>

            
        </div>

        <!-- DASHBOARD PROFİLE -->
        <div class="profile">
            <div class="settings">
                <img class="settings-icon" src="@/assets/bell.svg" alt="bell">
                <img class="settings-icon" src="@/assets/settings.svg" alt="bell">
            </div>

            <img class="dashboard-image" src="@/assets/orhanprofil.jpg" alt="profile">

            <div class="department">Bilgisayar Mühendisliği</div>

            <div class="sidebar-buttons">
                <img class="sidebar-icons" src="@/assets/cloud.svg" alt="announce">
                DUYURU YAP
            </div>
            <div class="sidebar-buttons">
                <img class="sidebar-icons" src="@/assets/cloud.svg" alt="announce">
                DERS NOTLARI
            </div>
            <div class="sidebar-buttons">
                <img class="sidebar-icons" src="@/assets/cloud.svg" alt="announce">
                SORU SOR
            </div>
        </div>
        
    </div>
</template>

<style scoped>

.dashboard {
    display: flex;
    justify-content: space-around;
}

.school-announce {
    max-width: 530px;
    max-height: 100vh;
    font-family: Roboto;
    font-size: 15px;
    /* overflow:scroll; */
    cursor: pointer;
    /* background-color: gainsboro; */
}

.card {
    width: 95%;
    display: flex;
    border: 1px solid black;
    border-radius: 20px;
    margin-bottom: 10px;
    margin-right: auto;
    margin-left: auto;
    /* background-color: cadetblue; */
    
}

.photo-date {
    margin-left: 10px;
    margin-top: 10px;
}

.date {
    width: 60px;
    background-color: gainsboro;
    text-align: center;
    margin-bottom: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-left: 15px;  
    /* opacity: 80%; */
}

.head-content {
    
    margin-left: 10px;
    margin-top: 30px;
    
}

p {
    font-size: 20px;
    margin-top: 20px;
}



img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
}

.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
    /* background-color: lightgreen; */
}

.dashboard-image {
    width: 150px;
    height: 150px;
}

.department {
    margin-top: 20px;
    margin-bottom: 60px;
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
    width: 200px;
    height: 50px;
    background-color:skyblue;
    text-align: center;
    line-height: 50px;
    margin-bottom: 10px;
    border-radius: 30px;
    position: relative;
    font-family: Roboto;
    font-size: 15px;    
    cursor: pointer;
}

.sidebar-icons {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 10px;
    top: 8px;
}

</style>