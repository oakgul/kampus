<template>
    <div class="announces">
        <div class="school-announce">
            <p class="no-announce" v-if="getSchoolAllAnnounce.length == 0">Duyuru Yok!</p>

            <div :key="announce._id" class="card" v-for="announce in getSchoolAllAnnounce">
                <div class="photo-date">
                    <img class="card-image" src="@/assets/orhanprofil.jpg" alt="profile">
                    <div class="date">
                        <div class="day">10</div>
                        <div class="month">ŞBT</div>
                        <div class="year">2020</div>
                    </div>
                </div>

                <div class="head-content">
                    <h1> {{ announce.title }} </h1>
                    <p> {{  announce.content }} </p>
                </div>
            </div>
        </div>

        <!-- --------------------------------------------------- -->

        <div class="school-announce right-announce">
            <p class="no-announce" v-if="getDepartmentAnnounce.length == 0">Duyuru Yok!</p>


            <div :key="announce._id" class="card" v-for="announce in getDepartmentAnnounce">
                <div class="photo-date">
                    <img class="card-image" src="@/assets/orhanprofil.jpg" alt="profile">
                    <div class="date">
                        <div class="day">10</div>
                        <div class="month">ŞBT</div>
                        <div class="year">2020</div>
                    </div>
                </div>

                <div class="head-content">
                    <h1> {{ announce.title }} </h1>
                    <p> {{  announce.content }} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

            
        }
    },

    created() {
        this.$store.dispatch("getAnnounce")
    },
    computed : {
        getSchoolAllAnnounce() {
            return this.$store.state.schoolAnnounce;
        },

        getDepartmentAnnounce() {
            return this.$store.state.departmentAnnounce;
        },
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
            
            .no-announce {                
                font-size: 30px;
                padding-right: 323px;
            }

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