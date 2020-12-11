<template>
    <div class="notes-container">
        <div class="headers-wrapper">
            <b-nav vertical class="w-25">
                <b-nav-item active class="notes-headers"><a href="">{{ notesheader }}</a></b-nav-item>
                <b-nav-item class="notes-headers"><a href="">{{ chaptersheader }}</a></b-nav-item>
                <b-nav-item class="notes-headers"><a href="">{{ charactersheader }}</a></b-nav-item>
                <b-nav-item class="notes-headers"><a href="">{{ recapheader }}</a></b-nav-item>
            </b-nav>
            
        </div>
        <div class="body">
            <chapters></chapters>
        </div>
    </div>
</template>

<script>
import Chapters from '@/components/Dnd/Chapters.vue'
export default {
  components: { Chapters },
    data: function () { 
        return {
            notesheader: "Notes",
            chaptersheader: "Chapters",
            charactersheader: "Characters",
            recapheader: "Recap"
        }
    }
}
</script>

<style lang="scss">
.notes-container {

}

.headers-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 20px;
    width: 20%;
    color:gray;
}

.notes-headers {
    font-size: 3em;
    list-style-type: none;
    text-align: left;

    :hover {
        
    }

    a {
        color: black;
        text-decoration: none;
    }
}


</style>