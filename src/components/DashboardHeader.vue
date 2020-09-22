<template>
    <div class="dashboard-header">
        <img src="@/assets/logo.svg" alt="kampusDuy Logo">

        <div class="settings">
            <div v-if="isAlert" class="notification-alert"></div>
            <button @click="isOpenNotification = !isOpenNotification, isOpenSetting = false">
                <Bell class="settings-icon" />
            </button>

            <button @click="isOpenSetting = !isOpenSetting, isOpenNotification = false">
                <Setting class="settings-icon" />
            </button>            
            
            <div v-if="isOpenNotification" class="notification-card">
                <ul>
                    <li>Yeni görev atandı</li>
                    <li>akgül</li>
                    <li>akgül</li>
                </ul>
            </div>

            <div v-if="isOpenSetting" class="notification-card">
                <ul>
                    <li>genel Ayarlar</li>
                    <li>profil ayarları</li>
                    <li>çıkış</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Bell from '@/components/icons/Bell';
import Setting from '@/components/icons/Setting';

export default {
    data() {
        return {
            isOpenNotification : false,
            isOpenSetting : false,
            isAlert : true
        }
    },

    components : {
        Bell,
        Setting,
    }
}
</script>

<style lang="scss" scoped>
@import '@/main.scss';

.dashboard-header {
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .settings {
        position: relative;

        button {
            background: none;
        }

        .notification-alert {
            width: 14px;
            height: 14px;
            background-color: orangered;
            border: 2px solid #F5F6F8;
            border-radius: 50%;
            position: absolute;
            left: 33px;
        }
        .settings-icon {
            width: 50px;
            height: 30px;
            padding-left: 20px;

            &:hover {
                cursor: pointer;
            }
        }

        .notification-card {
            width: 270px;
            height: 300px;
            background-color:#E9ECF1;
            border-radius: 8px;
            position: absolute;
            right: 40px;
            padding: 30px;  //değişecek
            cursor: pointer;
            border: 1px solid gray;
        }
    }    
}   

</style>