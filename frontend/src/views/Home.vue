<template>
  <div id="home">
    <div class="container container-xl">
        <div>
            <img src="../../public/profile.png" />
        </div>
    </div>
  </div>
</template>

<style lang="scss">
#home {
    height: 800px;
    background: rgb(180, 201, 202);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px 0px;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 90%;
    background: white;
    padding: 20px 0px;
    max-width: 1300px;
}

img {
    max-height: 300px;
}
</style>