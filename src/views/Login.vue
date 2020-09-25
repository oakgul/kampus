<template>
    <div>
        <Header />
        <div class="register">
        <div class="image">
            <img src="@/assets/register.svg" alt="register">
        </div>
        <div class="register-form">
            <!-- bu div'i form yap e.prevent default yap -->
            <div>
                <input v-model="user.email" required type="email" placeholder="E-posta"><br>
                <input v-model="user.password" required type="password" placeholder="Parola"><br>      
                <button @click="userLogin">Giriş</button>
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
            token : '',
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
            fetch('https://kampus-api.herokuapp.com/api/auth/login', {
            method : 'POST',
            body : JSON.stringify({
                    email : this.user.email,
                password : this.user.password       
            }),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8'
            }
        })
        .then(data => data.json())
        .then(result => {
            console.log(result);
            this.token = result.access_token;
             console.log(`Access Token : ${this.token}`);
        })
        .catch(err => console.log(err))    
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