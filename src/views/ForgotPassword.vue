<template>
    <div class="forgot">
        <Header />
        <div class="forgot-card">
            <label>Yeni parola alabilmek için e-posta adresinizi yazın.</label>
            <input v-model="email" class="email" type="email" placeholder="Lütfen e-posta adresinizi yazın..">
            <button @click="submitForgotPassword" class="submit">Şifre Al</button>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
    data() {
        return {
            email : ''
        }
    },

    components : {
        Header,
    },

    methods : {
        submitForgotPassword() {
            console.log(this.email)
            this.$store.dispatch("sendForgotKeyToEmail", this.email)
            .then(res => this.$router.push("/login"))
        }
    }
}
</script>

<style lang="scss" scoped>

.forgot {
    .forgot-card {
        width: 500px;
        height: 200px;
        display: flex;
        flex-direction: column;
        filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.3));
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        background: white;
        margin: 150px auto;

        .email {
            width: 400px;
            height: 50px;
            border: 1px solid lightgrey;
            border-radius: 5px;
            text-indent: 15px;
            margin-top: 15px;
            font-size: 18px;

            &:focus {
                border-color: #1877f2;
            }
        }

        .submit {
            width: 150px;
            height: 50px;
            color: white;
            background: #31B057; 
            font-size: 20px;
            border-radius: 5px;
            margin-top: 15px;
            cursor: pointer;

            &:hover {
                background: #1877f2;
            }
        }
    }
}
</style>