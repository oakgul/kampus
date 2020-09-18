<template>
    <div class="dashboard-container">
        <DashboardHeader />        
        
        <div class="dashboard">  
            <Announce />
            <Profile />          
        </div>
            
    </div>    
</template>

<script>
    import DashboardHeader from '@/components/DashboardHeader';
    import Announce from '@/components/Announce';
    import Profile from '@/components/Profile';

export default {
    components : {
        DashboardHeader,
        Announce,
        Profile,
    }
}
</script>

<style lang="scss" scoped>

.dashboard {
    display: flex;
    justify-content: space-evenly;
}

</style>