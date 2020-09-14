<template>
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
    /* margin-left: 250px; */
  }

  .header-text {
    font-family: Asap;
    font-weight: bold;
    font-size: 70px;
    text-align: center;
    margin-bottom: 30px;
  }

  p {
    font-family: Roboto;
    font-weight: 300;
    font-size: 20px;
    text-align: center;
    margin-bottom: 71px;

  }

  button {
    width: 200px;
    height: 70px;
    font-family: Roboto;
    /* font-weight: bold; */
    font-size: 20px;
    /* line-height: 20px; */
    border-radius: 18px;
    cursor: pointer;
    margin: 0 37px 0 37px;
  }

  .join {
    background-color: #FF6B71;
  }

  .join:hover {
        border: 1px solid black;

  }

  .sign {
    border: 1px solid gray;
    background: white;
  }

  .sign:hover {
    border: 1px solid orange;
  }

</style>

