<template>
 <div>
  <Header />
    <div class="layout">
      <div class="main-text">
        <div class="header-text">Kampüs'te Olup<br>Biten Herşey</div>
          <p>Merhaba öğrenciler, artık bu uygulama<br> 
            sayesinde duyuru yapabilecek, kampüs içinde neler<br> 
            olup bitiyor haber alıp verebileceksiniz</p>
          <div class="buttons">
            <button class="join">BİZE KATIL</button>
            <button class="sign">GİRİŞ</button>
          </div>
      </div>

      <div class="main-img">
        <img src="../assets/main-img.svg" alt="main image">
      </div>
    </div>
    <Footer />
</div> 
</template>

<script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';

export default {
  components : {
    Header,
    Footer,
  }
}
</script>

<style lang="scss" scoped>
// @import '@/main.scss';

  .layout {
    display: flex;
    justify-content: space-between;

    .main-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .header-text {
        font-weight: bold;
        font-size: 70px;
        text-align: center;
        margin-bottom: 30px;
      }

      p {
        font-weight: 300;
        font-size: 20px;
        text-align: center;
        margin-bottom: 71px;
      }

      button {
        width: 200px;
        height: 70px;
        font-size: 20px;
        border-radius: 18px;
        cursor: pointer;
        margin: 0 37px 0 37px;
        box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
        transition: all;        
      }

      .join {
        background-color: #FFD037;
        transition-duration: 500ms;

        &:hover {
          border: 1px solid black;
          color: white;
        }
      }

      .sign {
        border: 1px solid gray;
        background: white;

        &:hover {
          border: 1px solid #FFD037;
        }
      }
    }
  }
</style>