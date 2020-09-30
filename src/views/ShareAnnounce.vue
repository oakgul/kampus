<template>
    <div class="share">
        <button @click="back" class="back">GERİ</button>
        <input v-model="newAnnounce.title" class="title" type="text" placeholder="Başlık yazınız..."> <br/>
        <textarea v-model="newAnnounce.content" class="content" cols="30" rows="5" placeholder="Açıklama giriniz..."></textarea> <br/>
        <select v-model="newAnnounce.tag" class="department"> 
            <option value="okul">Tüm Okul</option>
            <option value="bilgisayar">Bilgisayar Bölümü</option>
            <option value="kimya">Kimya Bölümü</option>
            <option value="tab">Tab Bölümü</option>
        </select><br>
        <button @click="shareNewAnnounce" class="buton">Gönder</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newAnnounce : {
                title : '',
                content : '',
                tag : '',
            }
        }
    },

    methods : {
        shareNewAnnounce() {
            this.$store.dispatch("shareAnnounce", {...this.newAnnounce})
            .then(res => this.$router.push("/dashboard"))
        },

        back() {
            this.$router.push("/dashboard")
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/main.scss';

.share {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        width: 400px;
        height: 40px;
        border: 1px solid black;
        border-radius: 7px;
        text-indent: 20px;
        margin-top: 20px;
        margin-bottom: 7px;
    }

    .content {
        width: 400px;
        height: 200px;
        border: 1px solid black;
        border-radius: 7px;
        padding-top: 20px;
        padding-left: 20px;
    }

    .department {
         width: 400px;
        height: 40px;
        border: 1px solid black;
        border-radius: 7px;
        text-indent: 20px;
    }

    .buton {
        width: 400px;
        height: 40px;
        border-radius: 7px;
        background: $blue-color;
        color: white;
        font-size: 20px;
        cursor: pointer;

        &:hover {
            background: $text-color;
        }    
    }

    .back {
        width: 100px;
        height: 40px;
        border-radius: 7px;
        background: $blue-color;
        color: white;
        font-size: 20px;
        cursor: pointer;
        position: absolute;
        left: 50px;
        top: 20px;
    }
}
</style>