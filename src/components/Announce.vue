<template>
    <div class="announces">
        <div class="school-announce">

            <!-- <div :key="announce.id" class="card" v-for="announce in getAllAnnounce">
                <div class="photo-date">
                    <img class="card-image" src="@/assets/orhanprofil.jpg" alt="profile">
                    <div class="date">
                        <div class="day">10</div>
                        <div class="month">ŞBT</div>
                        <div class="year">2020</div>
                    </div>
                </div>

                <div class="head-content">
                    <h1> {{ announce  }} </h1>
                    <p> {{  announce}} </p>
                </div>
            </div>    -->

            <!-- <div :key="announce.id" class="card" v-for="announce in getAllAnnounce">
                <div v-for="item in announce"> {{ item }} </div>                    
                   
            </div>    -->


            <p>{{getAllAnnounce.title[0]}}</p>
            <p>{{getAllAnnounce.content[0]}}</p>
            <p>{{getAllAnnounce.date[0]}}</p>
            <p>{{getAllAnnounce.userID[0]}}</p>
            <p>{{getAllAnnounce.id[0]}}</p> 
            <br>
            <p>{{getAllAnnounce.title[1]}}</p>
            <p>{{getAllAnnounce.content[1]}}</p>
            <p>{{getAllAnnounce.date[1]}}</p>
            <p>{{getAllAnnounce.userID[1]}}</p>
            <p>{{getAllAnnounce.id[1]}}</p>
            <br>
            <p>{{getAllAnnounce.title[2]}}</p>
            <p>{{getAllAnnounce.content[2]}}</p>
            <p>{{getAllAnnounce.date[2]}}</p>
            <p>{{getAllAnnounce.userID[2]}}</p>
            <p>{{getAllAnnounce.id[2]}}</p> 
            

            
        </div>

        <!-- --------------------------------------------------- -->

        <div class="school-announce right-announce">

            <div class="card">
                <div class="photo-date">
                    <img class="card-image" src="@/assets/orhanprofil.jpg" alt="profile">
                    <div class="date">
                        <div class="day">20</div>
                        <div class="month">TEM</div>
                        <div class="year">2020</div>
                    </div>
                </div>

                <div class="head-content">
                    <!-- <h1>PANDEMİ OKUL AÇILIŞ TARİHİ</h1> -->
                    <h1> {{ baslik }} </h1>
                    <p>Sayın öğrenciler bildiğiniz üzere pandemi gerekçesiyle okulumuza ara vermek zorunda kaldık. Okulun ne zmaan açılacağı konusunda ne olduğunu bizde hala bilmiyoruz</p>
                </div>
            </div>  

            <!-- <div class="card">
                <ul>
                    <li :key="" v-for="userid in getAllAnnounce.userID"> {{ userid  }} </li>
                    <li :key="title" v-for="title in getAllAnnounce.title"> {{ title  }} </li>
                    <li :key="content" v-for="content in getAllAnnounce.content"> {{ content  }} </li>
                </ul>
            </div>   -->

            

            
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            baslik : 'PANDEMİ DUYURUSU'
        }
    },

    created() {
        this.$store.dispatch("getAnnounce")
    },

    computed : {
        getAllAnnounce() {
            return this.$store.state.announces;
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/main.scss';

    .announces {
        display: flex;

        .school-announce {
            overflow: auto;
            height: calc(100vh - 66px);
            


            .card {
                width: 470px;
                height: 140px;
                display: flex;
                border-radius: 10px;
                margin-bottom: 10px;
                margin-right: 10px;
                background-color: $main-color;
                transition: 500ms all;
                border-bottom: 1px solid gainsboro;
                cursor: pointer;

                &:hover {
                    filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.5));
                    background-color: rgb(235, 235, 235);
                }

                .photo-date {
                    margin-left: 15px;
                    margin-top: 15px;

                    .card-image {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                    }

                    .date {
                        width: 40px;
                        height: 65.3px;
                        margin-left: 5px;
                        margin-top: 5px;  
                        padding-top: 2px;
                        background: rgba(196, 196, 196, 0.13);
                        color: #939393;                          
                        text-align: center;
                        border: 1px solid rgb(189, 182, 182);
                        border-radius: 6px 6px 0 0;                        
                        border-bottom: 0;

                        .day {
                            font-weight: bold;
                            font-size: 24px;
                            line-height: 28px;
                        }

                        .month {
                            font-size: 11px;                            
                        }
                    }
                }
            }        

            .head-content {    
                margin-left: 20px;
                margin-top: 20px;

                h1 {
                    width: 357px;
                    height: 33px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden; 
                    font-size: 18px;
                    line-height: 18px;
                    color: $text-color;
                    margin-bottom: 15px;
                }

                p {
                    width: 344px;
                    height: 60px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    font-size: 17px;
                    color: $title-color;

                } 
            }       
        }
        
        .right-announce {
            margin-left: 10px;
        }
    }

</style>