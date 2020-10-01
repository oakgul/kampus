<template>
    <div>
        <Header />
        <div class="register">
            <div class="register-form">
                <div>
                    <input v-model="user.name" required type="text" placeholder="Ad"><br>
                    <input v-model="user.surname" required type="text" placeholder="Soyad"><br>
                    <input v-model="user.email" required type="email" placeholder="E-posta"><br>
                    <input v-model="user.password" required type="password" placeholder="Parola"><br>
                    <select v-model="user.gender">
                        <option value="kadın">Kadın</option>
                        <option value="erkek">Erkek</option>
                        <option value="diğer">Diğer</option>
                    </select><br>
                    <select v-model="user.department">
                        <option selected value="bilgisayar">Bilgisayar Mühendisliği</option>
                        <option value="kimya">Kimya Mühendisliği</option>
                        <option value="tab">Biyoloji Mühendisliği</option>
                    </select><br>
                    <select v-model="user.role">
                        <option value="student">Öğrenci</option>
                        <option value="admin">Akademisyen</option>
                    </select><br>

                    <button @click="userRegister">Kayıt Ol</button>
                </div>
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
                name : '',
                surname : '',
                email : '',
                password : '',
                gender : '',
                department: '',
                role : ''
            }
        }
    },

    methods : {
        userRegister() {
            this.$store.dispatch("register", {...this.user})
            .then(res => this.$router.push("/login"))
        },
    },    

    components : {
        Header,
    }
}
</script>

<style lang="scss" scoped>
.register {
    display: flex;

    .register-form {
        width: 400px;
        height: 560px;
        display: flex;
        flex-direction: column;
        filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.2));
        border-radius: 6px;
        align-items: center;
        background: white;
        margin: 70px auto;    
        padding-top: 15px;
        
        input,select{
            width: 370px;
            height: 50px;
            border: 1px solid lightgrey;
            border-radius: 6px;
            font-size: 18px;
            text-indent: 15px;
            margin-bottom: 15px; 

            &:focus {
                border-color:#1877f2;
            }
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

            &:hover {
                background:  #1877f2;
            }
        }
    }    
}  

</style>