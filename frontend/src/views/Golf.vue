<template>
    <div class="page">
        <div class="container">
                <div class="col-lg-6 h-card">
                    <handicap></handicap>
                </div>
                <div class="col-lg-6 h-card">
                    <handicapIndex></handicapIndex>
                </div>
                <div class="w-100"></div>
                <div class="h-card col-md-8">
                    <h1>Hi</h1>  
                </div>     
        </div>
    </div>
</template>

<script>
import handicap from '@/components/Golf/HandicapCalc'
export default {
    components: { handicap }
}
</script>

<style lang="scss">
.h-card {
    box-shadow: 5px 5px 5px #666;
    margin: 0px 10px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.rounds {
    display: flex;
    
}

.container {
    display:flex;
    align-content: center;
}

.page {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 960px;
}
</style>