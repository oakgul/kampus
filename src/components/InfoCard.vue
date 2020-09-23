<template>
    <div class="infoCard">
        <div class="illustration">
            <InfoCardImg class="info-card-img"/>
        </div>
        <div class="content">
            <h4>Yeni Özellik</h4>
            <p>Duyuru özelliği artık kullanılabilir.<br>
                Yeni geliştirmeler burada olacak!
            </p>
        </div>
    </div>
</template>

<script>
import InfoCardImg from '@/components/icons/InfoCardImg';

export default {
    components : {
        InfoCardImg,
    }
}
</script>

<style lang="scss" scoped>
@import '@/main.scss';

    .infoCard {
        display: flex;
        align-items: center;
        border: 1px solid gainsboro;
        border-radius: 8px;
        padding: 10px;
        background: $logo-color ;
        // background: $green-color;

        .content {
            margin: 7px;


            p {
            font-size: 15px;
            padding-top: 5px;
            }
        }   
    }

</style>