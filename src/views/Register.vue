<template>
    <div>
        <Header />
        <div class="register">
        <div class="image">
            <img src="@/assets/register.svg" alt="register">
        </div>
        <div class="register-form">
            <form>
                <input required type="text" placeholder="Ad"><br>
                <input required type="text" placeholder="Soyad"><br>
                <input required type="email" placeholder="E-posta"><br>
                <input required type="password" placeholder="Parola"><br>
                <select>
                    <option value="kadın">Kadın</option>
                    <option value="erkek">Erkek</option>
                    <option value="diğer">Diğer</option>
                </select><br>
                <select>
                    <option selected value="bilgisayar">Bilgisayar Mühendisliği</option>
                    <option value="kimya">Kimya Mühendisliği</option>
                    <option value="biyoloji">Biyoloji Mühendisliği</option>
                </select><br>
                <select>
                    <option selected value="öğrenci">Öğrenci</option>
                    <option value="akademisyen">Akademisyen</option>
                </select><br>

                <button>Kayıt Ol</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
    import Header from '@/components/Header';

export default {
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