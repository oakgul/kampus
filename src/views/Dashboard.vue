<template>
    <div class="dashboard-container">

        <DashboardHeader />
        <div class="dashboard">            
        <!-- <div class="school-announce">
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
            </div> -->

             

            <!-- --------------------------------------------------------------- -->
            
        <!-- </div>
        <div class="school-announce">
            <div class="card">

                <div class="photo-date">
                    <img src="@/assets/orhanprofil.jpg" alt="profile">
                    <div class="date">
                        <div class="day">20</div>
                        <div class="month">TEM</div>
                        <div class="year">2020</div>
                    </div>
                </div>

                <div class="head-content">
                    <h1>PANDEMİ OKUL AÇILIŞ TARİHİ</h1>
                    <p>Sayın öğrenciler bildiğiniz üzere pandemi gerekçesiyle okulumuza ara vermek zorunda kaldık. Okulun ne zmaan açılacağı konusunda ne olduğunu bizde hala bilmiyoruz</p>
                </div>
            </div>
            
            <div class="card">

                <div class="photo-date">
                    <img src="@/assets/orhanprofil.jpg" alt="profile">
                    <div class="date">
                        <div class="day">05</div>
                        <div class="month">EYL</div>
                        <div class="year">2020</div>
                    </div>
                </div>

                <div class="head-content">
                    <h1>VERİTABANI DERSİ SINAV TARİHİ</h1>
                    <p>Sayın öğrenciler bildiğiniz üzere pandemi gerekçesiyle okulumuza ara vermek zorunda kaldık. Okulun ne zmaan açılacağı...</p>
                </div>
            </div>           
            
        </div> -->

        <!-- DASHBOARD PROFİLE -->
        <div class="profile">
            <div class="settings">
                <div class="notification"></div>
                <img class="settings-icon" src="@/assets/bell.svg" alt="bell">
                <img class="settings-icon" src="@/assets/settings.svg" alt="bell">
            </div>

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
        
    </div>    
    </div>    
</template>

<script>
    import DashboardHeader from '@/components/DashboardHeader'

export default {
    components : {
        DashboardHeader,
    }
}
</script>

<style scoped>


.dashboard {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
}

.school-announce {
    max-width: 530px;
    max-height: 100vh;
    font-family: Roboto;
    font-size: 15px;
    cursor: pointer;
}

.card {
    width: 470px;
    height: 140px;
    display: flex;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-right: auto;
    margin-left: auto;
    background-color: #F5F5FF;
    transform: all;
    transition-duration: 500ms;
    border-bottom: 1px solid gainsboro;
}

.card:hover {
    background: #5D5DAF;
    filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.5));
    background-color: #fff;
}

.photo-date {
    margin-left: 15px;
    margin-top: 15px;
}

.date {
    width: 40px;
    height: 65.3px;
    background: rgba(196, 196, 196, 0.13);
    text-align: center;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    margin-left: 5px;
    margin-bottom: -10;
    color: #939393;
    padding-top: 5px;
    border: 1px solid rgb(189, 182, 182);
    border-bottom: 0;

}

.day {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
}

.month {
    font-size: 11px;
}

.head-content {    
    margin-left: 20px;
    margin-top: 30px;    
}

h1 {
    width: 357px;
    height: 28px;
    font-size: 18px;
    line-height: 18px;
    color: #5D5DAF;
    margin-bottom: 10px;
}

p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 344px;
    height: 57px;
    font-family: Roboto;
    font-style: normal;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
}

img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

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

.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 345px;
    height: 100vh;
    background: #F5F5FF;
    border-top-left-radius: 56px;
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

</style>