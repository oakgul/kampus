<template>
    <div>
        <Header />
        <div class="register">
        <div class="image">
            <img src="@/assets/register.svg" alt="register">
        </div>
        <div class="register-form">
            <!-- bu div'i form yap e.prevent default yap -->
            <div class="">
                <input v-model="user.email" required type="email" placeholder="E-posta"><br>
                <input v-model="user.password" required type="password" placeholder="Parola"><br>      
                <button @click="userLogin">Giriş</button>
            </div>
            <a @click="forgotPassword" href="#" class="forgot-password" >Şifremi unuttum</a>
            
        </div>
    </div>
    </div>
</template>

<script>
    import Header from '@/components/Header';

export default {
    data() {
        return {
            user : {
                email : '',
                password : ''
            }
        }
    },

    components : {
        Header,
    },

    methods : {
        userLogin() {
            this.$store.dispatch("login", {...this.user})
            .then(res => this.$router.push("/dashboard"))
        },

        forgotPassword() {
            this.$router.push("/forgot")
        }
    }
}
</script>

<style scoped>

    .register {
        display: flex;
        margin-top: 50px;
    }

    input{
        width: 450px;
        height: 50px;
        border: 1px solid gray;
        border-radius: 8px;;
        margin-bottom: 10px;
        text-indent: 10px;
    }

    .register-form {
        display:flex;
        flex-direction: column;
        align-items: center;
        margin: auto;        
    }

    .forgot-password {
        margin-top: 20px;
    }

    button {
        width: 450px;
        height: 70px;
        font-family: Roboto;
        font-size: 20px;
        border-radius: 18px;
        cursor: pointer;
        background-color: #DAF7A6;
        margin: auto;
    }

    button:hover {
        background-color: orange;
        color: white;
    }

</style>