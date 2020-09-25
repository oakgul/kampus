<template>
    <div>
        <Header />
        <div class="register">
        <div class="image">
            <img src="@/assets/register.svg" alt="register">
        </div>
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
                    <option selected value="Bilgisayar Programcılığı">Bilgisayar Mühendisliği</option>
                    <option value="Kimya Teknolojileri">Kimya Mühendisliği</option>
                    <option value="Tıbbi Aromatik Bitkiler">Biyoloji Mühendisliği</option>
                </select><br>
                <select v-model="user.role">
                    <option value="student">Öğrenci</option>
                    <option value="admin">Akademisyen</option>
                </select><br>

                <button @click="saveUser">Kayıt Ol</button>
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
        saveUser() {
        fetch('https://kampus-api.herokuapp.com/api/auth/register', {
        method : 'POST',
        body : JSON.stringify({
          
            name : this.user.name,
            surname : this.user.surname,
            email : this.user.email,
            password : this.user.password,
            gender : this.user.gender,
            department : this.user.department,
            role : this.user.role,
        }),
        headers: {
            'Content-type' : 'application/json; charset=UTF-8'
        }
    })
    .then(data => data.json())
    .then(result => console.log(result))
    .catch(err => console.log(err))
    },
    },    

    components : {
        Header,
    }
}
</script>

<style scoped>

    .register {
        display: flex;
        margin-top: 50px;
    }

    input,select{
        width: 450px;
        height: 50px;
        border: 1px solid gray;
        border-radius: 8px;;
        margin-bottom: 10px;
        text-indent: 10px;
    }

    .cinsiyet {
        width: 20px;
        height: 20px;
        margin: 5px 30px;
    }

    .register-form {
        margin: auto;
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