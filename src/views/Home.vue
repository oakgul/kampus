<template>
  <div class="layout">
    <div class="main-text">
      <div class="header-text">Kampüs'te Olup <br> Biten Herşey</div>
      <p>Merhaba öğrenciler, artık bu uygulama<br> sayesinde yapabilecek, kampüs içinde neler<br> olup bitiyor haber alıp verebileceksiniz</p>
      <div class="buttons">
        <button class="join">JOIN US</button>
        <button class="sign">SIGN IN</button>
      </div>
    </div>

    <div class="main-img">
      <img src="../assets/main-img.svg" alt="main image">
    </div>
  </div>
</template>

<style scoped>
  .layout {
    display: flex;
    justify-content: space-between;
  }

  .main-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 250px;
  }

  .header-text {
    font-family: Asap;
    font-weight: bold;
    font-size: 96px;
    text-align: center;
    margin-bottom: 52px;
  }

  p {
    font-family: Roboto;
    font-weight: 300;
    font-size: 36px;
    text-align: center;
    margin-bottom: 71px;

  }

  button {
    width: 300px;
    height: 90px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    border-radius: 17px;
    cursor: pointer;
    margin: 0 37px 0 37px;
    outline: none;
  }

  .join {
    background-color: #FF6B71;
  }

  .sign {
    border: 1px solid black;
    background: white;
  }

  .main-img {
    margin-right: 200px;
  }
</style>

