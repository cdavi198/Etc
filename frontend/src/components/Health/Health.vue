<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="row white__bg">
            <div>
              <div class="details">
                <tracker></tracker>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script> 
import tracker from '@/components/Health/Tracker'
export default {
    components: { tracker }
}
</script>
<style lang="scss">
.white__bg {
  width: 100%;
  background: #f8f8f8;
  border: solid #bdbdbd 0;
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 5px 0 20px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 0 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-top: 20px;
}
h4 {
  font-size: 20px;
}
h5 {
  font-size: 16px;
}
.pt-3 span {
  font-size: 14px;
  line-height: 22px;
}
a {
  text-decoration: none !important;
}
h3 {
  font-size: 22px;
  margin-top: 20px;
}
@media screen and (max-width: 576px) and (min-width: 275px) {
  h3 {
    text-align: center;
    padding-top: 30px;
  }
  h5 {
    text-align: center;
  }
  h4 {
    text-align: center;
  }
}
@media screen and (max-width: 768px) and (min-width: 575px) {
  h3 {
    text-align: left;
    padding-top: 30px;
  }
}
</style>