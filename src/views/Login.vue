<template>
    <div>
        <Header />
        <div class="register">
        <div class="register-form">
            <div class="">
                <input focus='true' class="data-input" v-model="user.email" required type="email" placeholder="E-posta" size="50"><br>
                <input class="data-input" v-model="user.password" required type="password" placeholder="Parola"><br>      
                <button @click="userLogin">Giriş Yap</button>
            </div>
            <hr>
            <span @click="forgotPassword" class="forgot-password" >Şifremi unuttum</span>
            
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
    }

    .register-form {
        width: 400px;
        height: 270px;
        display: flex;
        flex-direction: column;
        filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.2));
        border-radius: 6px;
        align-items: center;
        background: white;
        margin: 150px auto;    
        padding-top: 15px; 
    }

    .data-input {
        width: 370px;
        height: 50px;
        border: 1px solid lightgrey;
        border-radius: 6px;
        font-size: 18px;
        text-indent: 15px;
        margin-bottom: 15px;       
    }

    .data-input:focus {
        border-color:#1877f2;
    }

    .forgot-password {
        color: #1877f2;
        margin-top: 20px;
    }

    .forgot-password:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    button {
        width: 370px;
        height: 50px;
        color: white;
        background: #31B057; 
        font-size: 20px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: bold;
    }

    button:hover {
        background:  #1877f2;
    }

</style>