<template>
    <div>
        <div class="calculator">
            <h2>Add Round</h2><br />
            <input placeholder="Course Rating"/><br />
            <input placeholder="Slope Rating"/><br />
            <input placeholder="Par"/><br />
            <b-button variant="primary" @click="calculateIndex">Calculate</b-button>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            handicapIndex: 0, 
        }
        
    },
    methods: {
        calculateIndex: function () {

        },
    },
    computed: {
        hasHandicap: function () {
            return true;
        }
    }
}
</script>

<style lang="scss">
.calc-container {
    
}
.calculator 
{
    button {
        margin-bottom: 30px;
    }

    input {
    margin-bottom: 15px;
    align-items: center;
    }
}
</style>