<template>
    <div class="infoCard">
        <div class="illustration">
            <img src="@/assets/olive.svg" alt="info illustration">
        </div>
        <div class="content">
            <h4>Yeni Özellik</h4>
            <p>Duyuru özelliği artık kullanılabilir.<br>
                Yeni geliştirmeler burada olacak!
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/main.scss';

    .infoCard {
        display: flex;
        align-items: center;
        border: 1px solid gainsboro;
        border-radius: 8px;
        padding: 10px;

        .content {
            margin: 7px;

            p {
            font-size: 15px;
            }
        }   
    }

</style>